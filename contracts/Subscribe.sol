pragma solidity ^0.5.0;

import "./SafeMath.sol";

/**
 * @title Subscribe
 * @dev A Simple Subscription and Withdrawal Smart Contract for Decentralized Creator
 */
contract Subscribe {

    using SafeMath for uint256;

    /**
    * @dev The address that receives fees for routing transactions
    */
    address payable public feeAddress = 0x2e339b901aB2e66884284e187c193ECACf3E88F5;

    /**
    * @dev How much ether is sent every time a subscription or withdrawal is made
    */
    uint256 feeAmount = 0.05 ether;

    /**
    * @dev An event when a subscription is made
    */
    event Subscription(
        address indexed subscriber,
        address indexed creator,
        string user,
        string tier,
        uint256 amount
    );

    /**
    * @dev An event when a withdrawal is made (for custodial DC wallet users only)
    */
    event Withdrawal(
        address indexed wallet,
        address indexed recipient,
        uint256 amount
    );

    /**
    * @dev Creates a new subscription, this subscription is confirmed when DC gets the transaction hash
    */
    function NewSubscription(address payable creator, string memory user, string memory tier) public payable {
        uint256 amount = msg.value;
        address subscriber = msg.sender;

        uint256 payout = amount.sub(feeAmount);

        creator.transfer(payout);
        feeAddress.transfer(feeAmount);

        emit Subscription(subscriber, creator, user, tier, amount);
    }

    /**
    * @dev Withdraws funds from a DC specific wallet. Intended for custodial DC wallets only
    */
    function Withdraw(address payable recipient) public payable {
        uint256 amount = msg.value;
        address wallet = msg.sender;

        uint256 payout = amount.sub(feeAmount);

        recipient.transfer(payout);
        feeAddress.transfer(feeAmount);

        emit Withdrawal(wallet, recipient, amount);
    }

}
