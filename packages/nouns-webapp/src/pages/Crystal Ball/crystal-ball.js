// https://observablehq.com/@gitblamecarrot/the-noun-crystal-ball@161
import nouns from './nouns-data.js';

export default function define(runtime, observer) {
  const main = runtime.module();

  main
    .variable(observer('contracts'))
    .define(
      'contracts',
      ['ethers', 'MAINNET_CONTRACTS', 'NOUNS_ABIS', 'provider'],
      function (ethers, MAINNET_CONTRACTS, NOUNS_ABIS, provider) {
        return {
          nounsDescriptor: new ethers.Contract(
            MAINNET_CONTRACTS.NounsDescriptor,
            NOUNS_ABIS.NounsDescriptorAbi,
            provider,
          ),
          nounsSeeder: new ethers.Contract(
            MAINNET_CONTRACTS.NounsSeeder,
            NOUNS_ABIS.NounsSeederAbi,
            provider,
          ),
        };
      },
    );

  main
    .variable(observer('generateNoun'))
    .define(
      'generateNoun',
      ['contracts', 'MAINNET_CONTRACTS'],
      function (contracts, MAINNET_CONTRACTS) {
        return async nounId => {
          const seed = await contracts.nounsSeeder.generateSeed(
            nounId,
            MAINNET_CONTRACTS.NounsDescriptor,
            {
              blockTag: 'pending',
            },
          );
          const svg = await contracts.nounsDescriptor.generateSVGImage(seed);
          return atob(svg);
        };
      },
    );

  main.variable(observer()).define(['html', 'nextNoun'], function (html, nextNoun) {
    return html`
      <div class="wrap">
        <div class="img crystal-ball"><img src="./crystal-ball.gif" /></div>
        <div class="svg">${nextNoun}</div>
        <div class="img shadow"><img src="./shadow.png" /></div>
        <div class="img platform"><img src="./platform.gif" /></div>
      </div>
    `;
  });

  main.variable(observer()).define(['html'], function (html) {
    return html`
      <div class="wrap">
        <div class="img bg"><img src="./bg.png" /></div>
      </div>
      <a href="#target-content" id="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-info"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </a>

      <div id="target-content">
        <a href="#" class="close"></a>
        <div id="target-inner">
          <h1>🔮 Nouns Crystal Ball</h1>
          <p>
            This site was built by
            <a href="https://twitter.com/propernouns_nft">@propernouns_nft</a>
            to be able to watch for what could possibly be the next Noun.
          </p>
          <p>
            A big thanks to
            <a href="https://twitter.com/carrot_init">gitblamecarrot</a> for the original code. To
            learn more about how it works, you can view the original
            <a href="https://observablehq.com/@gitblamecarrot/the-noun-crystal-ball"
              >Crystal Ball notebook</a
            >
            on Observable.
          </p>
        </div>
      </div>
    `;
  });

  main
    .variable(observer('nextNoun'))
    .define(
      'nextNoun',
      ['generateNoun', 'latestNoun', 'sleep'],
      async function* (generateNoun, latestNoun, sleep) {
        let lastTime = 0;
        while (true) {
          const loopTime = new Date().getTime();
          if (loopTime - lastTime > 10000) {
            lastTime = loopTime;
            yield generateNoun(latestNoun.id + 1);
          }
          await sleep(1000);
        }
      },
    );
  main.variable(observer('provider')).define('provider', ['ethers'], function (ethers) {
    return new ethers.providers.JsonRpcProvider(
      'https://eth-mainnet.alchemyapi.io/v2/R2SOfyWFuhaoSBvXmxc3q5Wl__Gq0VvN',
    );
  });
  main.variable(observer('latestNoun')).define('latestNoun', ['nouns'], function (nouns) {
    return nouns[0];
  });
  main
    .variable(observer('nouns'))
    .define('nouns', ['axios', 'SUBGRAPH_URL'], async function (axios, SUBGRAPH_URL) {
      return (
        await axios.post(SUBGRAPH_URL, {
          query: '{nouns { id }}',
        })
      ).data.data.nouns
        .map(noun => ({
          id: Number(noun.id),
        }))
        .sort((a, b) => a.id - b.id)
        .reverse();
    });
  main.variable(observer('sleep')).define('sleep', function () {
    return ms => new Promise(resolve => setTimeout(resolve, ms));
  });

  const child = runtime.module(nouns);
  main.import('MAINNET_CONTRACTS', child);
  main.import('NOUNS_ABIS', child);
  main.import('SUBGRAPH_URL', child);
  main.variable(observer('axios')).define('axios', ['require'], function (require) {
    return require('axios');
  });
  main.variable(observer('ethers')).define('ethers', ['require'], function (require) {
    return require('https://cdn.ethers.io/lib/ethers-5.2.umd.min.js');
  });
}
