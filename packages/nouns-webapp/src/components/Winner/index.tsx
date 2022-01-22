// import { Button } from 'react-bootstrap';
import { useAppSelector } from '../../hooks';
import classes from './Winner.module.css';
import ShortAddress from '../ShortAddress';

const Winner: React.FC<{ winner: string }> = props => {
  const { winner } = props;
  const activeAccount = useAppSelector(state => state.account.activeAccount);

  return (
    <div className={classes.section}>
      <h4>Winner</h4>
      <h2>
        {activeAccount !== undefined &&
        activeAccount.toLocaleLowerCase() === winner.toLocaleLowerCase() ? (
          <div className={classes.youSection}>
            <div>You!</div>
          </div>
        ) : (
          <ShortAddress address={winner} avatar={true} />
        )}
      </h2>
    </div>
  );
};

export default Winner;
