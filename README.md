# Decentralized Creator 📝 Solidity Contracts

![License](https://img.shields.io/badge/license-Apache%20V2-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v6.4.1-blue.svg)
![Node Version](https://img.shields.io/badge/node-v10.14.1-blue.svg)

Decentralized Creator is a platform devoted to free speech. We believe that free speech is a fundamental human right. Decentralized Creator is a platform that intends to mitigate and respond to concerns revolved around censorship. Learn more by going to [decentralizedcreator.com](https://decentralizedcreator.com).

## Requirements

1. `truffle` with solc 0.5.0

2. `ganache-cli` or `ganache` desktop app

3. For production, a Ropsten or Main Network Full Node (infura.io is a nice tool to use).

## Deployment and Testing

To deploy, you can simply run:

```bash
# Install node modules
yarn # or npm i

# For localhost
truffle deploy --network=development

# For ropsten
truffle deploy --network=ropsten

# For mainnet
truffle deploy --network=mainnet
```

To test, you can run:

```bash
truffle test
```

## Configuring

In order to deploy to either Main or Ropsten Networks, you need to have a private key with enough Ethereum (0.1 ETH should be more then enough).

All you need to do to configure the contract for deployment is export the necessary environment variables:

```bash
# Configuring Ropsten
export ROPSTEN_KEY='PRIVATE KEY STRING OR 12 WORD PASS PHRASE'
export ROPSTEN_RPC='URL FOR ROPSTEN NODE'

# Configuring Main
export MAINNET_KEY='PRIVATE KEY STRING OR 12 WORD PASS PHRASE'
export MAINNET_RPC='URL FOR MAIN NODE'
```

You can go to infura.io if you need to access to a full node and don't want to wait to sync your own full node.

## Live Transaction Info

The transaction information for the mainnet:

```
tx.info.mainnet.json
```

and ropsten:

```
tx.info.ropsten.json
```

Are the smart contracts actively used by Decentralized Creator.

## Additional Notes

- Apache V2 Licensed

- All development and source code will eventually migrate to https://eaxops.com

- Have a question? :mailbox: Email hello@chriscates.ca