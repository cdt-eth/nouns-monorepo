import classes from './Banner.module.css';
import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
// import calendar_noun from '../../assets/calendar_noun.png';
// import Noun from '../Noun';
// import gremplinImg from '../../assets/gremplin.png';
import noundersArt from '../../assets/nounders_art.png';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <Col lg={12}>
        {/* <div style={{ padding: '2rem' }}>
          <Noun imgPath={calendar_noun} alt="noun" />
        </div> */}
        <div className={classes.wrapper}>
          <h1>Every artist has their drafts.</h1>
        </div>
      </Col>
      <Col lg={12}>
        <div className={classes.wrapper}>
          <img className="gr" src={noundersArt} alt="gremplin" />
        </div>
      </Col>
    </Section>
  );
};

export default Banner;
