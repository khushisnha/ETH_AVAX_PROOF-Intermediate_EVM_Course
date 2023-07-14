// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";

contract GT is ERC20, Ownable, ERC20Burnable 
{
    constructor() ERC20("Degen", "DGN") {}
    
        function mint(address to, uint amount) public onlyOwner
        {
            _mint(to, amount);
        }

        function getBalance() external view returns (uint256)
        {
            return this.balanceOf(msg.sender);
        }

        function transferTokens(address _receiver, uint _value) external 
        {
            require(balanceOf(msg.sender) >= _value, "INSUFFICIENT TOKENS!!");
            approve(msg.sender, _value);
            transferFrom(msg.sender, _receiver, _value);
        }

        function burnTokens(uint256 _value) external 
        {
            require(balanceOf(msg.sender) >= _value, "INSUFFICIENT TOKENS!!");
            _burn(msg.sender, _value);
        }

        function decimals() override public pure returns (uint8)
        {
            return 0;
        }   
}
