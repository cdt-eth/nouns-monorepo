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

task('proxy-data', 'Deploys NFTDescriptor, NounsDescriptor, NounsSeeder, and NounsToken')
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

    console.log(new Interface(NounsAuctionHouseABI).encodeFunctionData('initialize', [
        nounsToken,
        args.weth,
        args.auctionTimeBuffer,
        args.auctionReservePrice,
        args.auctionMinIncrementBidPercentage,
        args.auctionDuration,
      ]));
  });