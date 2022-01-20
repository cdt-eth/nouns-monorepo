import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Mainnet]: {
    nounsToken: '0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03',
    nounsSeeder: '0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515',
    nounsDescriptor: '0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63',
    nftDescriptor: '0x0BBAd8c947210ab6284699605ce2a61780958264',
    nounsAuctionHouse: '0xF15a943787014461d94da08aD4040f79Cd7c124e',
    nounsAuctionHouseProxy: '0x830BD73E4184ceF73443C15111a1DF14e495C706',
    nounsAuctionHouseProxyAdmin: '0xC1C119932d78aB9080862C5fcb964029f086401e',
  },
  [ChainId.Rinkeby]: {
    nounsToken: '0x4ED58005C161253Eb7d5A979B24e63dF5aEA47be',
    nounsSeeder: '0x0A26E5F92830f2D27149F7303cA92AEbE85cA315', //'0x9e9c4c9a7b97A4AD43e5Ef91DA265F356930Da31',
    nounsDescriptor: '0x9309b0cb26914B23b6337d969e297bf27D3d7ea8',
    nftDescriptor: '0x1F28f148ef5f9BD182cCEfeAD4240A505C54dc9B',
    nounsAuctionHouse: '0x1709DF91b896a2E6932ae9A46a2066949E7D37AF',
    nounsAuctionHouseProxy: '0x7a59b9a739fC09552dB8eF406ed4df0f52d58ED5',
    nounsAuctionHouseProxyAdmin: '0x29eae9506F2909aAa1a606c0364DcfDccaAA7163',
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
