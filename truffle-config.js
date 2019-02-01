const HDWalletProvider = require("truffle-hdwallet-provider");

// export ROPSTEN_KEY=your_mnemonic
const RopstenPrivateKey = process.env.ROPSTEN_KEY;
// export ROPSTEN_RPC=your_rpc_url (ie: infura)
const RopstenProvider = RopstenPrivateKey ? new HDWalletProvider(RopstenPrivateKey, process.env.ROPSTEN_RPC) : '';

// export MAINNET_KEY=your_mnemonic
const MainnetPrivateKey = process.env.MAINNET_KEY;
// export MAINNET_RPC=your_rpc_url (ie: infura)
const MainnetProvider = MainnetPrivateKey ? new HDWalletProvider(MainnetPrivateKey, process.env.MAINNET_RPC) : '';

module.exports = {
  networks: {
    mainnet: {
      network_id: 1,
      provider: MainnetProvider,
      gasPrice: 4000000000 // 4 gwei, feel free to modify.
    },
    development: {
      network_id: 2,
      host: "localhost",
      port: 8545
    },
    ropsten: {
      network_id: 3,
      provider: RopstenProvider
    }
  }
};
