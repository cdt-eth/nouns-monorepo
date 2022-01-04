import classes from './Quotes.module.css';

interface QuotesProps {
  name: string;
  quote: any;
}

const Quotes = ({ name, quote }: QuotesProps) => {
  // console.log('quote', quote);
  return (
    <div className={classes.wrapperGrid2}>
      <div className={classes.quote2}>
        <img className="gr" src={quote.noun} alt="snake" />
        <p className={classes.copy}>
          {quote.quote}
          <br />
          <span className={classes.credit}>{name}</span>
        </p>
      </div>
    </div>
  );
};

export default Quotes;
