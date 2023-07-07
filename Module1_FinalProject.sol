/*
Write a smart contract that implements the require(), assert() and revert() statements.
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ErrorHandling
{
    
    uint public balance = 0;

    //Cannot withdraw more than we have as balance
    function withdraw(uint amount) public   {
        require(balance > amount, "You do not have enough balance to transfer!");
        balance -= amount;
    }

    //Cannot deposit if balance results in value greater than 500
    function deposit(uint amount) public   {
        balance += amount;
        if (balance > 500) {
            revert("Your balance is exceeding the limit!");
        }
    }

    //Checks if the balance is equals to zero
    function isempty() public view returns (string memory){
        assert(balance == 0);
        return "Sorry! You have no money for the transaction.";
    }

}
