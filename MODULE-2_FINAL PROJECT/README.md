# SMART CONTRACT FRONTEND INTEGRATION

These codes execution and implemention will lead to the creation of a frontend which can be connected with crypto wallets like MetaMask. It contains functionality and its explanation in detail.

## Description

This project is implemented using three programming languages, i.e., html, javascript and solidity. html file here is used for designing the interface of the frontend. Javascript is used for dApp and ensuring that the user has an Ethereum compatible browser like MetaMask is installed or not. Solidity program here is used for deploying the required contract.

## App.js file Explanation:

This code is written in JavaScript and is an implementation of a decentralized application (DApp) using the Ethereum blockchain. 

## Getting Started

### Executing program

To run this program, I have used Visual Stdio Code. To save and execute this code I have used extension .js , example: fileName.js .

```javascript
window.addEventListener('load', async () => {
```

This code attaches an event listener to the load event of the window, which means it will run when the webpage finishes loading.

```javascript
if (window.ethereum) {
  window.web3 = new Web3(window.ethereum);
  await window.ethereum.enable();
}
else if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider);
}
else {
  console.log('Non-Ethereum');
}
```

This section checks if the window.ethereum object is present, which indicates that the user has an Ethereum-compatible browser extension like MetaMask installed. If it is present, the code initializes the window.web3 object using the Web3 library and enables the Ethereum provider with await window.ethereum.enable(). If window.ethereum is not present but window.web3 is, it initializes window.web3 using the current provider. If neither is present, it logs "Non-Ethereum" to the console.

```javascript
const contractABI = [
  // Contract's ABI (Application Binary Interface) definition
];    
```

This variable contractABI represents the Application Binary Interface (ABI) of a smart contract. The ABI is a JSON array that defines the structure and methods of the contract that you want to interact with. In this code, the ABI is not provided, but it should include the necessary information for interacting with the contract.

```javascript
const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; 
```

This variable contractAddress represents the Ethereum address of the smart contract. The contractAddress value in the code is just a placeholder and should be replaced with the actual Ethereum address of the contract you want to interact with.

```javascript
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
```

This code creates an instance of the smart contract using the web3.eth.Contract constructor. It takes the contract ABI and contract address as arguments. The contractInstance variable represents the instance of the contract and will be used to interact with its methods.

```javascript
window.incrementCryptocurrency = async () => {
  await contractInstance.methods.incrementCryptocurrency().send({ from: web3.eth.defaultAccount });
};
```

This code defines a function incrementCryptocurrency on the window object. This function is an asynchronous function that calls the incrementCryptocurrency method of the smart contract. The send method is used to send a transaction to the contract, and the from field specifies the Ethereum account that will send the transaction. The web3.eth.defaultAccount represents the default Ethereum account selected by the user.

```javascript
window.getCryptocurrency = async () => {
  const value = await contractInstance.methods.getCryptocurrency().call();
  document.getElementById('currentValue').innerText = value;
};
```

This code defines a function getCryptocurrency on the window object. This function is also asynchronous and calls the getCryptocurrency method of the smart contract using the call method. The call method is used for reading data from the contract and does not require a transaction. The return value is stored in the value variable and then displayed in an HTML element with the ID 'currentValue'.

## File.html file Explanation:

This code is an HTML document that includes some JavaScript code for interacting with the Ethereum blockchain. 

## Getting Started

### Executing program

To run this program, I have used Visual Stdio Code. To save and execute this code I have used extension .html , example: fileName.html .

```html
<!DOCTYPE html>:
```

This is the document type declaration that specifies that the document is an HTML file.

```html
<html>:
```

This is the root element of the HTML document. All other elements will be contained within it.

```html
<head>:
```

This is the head section of the HTML document, which contains meta-information about the document, such as the title and external script files.

```html
<title> ETHER TRANSACTIONS </title>:
```

This line sets the title of the HTML document to "ETHER TRANSACTIONS". The title appears in the browser's title bar or tab.

```html
<script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>:
```

This line includes an external JavaScript file from the specified URL. The script is web3.js, which is a popular JavaScript library for interacting with the Ethereum blockchain.

```html
<script src="app.js"></script>:
```

This line includes another JavaScript file called "app.js". It is assumed that there is a file named "app.js" in the same directory as this HTML file.

```html
<body>:
```

This is the body section of the HTML document. It contains the visible content of the web page.

```html
<h1> ETHER TRANSACTIONS </h1>:
```

This is a heading element that displays the text "ETHER TRANSACTIONS" as the main heading of the page.

```html
<div>:
```

This is a container element that groups related elements together.

```html
<button onclick="incrementCryptocurrency()">Increment Cryptocurrency</button>:
```

This line creates a button element with the text "Increment Cryptocurrency". The onclick attribute specifies a JavaScript function, incrementCryptocurrency(), which will be executed when the button is clicked.
 
```html
<div id="valueContainer">:
```

This line creates another div element with the id attribute set to "valueContainer". The id attribute can be used to uniquely identify an element in the HTML document.

```html
<h2>Cryptocurrency Value: <span id="currentValue"></span></h2>:
```

This line creates a heading element (h2) with the text "Cryptocurrency Value: ". It also includes a span element with the id attribute set to "currentValue". The span element will be used to display the current value of the cryptocurrency. 

```html
<button onclick="getCryptocurrency()">Get Cryptocurrency Value</button>
```

This line creates a button element with the text "Get Cryptocurrency Value". Similar to the previous button, it has an onclick attribute that specifies a JavaScript function, getCryptocurrency(), to be executed when the button is clicked.

## MyContract.sol file Explanation:

This code is written in the Solidity Progamming Language.

## Getting Started

### Executing program

To run this program, I have used online Remix IDE. To save and execute this code I have used extension .sol , example: fileName.sol . You can visit the Remix website at https://remix.ethereum.org/ .

```solidity
// SPDX-License-Identifier: MIT:
pragma solidity ^0.8.0;
```

First statement is a comment specifying the license identifier for the contract. In this case, it indicates that the contract is licensed under the MIT license. Sexcond line specifies the version of Solidity that the contract is written in. In this case, it requires version 0.8.0 or higher.

```solidity
contract MyContract { ... }:
```

This line starts the declaration of the contract named MyContract. A contract in Solidity is similar to a class in object-oriented programming and represents a collection of state variables and functions.

```solidity
uint public cryptocurrency;
```

This line declares a public unsigned integer variable named cryptocurrency. The public modifier automatically generates a getter function for this variable, allowing other contracts or external entities to read its value.

```solidity
function incrementCryptocurrency() public { ... }:
```

This is a function declaration for incrementCryptocurrency(). It is a public function that does not return any value (void in some programming languages). When called, it increments the value of cryptocurrency by 1.

```solidity
cryptocurrency += 1;
```

This line increments the value of cryptocurrency by 1. The += operator is a shorthand for cryptocurrency = cryptocurrency + 1.

```solidity
function getCryptocurrency() public view returns (uint) { ... }
```

This is a function declaration for getCryptocurrency(). It is a public view function, which means it can be called externally and does not modify the contract's state. It returns the value of cryptocurrency as an unsigned integer.

```solidity
return cryptocurrency;
```

This line inside the getCryptocurrency() function returns the value of the cryptocurrency variable to the caller.

## Authors

Khushi 
[khushiawadh0829@gmail.com]
[21CBT1050@cuchd.in]

## License

This project is licensed under the MIT License - see the License.md file for details.

