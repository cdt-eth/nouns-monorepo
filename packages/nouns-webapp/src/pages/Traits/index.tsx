/* eslint-disable jsx-a11y/alt-text */
import classes from './Traits.module.css';
import Section from '../../layout/Section';
import { Col, Row } from 'react-bootstrap';
import traits from './traits.json';

const Traits = () => {
  const heads = traits.heads;
  const glasses = traits.glasses;
  const bodies = traits.bodies;
  const accessories = traits.accessories;

  return (
    <Section fullWidth={true}>
      <Col lg={12} className={classes.traitGroup}>
        <h1 className={classes.title}>Heads</h1>
        <p className={classes.headNote}>
          The asterisk (*) denotes "lost" heads. Head ideas that didn't make it altogether versus
          drafts.
        </p>
        <Row className={classes.traitsGrid}>
          {heads &&
            heads.map(head => (
              <div className={classes.imageGrid}>
                <img src={`/lost-nouns/heads/${head.image}.png`} />
                <p>
                  {head.name}
                  {head.lost && <span>*</span>}
                </p>
              </div>
            ))}

          {/* {heads &&
            heads.map(head => (
              <div className={`${classes.imageGrid} ${head.lost ? 'lostHeads' : 'notLost'}`}>
                <div className={classes.imageGrid}>
                  <img src={`/lost-nouns/heads/${head.image}.png`} />
                  <p>{head.name}</p>
                </div>
              </div>
            ))} */}
        </Row>
      </Col>
      <Col lg={12} className={classes.traitGroup}>
        <h1 className={classes.title}>Glasses</h1>
        <Row className={classes.traitsGrid}>
          {glasses &&
            glasses.map(g => (
              <div className={classes.imageGrid}>
                <img src={`/lost-nouns/glasses/${g.image}.png`} />
                <p>{g.name}</p>
              </div>
            ))}
        </Row>
      </Col>
      <Col lg={12} className={classes.traitGroup}>
        <h1 className={classes.title}>Bodies</h1>
        <Row className={classes.traitsGrid}>
          {bodies &&
            bodies.map(body => (
              <div className={classes.imageGrid}>
                <img src={`/lost-nouns/body/${body.image}.png`} />
                <p>{body.name}</p>
              </div>
            ))}
        </Row>
      </Col>
      <Col lg={12} className={classes.traitGroup}>
        <h1 className={classes.title}>Accessories</h1>
        <Row className={classes.traitsGrid}>
          {accessories &&
            accessories.map(accessory => (
              <div className={classes.imageGrid}>
                <img src={`/lost-nouns/accessories/${accessory.image}.png`} />
                <p>{accessory.name}</p>
              </div>
            ))}
        </Row>
      </Col>
    </Section>
  );
};

export default Traits;
