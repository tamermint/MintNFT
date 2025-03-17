# Mint NFT

Simple contract to mint NFT - MHPUNK

## Image

![NFT Image](./nftMint.png)

## Changes

- Need to install latest ipfs-utils

- Without it you will get this error :

```zsh
node ipfs/upload.js
node:internal/deps/undici/undici:12442
   Error.captureStackTrace(err, this);
         ^

TypeError: RequestInit: duplex option is required when sending a body.
   at node:internal/deps/undici/undici:12442:11
   at async Client.fetch (.../node_modules/ipfs-utils/src/http.js:132:22)
   at async addAll (.../node_modules/ipfs-http-client/src/add-all.js:36:17)
   at async last (...node_modules/it-last/dist/src/index.js:7:22)
   at async Object.add (.../node_modules/ipfs-http-client/src/add.js:22:14)
   at async run (.../MintNFT/ipfs/upload.js:31:18)
```

- NFT deployed to: 0xba0D23FCE386Ff845BD51C1F82492cf057aA8E11

- [Link](https://sepolia.etherscan.io/tx/0x4c538e2b15fb4302f4a788ed5873323e93de212b9b8a4a3b1d3b3db98a961aca) to Etherscan
