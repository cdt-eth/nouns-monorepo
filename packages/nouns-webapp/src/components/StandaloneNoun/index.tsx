import { ImageData as data, getNounData, getPartName } from '@nouns/assets';
import { buildSVG } from '@nouns/sdk';
import { BigNumber as EthersBN } from 'ethers';
import { INounSeed, useNounSeed } from '../../wrappers/nounToken';
import Noun from '../Noun';
import { Link } from 'react-router-dom';
import classes from './StandaloneNoun.module.css';
import ReactTooltip from 'react-tooltip';
import Body from '../../assets/_traits/icon_body.svg';
import Glasses from '../../assets/_traits/icon_glasses.svg';
import Head from '../../assets/_traits/icon_head.svg';
import Accessory from '../../assets/_traits/icon_accessory.svg';

interface StandaloneNounProps {
  nounId: EthersBN;
}

interface StandaloneNounWithSeedProps {
  nounId: EthersBN;
  onLoadSeed?: (seed: INounSeed) => void;
  shouldLinkToProfile: boolean;
}

const getNoun = (nounId: string | EthersBN, seed: INounSeed) => {
  const id = nounId.toString();
  const name = `Noun ${id}`;
  const description = `Noun ${id} is a member of the Nouns DAO`;
  const { parts, background } = getNounData(seed);
  const image = `data:image/svg+xml;base64,${btoa(buildSVG(parts, data.palette, background))}`;

  return {
    name,
    description,
    image,
  };
};

const StandaloneNoun: React.FC<StandaloneNounProps> = (props: StandaloneNounProps) => {
  const { nounId } = props;
  const seed = useNounSeed(nounId);
  const noun = seed && getNoun(nounId, seed);

  return (
    // {/* <Link to={'/noun/' + nounId.toString()} className={classes.clickableNoun}> */}
    <Link to={'/auction/' + nounId.toString()} className={classes.clickableNoun}>
      <Noun imgPath={noun ? noun.image : ''} alt={noun ? noun.description : 'Noun'} />
    </Link>
  );
};

export const StandaloneNounWithSeed: React.FC<StandaloneNounWithSeedProps> = (
  props: StandaloneNounWithSeedProps,
) => {
  const { nounId, onLoadSeed, shouldLinkToProfile } = props;

  const seed = useNounSeed(nounId);

  if (!seed || !nounId || !onLoadSeed) return <Noun imgPath="" alt="Noun" />;

  onLoadSeed(seed);

  const { image, description } = getNoun(nounId, seed);
  const { body, head, accessory, glasses } = getPartName(seed);

  const noun = (
    <div>
      <div data-tip data-for="nounTraits">
        <Noun imgPath={image} alt={description} />
      </div>

      <ReactTooltip className={classes.opacity} id="nounTraits" type="light">
        <div className={`${classes.hover}`}>
          <div className={classes.traitGroup}>
            {/* <p className={classes.traitTitle}>Head:</p> */}
            <img src={Head} alt="trait" />
            <p className={classes.trait}> {head}</p>
          </div>
          <div className={classes.traitGroup}>
            {/* <p className={classes.traitTitle}>Glasses:</p> */}
            <img src={Glasses} alt="trait" />
            <p className={classes.trait}> {glasses}</p>
          </div>
          <div className={classes.traitGroup}>
            {/* <p className={classes.traitTitle}>Body:</p> */}
            <img src={Body} alt="trait" />
            <p className={classes.trait}> {body}</p>
          </div>
          <div className={classes.traitGroup}>
            {/* <p className={classes.traitTitle}>Accessory:</p> */}
            <img src={Accessory} alt="trait" />
            <p className={classes.trait}> {accessory}</p>
          </div>
        </div>
      </ReactTooltip>
    </div>
  );
  const nounWithLink = (
    // <Link to={'/noun/' + nounId.toString()} className={classes.clickableNoun}>
    <Link to={'/auction/' + nounId.toString()} className={classes.clickableNoun}>
      {noun}
    </Link>
  );
  return shouldLinkToProfile ? nounWithLink : noun;
};

export default StandaloneNoun;
