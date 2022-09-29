require("dotenv").config();
const Web3 = require("web3");

const provider = new Web3.providers.HttpProvider(process.env.INFURA_URL);
const web3 = new Web3(provider);

const fromAddress = process.env.ACCOUNT_ADDRESS;
const abi = require(__dirname + "/abi.json");
const contractAddress = process.env.CONTRACT_ADDRESS;

async function transferNft(contractAddressReceiver, tokenId, onReceived = undefined) {
    const contract = new web3.eth.Contract(abi, contractAddress);

    const tx = {
        from: fromAddress,
        gas: 60000,
        data: contract.methods.transferFrom(fromAddress, contractAddressReceiver, tokenId).encodeABI()
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
    signPromise.then((signedTx) => {
        const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
        sentTx.on("receipt", onReceived || console.log);
        sentTx.on("error", console.error);
    }).catch((err) => {
        console.error(err);
    });
}


const contractAddressReceiver = "0xDc0004A53859b2b77bd3bDa161Ce5B4D234b59c6";
const tokenId = "4";

transferNft(contractAddressReceiver, tokenId);