/*
Write a smart contract that allows only the admin to access and call all the functions of the contract.
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AdminAccessControl {
    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can access this function.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function setAdmin(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "Invalid admin address.");
        admin = newAdmin;
    }

}

/*
CODE EXPLANATION:

In this contract, there is an admin variable that stores the address of the admin. The onlyAdmin modifier 
is used to restrict access to certain functions. Only the admin address can successfully call functions that 
have this modifier.

The contract also includes a setAdmin function that allows the current admin to transfer their admin privileges 
to a new address. This can be useful if the current admin wants to transfer ownership to another address.

We can add more functions to the contract, and each of them can be restricted to the admin using the onlyAdmin 
modifier. Users other than the admin will receive an error message when trying to access those functions.

Thank you!
*/

