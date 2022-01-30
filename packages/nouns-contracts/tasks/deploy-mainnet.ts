import { default as NounsAuctionHouseABI } from '../abi/contracts/NounsAuctionHouse.sol/NounsAuctionHouse.json';
import { Interface } from 'ethers/lib/utils';
import { task, types } from 'hardhat/config';
import promptjs from 'prompt';

// Rinkeby
// const nftDescriptor: string = '0x1F28f148ef5f9BD182cCEfeAD4240A505C54dc9B';
// const weth: string = '0xc778417e063141139fce010982780140aa0cd5ab';

// Mainnet
const weth: string = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const nftDescriptor: string = '0x0BBAd8c947210ab6284699605ce2a61780958264';
const proxy: string = '0x3a91EaAcd2D5d5B7E102E17ca8BD467B79139ed5';

const auctionHouse: string = '0x4211639B5b49C768EF094EF9827870158e3f7c4e';
const nounsToken: string = '0x2605aFBb22c59296C16ef5e477110357F760b20F';
const proxyAdmin: string = '0x0Ce6Ba2536C79f165D3dB7935A1CD584492276B5';


promptjs.colors = false;
promptjs.message = '> ';
promptjs.delimiter = '';

type ContractName =
  | 'NounsDescriptor'
  //| 'NounsSeeder'
  //| 'NounsToken'
  //| 'NounsAuctionHouse'
  //| 'NounsAuctionHouseProxyAdmin'
  //| 'NounsAuctionHouseProxy';

interface Contract {
  args?: (string | number | (() => string | undefined))[];
  address?: string;
  libraries?: () => Record<string, string>;
  waitForConfirmation?: boolean;
}

task('deploy-mainnet', 'Deploys NFTDescriptor, NounsDescriptor, NounsSeeder, and NounsToken')
  .addOptionalParam('weth', 'The WETH contract address', weth, types.string)
  .addOptionalParam('auctionTimeBuffer', 'The auction time buffer (seconds)', 5 * 60, types.int)
  .addOptionalParam('auctionReservePrice', 'The auction reserve price (wei)', 1, types.int)
  .addOptionalParam(
    'auctionMinIncrementBidPercentage',
    'The auction min increment bid percentage (out of 100)',
    5,
    types.int,
  )
  .addOptionalParam('auctionDuration', 'The auction duration (seconds)', 60 * 60 * 24, types.int) // Default: 24 hours
  .setAction(async (args, { ethers }) => {

    const network = await ethers.provider.getNetwork();

    //console.log(network);
    const proxyRegistryAddress =
      network.chainId === 1
        ? '0xa5409ec958c83c3f309868babaca7c86dcb077c1'
        : '0xf57b2c51ded3a29e6891aba85459d600256cf317';

    // const AUCTION_HOUSE_PROXY_NONCE_OFFSET = 5;

    const [deployer] = await ethers.getSigners();
    const nonce = await deployer.getTransactionCount();
    /*const expectedAuctionHouseProxyAddress = ethers.utils.getContractAddress({
      from: deployer.address,
      nonce: nonce + AUCTION_HOUSE_PROXY_NONCE_OFFSET,
    });*/

    /*
    const expectedAuctionHouseProxyAddress = ethers.utils.getContractAddress({
      from: deployer.address,
      nonce: nonce
    });

    console.log(expectedAuctionHouseProxyAddress);
    */

    const contracts: Record<ContractName, Contract> = {
      NounsDescriptor: {
        libraries: () => ({
          NFTDescriptor: nftDescriptor as string,
        }),
      },
    };

    let gasPrice = await ethers.provider.getGasPrice();
    const gasInGwei = Math.round(Number(ethers.utils.formatUnits(gasPrice, 'gwei')));

    promptjs.start();

    let result = await promptjs.get([
      {
        properties: {
          gasPrice: {
            type: 'integer',
            required: true,
            description: 'Enter a gas price (gwei)',
            default: gasInGwei,
          },
        },
      },
    ]);

    gasPrice = ethers.utils.parseUnits(result.gasPrice.toString(), 'gwei');

    for (const [name, contract] of Object.entries(contracts)) {
      const factory = await ethers.getContractFactory(name, {
        libraries: contract?.libraries?.(),
      });

      const deploymentGas = await factory.signer.estimateGas(
        factory.getDeployTransaction(
          ...(contract.args?.map(a => (typeof a === 'function' ? a() : a)) ?? []),
          {
            gasPrice,
          },
        ),
      );
      const deploymentCost = deploymentGas.mul(gasPrice);

      console.log(
        `Estimated cost to deploy ${name}: ${ethers.utils.formatUnits(
          deploymentCost,
          'ether',
        )} ETH`,
      );

      result = await promptjs.get([
        {
          properties: {
            confirm: {
              type: 'string',
              description: 'Type "DEPLOY" to confirm:',
            },
          },
        },
      ]);

      if (result.confirm != 'DEPLOY') {
        console.log('Exiting');
        return;
      }

      console.log('Deploying...');

      const deployedContract = await factory.deploy(
        ...(contract.args?.map(a => (typeof a === 'function' ? a() : a)) ?? []),
        {
          gasPrice,
        },
      );

      if (contract.waitForConfirmation) {
        await deployedContract.deployed();
      }

      contracts[name as ContractName].address = deployedContract.address;

      console.log(`${name} contract deployed to ${deployedContract.address}`);
    }

    return contracts;
  });

  /*
  NounsDescriptor: {
        libraries: () => ({
          NFTDescriptor: nftDescriptor as string,
        }),
      },
      NounsSeeder: {},
      NounsToken: {
        args: [
          // args.noundersdao,
          expectedAuctionHouseProxyAddress,
          () => contracts['NounsDescriptor'].address,
          () => contracts['NounsSeeder'].address,
          proxyRegistryAddress,
        ],
      },
      NounsAuctionHouse: {
        waitForConfirmation: true,
      },
      NounsAuctionHouseProxyAdmin: {},
            NounsAuctionHouseProxy: {
        args: [
          () => auctionHouse,
          () => proxyAdmin,
          () =>
            new Interface(NounsAuctionHouseABI).encodeFunctionData('initialize', [
              nounsToken,
              args.weth,
              args.auctionTimeBuffer,
              args.auctionReservePrice,
              args.auctionMinIncrementBidPercentage,
              args.auctionDuration,
            ]),
        ],
        waitForConfirmation: true,
      },
      */