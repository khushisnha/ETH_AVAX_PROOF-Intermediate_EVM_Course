<!DOCTYPE html>
<html>
  <head>
    <title>SMART CONTRACT MANAGEMENT</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" crossorigin="anonymous"></script>
    <script src="integrate.js"></script> 
    <link rel="stylesheet" href="styles.css" />
    <style>
    
    .button-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    
    h1 {
      font-size: 40px;
      color: #4e1277;
      text-align: center;
      margin-bottom: 20px;
      text-transform: uppercase;
      text-decoration: underline;
    }
    
    .myButton {
      display: block;
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      margin-bottom: 15px;
    }
    
    .thirdButton {
      background-color: #FF0000; 
    }
    
  </style>
  </head>
  <body>
    <div class="button-container">
      <h1 class="title">SMART CONTRACT MANAGEMENT</h1>
      <p id="currentTime"></p>
      <script src="script.js"></script>
      <input type="text" id="amount">
      <p id="balance"></p>
      <button id="deposit" class="myButton" onclick="incrementBalance('Button 1')">CRYPTOCURRENCY INCREMENT</button>
      <button id="withdraw" class="myButton" onclick="decrementBalance('Button 1')">CRYPTOCURRENCY DECREMENT</button>
      <button id="button3" class="myButton thirdButton" onclick="getBalance('Button 1')">TOTAL CRYPTOCURRENCY</button>
    </div>

    <script>
      var contract;

$(document).ready(function()
{
  web3 = new Web3(web3.currentProvider);
  var address = "0xf73Ae3e8A1f202696F1FDe0a92653091353C96a66";
  var abi = [
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


  contract = new web3.eth.Contract(abi, address);

  contract.methods.getBalance().call().then(function(bal)
  {
    $('#balance').html(bal);
  })
})

$('#deposit').click(function()
{
  var amt = 0;
  amt = parseInt($("#amount").val());
  web3.eth.getAccounts().then(function(accounts)
  {
    var acc = accounts[0];
    return contract.methods.deposit(amt).send({from: acc});
  }).then(function(tx)
  {
    console.log(tx);
  }).catch(function(tx)
  {
    console.log(tx);
  })
})
    
    </script>
  </body>
</html>
