import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { IDKitWidget, ISuccessResult, solidityEncode } from "@worldcoin/idkit";
import { useCallback, useState } from "react";

import { connect } from "@argent/get-starknet";
import { publicClient } from "@/shared/client";
import { contractContract } from "@/shared/abis/contractContract";
import { defaultAbiCoder } from "ethers/lib/utils";
import { hexToNumber } from "viem";

const inter = Inter({ subsets: ["latin"] });

export default function Evm() {
  const [address, setAddress] = useState<String>(); // Address variable
  const [wdcAddress, setwdcAddress] = useState();
  const [isConnected, setConnected] = useState(false); // Status check
  const [account, setAccount] = useState();
  const [proofResult, setProofResult] = useState<any>();

  const handleProof = useCallback((result: ISuccessResult) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 3000);
      console.log("hiiiiii", result);
      console.log("merkle_root", result.merkle_root);
      console.log("nullifier_hash", result.nullifier_hash);
      console.log("proof", result.proof);
      const r = {
        merkle_root: result.merkle_root,
        nullifier_hash: result.nullifier_hash,
        proof: result.proof,
      };
      setProofResult(r);

      //   await walletClient.writeContract(request)
      // NOTE: Example of how to decline the verification request and show an error message to the user
      console.log("handleproof");
    });
  }, []);

  const handleVerify = async () => {
    const unpackedProof = defaultAbiCoder.decode(
      ["uint256[8]"],
      proofResult?.proof
    )[0];

    console.log(unpackedProof);
    const copy: any[] = [];
    for (let i = 0; i < 8; i++) {
      copy.push(unpackedProof[i].toString());
    }

    console.log(copy, "hihi");
    console.log(typeof address);
    const { request } = await publicClient.simulateContract({
      address: "0x3b10539df424521fc0aa2fd8a25e6147e4f03d94",
      abi: contractContract.abi,
      functionName: "verifyAndExecute",
      args: [
        wdcAddress,
        hexToNumber(proofResult?.merkle_root),
        hexToNumber(proofResult?.nullifier_hash),
        copy,
      ],
    });

    console.log(request);
  };

  const handleArgent = async () => {
    // Using connect function from @argent/get-starknet to connect our Argent X wallet to our DAPP
    const windowStarknet = await connect();
    console.log(windowStarknet, "dsagewewaeg");
    console.log("dsagewewaeg");
    await windowStarknet?.enable();
    console.log(windowStarknet, "dagewgwawegwegwegweagewgw");
    // setAccount(windowStarknet?.account); // Set our account variable to windowStarknet.account (address, provider and the signer)
    // console.log(windowStarknet?.account);
    const c_add = windowStarknet?.selectedAddress as String;
    setAddress(windowStarknet?.selectedAddress);
    // setwdcAddress(c_add.slice(0, 2) + "0" + c_add.slice(2)); // Set our address variable to windowStarknet.selectedAddress
    setConnected(true); // isConnected = true, the page will changed according to the boolean
    return windowStarknet;
  };

  const onSuccess = (result: ISuccessResult) => {
    console.log(result);
    console.log("onsuccess");
  };

  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}>
          {isConnected ? (
            <>
              {" "}
              <IDKitWidget
                action={solidityEncode(["uint256"], [123])}
                signal={solidityEncode(
                  ["address"],
                  [0x41cd2913eac124b5cd8d6aa70bf0b303e0180872]
                )}
                onSuccess={onSuccess}
                handleVerify={handleProof}
                app_id="app_id"
                // walletConnectProjectId="get_this_from_walletconnect_portal"
              >
                {({ open }) => <button onClick={open}>Click me</button>}
              </IDKitWidget>
              <button onClick={handleVerify}>verify argent</button>
            </>
          ) : (
            <button onClick={handleArgent}>connect argent</button>
          )}
        </div>
      </div>
    </>
  );
}
