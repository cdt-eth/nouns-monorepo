/* eslint-disable @typescript-eslint/no-unused-vars */
import { TASK_COMPILE, TASK_NODE } from 'hardhat/builtin-tasks/task-names';
import { task } from 'hardhat/config';
// import { NounsAuctionHouse } from '../typechain';

// Rinkeby
// const nftDescriptor: string = '0x1F28f148ef5f9BD182cCEfeAD4240A505C54dc9B';

// Mainnet
const nftDescriptor: string = '0x0BBAd8c947210ab6284699605ce2a61780958264';
const lostnounsDescriptor: string = '0x7006337351B6127EfAcf63643Ea97915e80268A9';
const lostnounsToken: string = '0x2605aFBb22c59296C16ef5e477110357F760b20F';
const lostnounsSeeder: string = '0xA44A4caa7690ed8791237b6c0551e48f404Cf233';
const lostnounsAuctionHouse: string = '0x4211639B5b49C768EF094EF9827870158e3f7c4e';
const lostnounsAuctionHouseProxy: string = '0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5';

task(
  'run-mainnet',
  'Start a hardhat node, deploy contracts, and execute setup transactions',
).setAction(async (_, { ethers, run }) => {

  await run('proxy-data');
  //const nounToken = await ethers.getContractFactory('NounsToken');
  //await nounToken.attach('0x2605aFBb22c59296C16ef5e477110357F760b20F').setDescriptor("0x7006337351B6127EfAcf63643Ea97915e80268A9");
 //await run(TASK_COMPILE);

 // const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');

 //await nounAuctionHouse.attach('0xc49600f2aFCBC7770c1e3eE53D17f27339bf1D0D')
  //.setDuration(60*0.1*1);

  /*
 setInterval(async () => {
  await nounAuctionHouse
    .attach('0x0b09DA0Fd259FbAC0FFc05f23c1d29112e0E6F75')
    .settleCurrentAndCreateNewAuction({
      gasLimit: 1_000_000,
    });
}, 12000);*/

  //await Promise.race([run(TASK_NODE), new Promise(resolve => setTimeout(resolve, 2_000))]);

  //const contracts = await run('deploy-mainnet');

  //console.log(contracts);

  
  /*await run('populate-descriptor', {
    nftDescriptor: nftDescriptor,
    nounsDescriptor: nounsDescriptor,
  });*/

  // await contracts.NounsAuctionHouse
  // const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
  // await nounAuctionHouse.attach('0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5').withdraw({
   // gasLimit: 1_000_000,
  // });

  // await nounAuctionHouse.attach('0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5').unpause({
     // gasLimit: 1_000_000,
  // });

  // const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
  //await nounAuctionHouse.attach('0x7a59b9a739fC09552dB8eF406ed4df0f52d58ED5')
  //.transferOwnership("0x4DA6C87956199DBe04B4E0864211FC887C786506");

  //await nounAuctionHouse.attach('0x7a59b9a739fC09552dB8eF406ed4df0f52d58ED5')
  //.setDuration(60*0.1*1);

  /*
  setInterval(async () => {
    await nounAuctionHouse
      .attach(contracts.NounsAuctionHouseProxy.address)
      .settleCurrentAndCreateNewAuction({
        gasLimit: 1_000_000,
      });
  }, 12000);
  */

  /*
  const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
  await nounAuctionHouse
  .attach('0x46D4ff3cf69feCe457c31EA0BcF1bD83a4Ec8e24')
  .unpause({
    gasLimit: 1_000_000,
  });

  setInterval(async () => {
    const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
    await nounAuctionHouse
    .attach('0x46D4ff3cf69feCe457c31EA0BcF1bD83a4Ec8e24')
    .settleCurrentAndCreateNewAuction({
      gasLimit: 1_000_000
    });

  }, 12000)
  */

  /*
  const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
  const error = await nounAuctionHouse.attach('0xb6CCF9f11b0E4b01c4F9Eb3B7E73dfEadE069146').setDuration(5 * 60 * 1);

  console.log(error);
  
  /*
  await run('populate-descriptor', {
    nftDescriptor: nftDescriptor,
    nounsDescriptor: '0x5Cce351D430Ef8bdbd1780139945b46E6A7372D8'//contracts.NounsDescriptor.address,
  });

  /*
  await run('populate-descriptor', {
    nftDescriptor: nftDescriptor,
    nounsDescriptor: nounsDescriptor
  });

  */

  /*
  const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
  const error = await nounAuctionHouse.attach('0xb6CCF9f11b0E4b01c4F9Eb3B7E73dfEadE069146')
  .unpause({
    gasLimit: 1_000_000
  }); 

  console.log(error);
  
 */
  const { chainId } = await ethers.provider.getNetwork();

  console.log(
    `Noun contracts deployed to local node at http://localhost:8545 (Chain ID: ${chainId})`,
  );

  //console.log(`Auction House Proxy address: ${contracts.NounsAuctionHouseProxy.address}`);
  //console.log(`Nouns ERC721 address: ${contracts.NounsToken.address}`);
  //console.log(`Nouns Descriptor: ${contracts.NounsDescriptor.address}`);
  // console.log(`Nouns DAO Executor address: ${contracts.NounsDAOExecutor.instance.address}`);
  // console.log(`Nouns DAO Proxy address: ${contracts.NounsDAOProxy.instance.address}`);

  //await ethers.provider.send('evm_setIntervalMining', [12_000]);

  await new Promise(() => {
    /* keep node alive until this process is killed */
  });
});
