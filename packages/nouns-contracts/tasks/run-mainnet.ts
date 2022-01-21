import { TASK_COMPILE, TASK_NODE } from 'hardhat/builtin-tasks/task-names';
import { task } from 'hardhat/config';
import { NounsAuctionHouse } from '../typechain';

// Rinkeby
const nftDescriptor: string = '0x1F28f148ef5f9BD182cCEfeAD4240A505C54dc9B';
const nounsDescriptor: string = '0x5cf3A398ED839b2d7805Ab8f9bbA4EcE10140990';

task(
  'run-mainnet',
  'Start a hardhat node, deploy contracts, and execute setup transactions',
).setAction(async (_, { ethers, run }) => {
  await run(TASK_COMPILE);

  //await Promise.race([run(TASK_NODE), new Promise(resolve => setTimeout(resolve, 2_000))]);

  const contracts = await run('deploy-mainnet');

  //console.log(contracts);

  
  await run('populate-descriptor', {
    nftDescriptor: nftDescriptor,
    nounsDescriptor: contracts.NounsDescriptor.address,
  });

  // await contracts.NounsAuctionHouse
  const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
  await nounAuctionHouse.attach(contracts.NounsAuctionHouseProxy.address)
  .unpause({
    gasLimit: 1_000_000,
  });

  
  // const nounAuctionHouse = await ethers.getContractFactory('NounsAuctionHouse');
  //await nounAuctionHouse.attach('0x7a59b9a739fC09552dB8eF406ed4df0f52d58ED5')
  //.transferOwnership("0x4DA6C87956199DBe04B4E0864211FC887C786506");

  
  //await nounAuctionHouse.attach('0x7a59b9a739fC09552dB8eF406ed4df0f52d58ED5')
  //.setDuration(60*0.1*1);

  
  setInterval(async () => {
    await nounAuctionHouse
    .attach(contracts.NounsAuctionHouseProxy.address)
    .settleCurrentAndCreateNewAuction({
      gasLimit: 1_000_000
    });

  }, 12000)
  
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
