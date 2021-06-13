require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth predict coach inflict entire symptom turn'; 
let testAccounts = [
"0x27030ed4c9f1bfac6595034df6281c85b342a1402f98b0eeed913ba75e450ba6",
"0xacbe9c45dba6ae17c3d135da39173008a993a33c721bffc29afda00307799739",
"0x13d122f6b5eac041f0eb9725266d2b8f52586ac889aafb0349f5632f982e4e11",
"0xb0ae9cd01c02a119a578fe82c467e64474beb678adf6b68bed1807ac8bd4f240",
"0xbf933b3eca29cae3d47f4ba983ab290adebff28043512d55fe8a9cfe8efb7779",
"0xc34e90f2053164f21e316c6b2d69bf8decab6458bdc4c12a0160c13a0ed0efc2",
"0xec87b35c551513db49a824b21340cad1f7b65488bfacd9db7482408b569a8528",
"0xb8a255e4524130ee33daf6fdadb2f6473254f05420d724db59980b1e7cc8a49c",
"0x9d92dd12b8b9f554de46893244ff83c4f3d2860d4ac86ebfa430cb618f516ff1",
"0xf67aa0107d1a55f831e1f949627fce8a00ce98ae8fda809340bbf873ce283bd2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

