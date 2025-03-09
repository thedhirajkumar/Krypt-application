require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: __dirname + '/.env' });

// console.log("SEPOLIA_ALCHEMY_URL:", process.env.SEPOLIA_ALCHEMY_URL);
// console.log("SEPOLIA_PRIVATE_KEY:", process.env.SEPOLIA_PRIVATE_KEY);
// console.log("ETHERSCAN_API_KEY:", process.env.ETHERSCAN_API_KEY);

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_ALCHEMY_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};