/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { NounsAuctionHouse } from "../NounsAuctionHouse";

export class NounsAuctionHouse__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsAuctionHouse> {
    return super.deploy(overrides || {}) as Promise<NounsAuctionHouse>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NounsAuctionHouse {
    return super.attach(address) as NounsAuctionHouse;
  }
  connect(signer: Signer): NounsAuctionHouse__factory {
    return super.connect(signer) as NounsAuctionHouse__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsAuctionHouse {
    return new Contract(address, _abi, signerOrProvider) as NounsAuctionHouse;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "extended",
        type: "bool",
      },
    ],
    name: "AuctionBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "AuctionDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AuctionExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minBidIncrementPercentage",
        type: "uint256",
      },
    ],
    name: "AuctionMinBidIncrementPercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "AuctionReservePriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AuctionSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timeBuffer",
        type: "uint256",
      },
    ],
    name: "AuctionTimeBufferUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "auction",
    outputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "settled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
    ],
    name: "createBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INounsToken",
        name: "_nouns",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timeBuffer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_minBidIncrementPercentage",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minBidIncrementPercentage",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nouns",
    outputs: [
      {
        internalType: "contract INounsToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "setDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_minBidIncrementPercentage",
        type: "uint8",
      },
    ],
    name: "setMinBidIncrementPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
    ],
    name: "setReservePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timeBuffer",
        type: "uint256",
      },
    ],
    name: "setTimeBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settleAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settleCurrentAndCreateNewAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612178806100206000396000f3fe6080604052600436106101755760003560e01c80638456cb59116100cb578063ce9c7c0d1161007f578063f25efffc11610059578063f25efffc14610465578063f2fde38b1461047a578063f6be71d11461049a57600080fd5b8063ce9c7c0d14610419578063db2e1eed14610439578063ec91f2a41461044f57600080fd5b80638da5cb5b116100b05780638da5cb5b146103ad578063a4d0a17e146103d8578063b296024d146103ed57600080fd5b80638456cb591461037857806387f49f541461038d57600080fd5b80633fc8cef31161012d5780637120334b116101075780637120334b146102a4578063715018a6146102c45780637d9f6db5146102d957600080fd5b80633fc8cef3146102415780635c975abb1461026e578063659dd2b41461029157600080fd5b806336ebdb381161015e57806336ebdb38146101f55780633ccfd60b146102175780633f4ba83a1461022c57600080fd5b80630fb5a6b41461017a5780632de45f18146101a3575b600080fd5b34801561018657600080fd5b5061019060ce5481565b6040519081526020015b60405180910390f35b3480156101af57600080fd5b5060c9546101d09073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161019a565b34801561020157600080fd5b50610215610210366004611ec9565b6104ba565b005b34801561022357600080fd5b5061021561058d565b34801561023857600080fd5b5061021561061e565b34801561024d57600080fd5b5060ca546101d09073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027a57600080fd5b5060335460ff16604051901515815260200161019a565b61021561029f366004611e97565b6106c3565b3480156102b057600080fd5b506102156102bf366004611e97565b610a47565b3480156102d057600080fd5b50610215610ae3565b3480156102e557600080fd5b5060cf5460d05460d15460d25460d354610333949392919073ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1686565b60408051968752602087019590955293850192909252606084015273ffffffffffffffffffffffffffffffffffffffff166080830152151560a082015260c00161019a565b34801561038457600080fd5b50610215610b54565b34801561039957600080fd5b506102156103a8366004611e34565b610bc3565b3480156103b957600080fd5b5060975473ffffffffffffffffffffffffffffffffffffffff166101d0565b3480156103e457600080fd5b50610215610d7e565b3480156103f957600080fd5b5060cd546104079060ff1681565b60405160ff909116815260200161019a565b34801561042557600080fd5b50610215610434366004611e97565b610e37565b34801561044557600080fd5b5061019060cc5481565b34801561045b57600080fd5b5061019060cb5481565b34801561047157600080fd5b50610215610ed3565b34801561048657600080fd5b50610215610495366004611dee565b610f8e565b3480156104a657600080fd5b506102156104b5366004611e97565b61108a565b60975473ffffffffffffffffffffffffffffffffffffffff1633146105265760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60cd80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff83169081179091556040519081527fec5ccd96cc77b6219e9d44143df916af68fc169339ea7de5008ff15eae13450d906020015b60405180910390a150565b60975473ffffffffffffffffffffffffffffffffffffffff1633146105f45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b61061c61061660975473ffffffffffffffffffffffffffffffffffffffff1690565b47611126565b565b60975473ffffffffffffffffffffffffffffffffffffffff1633146106855760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b61068d61126a565b60d15415806106b6575060d35474010000000000000000000000000000000000000000900460ff165b1561061c5761061c611331565b600260655414156107165760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161051d565b60026065556040805160c08101825260cf5480825260d054602083015260d1549282019290925260d254606082015260d35473ffffffffffffffffffffffffffffffffffffffff8116608083015274010000000000000000000000000000000000000000900460ff16151560a08201529082146107d55760405162461bcd60e51b815260206004820152601760248201527f4e6f756e206e6f7420757020666f722061756374696f6e000000000000000000604482015260640161051d565b806060015142106108285760405162461bcd60e51b815260206004820152600f60248201527f41756374696f6e20657870697265640000000000000000000000000000000000604482015260640161051d565b60cc5434101561087a5760405162461bcd60e51b815260206004820152601f60248201527f4d7573742073656e64206174206c656173742072657365727665507269636500604482015260640161051d565b60cd5460208201516064916108949160ff90911690611f72565b61089e9190611f37565b81602001516108ad9190611f1f565b341015610924576040805162461bcd60e51b81526020600482015260248101919091527f4d7573742073656e64206d6f7265207468616e206c617374206269642062792060448201527f6d696e426964496e6372656d656e7450657263656e7461676520616d6f756e74606482015260840161051d565b608081015173ffffffffffffffffffffffffffffffffffffffff81161561095357610953818360200151611126565b3460d05560d380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905560cb54606083015160009190610998904290611faf565b10905080156109b95760cb546109ae9042611f1f565b6060840181905260d2555b8251604080513381523460208201528315158183015290517f1159164c56f277e6fc99c11731bd380e0347deb969b75523398734c252706ea39181900360600190a28015610a3c57825160608401516040519081527f6e912a3a9105bdd2af817ba5adc14e6c127c1035b5b648faa29ca0d58ab8ff4e9060200160405180910390a25b505060016065555050565b60975473ffffffffffffffffffffffffffffffffffffffff163314610aae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b60cb8190556040518181527f1b55d9f7002bda4490f467e326f22a4a847629c0f2d1ed421607d318d25b410d90602001610582565b60975473ffffffffffffffffffffffffffffffffffffffff163314610b4a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b61061c60006114e8565b60975473ffffffffffffffffffffffffffffffffffffffff163314610bbb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b61061c61155f565b600054610100900460ff16610bde5760005460ff1615610be2565b303b155b610c545760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161051d565b600054610100900460ff16158015610c9357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610c9b611605565b610ca3611692565b610cab611717565b610cb361155f565b60c9805473ffffffffffffffffffffffffffffffffffffffff808a167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560ca80549289169290911691909117905560cb85905560cc84905560cd805460ff85167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560ce8290558015610d7557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050505050565b60335460ff16610dd05760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161051d565b60026065541415610e235760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161051d565b6002606555610e306117a4565b6001606555565b60975473ffffffffffffffffffffffffffffffffffffffff163314610e9e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b60cc8190556040518181527f6ab2e127d7fdf53b8f304e59d3aab5bfe97979f52a85479691a6fab27a28a6b290602001610582565b60026065541415610f265760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161051d565b600260655560335460ff1615610f7e5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161051d565b610f866117a4565b610e30611331565b60975473ffffffffffffffffffffffffffffffffffffffff163314610ff55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b73ffffffffffffffffffffffffffffffffffffffff811661107e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161051d565b611087816114e8565b50565b60975473ffffffffffffffffffffffffffffffffffffffff1633146110f15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161051d565b60ce8190556040518181527faab6389d8f1c16ba1deb6e9831f5c5442cf4fcf99bf5bfa867460be408a9111890602001610582565b6111308282611b26565b6112665760ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561119e57600080fd5b505af11580156111b2573d6000803e3d6000fd5b505060ca546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015260248201879052909116935063a9059cbb92506044019050602060405180830381600087803b15801561122c57600080fd5b505af1158015611240573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112649190611e12565b505b5050565b60335460ff166112bc5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161051d565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631249c58b6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561139b57600080fd5b505af19250505080156113e9575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526113e691810190611eb0565b60015b611429576113f5612067565b806308c379a0141561141d575061140a612083565b80611415575061141f565b61108761155f565b505b3d6000803e3d6000fd5b60ce54429060009061143b9083611f1f565b6040805160c08101825285815260006020808301829052828401879052606083018590526080830182905260a090920181905260cf87905560d05560d185905560d283905560d380547fffffffffffffffffffffff000000000000000000000000000000000000000000169055815185815290810183905291925084917fd6eddd1118d71820909c1197aa966dbc15ed6f508554252169cc3d5ccac756ca910160405180910390a2505050565b6097805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60335460ff16156115b25760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161051d565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113073390565b600054610100900460ff166116825760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161051d565b61168a611bb1565b61061c611c2e565b600054610100900460ff1661170f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161051d565b61061c611cd5565b600054610100900460ff166117945760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161051d565b61179c611bb1565b61061c611d52565b6040805160c08101825260cf54815260d054602082015260d15491810182905260d254606082015260d35473ffffffffffffffffffffffffffffffffffffffff8116608083015274010000000000000000000000000000000000000000900460ff16151560a08201529061185a5760405162461bcd60e51b815260206004820152601460248201527f41756374696f6e206861736e277420626567756e000000000000000000000000604482015260640161051d565b8060a00151156118ac5760405162461bcd60e51b815260206004820181905260248201527f41756374696f6e2068617320616c7265616479206265656e20736574746c6564604482015260640161051d565b80606001514210156119005760405162461bcd60e51b815260206004820152601860248201527f41756374696f6e206861736e277420636f6d706c657465640000000000000000604482015260640161051d565b60d380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055608081015173ffffffffffffffffffffffffffffffffffffffff16611a2f5760c95473ffffffffffffffffffffffffffffffffffffffff166323b872dd3061199c60975473ffffffffffffffffffffffffffffffffffffffff1690565b845160405160e085901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff93841660048201529290911660248301526044820152606401600060405180830381600087803b158015611a1257600080fd5b505af1158015611a26573d6000803e3d6000fd5b50505050611ac9565b60c954608082015182516040517f23b872dd00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff928316602482015260448101919091529116906323b872dd90606401600060405180830381600087803b158015611ab057600080fd5b505af1158015611ac4573d6000803e3d6000fd5b505050505b805160808201516020808401516040805173ffffffffffffffffffffffffffffffffffffffff9094168452918301527fc9f72b276a388619c6d185d146697036241880c36654b1a3ffdad07c24038d99910160405180910390a250565b60408051600080825260208201909252819073ffffffffffffffffffffffffffffffffffffffff851690617530908590604051611b639190611ee4565b600060405180830381858888f193505050503d8060008114611ba1576040519150601f19603f3d011682016040523d82523d6000602084013e611ba6565b606091505b509095945050505050565b600054610100900460ff1661061c5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161051d565b600054610100900460ff16611cab5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161051d565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b600054610100900460ff16610e305760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161051d565b600054610100900460ff16611dcf5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161051d565b61061c336114e8565b803560ff81168114611de957600080fd5b919050565b600060208284031215611e0057600080fd5b8135611e0b81612120565b9392505050565b600060208284031215611e2457600080fd5b81518015158114611e0b57600080fd5b60008060008060008060c08789031215611e4d57600080fd5b8635611e5881612120565b95506020870135611e6881612120565b94506040870135935060608701359250611e8460808801611dd8565b915060a087013590509295509295509295565b600060208284031215611ea957600080fd5b5035919050565b600060208284031215611ec257600080fd5b5051919050565b600060208284031215611edb57600080fd5b611e0b82611dd8565b6000825160005b81811015611f055760208186018101518583015201611eeb565b81811115611f14576000828501525b509190910192915050565b60008219821115611f3257611f32612038565b500190565b600082611f6d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611faa57611faa612038565b500290565b600082821015611fc157611fc1612038565b500390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715612031577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060033d11156120805760046000803e5060005160e01c5b90565b600060443d10156120915790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156120df57505050505090565b82850191508151818111156120f75750505050505090565b843d87010160208285010111156121115750505050505090565b611ba660208286010187611fc6565b73ffffffffffffffffffffffffffffffffffffffff8116811461108757600080fdfea2646970667358221220f46d3759ea1268e22c175b4a9212814377173a9831a54c17f845811cfb3febbb64736f6c63430008060033";
