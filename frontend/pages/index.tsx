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
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [address, setAddress] = useState<String>(); // Address variable
  const [wdcAddress, setwdcAddress] = useState();
  const [isConnected, setConnected] = useState(false); // Status check
  const [account, setAccount] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [proofResult, setProofResult] = useState<object>();

  const starknetVerification = async (result: any) => {
    console.log(result);
    const res = await axios.get(
      "http://192.168.1.110:4000/verify-proof",
      result
    );
    console.log(res);
    return res.status;
  };

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

      //TODO : send proof to verifier cairo api
    });
  }, []);

  const handleArgent = async () => {
    // Using connect function from @argent/get-starknet to connect our Argent X wallet to our DAPP
    const windowStarknet = await connect();
    console.log(windowStarknet, "dsagewewaeg");
    console.log("dsagewewaeg");
    await windowStarknet?.enable();
    console.log(windowStarknet, "dagewgwawegwegwegweagewgw");
    // setAccount(windowStarknet.account); // Set our account variable to windowStarknet.account (address, provider and the signer)
    // console.log(windowStarknet?.account);
    const c_add = windowStarknet?.selectedAddress as String;
    setAddress(windowStarknet?.selectedAddress);
    // setwdcAddress(c_add.slice(0, 2) + "0" + c_add.slice(2)); // Set our address variable to windowStarknet.selectedAddress
    setConnected(true); // isConnected = true, the page will changed according to the boolean
    return windowStarknet;
  };

  const onSuccess = async (result: ISuccessResult) => {
    console.log(result);
    console.log("onsuccess");
    const status = await starknetVerification(result);
    if (status == 200) {
      console.log("success");
      setIsSuccess(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleDesc}>
          StarkSight ; verify your World ID👁️, ZK-Snark on Starknet✨
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
          }}>
          {isConnected ? (
            <>
              {isSuccess ? (
                <div>success</div>
              ) : (
                <IDKitWidget
                  action={solidityEncode(["uint256"], [123])}
                  signal={solidityEncode(
                    ["address"],
                    ["0x41cd2913eac124b5cd8d6aa70bf0b303e0180872"]
                  )}
                  onSuccess={onSuccess}
                  handleVerify={handleProof}
                  app_id="app_id"
                  // walletConnectProjectId="get_this_from_walletconnect_portal"
                >
                  {({ open }) => (
                    <div className={styles.worldWrapper}>
                      <div className={styles.worldDesc}>
                        Your starknet wallet
                      </div>
                      <div> {address}</div>
                      <button
                        className={styles.worldIdVerification}
                        onClick={open}>
                        Claim Your World ID Verification
                      </button>
                    </div>
                  )}
                </IDKitWidget>
              )}
            </>
          ) : (
            <button className={styles.connectArgent} onClick={handleArgent}>
              Connect Argent X
            </button>
          )}
        </div>
      </div>
    </>
  );
}
