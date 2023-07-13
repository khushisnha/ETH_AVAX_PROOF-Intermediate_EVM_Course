/*
/** @type import('hardhat/config').HardhatUserConfig */
/*
require("@nomiclabs/hardhat-waffle")
module.exports = {
  solidity: "0.8.9",
}; 
*/

require("@nomicfoundation/hardhat-toolbox");

const FORK_FUJI = true
const FORK_MAINNET = false
let forkingData = undefined;

if (FORK_MAINNET) {
  forkingData = {
    url: 'https://api.avax.network/ext/bc/C/rpcc',
  }
}
if (FORK_FUJI) {
  forkingData = {
    url: 'https://api.avax-test.network/ext/bc/C/rpc',
  }
}


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking
      forking: forkingData
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [
        '00ffa9244c2403faae4135e8865d035100fe3a24f17e76b868a3a2a9d2c048f5'  //private key
      ]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [
        '00ffa9244c2403faae4135e8865d035100fe3a24f17e76b868a3a2a9d2c048f5'  //private key
      ]
    }
  }
}



module.exports = {
  // ...rest of the config...
  etherscan: {
    apiKey: "NYF1IC1VJUMMPJCJMFJ5I2BNW6W22FJCK2",  //API Key
  },
};
