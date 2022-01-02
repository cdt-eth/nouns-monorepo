import classes from './Banner.module.css';
import Section from '../../layout/Section';
import noundersArt from '../../assets/nounders_art2.png';
import noundersDev from '../../assets/nounders_dev.png';
import mug from '../../assets/mug.png';
import Link from '../Link';

import snake from '../../assets/highlight/snake.png';
import phone from '../../assets/highlight/phone2.png';
import alien from '../../assets/highlight/alien.png';
import log from '../../assets/highlight/log.png';
import clown from '../../assets/highlight/clown.png';
import orange from '../../assets/highlight/orange.png';
import cinderblock from '../../assets/highlight/cinderblock.png';
import diamond from '../../assets/highlight/diamond.png';
import Quotes from '../Quotes';

const quoteData = [
  {
    name: 'Gremplin',
    quotes: [
      {
        noun: snake,
        quote:
          "The snake was an attempt bringing more animal heads into the fold without being strictly a head. Leaving a gap in the heads typically doesn't feel good, so I tried a tighter coil here. I think ultimately it was just stylistically not a great fit.",
      },
      {
        noun: phone,
        quote:
          "The cordless phone eventually found its way in as a more straightforward rectangle, but this one is much closer to one I had myself. I gravitate toward the nostalgic nouns even though nouns are a bridge to the future. This one's major flaw is that it leaves shoulder corners exposed, which is weird for us.",
      },
    ],
  },
  {
    name: 'Timpers',
    quotes: [
      {
        noun: alien,
        quote: 'Alien quote.',
      },
      {
        noun: log,
        quote: 'Log quote.',
      },
    ],
  },
  {
    name: 'eBoy',
    quotes: [
      {
        noun: clown,
        quote: 'Clown quote.',
      },
      {
        noun: orange,
        quote: 'Orange quote.',
      },
    ],
  },
  {
    name: '4156',
    quotes: [
      {
        noun: cinderblock,
        quote: 'Cinderblock quote.',
      },
      {
        noun: diamond,
        quote: 'Diamond quote.',
      },
    ],
  },
];

const getRandomIdx = () => {
  var y = Math.random();

  if (y < 0.5) {
    return 0;
  } else {
    return 1;
  }
};

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
        <div className={classes.both}>
          <div className="container-lg container-lg2">
            <p className={classes.notes}>Nounder's Notes</p>
            <div className={classes.wrap}>
              {quoteData.map(nounder => (
                <Quotes name={nounder.name} quote={nounder.quotes[getRandomIdx()]} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Banner;
