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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ff8806100206000396000f3fe60806040526004361061015f5760003560e01c80638456cb59116100c0578063ce9c7c0d11610074578063ec91f2a411610059578063ec91f2a414610424578063f25efffc1461043a578063f2fde38b1461044f57600080fd5b8063ce9c7c0d146103ee578063db2e1eed1461040e57600080fd5b80638da5cb5b116100a55780638da5cb5b14610382578063a4d0a17e146103ad578063b296024d146103c257600080fd5b80638456cb591461034d57806387f49f541461036257600080fd5b80635c975abb116101175780637120334b116100fc5780637120334b14610279578063715018a6146102995780637d9f6db5146102ae57600080fd5b80635c975abb14610243578063659dd2b41461026657600080fd5b806336ebdb381161014857806336ebdb38146101df5780633f4ba83a146102015780633fc8cef31461021657600080fd5b80630fb5a6b4146101645780632de45f181461018d575b600080fd5b34801561017057600080fd5b5061017a60ce5481565b6040519081526020015b60405180910390f35b34801561019957600080fd5b5060c9546101ba9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610184565b3480156101eb57600080fd5b506101ff6101fa366004611d49565b61046f565b005b34801561020d57600080fd5b506101ff610542565b34801561022257600080fd5b5060ca546101ba9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561024f57600080fd5b5060335460ff166040519015158152602001610184565b6101ff610274366004611d17565b6105e9565b34801561028557600080fd5b506101ff610294366004611d17565b61096d565b3480156102a557600080fd5b506101ff610a09565b3480156102ba57600080fd5b5060cf5460d05460d15460d25460d354610308949392919073ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1686565b60408051968752602087019590955293850192909252606084015273ffffffffffffffffffffffffffffffffffffffff166080830152151560a082015260c001610184565b34801561035957600080fd5b506101ff610a7a565b34801561036e57600080fd5b506101ff61037d366004611cb4565b610ae9565b34801561038e57600080fd5b5060975473ffffffffffffffffffffffffffffffffffffffff166101ba565b3480156103b957600080fd5b506101ff610ca4565b3480156103ce57600080fd5b5060cd546103dc9060ff1681565b60405160ff9091168152602001610184565b3480156103fa57600080fd5b506101ff610409366004611d17565b610d5d565b34801561041a57600080fd5b5061017a60cc5481565b34801561043057600080fd5b5061017a60cb5481565b34801561044657600080fd5b506101ff610df9565b34801561045b57600080fd5b506101ff61046a366004611c6e565b610eb4565b60975473ffffffffffffffffffffffffffffffffffffffff1633146104db5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60cd80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff83169081179091556040519081527fec5ccd96cc77b6219e9d44143df916af68fc169339ea7de5008ff15eae13450d906020015b60405180910390a150565b60975473ffffffffffffffffffffffffffffffffffffffff1633146105a95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d2565b6105b1610fb0565b60d15415806105da575060d35474010000000000000000000000000000000000000000900460ff165b156105e7576105e7611077565b565b6002606554141561063c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104d2565b60026065556040805160c08101825260cf5480825260d054602083015260d1549282019290925260d254606082015260d35473ffffffffffffffffffffffffffffffffffffffff8116608083015274010000000000000000000000000000000000000000900460ff16151560a08201529082146106fb5760405162461bcd60e51b815260206004820152601760248201527f4e6f756e206e6f7420757020666f722061756374696f6e00000000000000000060448201526064016104d2565b8060600151421061074e5760405162461bcd60e51b815260206004820152600f60248201527f41756374696f6e2065787069726564000000000000000000000000000000000060448201526064016104d2565b60cc543410156107a05760405162461bcd60e51b815260206004820152601f60248201527f4d7573742073656e64206174206c65617374207265736572766550726963650060448201526064016104d2565b60cd5460208201516064916107ba9160ff90911690611df2565b6107c49190611db7565b81602001516107d39190611d9f565b34101561084a576040805162461bcd60e51b81526020600482015260248101919091527f4d7573742073656e64206d6f7265207468616e206c617374206269642062792060448201527f6d696e426964496e6372656d656e7450657263656e7461676520616d6f756e7460648201526084016104d2565b608081015173ffffffffffffffffffffffffffffffffffffffff8116156108795761087981836020015161122e565b3460d05560d380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905560cb546060830151600091906108be904290611e2f565b10905080156108df5760cb546108d49042611d9f565b6060840181905260d2555b8251604080513381523460208201528315158183015290517f1159164c56f277e6fc99c11731bd380e0347deb969b75523398734c252706ea39181900360600190a2801561096257825160608401516040519081527f6e912a3a9105bdd2af817ba5adc14e6c127c1035b5b648faa29ca0d58ab8ff4e9060200160405180910390a25b505060016065555050565b60975473ffffffffffffffffffffffffffffffffffffffff1633146109d45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d2565b60cb8190556040518181527f1b55d9f7002bda4490f467e326f22a4a847629c0f2d1ed421607d318d25b410d90602001610537565b60975473ffffffffffffffffffffffffffffffffffffffff163314610a705760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d2565b6105e76000611372565b60975473ffffffffffffffffffffffffffffffffffffffff163314610ae15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d2565b6105e76113e9565b600054610100900460ff16610b045760005460ff1615610b08565b303b155b610b7a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016104d2565b600054610100900460ff16158015610bb957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610bc161148f565b610bc961151c565b610bd16115a1565b610bd96113e9565b60c9805473ffffffffffffffffffffffffffffffffffffffff808a167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560ca80549289169290911691909117905560cb85905560cc84905560cd805460ff85167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560ce8290558015610c9b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050505050565b60335460ff16610cf65760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104d2565b60026065541415610d495760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104d2565b6002606555610d5661162e565b6001606555565b60975473ffffffffffffffffffffffffffffffffffffffff163314610dc45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d2565b60cc8190556040518181527f6ab2e127d7fdf53b8f304e59d3aab5bfe97979f52a85479691a6fab27a28a6b290602001610537565b60026065541415610e4c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104d2565b600260655560335460ff1615610ea45760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016104d2565b610eac61162e565b610d56611077565b60975473ffffffffffffffffffffffffffffffffffffffff163314610f1b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104d2565b73ffffffffffffffffffffffffffffffffffffffff8116610fa45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104d2565b610fad81611372565b50565b60335460ff166110025760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104d2565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60c960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631249c58b6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156110e157600080fd5b505af192505050801561112f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261112c91810190611d30565b60015b61116f5761113b611ee7565b806308c379a014156111635750611150611f03565b8061115b5750611165565b610fad6113e9565b505b3d6000803e3d6000fd5b60ce5442906000906111819083611d9f565b6040805160c08101825285815260006020808301829052828401879052606083018590526080830182905260a090920181905260cf87905560d05560d185905560d283905560d380547fffffffffffffffffffffff000000000000000000000000000000000000000000169055815185815290810183905291925084917fd6eddd1118d71820909c1197aa966dbc15ed6f508554252169cc3d5ccac756ca910160405180910390a2505050565b61123882826119a6565b61136e5760ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156112a657600080fd5b505af11580156112ba573d6000803e3d6000fd5b505060ca546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015260248201879052909116935063a9059cbb92506044019050602060405180830381600087803b15801561133457600080fd5b505af1158015611348573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136c9190611c92565b505b5050565b6097805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60335460ff161561143c5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016104d2565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861104d3390565b600054610100900460ff1661150c5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104d2565b611514611a31565b6105e7611aae565b600054610100900460ff166115995760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104d2565b6105e7611b55565b600054610100900460ff1661161e5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104d2565b611626611a31565b6105e7611bd2565b6040805160c08101825260cf54815260d054602082015260d15491810182905260d254606082015260d35473ffffffffffffffffffffffffffffffffffffffff8116608083015274010000000000000000000000000000000000000000900460ff16151560a0820152906116e45760405162461bcd60e51b815260206004820152601460248201527f41756374696f6e206861736e277420626567756e00000000000000000000000060448201526064016104d2565b8060a00151156117365760405162461bcd60e51b815260206004820181905260248201527f41756374696f6e2068617320616c7265616479206265656e20736574746c656460448201526064016104d2565b806060015142101561178a5760405162461bcd60e51b815260206004820152601860248201527f41756374696f6e206861736e277420636f6d706c65746564000000000000000060448201526064016104d2565b60d380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055608081015173ffffffffffffffffffffffffffffffffffffffff166118795760c95481516040517f42966c6800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909216916342966c68916118429160040190815260200190565b600060405180830381600087803b15801561185c57600080fd5b505af1158015611870573d6000803e3d6000fd5b50505050611913565b60c954608082015182516040517f23b872dd00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff928316602482015260448101919091529116906323b872dd90606401600060405180830381600087803b1580156118fa57600080fd5b505af115801561190e573d6000803e3d6000fd5b505050505b6020810151156119495761194961193f60975473ffffffffffffffffffffffffffffffffffffffff1690565b826020015161122e565b805160808201516020808401516040805173ffffffffffffffffffffffffffffffffffffffff9094168452918301527fc9f72b276a388619c6d185d146697036241880c36654b1a3ffdad07c24038d99910160405180910390a250565b60408051600080825260208201909252819073ffffffffffffffffffffffffffffffffffffffff8516906175309085906040516119e39190611d64565b600060405180830381858888f193505050503d8060008114611a21576040519150601f19603f3d011682016040523d82523d6000602084013e611a26565b606091505b509095945050505050565b600054610100900460ff166105e75760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104d2565b600054610100900460ff16611b2b5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104d2565b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b600054610100900460ff16610d565760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104d2565b600054610100900460ff16611c4f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104d2565b6105e733611372565b803560ff81168114611c6957600080fd5b919050565b600060208284031215611c8057600080fd5b8135611c8b81611fa0565b9392505050565b600060208284031215611ca457600080fd5b81518015158114611c8b57600080fd5b60008060008060008060c08789031215611ccd57600080fd5b8635611cd881611fa0565b95506020870135611ce881611fa0565b94506040870135935060608701359250611d0460808801611c58565b915060a087013590509295509295509295565b600060208284031215611d2957600080fd5b5035919050565b600060208284031215611d4257600080fd5b5051919050565b600060208284031215611d5b57600080fd5b611c8b82611c58565b6000825160005b81811015611d855760208186018101518583015201611d6b565b81811115611d94576000828501525b509190910192915050565b60008219821115611db257611db2611eb8565b500190565b600082611ded577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611e2a57611e2a611eb8565b500290565b600082821015611e4157611e41611eb8565b500390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff82111715611eb1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060033d1115611f005760046000803e5060005160e01c5b90565b600060443d1015611f115790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff8160248401118184111715611f5f57505050505090565b8285019150815181811115611f775750505050505090565b843d8701016020828501011115611f915750505050505090565b611a2660208286010187611e46565b73ffffffffffffffffffffffffffffffffffffffff81168114610fad57600080fdfea2646970667358221220db967821e61d0e6c22f867d296e6e00d8c0a47dcdaa30f410985d9cf367a47ed64736f6c63430008060033";
