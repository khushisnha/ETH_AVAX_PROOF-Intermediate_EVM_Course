//code here is used of javascript for implementing and triggering functions on the frontend

window.addEventListener('load', async () => {
  if (window.ethereum) 
  {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  }
  else if (window.web3) 
  {
    window.web3 = new Web3(window.web3.currentProvider);
  }
  else 
  {
    console.log('Non-Ethereum');
  }
  const contractABI = [
    [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "decrementBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "incrementBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "getBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  ];

  const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; 
  //address here is used of online REMIX IDE

  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  window.incrementBalance = async () => {
    await contractInstance.methods.incrementCryptocurrency().send({ from: web3.eth.defaultAccount });
  };

  window.decrementBalance = async () => {
    await contractInstance.methods.incrementCryptocurrency().send({ from: web3.eth.defaultAccount });
  };

  window.getBalance = async () => {
    const value = await contractInstance.methods.getCryptocurrency().call();
    document.getElementById('currentValue').innerText = value;
  };
});
