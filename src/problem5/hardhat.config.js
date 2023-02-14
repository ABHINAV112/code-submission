require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy-fake-erc20");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  fakeERC20Network: {
    tokens: [
      {
        name: "FakeToken",
        symbol: "GLD",
        defaultMintAmount: "80000000000000000000",
      }
    ],
    defaultMintAmount: "80000000000000000000",
  },
  solidity: "0.8.17",
};
