/*
Write a smart contract to create your own token on a local HardHat network. Once you have your contract, you should be able to use remix to interact with it. From remix, 
the contract owner should be able to mint tokens to a provided address. Any user should be able to burn and transfer tokens.
*/

// SPDX-License-Identifier: MIT    

pragma solidity ^0.8.0; 

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Myether is ERC20 {

    address private owner;

    constructor() ERC20("Khushi", "kk")
    {
        owner = msg.sender;
    }

    modifier onlyOwner()
    {
        require(msg.sender == owner, "Only the contract owner has rights over this function!");
        _;
    }

    function mintToken(address to, uint256 amount) public onlyOwner
    {
        _mintToken(to, amount);
    }

    function burnToken(uint256 amount) public {
        _burnToken(msg.sender, amount);
    }

    function transferTokens(address to, uint256 amount) public override returns (bool) {

        require(amount <= balanceOf(msg.sender), "Not enough balance to Transfer!");

        _transferTokens(msg.sender, to, amount);

        return true;
    }
}


