# nft-transfer-js

Simple code in javascript to execute the transfer method inside an ERC721 smart contract. This example is able to call the method of a contract already deployed on *ROPSTEIN* testnet.

## files
    .
    ├── .env_test               # File test able to provide environment variables
    ├── abi.json                # Abi of the online smart contract
    ├── package.json            # Json npm file that keep track of project information and dependencies
    ├── index.js                # Main file that with all the js code
    └── README.md

## prerequisite
To run the js code should be installed on machine
- npm
- node.js

## before running
To install app dependencies should be run the command
```
npm install
```
then should be created a new file **.env** in main directory with the same key of *.env_test*. The connection with the nodes of the blockchain is possible without creating a dedicated node passing through [infura](https://infura.io/dashboard) that is able to do as a proxy. After a registration it provides a personal link to each user to access on web3 services.
```
INFURA_URL=         <- infura url available on the website
CONTRACT_ADDRESS=   <- contract address available after contract deployment
ACCOUNT_ADDRESS=    <- user account address
PRIVATE_KEY=        <- user account private key
```
## run
```
npm start
```
or
```
node index.js
```
