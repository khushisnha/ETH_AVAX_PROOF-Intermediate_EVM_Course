# ETH_AVAX_PROOF-Intermediate_EVM_Course
**MODULE - 1**
**FINAL PROJECT**

There are three Error Handling methods in Solidity whose implementation and explanation is shown below through line by line code and it explanation.
1. require
2. assert
3. revert

**CODE EXPLANATION:**

// SPDX-License-Identifier: MIT
This is a comment that indicates the license under which the code is released. In this case, it specifies the MIT License.

pragma solidity ^0.8.13;
This is a pragma directive that specifies the version of the Solidity compiler to be used. In this case, it indicates that the code should be compiled using Solidity version 0.8.13.

contract ErrorHandling { ... }
This line declares a new contract named ErrorHandling.

uint public balance = 0;
This line declares a public state variable named balance of type uint (unsigned integer) and initializes it to 0. The public keyword automatically generates a getter function to access the value of balance.

function withdraw(uint amount) public { ... }
This line declares a public function named withdraw that takes a parameter amount of type uint and does not return any value.

# require(balance > amount, "You do not have enough balance to transfer!");
This line is a condition that checks if the balance is greater than the specified amount. If it's not, the function will revert the transaction and display the error message "You do not have enough balance to transfer!".

balance -= amount;
This line subtracts the amount from the balance.

function deposit(uint amount) public { ... }
This line declares a public function named deposit that takes a parameter amount of type uint and does not return any value.

balance += amount;
This line adds the amount to the balance.

# if (balance > 500) { revert("Your balance is exceeding the limit!"); }
This line checks if the balance is greater than 500. If it is, the function will revert the transaction and display the error message "Your balance is exceeding the limit!".

function isempty() public view returns (string memory) { ... }
This line declares a public view function named isempty that does not take any parameters and returns a string value.

# assert(balance == 0);
This line is an assertion that checks if the balance is equal to 0. If it's not, it will throw an exception.

return "Sorry! You have no money for the transaction.";
This line returns the string value "Sorry! You have no money for the transaction." if the balance is equal to 0.

Thank you!
