import { BigNumber } from 'ethers';
import classes from './AuctionActivityNounTitle.module.css';

const AuctionActivityNounTitle: React.FC<{ nounId: BigNumber }> = props => {
  const { nounId } = props;
  const nounIdContent = `Lost Noun ${nounId.toString()}`;
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.nounName}>{nounIdContent}</h1>
    </div>
  );
};
export default AuctionActivityNounTitle;
