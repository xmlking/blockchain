Ethereum Cheat Sheet
====================


#### Upgrades
geth upgradedb

#### Cleanup
geth removedb


#### Blockchain import/export
geth export <filename>
geth export <filename> 0 29999

#### Default endpoints:
JSON-RPC: http://localhost:8545
WS-RPC: http://localhost:8546

### Geth CLI

```bash
> personal.listAccounts
> net.listening
> net.peerCount
> admin.peers
# Creating an account by importing a private key
geth account import <keyfile>
# Check your account balance using 
web3.fromWei(eth.getBalance(eth.accounts[0]).toNumber(), "ether")
loadScript("CheckBalance.js")
checkAllBalances()

web3.personal.unlockAccount("0x7c70bd61c7a6d683a1ad43bcffc42db6d5b787c9", "sumodemo", 1000);
```
