/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { YourNFT, YourNFTInterface } from "../../contracts/YourNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600e81526020017f436f64654275736869546f6b656e0000000000000000000000000000000000008152506040518060400160405280600381526020017f4342540000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000285565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200029e57607f821691505b60208210811415620002b557620002b462000256565b5b50919050565b61369380620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636352211e116100b8578063a22cb4651161007c578063a22cb4651461034e578063b88d4fde1461036a578063c87b56dd14610386578063d204c45e146103b6578063e985e9c5146103d2578063f2fde38b1461040257610137565b80636352211e146102a857806370a08231146102d8578063715018a6146103085780638da5cb5b1461031257806395d89b411461033057610137565b806323b872dd116100ff57806323b872dd146101f45780632f745c591461021057806342842e0e1461024057806342966c681461025c5780634f6ccce71461027857610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806318160ddd146101d6575b600080fd5b61015660048036038101906101519190612412565b61041e565b604051610163919061245a565b60405180910390f35b610174610430565b604051610181919061250e565b60405180910390f35b6101a4600480360381019061019f9190612566565b6104c2565b6040516101b191906125d4565b60405180910390f35b6101d460048036038101906101cf919061261b565b610508565b005b6101de610620565b6040516101eb919061266a565b60405180910390f35b61020e60048036038101906102099190612685565b61062d565b005b61022a6004803603810190610225919061261b565b61068d565b604051610237919061266a565b60405180910390f35b61025a60048036038101906102559190612685565b610732565b005b61027660048036038101906102719190612566565b610752565b005b610292600480360381019061028d9190612566565b6107ae565b60405161029f919061266a565b60405180910390f35b6102c260048036038101906102bd9190612566565b61081f565b6040516102cf91906125d4565b60405180910390f35b6102f260048036038101906102ed91906126d8565b6108d1565b6040516102ff919061266a565b60405180910390f35b610310610989565b005b61031a61099d565b60405161032791906125d4565b60405180910390f35b6103386109c7565b604051610345919061250e565b60405180910390f35b61036860048036038101906103639190612731565b610a59565b005b610384600480360381019061037f91906128a6565b610a6f565b005b6103a0600480360381019061039b9190612566565b610ad1565b6040516103ad919061250e565b60405180910390f35b6103d060048036038101906103cb91906129ca565b610ae3565b005b6103ec60048036038101906103e79190612a26565b610b1c565b6040516103f9919061245a565b60405180910390f35b61041c600480360381019061041791906126d8565b610bb0565b005b600061042982610c34565b9050919050565b60606000805461043f90612a95565b80601f016020809104026020016040519081016040528092919081815260200182805461046b90612a95565b80156104b85780601f1061048d576101008083540402835291602001916104b8565b820191906000526020600020905b81548152906001019060200180831161049b57829003601f168201915b5050505050905090565b60006104cd82610cae565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105138261081f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057b90612b39565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105a3610cf9565b73ffffffffffffffffffffffffffffffffffffffff1614806105d257506105d1816105cc610cf9565b610b1c565b5b610611576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060890612bcb565b60405180910390fd5b61061b8383610d01565b505050565b6000600880549050905090565b61063e610638610cf9565b82610dba565b61067d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067490612c5d565b60405180910390fd5b610688838383610e4f565b505050565b6000610698836108d1565b82106106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d090612cef565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b61074d83838360405180602001604052806000815250610a6f565b505050565b61076361075d610cf9565b82610dba565b6107a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079990612c5d565b60405180910390fd5b6107ab816110b6565b50565b60006107b8610620565b82106107f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f090612d81565b60405180910390fd5b6008828154811061080d5761080c612da1565b5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bf90612e1c565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610942576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093990612eae565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6109916110c2565b61099b6000611140565b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546109d690612a95565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0290612a95565b8015610a4f5780601f10610a2457610100808354040283529160200191610a4f565b820191906000526020600020905b815481529060010190602001808311610a3257829003601f168201915b5050505050905090565b610a6b610a64610cf9565b8383611206565b5050565b610a80610a7a610cf9565b83610dba565b610abf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab690612c5d565b60405180910390fd5b610acb84848484611373565b50505050565b6060610adc826113cf565b9050919050565b610aeb6110c2565b6000610af7600c6114e2565b9050610b03600c6114f0565b610b0d8382611506565b610b178183611524565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610bb86110c2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1f90612f40565b60405180910390fd5b610c3181611140565b50565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ca75750610ca682611598565b5b9050919050565b610cb78161167a565b610cf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ced90612e1c565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d748361081f565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610dc68361081f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e085750610e078185610b1c565b5b80610e4657508373ffffffffffffffffffffffffffffffffffffffff16610e2e846104c2565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e6f8261081f565b73ffffffffffffffffffffffffffffffffffffffff1614610ec5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebc90612fd2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2c90613064565b60405180910390fd5b610f408383836116e6565b610f4b600082610d01565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f9b91906130b3565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ff291906130e7565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110b18383836116f6565b505050565b6110bf816116fb565b50565b6110ca610cf9565b73ffffffffffffffffffffffffffffffffffffffff166110e861099d565b73ffffffffffffffffffffffffffffffffffffffff161461113e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113590613189565b60405180910390fd5b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611275576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126c906131f5565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611366919061245a565b60405180910390a3505050565b61137e848484610e4f565b61138a8484848461174e565b6113c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c090613287565b60405180910390fd5b50505050565b60606113da82610cae565b6000600a600084815260200190815260200160002080546113fa90612a95565b80601f016020809104026020016040519081016040528092919081815260200182805461142690612a95565b80156114735780601f1061144857610100808354040283529160200191611473565b820191906000526020600020905b81548152906001019060200180831161145657829003601f168201915b5050505050905060006114846118e5565b905060008151141561149a5781925050506114dd565b6000825111156114cf5780826040516020016114b79291906132e3565b604051602081830303815290604052925050506114dd565b6114d8846118fc565b925050505b919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b611520828260405180602001604052806000815250611964565b5050565b61152d8261167a565b61156c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161156390613379565b60405180910390fd5b80600a600084815260200190815260200160002090805190602001906115939291906122c3565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061166357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806116735750611672826119bf565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6116f1838383611a29565b505050565b505050565b61170481611b3d565b6000600a6000838152602001908152602001600020805461172490612a95565b90501461174b57600a6000828152602001908152602001600020600061174a9190612349565b5b50565b600061176f8473ffffffffffffffffffffffffffffffffffffffff16611c5a565b156118d8578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611798610cf9565b8786866040518563ffffffff1660e01b81526004016117ba94939291906133ee565b602060405180830381600087803b1580156117d457600080fd5b505af192505050801561180557506040513d601f19601f82011682018060405250810190611802919061344f565b60015b611888573d8060008114611835576040519150601f19603f3d011682016040523d82523d6000602084013e61183a565b606091505b50600081511415611880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161187790613287565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506118dd565b600190505b949350505050565b606060405180602001604052806000815250905090565b606061190782610cae565b60006119116118e5565b90506000815111611931576040518060200160405280600081525061195c565b8061193b84611c7d565b60405160200161194c9291906132e3565b6040516020818303038152906040525b915050919050565b61196e8383611dde565b61197b600084848461174e565b6119ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b190613287565b60405180910390fd5b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611a34838383611fb8565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a7757611a7281611fbd565b611ab6565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611ab557611ab48382612006565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611af957611af481612173565b611b38565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611b3757611b368282612244565b5b5b505050565b6000611b488261081f565b9050611b56816000846116e6565b611b61600083610d01565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611bb191906130b3565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611c56816000846116f6565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606000821415611cc5576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611dd9565b600082905060005b60008214611cf7578080611ce09061347c565b915050600a82611cf091906134f4565b9150611ccd565b60008167ffffffffffffffff811115611d1357611d1261277b565b5b6040519080825280601f01601f191660200182016040528015611d455781602001600182028036833780820191505090505b5090505b60008514611dd257600182611d5e91906130b3565b9150600a85611d6d9190613525565b6030611d7991906130e7565b60f81b818381518110611d8f57611d8e612da1565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611dcb91906134f4565b9450611d49565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e45906135a2565b60405180910390fd5b611e578161167a565b15611e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e8e9061360e565b60405180910390fd5b611ea3600083836116e6565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ef391906130e7565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611fb4600083836116f6565b5050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001612013846108d1565b61201d91906130b3565b9050600060076000848152602001908152602001600020549050818114612102576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b6000600160088054905061218791906130b3565b90506000600960008481526020019081526020016000205490506000600883815481106121b7576121b6612da1565b5b9060005260206000200154905080600883815481106121d9576121d8612da1565b5b9060005260206000200181905550816009600083815260200190815260200160002081905550600960008581526020019081526020016000206000905560088054806122285761222761362e565b5b6001900381819060005260206000200160009055905550505050565b600061224f836108d1565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b8280546122cf90612a95565b90600052602060002090601f0160209004810192826122f15760008555612338565b82601f1061230a57805160ff1916838001178555612338565b82800160010185558215612338579182015b8281111561233757825182559160200191906001019061231c565b5b5090506123459190612389565b5090565b50805461235590612a95565b6000825580601f106123675750612386565b601f0160209004906000526020600020908101906123859190612389565b5b50565b5b808211156123a257600081600090555060010161238a565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6123ef816123ba565b81146123fa57600080fd5b50565b60008135905061240c816123e6565b92915050565b600060208284031215612428576124276123b0565b5b6000612436848285016123fd565b91505092915050565b60008115159050919050565b6124548161243f565b82525050565b600060208201905061246f600083018461244b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156124af578082015181840152602081019050612494565b838111156124be576000848401525b50505050565b6000601f19601f8301169050919050565b60006124e082612475565b6124ea8185612480565b93506124fa818560208601612491565b612503816124c4565b840191505092915050565b6000602082019050818103600083015261252881846124d5565b905092915050565b6000819050919050565b61254381612530565b811461254e57600080fd5b50565b6000813590506125608161253a565b92915050565b60006020828403121561257c5761257b6123b0565b5b600061258a84828501612551565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006125be82612593565b9050919050565b6125ce816125b3565b82525050565b60006020820190506125e960008301846125c5565b92915050565b6125f8816125b3565b811461260357600080fd5b50565b600081359050612615816125ef565b92915050565b60008060408385031215612632576126316123b0565b5b600061264085828601612606565b925050602061265185828601612551565b9150509250929050565b61266481612530565b82525050565b600060208201905061267f600083018461265b565b92915050565b60008060006060848603121561269e5761269d6123b0565b5b60006126ac86828701612606565b93505060206126bd86828701612606565b92505060406126ce86828701612551565b9150509250925092565b6000602082840312156126ee576126ed6123b0565b5b60006126fc84828501612606565b91505092915050565b61270e8161243f565b811461271957600080fd5b50565b60008135905061272b81612705565b92915050565b60008060408385031215612748576127476123b0565b5b600061275685828601612606565b92505060206127678582860161271c565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6127b3826124c4565b810181811067ffffffffffffffff821117156127d2576127d161277b565b5b80604052505050565b60006127e56123a6565b90506127f182826127aa565b919050565b600067ffffffffffffffff8211156128115761281061277b565b5b61281a826124c4565b9050602081019050919050565b82818337600083830152505050565b6000612849612844846127f6565b6127db565b90508281526020810184848401111561286557612864612776565b5b612870848285612827565b509392505050565b600082601f83011261288d5761288c612771565b5b813561289d848260208601612836565b91505092915050565b600080600080608085870312156128c0576128bf6123b0565b5b60006128ce87828801612606565b94505060206128df87828801612606565b93505060406128f087828801612551565b925050606085013567ffffffffffffffff811115612911576129106123b5565b5b61291d87828801612878565b91505092959194509250565b600067ffffffffffffffff8211156129445761294361277b565b5b61294d826124c4565b9050602081019050919050565b600061296d61296884612929565b6127db565b90508281526020810184848401111561298957612988612776565b5b612994848285612827565b509392505050565b600082601f8301126129b1576129b0612771565b5b81356129c184826020860161295a565b91505092915050565b600080604083850312156129e1576129e06123b0565b5b60006129ef85828601612606565b925050602083013567ffffffffffffffff811115612a1057612a0f6123b5565b5b612a1c8582860161299c565b9150509250929050565b60008060408385031215612a3d57612a3c6123b0565b5b6000612a4b85828601612606565b9250506020612a5c85828601612606565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612aad57607f821691505b60208210811415612ac157612ac0612a66565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612b23602183612480565b9150612b2e82612ac7565b604082019050919050565b60006020820190508181036000830152612b5281612b16565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612bb5603e83612480565b9150612bc082612b59565b604082019050919050565b60006020820190508181036000830152612be481612ba8565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612c47602e83612480565b9150612c5282612beb565b604082019050919050565b60006020820190508181036000830152612c7681612c3a565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b6000612cd9602b83612480565b9150612ce482612c7d565b604082019050919050565b60006020820190508181036000830152612d0881612ccc565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000612d6b602c83612480565b9150612d7682612d0f565b604082019050919050565b60006020820190508181036000830152612d9a81612d5e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612e06601883612480565b9150612e1182612dd0565b602082019050919050565b60006020820190508181036000830152612e3581612df9565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612e98602983612480565b9150612ea382612e3c565b604082019050919050565b60006020820190508181036000830152612ec781612e8b565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612f2a602683612480565b9150612f3582612ece565b604082019050919050565b60006020820190508181036000830152612f5981612f1d565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612fbc602583612480565b9150612fc782612f60565b604082019050919050565b60006020820190508181036000830152612feb81612faf565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061304e602483612480565b915061305982612ff2565b604082019050919050565b6000602082019050818103600083015261307d81613041565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006130be82612530565b91506130c983612530565b9250828210156130dc576130db613084565b5b828203905092915050565b60006130f282612530565b91506130fd83612530565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561313257613131613084565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613173602083612480565b915061317e8261313d565b602082019050919050565b600060208201905081810360008301526131a281613166565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006131df601983612480565b91506131ea826131a9565b602082019050919050565b6000602082019050818103600083015261320e816131d2565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613271603283612480565b915061327c82613215565b604082019050919050565b600060208201905081810360008301526132a081613264565b9050919050565b600081905092915050565b60006132bd82612475565b6132c781856132a7565b93506132d7818560208601612491565b80840191505092915050565b60006132ef82856132b2565b91506132fb82846132b2565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000613363602e83612480565b915061336e82613307565b604082019050919050565b6000602082019050818103600083015261339281613356565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006133c082613399565b6133ca81856133a4565b93506133da818560208601612491565b6133e3816124c4565b840191505092915050565b600060808201905061340360008301876125c5565b61341060208301866125c5565b61341d604083018561265b565b818103606083015261342f81846133b5565b905095945050505050565b600081519050613449816123e6565b92915050565b600060208284031215613465576134646123b0565b5b60006134738482850161343a565b91505092915050565b600061348782612530565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156134ba576134b9613084565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006134ff82612530565b915061350a83612530565b92508261351a576135196134c5565b5b828204905092915050565b600061353082612530565b915061353b83612530565b92508261354b5761354a6134c5565b5b828206905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061358c602083612480565b915061359782613556565b602082019050919050565b600060208201905081810360008301526135bb8161357f565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006135f8601c83612480565b9150613603826135c2565b602082019050919050565b60006020820190508181036000830152613627816135eb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220ae5b4eb230c9550d9e56bc23d138f0fb43f29912ca2b46bbf1893cf6b103c79264736f6c63430008090033";

type YourNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YourNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YourNFT__factory extends ContractFactory {
  constructor(...args: YourNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YourNFT> {
    return super.deploy(overrides || {}) as Promise<YourNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YourNFT {
    return super.attach(address) as YourNFT;
  }
  override connect(signer: Signer): YourNFT__factory {
    return super.connect(signer) as YourNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YourNFTInterface {
    return new utils.Interface(_abi) as YourNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YourNFT {
    return new Contract(address, _abi, signerOrProvider) as YourNFT;
  }
}