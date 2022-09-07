/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import {
  Contract,
  ContractFactory,
  PayableOverrides,
  Signer,
  utils,
} from 'ethers'
import type { PromiseOrValue } from '../../common'
import type {
  YourContract,
  YourContractInterface,
} from '../../contracts/YourContract'

const _abi = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'greeting',
        type: 'string',
      },
    ],
    name: 'SetGreeting',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'greeting',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'newGreeting',
        type: 'string',
      },
    ],
    name: 'setGreeting',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x60806040526040518060400160405280600f81526020017f48656c6c6f20457468657265756d2100000000000000000000000000000000008152506000908051906020019061004f929190610055565b50610159565b82805461006190610127565b90600052602060002090601f01602090048101928261008357600085556100ca565b82601f1061009c57805160ff19168380011785556100ca565b828001600101855582156100ca579182015b828111156100c95782518255916020019190600101906100ae565b5b5090506100d791906100db565b5090565b5b808211156100f45760008160009055506001016100dc565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061013f57607f821691505b60208210811415610153576101526100f8565b5b50919050565b6107d0806101686000396000f3fe60806040526004361061002d5760003560e01c8063a413686214610036578063ef690cc01461005f57610034565b3661003457005b005b34801561004257600080fd5b5061005d600480360381019061005891906104fb565b61008a565b005b34801561006b57600080fd5b506100746101a8565b60405161008191906105cc565b60405180910390f35b80600090805190602001906100a09291906102fe565b5061016b336040518060400160405280600f81526020017f736574206772656574696e6720746f0000000000000000000000000000000000815250600080546100e89061061d565b80601f01602080910402602001604051908101604052809291908181526020018280546101149061061d565b80156101615780601f1061013657610100808354040283529160200191610161565b820191906000526020600020905b81548152906001019060200180831161014457829003601f168201915b5050505050610236565b7ffae51f5480b362c362b5f790e2a1b86b677c562bf1c1db0094505abfe05ef91133600060405161019d929190610725565b60405180910390a150565b600080546101b59061061d565b80601f01602080910402602001604051908101604052809291908181526020018280546101e19061061d565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505081565b6102d083838360405160240161024e93929190610755565b6040516020818303038152906040527ffb772265000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506102d5565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461030a9061061d565b90600052602060002090601f01602090048101928261032c5760008555610373565b82601f1061034557805160ff1916838001178555610373565b82800160010185558215610373579182015b82811115610372578251825591602001919060010190610357565b5b5090506103809190610384565b5090565b5b8082111561039d576000816000905550600101610385565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610408826103bf565b810181811067ffffffffffffffff82111715610427576104266103d0565b5b80604052505050565b600061043a6103a1565b905061044682826103ff565b919050565b600067ffffffffffffffff821115610466576104656103d0565b5b61046f826103bf565b9050602081019050919050565b82818337600083830152505050565b600061049e6104998461044b565b610430565b9050828152602081018484840111156104ba576104b96103ba565b5b6104c584828561047c565b509392505050565b600082601f8301126104e2576104e16103b5565b5b81356104f284826020860161048b565b91505092915050565b600060208284031215610511576105106103ab565b5b600082013567ffffffffffffffff81111561052f5761052e6103b0565b5b61053b848285016104cd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561057e578082015181840152602081019050610563565b8381111561058d576000848401525b50505050565b600061059e82610544565b6105a8818561054f565b93506105b8818560208601610560565b6105c1816103bf565b840191505092915050565b600060208201905081810360008301526105e68184610593565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061063557607f821691505b60208210811415610649576106486105ee565b5b50919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061067a8261064f565b9050919050565b61068a8161066f565b82525050565b60008190508160005260206000209050919050565b600081546106b28161061d565b6106bc818661054f565b945060018216600081146106d757600181146106e95761071c565b60ff198316865260208601935061071c565b6106f285610690565b60005b83811015610714578154818901526001820191506020810190506106f5565b808801955050505b50505092915050565b600060408201905061073a6000830185610681565b818103602083015261074c81846106a5565b90509392505050565b600060608201905061076a6000830186610681565b818103602083015261077c8185610593565b905081810360408301526107908184610593565b905094935050505056fea26469706673582212200f1852fc2ac35d618510c9b658879b59e17bd87c6dce8561395006f991c254af64736f6c63430008090033'

type YourContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: YourContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class YourContract__factory extends ContractFactory {
  constructor(...args: YourContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<YourContract> {
    return super.deploy(overrides || {}) as Promise<YourContract>
  }
  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): YourContract {
    return super.attach(address) as YourContract
  }
  override connect(signer: Signer): YourContract__factory {
    return super.connect(signer) as YourContract__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): YourContractInterface {
    return new utils.Interface(_abi) as YourContractInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YourContract {
    return new Contract(address, _abi, signerOrProvider) as YourContract
  }
}
