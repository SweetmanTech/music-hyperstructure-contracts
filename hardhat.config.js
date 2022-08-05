require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");

module.exports = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    polygonMumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
    mainnet: {
      url: "https://rpc.ankr.com/eth",
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY,
    },
  },
};
