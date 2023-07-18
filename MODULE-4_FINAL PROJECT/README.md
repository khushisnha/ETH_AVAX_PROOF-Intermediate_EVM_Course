# DEGEN TOKEN (ERC-20): Unlocking the Future of Gaming


## Description


## Getting Started

### Executing program

To run this program, I have used online Remix Solidity IDE. You can visit the Remix website at https://remix.ethereum.org/ .
Extension used for creating a new file is .sol , example: fileName.sol

**Compiled contract on local HardHat network on VS Code using code:**

```Hardhat

npx hardhat compile

```

 It is used to compile a Solidity smart contract project using the Hardhat framework. 

 ```Hardhat

npx hardhat node

```

It is used to start a local Ethereum network using Hardhat. It spins up a local blockchain environment with a set of accounts and a simulated Ethereum network. 

SMART CONTRACT CODE:

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

```
The SPDX-License-Identifier comment is used to specify the license under which the contract is released. In this case, it is set to MIT.
The pragma solidity statement specifies the version of the Solidity compiler that should be used. In this case, it requires version 0.8.0 or higher.

```solidity

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

```

This import brings in the ERC20.sol file, which contains a standard implementation of the ERC-20 token. It provides basic functionalities like balanceOf, transfer, and allowance.

```solidity

import "@openzeppelin/contracts/access/Ownable.sol";

```

This import includes the Ownable.sol file, which provides a basic contract ownership mechanism. It ensures that certain functions can only be executed by the contract owner.

```solidity

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

````

This import brings in ERC20Burnable.sol, an extension of the ERC-20 token contract. It adds the ability to burn (destroy) tokens, which means reducing the total supply.

```solidity

import "hardhat/console.sol";

```

The line import "hardhat/console.sol"; is an import statement that includes the console.sol file from the Hardhat library. 

```solidity

contract GT is ERC20, Ownable, ERC20Burnable {

```

This line defines a new Solidity contract called GT. It inherits from three other contracts: ERC20, Ownable, and ERC20Burnable.

```solidity

constructor() ERC20("Degen", "DGN") {}

```

This is the constructor function of the GT contract. It is called only ones when the contract is deployed. It sets the name of the token to "Degen" and its symbol to "DGN" using the ERC20 constructor.

```solidity

//Minting new tokens
function mint(address to, uint amount) public onlyOwner {
    _mint(to, amount);
}

```

The mint function allows the contract owner (the address that deployed the contract) to mint new tokens and assign them to a specified address (to). The number of tokens to be minted is specified by the amount parameter.

```solidity

function transferTokens(address _receiver, uint _value) external {
    require(balanceOf(msg.sender) >= _value, "INSUFFICIENT TOKENS!!");
    approve(msg.sender, _value);
    transferFrom(msg.sender, _receiver, _value);
}

```

The transferTokens function allows the sender of the transaction to transfer tokens to another address _receiver. It takes two parameters: _receiver, the address of the recipient, and _value, the amount of tokens to be transferred.
The require statement checks whether the balance of the msg.sender (the caller of the function) is greater than or equal to _value. If the condition evaluates to false, meaning the sender does not have enough tokens, the function will revert with the error message "INSUFFICIENT TOKENS!!".
The approve function is called to allow the msg.sender to spend tokens on behalf of themselves. This function is required by the ERC20 standard to enable the transferFrom function.
The transferFrom function is called to transfer the tokens from the msg.sender to the _receiver address. It moves _value tokens from the msg.sender to _receiver.

```solidity

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

```

The redeemForItem function allows users to redeem their tokens for specific items based on the itemNo parameter provided. Depending on the value of itemNo, a corresponding amount of tokens to be burned is determined (1, 2, or 3 tokens). If the provided itemNo does not match any of these values, the redemption is considered unsuccessful, and a message is emitted through the LogMessage event. If the redemption is successful, the tokens are burned using the _burn function, and a success message is emitted.

```solidity

function getBalance() external view returns (uint256) {
    return this.balanceOf(msg.sender);
}

```

The getBalance function is an external view function that allows an external caller to check the token balance of the address calling the function (msg.sender). It returns the token balance of the caller.

```solidity

function burnTokens(uint256 _value) external {
    require(balanceOf(msg.sender) >= _value, "INSUFFICIENT TOKENS!!");
    _burn(msg.sender, _value);
}

```

The burnTokens function allows the sender to burn (destroy) a specified amount of their own tokens. It takes one parameter: _value, the amount of tokens to be burned.
The require statement checks whether the balance of the msg.sender (the caller of the function) is greater than or equal to _value. If the condition evaluates to false, meaning the sender does not have enough tokens, the function will revert with the error message "INSUFFICIENT TOKENS!!".
The _burn function is called to burn (remove) the specified amount of tokens from the msg.sender.

```solidity

function decimals() override public pure returns (uint8) {
    return 0;
}
  
```

This function overrides the decimals function inherited from the ERC20 contract. It returns the number of decimal places used by the token. In this case, it returns 0, indicating that the token does not have any decimal places.

![image](https://github.com/khushisnha/ETH_AVAX_PROOF-Intermediate_EVM_Course/assets/137313256/8ca1a18d-6c4e-4735-860d-3998e7dce355)

![image](https://github.com/khushisnha/ETH_AVAX_PROOF-Intermediate_EVM_Course/assets/137313256/beebfcec-6d47-45c9-a494-42a1d1b514df)

![image](https://github.com/khushisnha/ETH_AVAX_PROOF-Intermediate_EVM_Course/assets/137313256/c7d4571b-cc69-41d9-8e46-fa5ded094a2e)

![image](https://github.com/khushisnha/ETH_AVAX_PROOF-Intermediate_EVM_Course/assets/137313256/05454f4a-038f-48b8-bd26-1f2dd285170c)

## Authors

Khushi 
[khushiawadh0829@gmail.com]
[21CBT1050@cuchd.in]

## License

This project is licensed under the MIT License - see the License.md file for details.
