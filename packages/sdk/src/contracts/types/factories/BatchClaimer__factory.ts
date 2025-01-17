/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { BatchClaimer, BatchClaimerInterface } from '../BatchClaimer'

const _abi = [
	{
		inputs: [
			{
				internalType: 'contract IMultipleMerkleDistributor[]',
				name: '_distributors',
				type: 'address[]',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'index',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'account',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'bytes32[]',
						name: 'merkleProof',
						type: 'bytes32[]',
					},
					{
						internalType: 'uint256',
						name: 'epoch',
						type: 'uint256',
					},
				],
				internalType: 'struct IMultipleMerkleDistributor.Claims[][]',
				name: '_claims',
				type: 'tuple[][]',
			},
		],
		name: 'claimMultiple',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
]

export class BatchClaimer__factory {
	static readonly abi = _abi
	static createInterface(): BatchClaimerInterface {
		return new utils.Interface(_abi) as BatchClaimerInterface
	}
	static connect(address: string, signerOrProvider: Signer | Provider): BatchClaimer {
		return new Contract(address, _abi, signerOrProvider) as BatchClaimer
	}
}
