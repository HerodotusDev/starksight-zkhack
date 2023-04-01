// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/WorldIDVerifier.sol";
import "../src/Semaphore.sol";
import "../src/interfaces/IWorldID.sol";

contract MyScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Semaphore c_semaphore = new Semaphore();
        WorldIDVerifier c = new WorldIDVerifier(IWorldID(address(c_semaphore)), "app_id", 123);

        vm.stopBroadcast();
    }
}
