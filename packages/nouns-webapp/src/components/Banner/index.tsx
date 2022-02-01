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
import horse from '../../assets/highlight/horse.png';
import Quotes from '../Quotes';
import Commit from '../Commit';

const quoteData = [
  {
    name: 'Gremplin',
    quotes: [
      {
        noun: snake,
        quote: `"The snake was an attempt bringing more animal heads into the fold without being strictly a head. Leaving a gap in the heads typically doesn't feel good, so I tried a tighter coil here. I think ultimately it was just stylistically not a great fit."`,
      },
      {
        noun: phone,
        quote: ` "The cordless phone eventually found its way in as a more straightforward rectangle, but this one is much closer to one I had myself. I gravitate toward the nostalgic nouns even though nouns are a bridge to the future. This one's major flaw is that it leaves shoulder corners exposed, which is weird for us."`,
      },
    ],
  },
  {
    name: 'Timpers',
    quotes: [
      {
        noun: alien,
        quote: `"The alien head wasn't quite on  brand with the Nouns as the head looked quite human-like. The way the head didn't fully meet the shoulders was something we aimed to stay away from."`,
      },
      {
        noun: log,
        quote: `"The log wasn't used due to the perspective where we can see the top of the head. We wanted to keep Nouns mostly flat/front-on. If we did this with the log it wouldn't look as distinguishable."`,
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
        quote: `"As we continued to refine the artwork, I started thinking about the idea of 'aesthetic volatility' in generative art collections. When aesthetic volatility is too low, a collection might feel boring because the individual pieces aren't differentiated enough. When aesthetic volatility is too high, a collection won't feel cohesive. Different heads on every Noun meant the aesthetic volatility of the collection was very high by default. We had to constrain the glasses to protect the heads."`,
      },
      {
        noun: horse,
        quote: `"As we continued to refine the artwork, I started thinking about the idea of 'aesthetic volatility' in generative art collections. When aesthetic volatility is too low, a collection might feel boring because the individual pieces aren't differentiated enough. When aesthetic volatility is too high, a collection won't feel cohesive. Different heads on every Noun meant the aesthetic volatility of the collection was very high by default. We had to constrain the glasses to protect the heads."`,
      },
    ],
  },
];

