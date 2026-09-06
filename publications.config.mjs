export function definePublications(config) {
  return config;
}

function corpus(locale) {
  const doc = (path) => `docs/${locale}/${path}`;

  return [
    // Core
    doc('index.md'),
    doc('principles.md'),
    doc('research-fields.md'),
    doc('simplicity-complexity.md'),
    doc('accessibility.md'),
    doc('otherness.md'),
    doc('situation.md'),
    doc('design-axes.md'),

    // Internal experiments
    doc('experiments.md'),
    doc('experiments/regard.md'),
    doc('experiments/glorantha-perspectives.md'),
    doc('experiments/scooby-doo.md'),
    doc('experiments/unmind.md'),
    doc('experiments/la-voie-lunaire.md'),

    // Comparative corpus, ordered by first publication
    doc('comparisons.md'),
    doc('comparisons/origins.md'),
    doc('comparisons/questworlds.md'),
    doc('comparisons/fate.md'),
    doc('comparisons/dread.md'),
    doc('comparisons/polaris.md'),
    doc('comparisons/ribbon-drive.md'),
    doc('comparisons/pbta.md'),
    doc('comparisons/the-quiet-year.md'),
    doc('comparisons/dream-askew.md'),
    doc('comparisons/ten-candles.md'),
    doc('comparisons/bluebeards-bride.md'),
    doc('comparisons/monsterhearts-2.md'),
    doc('comparisons/alice-is-missing.md'),
  ];
}

export default definePublications({
  release: {
    initialVersion: '0.1.0',
  },
  markdown: {
    admonitions: ['design'],
  },
  publications: {
    resonance: {
      author: 'AleaScript',
      revision: 'Draft',
      license: {
        label: 'CC BY 4.0',
        href: 'https://creativecommons.org/licenses/by/4.0/',
        attribution: {
          title: 'Resonance',
          author: 'AleaScript',
          href: null,
        },
      },
      lineage: {
        designedWith: null,
        poweredBy: null,
      },
      size: 'A5',
      theme: 'publication/theme.css',
      cover: {
        image: 'static/img/site/resonance-mode-maitre-icon-100.png',
        showTitle: true,
        showMetadata: true,
      },
      outputName: 'resonance',
      locales: {
        en: {
          title: 'Resonance',
          tocTitle: 'Contents',
          contents: corpus('en'),
          completeCorpus: true,
          outputs: ['pdf'],
        },
        fr: {
          title: 'Resonance',
          tocTitle: 'Sommaire',
          contents: corpus('fr'),
          completeCorpus: true,
          outputs: ['pdf'],
        },
      },
    },
  },
});
