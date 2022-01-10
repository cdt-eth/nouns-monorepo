// import './CrystalBall.css';
import './style.css';
import Section from '../../layout/Section';
// import cb from './index.js';
import define from './index.js';
import { Runtime, Inspector } from './runtime.js';

const Traits = () => {
  // @ts-ignore
  const runtime = new Runtime();

  // @ts-ignore
  const main = runtime.module(define, Inspector.into(document.body));

  return (
    <Section fullWidth={true}>
      <h1>hi</h1>
      {main}
    </Section>
  );
};

export default Traits;
