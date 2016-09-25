DIY for Angular
===============


### Setup
```bash
# install typescript
npm install -g typescript@next

# npm install -g angular-cli
npm install -g angular-cli@1.0.0-beta.15

# check
npm list -g --depth=0
```



### Scaffolding 
```bash
ng new blockchain  --style=scss

ng g module home --routing   --dry-run

ng g module dashboard lazy --routing   --dry-run
ng g class dashboard/provider model  --dry-run
ng g interface dashboard/payer model  --dry-run

ng g module about lazy --routing   --dry-run

ng g service shared/ethereum   --dry-run
```

### Addons
```bash
npm install web3 --save
```


Ref
https://github.com/angular/angular.io/tree/master/public/docs/_examples/ngmodule/ts
