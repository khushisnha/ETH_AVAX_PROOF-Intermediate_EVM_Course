// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";

contract GT is ERC20, Ownable, ERC20Burnable 
{
    event LogMessage(string message);
    constructor() ERC20("Degen", "DGN") {}
    
        //Minting new tokens
        function mint(address to, uint amount) public onlyOwner
        {
            _mint(to, amount);
        }

        //Transferring tokens
         function transferTokens(address _receiver, uint _value) external 
        {
            require(balanceOf(msg.sender) >= _value, "INSUFFICIENT TOKENS!!");
            approve(msg.sender, _value);
            transferFrom(msg.sender, _receiver, _value);
        }

        //Redeeming tokens
        function redeemForItem(uint256 itemNo) public {
        uint256 amount;
        
        if (itemNo == 1) {
            amount = 1;
        } else if (itemNo == 2) {
            amount = 2;
        } else if (itemNo == 3) {
            amount = 3;
        } else {
            emit LogMessage("Redemption was UN-Successful");
            return;
        }

        _burn(msg.sender, amount);
        emit LogMessage("Redemption is Successful");
    }

        //Checking token balance
        function getBalance() external view returns (uint256)
        {
            return this.balanceOf(msg.sender);
        }

        //Burning tokens
        function burnTokens(uint256 _value) external 
        {
            require(balanceOf(msg.sender) >= _value, "INSUFFICIENT TOKENS!!");
            _burn(msg.sender, _value);
            emit LogMessage("Tokens burned successfully");
        }

        function decimals() override public pure returns (uint8)
        {
            return 0;
        }   
}
