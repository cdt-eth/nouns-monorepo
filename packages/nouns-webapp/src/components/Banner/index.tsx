import classes from './Banner.module.css';
import Section from '../../layout/Section';
import noundersArt from '../../assets/nounders_art.png';
import noundersDev from '../../assets/nounders_dev.png';
import mug from '../../assets/mug.png';
import Link from '../Link';

const Banner = () => {
  const PlaygroundLink = <Link text="the Playground" url="/playground" leavesPage={false} />;

  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <div className="font-nouns">
        <h1 className="text-center text-8xl">Even work of art begins as a draft.</h1>
      </div>
      <div className={classes.wrapper}>
        <img className="gr" src={noundersArt} alt="noundersArt" />
      </div>

      <div>
        <div className={classes.wrapper}>
          <p className={classes.copy}>
            When the project began many ideas were iterated upon. Some heads went through several
            redesigns until it they were just right, some just one draft, and others were discarded
            altogether. You can check them all out on {PlaygroundLink}.
          </p>
          <img className="gr" src={mug} alt="mug" />
        </div>
      </div>

      <div className="font-nouns">
        <h1 className="text-center text-8xl">The greatest projects start with an idea.</h1>
      </div>
      <div className={classes.wrapper}>
        <img className="gr" src={noundersDev} alt="noundersDev" />
      </div>
    </Section>
  );
};

export default Banner;
