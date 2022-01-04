import classes from './Commit.module.css';

interface CommitProps {
  commit: any;
}

const Quotes = ({ commit }: CommitProps) => {
  //   console.log('commit', commit);

  return (
    <div className={classes.commit}>
      <p>{commit.hash}</p>
      <p>{commit.nounder}</p>
      <p>{commit.date}</p>
      <p>{commit.message}</p>
    </div>
  );
};

export default Quotes;
