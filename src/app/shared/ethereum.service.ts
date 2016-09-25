import {Injectable} from '@angular/core';
import Web3 from 'web3';

const MyStuff_ABI = require('./myStuff.abi');
const MyStuff_Address = '0xe317B83305b3C809e5AE23eA07Cfe64213e1d64A';
const myStuffModel = require('./myStuff.model');

@Injectable()
export class EthereumService {
  web3

  constructor() {
    if (typeof Web3 !== 'undefined') {
      this.web3 = new Web3(Web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  }

  get() {
    return this.web3;
  }

  getContract(cb) {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var MyStuff = web3.eth.contract(MyStuff_ABI);
    web3.eth.getCoinbase(function (err, coinbase) {
      cb(err, {
        coinbase: coinbase,
        instance: MyStuff.at(MyStuff_Address)
      });
    });
  }

  register(key, cb) {
    this.getContract(function (err, contract) {
      if (err) {
        return cb(err);
      }
      var txnObj = {
        from: contract.coinbase,
        to: MyStuff_Address,
        value: '0x00'
      };
      contract.instance.registerStuff(key, txnObj, cb);
    });
  }

  etKey(cb) {
    this.getContract(function (err, contract) {
      if (err) {
        return cb(err);
      }
      contract.instance.keys(contract.coinbase, cb);
    });
  }
}
