import { task } from 'hardhat/config';

type ContractName =
  //| 'NounsDescriptor'
  //| 'NounsSeeder'
  //| 'NounsToken'
  //| 'NounsAuctionHouse'
  | 'NounsAuctionHouseProxyAdmin';
  //| 'NounsAuctionHouseProxy';

interface VerifyArgs {
  address: string;
  constructorArguments?: (string | number)[];
  libraries?: Record<string, string>;
}

const contracts: Record<ContractName, VerifyArgs> = {
  
  NounsAuctionHouseProxyAdmin: {
    address: '0x0ce6ba2536c79f165d3db7935a1cd584492276b5',
  },
  /*NounsAuctionHouseProxy: {
    address: '0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5',
    constructorArguments: [
      '0x4211639B5b49C768EF094EF9827870158e3f7c4e',
      '0x0ce6ba2536c79f165d3db7935a1cd584492276b5',
      '0x87f49f540000000000000000000000002605afbb22c59296c16ef5e477110357f760b20f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000012c000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000015180',
    ]
  }*/
};

/*
  NounsToken: {
    address: '0x2605aFBb22c59296C16ef5e477110357F760b20F',
    constructorArguments: [
      '0x2573C60a6D127755aA2DC85e342F7da2378a0Cc5',
      '0x830BD73E4184ceF73443C15111a1DF14e495C706',
      '0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63',
      '0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515',
      '0xa5409ec958c83c3f309868babaca7c86dcb077c1',
    ],
  },
  NounsAuctionHouseProxy: {
    address: '0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5',
    constructorArguments: [
      '0x2C128FF70de543A3d20f56a8241a6a1E6541C7BA',
      '0x4cF3a897D8B3D854B87875882278B4c09dDA40c9',
      '0x87f49f540000000000000000000000009C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000012c00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000001518',
    ],
      NounsDescriptor: {
    address: '0x76e88A252D2E5fF216b2510118040fC138FC54E4',
    libraries: {
      NFTDescriptor: '0x1F28f148ef5f9BD182cCEfeAD4240A505C54dc9B',
    },
  },
  },*/

task('verify-etherscan', 'Verify the Solidity contracts on Etherscan').setAction(async (_, hre) => {
  for (const [name, args] of Object.entries(contracts)) {
    console.log(`verifying ${name}...`);
    try {
      await hre.run('verify:verify', {
        ...args,
        contract: "contracts/proxies/NounsAuctionHouseProxyAdmin.sol:NounsAuctionHouseProxyAdmin",
        //contract: "contracts/proxies/NounsAuctionHouseProxy.sol:NounsAuctionHouseProxy",
      });
    } catch (e) {
      console.error(e);
    }
  }
});

/*
  NounsSeeder: {
    address: '0xA44A4caa7690ed8791237b6c0551e48f404Cf233',
  },
  NounsToken: {
    address: '0x2605aFBb22c59296C16ef5e477110357F760b20F',
    constructorArguments: [
      '0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5',
      '0x76e88A252D2E5fF216b2510118040fC138FC54E4',
      '0xA44A4caa7690ed8791237b6c0551e48f404Cf233',
      '0xa5409ec958c83c3f309868babaca7c86dcb077c1',
    ],
  },
  NounsAuctionHouse: {
    address: '0x4211639B5b49C768EF094EF9827870158e3f7c4e',
  },
  NounsAuctionHouseProxyAdmin: {
    address: '0x0Ce6Ba2536C79f165D3dB7935A1CD584492276B5',
  },*/