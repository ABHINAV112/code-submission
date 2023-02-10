const { EtherscanProvider, formatEther } = require("ethers");

async function getBalance(address) {
    const provider = new EtherscanProvider();

    const balance = await provider.getBalance(address);

    console.log(`Balance of address ${address} ${formatEther(balance)}`);
}

getBalance("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430");

getBalance("0x0020c5222a24e4a96b720c06b803fb8d34adc0af");

getBalance("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392");