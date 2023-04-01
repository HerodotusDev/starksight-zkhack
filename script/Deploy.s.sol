// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Contract.sol";
import "../src/Semaphore.sol";
import "../src/interfaces/IWorldID.sol";

contract MyScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        Semaphore c_semaphore = new Semaphore();

        Contract c = new Contract(IWorldID(address(c_semaphore)), "my_action");
        vm.stopBroadcast();
    }
}
