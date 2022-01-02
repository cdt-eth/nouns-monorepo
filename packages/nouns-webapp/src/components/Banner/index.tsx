import classes from './Banner.module.css';
import Section from '../../layout/Section';
import noundersArt from '../../assets/nounders_art2.png';
import noundersDev from '../../assets/nounders_dev.png';
import mug from '../../assets/mug.png';
import snake from '../../assets/highlight/snake.png';
import phone from '../../assets/highlight/phone2.png';
import alien from '../../assets/highlight/alien.png';
import log from '../../assets/highlight/log.png';
// import log from '../../assets/highlight/log2.png';
import Link from '../Link';
// import { Col } from 'react-bootstrap';

const Banner = () => {
  const PlaygroundLink = <Link text="the Playground" url="/playground" leavesPage={false} />;

  return (
    <>
      <Section fullWidth={false} className={classes.bannerSection}>
        {/* Art Nounders */}
        <div className="">
          <h1 className="font-nouns text-center text-8xl">Every work of art begins as a draft.</h1>
          <p className={classes.copy}>
            In the summer of 2021, a group of artists came together to create this idea they had
            called "Nouns", but what would they look like? What would tie them together? What would
            set them apart? Later that summer, the iconic glasses were defined and the traits were
            refined.
          </p>
        </div>
        <div className={classes.wrapper}>
          <img className="gr" src={noundersArt} alt="noundersArt" />
          <p className={classes.subcopy}>
            from left to right: 4156, Kai from EBoy, Gremplin, and Timpers
          </p>
        </div>

        {/* Coffee Progress */}
        <div>
          <div className={classes.wrapper}>
            <p className={classes.copy}>
              When the project began many ideas were iterated upon. Some heads went through several
              redesigns until it they were just right, some just one draft, and others were
              discarded altogether. You can check them all out on {PlaygroundLink}.
            </p>
            <img className="gr" src={mug} alt="mug" />
          </div>
        </div>

        {/* OLD */}
        {/* OLD */}
        {/* OLD */}
        {/* OLD */}
        {/* Gremplin Quotes */}
        {/* <h1 className="font-nouns text-left text-5xl quotes">Gremplin</h1>
      <div className={classes.wrapperGrid}>
        <div className={classes.quote}>
          <img className="gr" src={snake} alt="snake" />
          <p className={classes.copy}>
            "The snake was an attempt bringing more animal heads into the fold without being
            strictly a head. Leaving a gap in the heads typically doesn't feel good, so I tried a
            tighter coil here. I think ultimately it was just stylistically not a great fit."
          </p>
        </div>

        <div className={classes.quote}>
          <img className="gr" src={phone} alt="phone" />
          <p className={classes.copy}>
            "The cordless phone eventually found its way in as a more straightforward rectangle, but
            this one is much closer to one I had myself. I gravitate toward the nostalgic nouns even
            though nouns are a bridge to the future. This one's major flaw is that it leaves
            shoulder corners exposed, which is weird for us."
          </p>
        </div>
      </div> */}

        {/* Timpers Quotes */}
        {/* <h1 className="font-nouns text-left text-5xl quotes">Timpers</h1>
      <div className={classes.wrapperGrid}>
        <div className={classes.quote}>
          <img className="gr" src={alien} alt="snake" />
          <p className={classes.copy}>
            "The snake was an attempt bringing more animal heads into the fold without being
            strictly a head. Leaving a gap in the heads typically doesn't feel good, so I tried a
            tighter coil here. I think ultimately it was just stylistically not a great fit."
          </p>
        </div>

        <div className={classes.quote}>
          <img className="gr" src={log} alt="phone" />
          <p className={classes.copy}>
            "The cordless phone eventually found its way in as a more straightforward rectangle, but
            this one is much closer to one I had myself. I gravitate toward the nostalgic nouns even
            though nouns are a bridge to the future. This one's major flaw is that it leaves
            shoulder corners exposed, which is weird for us."
          </p>
        </div>
      </div> */}

        <div className={classes.spacerDiv}></div>

        {/* Dev Nounders */}
        <div className={classes.noundersDev}>
          <h1 className="text-center font-nouns text-8xl">
            The greatest projects start with an idea.
          </h1>
          <div className={classes.wrapper}>
            <img className="gr" src={noundersDev} alt="noundersDev" />
          </div>
        </div>
      </Section>
      <Section fullWidth={true} className={classes.bannerSection}>
        {/* NEW */}
        {/* NEW */}
        {/* NEW */}
        {/* NEW */}
        {/* Gremplin Quotes */}

        <div className={classes.both}>
          <div className="container-lg container-lg2">
            <p className={classes.notes}>Nounder's Notes</p>
            <div className={classes.wrap}>
              <div className={classes.wrapperGrid2}>
                <div className={classes.quote2}>
                  <img className="gr" src={snake} alt="snake" />
                  <p className={classes.copy}>
                    "The snake was an attempt bringing more animal heads into the fold without being
                    strictly a head. Leaving a gap in the heads typically doesn't feel good, so I
                    tried a tighter coil here. I think ultimately it was just stylistically not a
                    great fit."
                    <br />
                    <span className={classes.credit}>Gremplin</span>
                  </p>
                </div>
              </div>
              <div className={classes.wrapperGrid2}>
                <div className={classes.quote2}>
                  <img className="gr" src={phone} alt="snake" />
                  <p className={classes.copy}>
                    "The cordless phone eventually found its way in as a more straightforward
                    rectangle, but this one is much closer to one I had myself. I gravitate toward
                    the nostalgic nouns even though nouns are a bridge to the future. This one's
                    major flaw is that it leaves shoulder corners exposed, which is weird for us."
                    <br />
                    <span className={classes.credit}>Timpers</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.spacerDiv}></div>

            <div className={classes.wrap}>
              <div className={classes.wrapperGrid2}>
                <div className={classes.quote2}>
                  <img className="gr" src={alien} alt="snake" />
                  <p className={classes.copy}>
                    "The snake was an attempt bringing more animal heads into the fold without being
                    strictly a head. Leaving a gap in the heads typically doesn't feel good, so I
                    tried a tighter coil here. I think ultimately it was just stylistically not a
                    great fit."
                    <br />
                    <span className={classes.credit}>4156</span>
                  </p>
                </div>
              </div>
              <div className={classes.wrapperGrid2}>
                <div className={classes.quote2}>
                  <img className="gr" src={log} alt="snake" />
                  <p className={classes.copy}>
                    "The cordless phone eventually found its way in as a more straightforward
                    rectangle, but this one is much closer to one I had myself. I gravitate toward
                    the nostalgic nouns even though nouns are a bridge to the future. This one's
                    major flaw is that it leaves shoulder corners exposed, which is weird for us."
                    <br />
                    <span className={classes.credit}>eBoy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Banner;
