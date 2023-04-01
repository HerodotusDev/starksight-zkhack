// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Contract.sol";
import "../src/interfaces/IWorldID.sol";

contract MyScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        Contract c = new Contract(IWorldID(0x0deCadAeEb36661cbB9ec3e3344a134cbe61C4CC), "my_action");
        vm.stopBroadcast();
    }
}
