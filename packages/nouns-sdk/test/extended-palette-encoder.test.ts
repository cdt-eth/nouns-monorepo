import { readPngFile } from 'node-libpng';
import { PNGCollectionEncoder } from '../src';
import { promises as fs } from 'fs';
import { expected } from './lib';
import { join } from 'path';
import { expect } from 'chai';

/*
describe('Extended Palette Encoder', () => {
    
    let encoder: PNGCollectionEncoder;

    beforeEach(() => {
        encoder = new PNGCollectionEncoder();
    });

    it('should run-length encode an image with no content', async () => {

        const name = 'empty';
        const [empty] = expected.images.root;
        const image = await readPngFile(join(__dirname, `./lib/images/${name}.png`));

        const rle = encoder.encodeImage(name, image);
        expect(rle).to.equal(empty.data);
    });

    it('should run-length encode an image with content', async () => {
        const name = 'head-cone';
        const [, headCone] = expected.images.root;
        const image = await readPngFile(join(__dirname, `./lib/images/${name}.png`));
    
        const rle = encoder.encodeImage(name, image);
        expect(rle).to.equal(headCone.data);
      });
})
*/