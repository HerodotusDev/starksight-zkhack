import { polygonMumbai } from "viem/chains";
import { createPublicClient, createWalletClient, custom, http } from "viem";

export const publicClient = createPublicClient({
	chain: polygonMumbai,
	transport: http()
});