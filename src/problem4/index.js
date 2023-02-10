const { JsonRpcProvider, Contract, formatUnits, formatEther } = require("ethers");
const abi = require("./switchabi.json");
const addresses = require("./addresses.json");

async function getBalance(address) {
    const binanceSmartChainUrl = "https://bsc-dataseed.binance.org/";

    const provider = new JsonRpcProvider(binanceSmartChainUrl);

    const switchCoinAddress = "0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468";

    const swtchContract = new Contract(switchCoinAddress, abi, provider);

    // const string = await swtchContract.name()

    console.log(address, await swtchContract.balanceOf(address));
}

for (let i = 0; i < addresses.length; i++) {
    getBalance(addresses[i]);
}