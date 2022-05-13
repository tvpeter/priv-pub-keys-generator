const Ecpair = require("ecpair");
const Ecc = require("tiny-secp256k1");
const bitcoin = require("bitcoinjs-lib");

const EcpairKeys = Ecpair.ECPairFactory(Ecc);

const keyPair = EcpairKeys.makeRandom({ network : bitcoin.networks.testnet });

const privateKey = keyPair.privateKey;

console.log('Private key: ' + privateKey.toString('hex'));

const publicKey = keyPair.publicKey;

console.log('Public key: '+ publicKey.toString('hex'));

