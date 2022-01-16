// SPDX-License-Identifier: GPL-3.0

/// @title The NounsToken pseudo-random seed generator

/*********************************
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░█████████░░█████████░░░ *
 * ░░░░░░██░░░████░░██░░░████░░░ *
 * ░░██████░░░████████░░░████░░░ *
 * ░░██░░██░░░████░░██░░░████░░░ *
 * ░░██░░██░░░████░░██░░░████░░░ *
 * ░░░░░░█████████░░█████████░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ *
 *********************************/

pragma solidity ^0.8.6;

import { INounsSeeder } from './interfaces/INounsSeeder.sol';
import { INounsDescriptor } from './interfaces/INounsDescriptor.sol';

contract NounsSeeder is INounsSeeder {
    /**
     * @notice Generate a pseudo-random Noun seed using the previous blockhash and noun ID.
     */
    // prettier-ignore
    function generateSeed(uint256 nounId, INounsDescriptor descriptor) external view override returns (Seed memory) {

        if (nounId == 10) {
            // Tardigrade 1/1
            return Seed({
                background: uint48(1),
                body: uint48(1),
                accessory: uint48(0),
                head: uint48(1),
                glasses: uint48(0)
            });
        }

        if (nounId == 7) {

            // Proto Noun 1/1
            return Seed({
                background: uint48(0),
                body: uint48(0),
                accessory: uint48(0),
                head: uint48(0),
                glasses: uint48(0)
            });
        }

        uint256 pseudorandomness = uint256(
            keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))
        );

        uint8 noneOffset = 1;
        uint8 assetOffset = 2;
        uint256 backgroundCount = 2;
        uint256 bodyCount = descriptor.bodyCount() - assetOffset;
        uint256 accessoryCount = descriptor.accessoryCount() - noneOffset;
        uint256 headCount = descriptor.headCount() - assetOffset;
        uint256 glassesCount = descriptor.glassesCount() - noneOffset;

        return Seed({
            background: uint48(
                backgroundCount
            ),
            body: uint48(
                (uint48(pseudorandomness >> 48) % (bodyCount)) + assetOffset
            ),
            accessory: uint48(
                (uint48(pseudorandomness >> 96) % (accessoryCount)) + noneOffset
            ),
            head: uint48(
                (uint48(pseudorandomness >> 144) % (headCount)) + assetOffset
            ),
            glasses: uint48(
                (uint48(pseudorandomness >> 192) % (glassesCount)) + noneOffset
            )
        });
    }
}
