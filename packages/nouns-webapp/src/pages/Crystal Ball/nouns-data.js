// https://observablehq.com/@gitblamecarrot/nouns-data@22
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Nouns Data

This notebook is used to share data between notebooks.`
)});
  main.variable(observer("MAINNET_CONTRACTS")).define("MAINNET_CONTRACTS", function(){return(
{
  NounsToken:"0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03",
  NounsSeeder:"0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515",
  NounsDescriptor:"0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
  NFTDescriptor:"0x0BBAd8c947210ab6284699605ce2a61780958264",
  NounsAuctionHouse:"0xF15a943787014461d94da08aD4040f79Cd7c124e",
  NounsNounsAuctionHouseProxy: "0x830BD73E4184ceF73443C15111a1DF14e495C706",
  NounsAuctionHouseProxyAdmin:	"0xC1C119932d78aB9080862C5fcb964029f086401e",
  NounsDAOExecutor:	"0x0BC3807Ec262cB779b38D65b38158acC3bfedE10",
  NounsDAOProxy:	"0x6f3E6272A167e8AcCb32072d08E0957F9c79223d",
  NounsDAOLogicV1:	"0xa43aFE317985726E4e194eb061Af77fbCb43F944"
}
)});
  main.variable(observer("NounsDescriptorAbi")).define("NounsDescriptorAbi", function(){return(
[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
      }
    ],
    "name": "BaseURIUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "enabled",
        "type": "bool"
      }
    ],
    "name": "DataURIToggled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "PartsLocked",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "accessories",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "accessoryCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_accessory",
        "type": "bytes"
      }
    ],
    "name": "addAccessory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_background",
        "type": "string"
      }
    ],
    "name": "addBackground",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_body",
        "type": "bytes"
      }
    ],
    "name": "addBody",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_paletteIndex",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "_color",
        "type": "string"
      }
    ],
    "name": "addColorToPalette",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_glasses",
        "type": "bytes"
      }
    ],
    "name": "addGlasses",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_head",
        "type": "bytes"
      }
    ],
    "name": "addHead",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "_accessories",
        "type": "bytes[]"
      }
    ],
    "name": "addManyAccessories",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "_backgrounds",
        "type": "string[]"
      }
    ],
    "name": "addManyBackgrounds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "_bodies",
        "type": "bytes[]"
      }
    ],
    "name": "addManyBodies",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "paletteIndex",
        "type": "uint8"
      },
      {
        "internalType": "string[]",
        "name": "newColors",
        "type": "string[]"
      }
    ],
    "name": "addManyColorsToPalette",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "_glasses",
        "type": "bytes[]"
      }
    ],
    "name": "addManyGlasses",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "_heads",
        "type": "bytes[]"
      }
    ],
    "name": "addManyHeads",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "arePartsLocked",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "backgroundCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "backgrounds",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "baseURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bodies",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "bodyCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint48",
            "name": "background",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "body",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "accessory",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "head",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "glasses",
            "type": "uint48"
          }
        ],
        "internalType": "struct INounsSeeder.Seed",
        "name": "seed",
        "type": "tuple"
      }
    ],
    "name": "dataURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint48",
            "name": "background",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "body",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "accessory",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "head",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "glasses",
            "type": "uint48"
          }
        ],
        "internalType": "struct INounsSeeder.Seed",
        "name": "seed",
        "type": "tuple"
      }
    ],
    "name": "generateSVGImage",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "uint48",
            "name": "background",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "body",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "accessory",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "head",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "glasses",
            "type": "uint48"
          }
        ],
        "internalType": "struct INounsSeeder.Seed",
        "name": "seed",
        "type": "tuple"
      }
    ],
    "name": "genericDataURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "glasses",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "glassesCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "headCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "heads",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isDataURIEnabled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lockParts",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "palettes",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_baseURI",
        "type": "string"
      }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "toggleDataURIEnabled",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint48",
            "name": "background",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "body",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "accessory",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "head",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "glasses",
            "type": "uint48"
          }
        ],
        "internalType": "struct INounsSeeder.Seed",
        "name": "seed",
        "type": "tuple"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
)});
  main.variable(observer("NounsSeederAbi")).define("NounsSeederAbi", function(){return(
[
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "nounId",
        "type": "uint256"
      },
      {
        "internalType": "contract INounsDescriptor",
        "name": "descriptor",
        "type": "address"
      }
    ],
    "name": "generateSeed",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint48",
            "name": "background",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "body",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "accessory",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "head",
            "type": "uint48"
          },
          {
            "internalType": "uint48",
            "name": "glasses",
            "type": "uint48"
          }
        ],
        "internalType": "struct INounsSeeder.Seed",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
)});
  main.variable(observer("NOUNS_ABIS")).define("NOUNS_ABIS", ["NounsDescriptorAbi","NounsSeederAbi"], function(NounsDescriptorAbi,NounsSeederAbi){return(
{
  NounsDescriptorAbi,
  NounsSeederAbi
}
)});
  main.variable(observer("SUBGRAPH_URL")).define("SUBGRAPH_URL", function(){return(
"https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph"
)});
  return main;
}
