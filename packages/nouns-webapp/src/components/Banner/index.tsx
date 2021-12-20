import classes from './Banner.module.css';
import Section from '../../layout/Section';
import noundersArt from '../../assets/nounders_art.png';
import noundersDev from '../../assets/nounders_dev.png';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <div>
        <div className="font-nouns">
          <h1 className="text-center text-8xl">Every artist has their drafts.</h1>
        </div>
      </div>
      <div>
        <div className={classes.wrapper}>
          <img className="gr w-1/2" src={noundersArt} alt="noundersArt" />
        </div>
        <div className={classes.wrapper}>
          <img className="gr w-1/2" src={noundersDev} alt="noundersDev" />
        </div>
      </div>
    </Section>
  );
};

export default Banner;
