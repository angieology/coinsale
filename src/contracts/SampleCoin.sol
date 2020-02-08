pragma solidity ^0.5.1;

import './SampleCoin.sol';
import 'github.com/OpenZeppelin/zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';


contract SampleCoinCrowdsale is MintedCrowdsale {
    constructor
        (
            uint256 _rate,
            address payable _wallet,
            ERC20Mintable _token
        )
        public payable
        Crowdsale(_rate, _wallet, _token)
        {

        }
}

//deployed contract 0xbbf289d846208c16edc8474705c748aff07732db

//minter (remix address) 0xca35b7d915458ef540ade6068dfe2f44e8fa733c