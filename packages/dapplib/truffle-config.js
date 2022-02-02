require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note random comfort install arena fog genre'; 
let testAccounts = [
"0xe2ac7e01ec680094a4f108a083407cf8e49755304e4d517eb2a205d5f3b1c2a3",
"0xd752027f2620f85f5365f8a2338e3e8cff0c2fdd72755bfc7abf544886648f52",
"0x85f1e364f1b181c7bb5290b3c256ee9a0925b4ce614278f46d3f4e4a7e19ba9b",
"0xad61fdeca677c94d0f60be8727425217922ea484c7bc88bca4f9f785b59b2e6e",
"0x144170d482e7952739825a5fda882bd3411e57a1ba740de196f59bc1d65aa02e",
"0x826fc6bd3d5db95bd41a481222a4fc286339cabf2816774f839286e672723184",
"0x857d481bf547c3f778ded01e81e1fba589930341aecda442719987d75bdf4ee8",
"0x99e382c0505593416cdd7b5d9bee6d131d6845e2bb87325b9d33df6eb6ce66f7",
"0xa2226647c005f063f30c839e1d32c1c50d76a79cfcb07ce32dc1e15e29635de2",
"0x4a80a1e4cba3d71149f5289de5505688b59ef6daf1742b5cd2bf2fd4af00a80a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

