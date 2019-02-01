const Subscribe = artifacts.require('Subscribe');
const fs = require('fs');

module.exports = (deployer) => {
    deployer.deploy(Subscribe).then(info => {
        let address = info.address;
        let transaction = info.transactionHash;

        let file = JSON.stringify({
            address,
            transaction
        }, null, 2);

        fs.writeFileSync(__dirname + `/../tx.info.${Number(new Date())}.json`, file, 'UTF-8');
    });
}
