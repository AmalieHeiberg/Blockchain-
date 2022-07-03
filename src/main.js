const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1'); // basis of bitcoin wallets

const myKey = ec.keyFromPrivate('6ca350684a9be136bfdfe1dfb1f5e9e5c3d7dbf2747c3d984fb25bef6fd816b0');
const myWalletAddress = myKey.getPublic('hex');

let fooChain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
fooChain.addTransaction(tx1);

//console.log('Mining block 1... ');
//fooChain.addBlock(new Block(1, "10/07/2017", {amount: 4}));

//console.log('Mining block 2... '); 
//fooChain.addBlock(new Block(2, "12/07/2017", {amount: 12}));

//console.log(JSON.stringify(fooChain, null, 4));
//console.log('Is blockchain valid? ' + fooChain.isChainValid()) 

//fooChain.createTransaction(new Transaction('address1', 'address2', 100));
//fooChain.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner.. ');
fooChain.minePendingTransactions(myWalletAddress);
console.log('\n Balance of Amalie is ', fooChain.getBalanceofAddress(myWalletAddress));

fooChain.chain[1].transactions[0].amount = 1; //try to tamper with transactions

console.log('Is chain valid?', fooChain.isChainValid());


