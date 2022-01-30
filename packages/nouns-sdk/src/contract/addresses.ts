import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Mainnet]: {
    nounsToken: '0x2605afbb22c59296c16ef5e477110357f760b20f',
    nounsSeeder: '0xa44a4caa7690ed8791237b6c0551e48f404cf233',
    nounsDescriptor: '0x7006337351b6127efacf63643ea97915e80268a9',
    nftDescriptor: '0x0BBAd8c947210ab6284699605ce2a61780958264',
    nounsAuctionHouse: '0x4211639b5b49c768ef094ef9827870158e3f7c4e',
    nounsAuctionHouseProxy: '0x3a91eaacd2d5d5b7e102e17ca8bd467b79139ed5',
    nounsAuctionHouseProxyAdmin: '0x0ce6ba2536c79f165d3db7935a1cd584492276b5',
  },
  [ChainId.Rinkeby]: {
    nounsToken: '0x2605aFBb22c59296C16ef5e477110357F760b20F',
    nounsSeeder: '0xA44A4caa7690ed8791237b6c0551e48f404Cf233', //'0x9e9c4c9a7b97A4AD43e5Ef91DA265F356930Da31',
    nounsDescriptor: '0xE8EeB3F286cf1a362C639A74D6A12F4A9FC577D6',
    nftDescriptor: '0x1F28f148ef5f9BD182cCEfeAD4240A505C54dc9B',
    nounsAuctionHouse: '0x4211639B5b49C768EF094EF9827870158e3f7c4e',
    nounsAuctionHouseProxy: '0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5',
    nounsAuctionHouseProxyAdmin: '0x0Ce6Ba2536C79f165D3dB7935A1CD584492276B5',
  },
  [ChainId.Local]: {
    nounsToken: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    nounsSeeder: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    nounsDescriptor: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    nftDescriptor: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    nounsAuctionHouse: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    nounsAuctionHouseProxy: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853',
    nounsAuctionHouseProxyAdmin: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
  },
};

/**
 * Get addresses of contracts that have been deployed to the
 * Ethereum mainnet or a supported testnet. Throws if there are
 * no known contracts deployed on the corresponding chain.
 * @param chainId The desired chainId
 */
export const getContractAddressesForChainOrThrow = (chainId: number): ContractAddresses => {
  if (!chainIdToAddresses[chainId]) {
    throw new Error(
      `Unknown chain id (${chainId}). No known contracts have been deployed on this chain.`,
    );
  }
  return chainIdToAddresses[chainId];
};
