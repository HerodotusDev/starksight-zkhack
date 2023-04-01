import * as dotenv from "dotenv";
import { Contract, Provider, number } from "starknet";

import express from "express";
import axios from "axios";
import { Data } from "./Data";
import { BigNumber, utils } from "ethers";

import abi from "./abi.json";

async function handleHerodotusWebhook() {
  console.log("Handling Herodotus API webhook");
  const ethGetProofCall = await axios.post(process.env.ETHEREUM_RPC_URL!, {
    jsonrpc: "2.0",
    method: "eth_getProof",
    params: [
      process.env.ACCOUNT_TO_BE_PROVEN,
      [process.env.SLOT_TO_BE_PROVEN],
      "0x" + Number(process.env.BLOCK_NUMBER).toString(16),
    ],
  });

  const { storageProof } = ethGetProofCall.data.result;
  const rawProof = storageProof[0].proof;
  const proof = rawProof.map((leaf: any) => Data.fromHex(leaf).toInts());

  const flatProofByteLengths: number[] = [];
  const flatProofWordLengths: number[] = [];
  let flatProofValues: BigNumber[] = [];

  for (const element of proof) {
    flatProofByteLengths.push(element.sizeBytes);
    flatProofWordLengths.push(element.values.length);
    flatProofValues = flatProofValues.concat(element.values);
  }

  const starknetProvider = new Provider({
    sequencer: { network: "goerli-alpha" },
  });

  const factsRegistry = new Contract(
    abi,
    process.env.HERODOTUS_FACTS_REGISTRY_ADDR!,
    starknetProvider
  );

  const calldata = [
    BigNumber.from(process.env.BLOCK_NUMBER).toHexString(),
    process.env.ACCOUNT_TO_BE_PROVEN,
    Data.fromHex(process.env.SLOT_TO_BE_PROVEN!)
      .toInts()
      .values.map((value) => value.toHexString()),
    flatProofByteLengths.map((length) => "0x" + length.toString(16)),
    flatProofWordLengths.map((length) => "0x" + length.toString(16)),
    flatProofValues.map((value) => value.toHexString()),
  ];

  const callOutput = await factsRegistry.call("get_storage_uint", calldata);
  const highBits = utils.hexZeroPad(number.toHex(callOutput["res"].high), 16);
  const lowBits = utils.hexZeroPad(number.toHex(callOutput["res"].low), 16);

  const value = highBits + lowBits.slice(2);
  console.log("value: ", value);
}

async function main() {
  const {
    HOST_URL,
    HERODOTUS_API_URL,
    HERODOTUS_API_KEY,
    BLOCK_NUMBER,
    ACCOUNT_TO_BE_PROVEN,
  } = process.env;

  const app = express();
  app.use(express.json());
  app.get("/postProve", async (req, res) => await handleHerodotusWebhook());
  app.listen(3000, () => {});

  const apiCallBody = {
    originChain: "GOERLI",
    destinationChain: "STARKNET_GOERLI",
    blockNumber: Number(BLOCK_NUMBER),
    type: "ACCOUNT_ACCESS",
    requestedProperties: {
      ACCOUNT_ACCESS: {
        account: ACCOUNT_TO_BE_PROVEN,
        properties: ["storageHash"],
      },
    },
    webhookUrl: HOST_URL + "/postProve",
  };

  axios
    .post(HERODOTUS_API_URL + "?apiKey=" + HERODOTUS_API_KEY, apiCallBody)
    .then((res) => {
      console.log(`Awaiting webhook for Task ID: ${res.data.taskId} ... `);

      setInterval(async () => {
        const taskStatus = await axios.get(
          HERODOTUS_API_URL +
            "/status/" +
            res.data.taskId +
            "?apiKey=" +
            HERODOTUS_API_KEY
        );
        console.log("Task status: ", taskStatus.data);
      }, 60000);
    })
    .catch((err) => console.log(err.response.data.error[0].constraints));
}

dotenv.config();
main();
