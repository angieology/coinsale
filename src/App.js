import React from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import { Form, Input, Button } from 'antd';
// import EthereumTx from './ethereumjs-tx.min'

var account = "0x5a30ED952b2d50c5520FF4EB6F943C8604A1de61"
var coinAbi = [{ "constant": true,  "inputs": [],
    "name": "name",  "outputs": [   {     "name": "",   "type": "string"  }  ],   "payable": false,  "stateMutability": "view",   "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {     "name": "value",  "type": "uint256"  }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "addMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceMinter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "isMinter",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MinterAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "account",
        "type": "address"
      }
    ],
    "name": "MinterRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  }
]
var coinAddress = "0x692a70d2e424a56d2c6c27aa97d1a86395877b3a"
var saleAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "beneficiary",
        "type": "address"
      }
    ],
    "name": "buyTokens",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_rate",
        "type": "uint256"
      },
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_token",
        "type": "address"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "purchaser",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "beneficiary",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokensPurchased",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "rate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "wallet",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "weiRaised",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
var saleAddress = "0x692a70d2e424a56d2c6c27aa97d1a86395877b3a"

var web3 = new Web3(Web3.givenProvider || "ropsten.infura.io/v3/266fa98ce0294f4d9c8033e4cad95d6f");
  
const SampleCoin = new web3.eth.Contract(coinAbi, coinAddress)
console.log("SampleCoin", SampleCoin)

 
const Crowdsale = new web3.eth.Contract(saleAbi, saleAddress)
console.log("Crowdsale", Crowdsale)


class _App extends React.Component {

  constructor (props){
    super(props);
    this.state= {receipt: null}
  }

  componentDidMount() {
    // SampleCoin.methods.balanceOf(account).call().then(console.log)
  }

// add minter role to crowdsale so it is able to mint tokens during crowdsale
// has already been done in setup, not used in app
  addMinter = () => {
     // using the promise
          
          SampleCoin.methods.addMinter(saleAddress).send({from: account})
          .on('transactionHash', (hash) => {
           console.log("transactionHash", hash)
          })
          .on('confirmation', (confirmationNumber, receipt) => {
              console.log("confirmationNumber",confirmationNumber )
              console.log("receipt",receipt )
             
             //check balance, should be 0
             SampleCoin.methods.balanceOf(saleAddress).call().then(console.log)
          })
          .on('receipt', (receipt) => {
              // receipt example
              console.log(receipt);
            
          })
          .on('error', console.error); // 
  }

  buyTokens = (purchaserAccount, amountEth) => {
    var amountAsString = amountEth.toString()
    Crowdsale.methods.buyTokens(purchaserAccount).send({ from: account, value: web3.utils.toWei(amountAsString, "ether")})
    .on('transactionHash', (hash) => {
     console.log("transactionHash", hash)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("confirmationNumber",confirmationNumber )
        console.log("receipt", receipt )
    })
    .on('receipt', (receipt) => {
        // receipt example
        console.log(receipt);
      //show state

      this.setState({ receipt: receipt})
    })
    .on('error', console.error); // 
  }

  //form methods

//form submission

handleSubmit = e => {
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
      this.buyTokens(values.purchaser, values.amount)
    }
  });
};

  render () {
    const { getFieldDecorator, getFieldsError } = this.props.form;

    function hasErrors (fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Purchase Sample Coin (SMP) // Minted Crowdsale
            <br/>
            Rate: 1 ETH for 1 SMP
            <br/>
            Note: please turn off privacy mode (in settings) of Metamask to allow access
          </p>
          <a
            className="App-link"
            href="http://lite.ropsten.ethstats.surge.sh" ///#/tx/
            target="_blank"
            rel="noopener noreferrer"
          >
            View Ropsten Transactions
          </a>
          <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item >
          {getFieldDecorator('purchaser', {
            rules: [{ required: true, message: 'Please input your account from Metamask' }],
          })(
            <Input
             
              placeholder="Account"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('amount', {
            rules: [{ required: true, message: 'Please input amount to purchase' }],
          })(
            <Input
           
              placeholder="Amount"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
           Buy SMP
          </Button>
        </Form.Item>
      </Form>
      {this.state.receipt && <p>Result: {this.state.receipt}</p>}
      
        </header>
      
      </div>
    );
  }


}
const App = Form.create({ name: 'form' })(_App);


export default App;
