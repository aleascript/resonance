import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'home',
    {
      type: 'link',
      label: 'Publications',
      href: '/publications/',
    },
    'principles',
    'research-fields',
    'simplicity-complexity',
    'accessibility',
    'otherness',
    'situation',
    'design-axes',
    {
      type: 'category',
      label: 'Expérimentations / Experiments',
      link: {type: 'doc', id: 'experiments'},
      items: [
        'experiment-regard',
        'experiment-glorantha-perspectives',
        'experiment-scooby-doo',
        'experiment-unmind',
        'experiment-la-voie-lunaire',
      ],
    },
    {
      type: 'category',
      label: 'Comparaisons / Comparisons',
      link: {type: 'doc', id: 'comparisons'},
      items: [
        'comparison-origins',
        {
          type: 'category',
          label: 'Langage, résolution, autorité',
          items: ['comparison-questworlds', 'comparison-fate', 'comparison-pbta', 'comparison-polaris'],
        },
        {
          type: 'category',
          label: 'Dispositif et matérialité',
          items: ['comparison-dread', 'comparison-ten-candles', 'comparison-alice-is-missing', 'comparison-bluebeards-bride'],
        },
        {
          type: 'category',
          label: 'Avery Alder',
          items: ['comparison-the-quiet-year', 'comparison-dream-askew', 'comparison-monsterhearts-2', 'comparison-ribbon-drive'],
        },
      ],
    },
  ],
};

export default sidebars;
