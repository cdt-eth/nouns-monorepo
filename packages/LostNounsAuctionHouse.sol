// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

import { INounsAuctionHouse } from './interfaces/INounsAuctionHouse.sol';
import { INounsToken } from './interfaces/INounsToken.sol';
import { IWETH } from './interfaces/IWETH.sol';

contract LostNounsAuctionHouse is INounsAuctionHouse {

    // The Nouns ERC721 token contract
    INounsToken public nouns;

    // The address of the WETH contract
    address public weth;

    // The minimum amount of time left in an auction after a new bid is created
    uint256 public timeBuffer;

    // The minimum price accepted in an auction
    uint256 public reservePrice;

    // The minimum percentage difference between the last bid amount and the current bid
    uint8 public minBidIncrementPercentage;

    // The duration of a single auction
    uint256 public duration;

    // The active auction
    INounsAuctionHouse.Auction public auction;

    /**
     * @notice Initialize the auction house and base contracts,
     * populate configuration values, and pause the contract.
     * @dev This function can only be called once.
     */
     function initialize(
         INounsToken _nouns,
         address _weth,
         uint256 _timeBuffer,
         uint256 _reservePrice,
         uint8 _minBidIncrementPercentage,
         uint256 _duration
     ) external initializer {
         __Pausable_int();
         __ReentrancyGuard_init();
         __Ownable_init();

         __pause();

         nouns = _nouns;
         weth = _weth;
         timeBuffer = _timeBuffer;
         reservePrice = _reservePrice;
         minBidIncrementPercentage = _minBidIncrementPercentage;
         duration = _duration;
     }

     /**
      * @notice Settle the current auction, mint a new Noun, and put it up for auction.
      */
      function settleCurrentAndCreateNewAuction() external override nonReentrant whenNotPaused {
          _settleAuction();
          _createAuction();
      }

      /**
       * @notice Settle the current auction.
       * @dev This function can only be called when the contract is paused.
       */
       function settleAuction() external override whenPaused nonReentrant {
           _settleAuction();
       }

       /**
        * @notice Create a bid for a Noun, with a given amount.
        * @dev This contract only accepts payment in ETH.
        */
        function createBid(uint256 nounId) external payable override nonRentrant {
            INounsAuctionHouse.Auction memory _auction = auction;

            require(_auction.nounId == nounId, 'Noun not up for auction');
            require(block.timestamp < _auction.endTime, 'Auction expired');
            require(msg.value >= reservePrice, 'Must send at least reservePrice');
            require(
                msg.value >= _auction.amount + ((_auction.amount * minBidIncrementPercentage) / 100),
                'Must send more than last bid by minBidIncrementPercentage amount'
            );

            address payable lastBidder = _auction.bidder;

            if (lastBidder != address(0)) {
                _safeTransferETHWithFallback(lastBidder, _auction.amount);
            }

            if (lastBidder == address(0)) {
                nouns.mintEmptySeed();
            }

            auction.amount = msg.value;
            auction.bidder = payable(msg.sender);

            // Extend the auction if the bid was received with `timeBuffer` of the auction end time
            bool extended = _auction.endTime - block.timestamp < timeBuffer;
            if (extended) {
                auction.endTime = _auction.endTime = block.timestamp + timeBuffer;
            }

            emit AuctionBid(_auction.nounId, msg.sender, msg.value, extended);

            if (extended) {
                emit AuctionExtended(_auction.nounId, _auction.endTime);
            }
        }

        /**
         * @notice Pause the Nouns auction house.
         * @dev This function can only be called by the owner when the contract
         * is unpaused. While no new auctions can be started when paused,
         * anyone can settle an ongoing auction.
         */
        function pause() external override onlyOwner {
            _pause();
        }

        /**
         * @notice Unpause the Nouns auction house.
         * @dev This function can only be called by the owner when the
         * contract is paused. If required, this function will start a new auction.
         */
        function unpause() external override onlyOwner {
            _unpause();

            if (auction.startTime == 0 || auction.settled) {
                _createAuction();
            }
        }

        /**
         * @notice Create an auction.
         * @dev Store the auction details in the `auction` state variable and emit and AuctionCreated event.
         * If the mint reverts, the minter was updated without pausing this contract first. To remedy this,
         * catch the revert and puase this contract.
         */
        function _createAuction() internal {

            try nouns.getCurNounId() returns (uint256 nounId) {

                uint256 startTime = block.timestamp;
                uint256 endTime = startTime + duration;

                auction = Auction({
                    nounId: nounId,
                    amount: 0,
                    startTime: startTime,
                    endTime: endTime,
                    bidder: payable(0),
                    settled: false
                });

                emit AuctionCreated(nounId, startTime, endTime);
            } catch Error(string memory) {
                _pause();
            }
        }

        /**
         * @notice Settle an auction, finalizing the bid and paying out to the owner.
         * @dev If there are no bids, the Noun is burned.
         */
        function _settleAuction() internal {

            INounsAuctionHouse.Auction memory _auction = auction;

            require(_auction.startTime != 0, "Auction hasn't begun");
            require(!_auction.settled, 'Auction has already been settled');
            require(block.timestamp >= _auction.endTime, "Auction hasn't completed");

            auction.settled = true;

            if (_auction.bidder == address(0)) {
                nouns.burn(_auction.nounId);
            } else {
                nouns.transferFrom(address(this), _auction.bidder, _auction.nounId);
            }

            if (_auction.amount > 0) {
                _safeTransferETHWithFallback(owner(), _auction.amount);
            }

            emit AuctionSettled(_auction.nounId, _auction.bidder, _auction.amount);

        }
}