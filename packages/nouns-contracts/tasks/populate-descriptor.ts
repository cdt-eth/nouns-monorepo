import { task, types } from 'hardhat/config';
import ImageData from '../files/image-data.json';
import { chunkArray } from '../utils';

task('populate-descriptor', 'Populates the descriptor with color palettes and Noun parts')
  .addOptionalParam(
    'nftDescriptor',
    'The `NFTDescriptor` contract address',
    '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    types.string,
  )
  .addOptionalParam(
    'nounsDescriptor',
    'The `NounsDescriptor` contract address',
    '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    types.string,
  )
  .setAction(async ({ nftDescriptor, nounsDescriptor }, { ethers }) => {
    const descriptorFactory = await ethers.getContractFactory('NounsDescriptor', {
      libraries: {
        NFTDescriptor: nftDescriptor,
      },
    });
    const descriptorContract = descriptorFactory.attach(nounsDescriptor);

    console.log('Estimated gas price');
    // let gasPrice = await ethers.provider.getGasPrice();
    // const gasInGwei = Math.round(Number(ethers.utils.formatUnits(gasPrice, 'gwei')));

    const { bgcolors, palette, images } = ImageData;
    const { bodies, accessories, heads, glasses } = images;

    // Chunk head and accessory population due to high gas usage
    //await descriptorContract.addManyBackgrounds(bgcolors);

    /*
    for (let paletteIndex = 0; paletteIndex < palette.length; paletteIndex++) {
      await descriptorContract.addManyColorsToPalette(paletteIndex, palette[paletteIndex]);
    }
    */

    // await descriptorContract.addManyBodies(bodies.map(({ data }) => data));

    /*
    const accessoryChunk = chunkArray(accessories, 10);
    let accessoryIdx = 0;
    for (const chunk of accessoryChunk) {
      console.log(accessoryIdx);
      if (accessoryIdx >= 3) {
        console.log(chunk);
        await descriptorContract.addManyAccessories(chunk.map(({ data }) => data));
      }
      accessoryIdx++;
    }*/

    /*
    let headIdx = 0;
    const headChunk = chunkArray(heads, 10);
    for (const chunk of headChunk) {
        // console.log(headIdx);
        if (headIdx == 11) {
          console.log(headIdx, chunk);
          await descriptorContract.addManyHeads(chunk.map(({ data }) => data));
        }
        headIdx++;
    }*/
    

    // console.log('Adding head complete', h);

    // console.log('Add many glasses');

    // await descriptorContract.addManyGlasses(glasses.map(({ data }) => data));

    //await descriptorContract.addCustomSeed(62, [2, bodies.length - 1, accessories.length - 1, heads.length - 1, glasses.length - 1]);
    //await descriptorContract.addCustomSeed(88, [1, bodies.length - 2, accessories.length - 2, heads.length - 2, glasses.length - 2]);

    console.log('Descriptor populated with palettes and parts');
  });
