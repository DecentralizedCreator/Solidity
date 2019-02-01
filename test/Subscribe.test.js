const Subscribe = artifacts.require('Subscribe');

contract('Subscribe', (accounts) => {

    let account1 = accounts[0];
    let account2 = accounts[1];

    it('Should purchase a subscription from account #1 for 1 ETH', done => {
        Subscribe.deployed().then(contract => {
            return contract.NewSubscription(
                account1,
                'itschriscates',
                'Thank You Note',
                {
                    from: account2,
                    value: Math.pow(10, 18)
                }
            ).then((result) => {
                console.log('  Transaction successful, TXID:', result.tx);
                done();
            })
        })
    })

    it('Should withdraw 0.5 ETH from Account #2 to Account #1', done => {
        Subscribe.deployed().then(contract => {
            return contract.Withdraw(
                account1,
                {
                    from: account2,
                    value: Math.pow(10, 18)
                }
            ).then((result) => {
                console.log('  Transaction successful, TXID:', result.tx);
                done();
            })
        })
    })

})
