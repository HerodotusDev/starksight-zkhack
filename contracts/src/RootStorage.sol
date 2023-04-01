// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";


contract RootStorage is Ownable {
    uint256 public latestRoot;

    // timestamp => root
    mapping(uint256 => uint256) public rootHistory;


    // function to add root
    function addRoot(uint256 _root) public onlyOwner {
        rootHistory[block.timestamp] = _root;
        latestRoot = _root;
    }
}