const gitLog = [
  {
    hash: 'commit d4316460a6e3b3b7a2b80c746123199a53bf8cb5',
    nounder: 'Author: solimander <soli@nouns.wtf>',
    date: 'Date: Sat Aug 7 10:39:03 2021 -0500',
    message: 'smart contracts: auction house, seeder, token, rle-to-svg lib',
  },
  {
    hash: 'commit 33e717133cf65c2228f4ddd97bc6d696ee733843',
    nounder: 'Author: cryptoseneca <seneca@nouns.wtf>',
    date: 'Date: Sun Aug 8 10:07:35 2021 -0500',
    message: 'internal tooling for artists, nouns.wtf frontend',
  },
  {
    hash: 'commit 85e8da5231dbecca77d92fb67e041b43ce5bcb4b',
    nounder: 'Author: vapeape <vape@nouns.wtf>',
    date: 'Date: Sun Jun 3 06:21:27 2021 -0500',
    message: 'protocol & auction house contracts, subgraphs, twitter + discord bots',
  },
  {
    hash: 'commit 4c78e07f6667b5c2879b29c0b5872ff3d9e4a068',
    nounder: 'Author: gitblamecarrot <carrot@nouns.wtf>',
    date: 'Date: Sat Jun 5 22:41:54 2021 -0500',
    message: 'backend infrastructure, deployment, developer tooling',
  },
  {
    hash: 'commit fd8654ebe739fdbbd908e6f157fa45641de2073e',
    nounder: 'Author: domhofmann <dhof@nouns.wtf>',
    date: 'Date: Thur Jun 17 22:38:59 2021 -0500',
    message: 'optimize run-length encoding to svg',
  },
  {
    hash: 'commit f4d97bbf6827443c084ed76c46e50c89e4152004',
    nounder: 'Author: lastpunk9999 <9999@nouns.wtf>',
    date: 'Date: Mon Jul 26 21:30:31 2021 -0500',
    message: 'compound governance fork, erc721checkpointable',
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
  const TraitsLink = <Link text="the Traits page" url="/traits" leavesPage={false} />;
  const TweetLink = (
    <Link
      text="a tweet"
      url="https://twitter.com/punk4156/status/1400154938186031104?s=20"
      leavesPage={true}
    />
  );
  const TeamLink = <Link text="a team" url="https://nouns.wtf/nounders" leavesPage={true} />;
  const ArtLink = <Link text="some art" url="https://nouns.com/nounspedia" leavesPage={true} />;
  const ProtocolLink = (
    <Link
      text="a protocol"
      url="https://nouns.notion.site/Noun-Protocol-32e4f0bf74fe433e927e2ea35e52a507"
      leavesPage={true}
    />
  );
  const ProjectLink = <Link text="a project" url="https://nouns.wtf/" leavesPage={true} />;

  return (
    <>
      <Section fullWidth={false} className={classes.bannerSection}>
        {/* History */}
        <div className="" style={{ marginBottom: '60px' }}>
          <h1 className="font-nouns text-8xl">WTF?</h1>
          <p className={classes.copy}>
            Lost Nouns is an homage to the creation of Nouns. There were a ton of traits created by
            the founders that never made it into the final project. The value of these "lost" assets
            comes from owning a piece of history, and we want to share it with you.
          </p>
        </div>

        {/* <div className={classes.wrapper}>
          <img className="gr" src={noundersArt} alt="noundersArt" />
          <p className={classes.subcopy}>
            from left to right: 4156, Kai from eBoy, Gremplin, and Timpers
          </p>
        </div> */}

        {/* Art Nounders */}
        <div className="">
          <h1 className="font-nouns text-8xl">Every work of art begins as a draft.</h1>
          <p className={classes.copy}>
            In the summer of 2021, a group of 3.4156 artists came together to create this idea they
            had called "Nouns", but what would they look like? What would tie them together? What
            would set them apart? Later that summer, the iconic glasses were defined and the traits
            were refined.
          </p>
        </div>
        <div className={classes.wrapper}>
          <img className="gr" src={noundersArt} alt="noundersArt" />
          <p className={classes.subcopy}>
            from left to right: 4156, Kai from eBoy, Gremplin, and Timpers
          </p>
        </div>

        {/* Coffee Progress */}
        <div>
          <div className={classes.wrapper}>
            <p className={classes.copy}>
              When the project began many ideas were iterated upon. Some heads went through several
              redesigns until they were just right, some just one draft, and others were discarded
              altogether. You can check them all out on {TraitsLink}.
            </p>
            <img className="gr" src={mug} alt="mug" />
          </div>
        </div>
      </Section>

      <Section fullWidth={true} className={classes.bannerSection}>
        <div className={classes.both}>
          <div className="container-lg container-lg2">
            {/* <h1 className=" font-nouns text-center text-8xl">Nounder's Notes</h1> */}
            <p className={classes.notes}>Nounder's Notes</p>
            <div className={classes.wrap}>
              <Quotes name={quoteData[0].name} quote={quoteData[0].quotes[getRandomIdx()]} />
              <Quotes name={quoteData[1].name} quote={quoteData[1].quotes[getRandomIdx()]} />
            </div>
          </div>

          <div className="container-lg container-lg2 q3">
            {/* <Quotes name={quoteData[3].name} quote={quoteData[3].quotes[getRandomIdx()]} /> */}

            <div className={classes.wrapperGrid3}>
              <div className={classes.quote2}>
                <img className="gr" src={quoteData[3].quotes[getRandomIdx()].noun} alt="snake" />
                <p className={classes.copy}>
                  <p className={classes.textLeft}>{quoteData[3].quotes[0].quote}</p>
                  <span className={classes.credit}>- {quoteData[3].name}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section fullWidth={false} className={classes.bannerSection}>
        {/* Dev Nounders */}
        <div className={classes.noundersDev}>
          <h1 className=" font-nouns text-8xl">The greatest projects start with an idea.</h1>
          <p className={classes.copy}>
            What started out as {TweetLink}, developed into {TeamLink}, who drew {ArtLink}, which
            they wrapped in {ProtocolLink}, that launched {ProjectLink}, which lived{' '}
            <span
              style={{
                fontFamily: 'Londrina Solid',
                color: '#ff0c0d',
                fontSize: '22px',
                letterSpacing: '0.1rem',
              }}
            >
              forever
            </span>
            .
          </p>
          <div className={classes.wrapper}>
            <img className="gr" src={noundersDev} alt="noundersDev" />
            <p className={classes.subcopy}>
              from left to right: Vape Ape, Solimander, 9999, Seneca, Dom, and Dev Carrot
            </p>
          </div>
        </div>

        {/* <div className={classes.devWrapper}> */}
        {/* <p>test</p> */}
        <div className={classes.logWrapper}>
          {gitLog.map(commit => (
            <Commit commit={commit} />
          ))}
        </div>
        {/* </div> */}
      </Section>
    </>
  );
};

export default Banner;
