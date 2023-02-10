import { JsonRpcProvider, Contract, formatUnits, formatEther } from "ethers";
import abi from "./switchabi.json";
import addresses from "./addresses.json";

async function getBalance(address) {
    const binanceSmartChainUrl = "https://bsc-dataseed.binance.org/";

    const provider = new JsonRpcProvider(binanceSmartChainUrl);

    const switchCoinAddress = "0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468";

    const swtchContract = new Contract(switchCoinAddress, abi, provider);

    console.log(address, await swtchContract.balanceOf(address));
}

for (let i = 0; i < addresses.length; i++) {
    getBalance(addresses[i]);
}