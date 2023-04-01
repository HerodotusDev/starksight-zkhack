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

export default function Home() {
  const [address, setAddress] = useState<String>(); // Address variable
  const [wdcAddress, setwdcAddress] = useState();
  const [isConnected, setConnected] = useState(false); // Status check
  const [account, setAccount] = useState();
  const [proofResult, setProofResult] = useState<object>();

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
    setAccount(windowStarknet.account); // Set our account variable to windowStarknet.account (address, provider and the signer)
    console.log(windowStarknet?.account);
    const c_add = windowStarknet.selectedAddress as String;
    setAddress(windowStarknet.selectedAddress);
    setwdcAddress(c_add.slice(0, 2) + "0" + c_add.slice(2)); // Set our address variable to windowStarknet.selectedAddress
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
                signal={solidityEncode(["address"], [wdcAddress])}
                onSuccess={onSuccess}
                handleVerify={handleProof}
                app_id="app_id"
                // walletConnectProjectId="get_this_from_walletconnect_portal"
              >
                {({ open }) => (
                  <div className={styles.worldWrapper}>
                    <div className={styles.worldDesc}>Your starknet wallet</div>
                    <div> {address}</div>
                    <button
                      className={styles.worldIdVerification}
                      onClick={open}>
                      Claim Your World ID Verification
                    </button>
                  </div>
                )}
              </IDKitWidget>
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
