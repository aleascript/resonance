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
      label: 'Experiments',
      link: {type: 'doc', id: 'experiments'},
      items: [
        'experiments/experiment-regard',
        'experiments/experiment-glorantha-perspectives',
        'experiments/experiment-scooby-doo',
        'experiments/experiment-unmind',
        'experiments/experiment-la-voie-lunaire',
      ],
    },
    {
      type: 'category',
      label: 'Comparisons',
      link: {type: 'doc', id: 'comparisons'},
      items: [
        'comparisons/comparison-origins',
        {
          type: 'category',
          label: 'Language, resolution & authority',
          items: [
            'comparisons/comparison-questworlds',
            'comparisons/comparison-fate',
            'comparisons/comparison-pbta',
            'comparisons/comparison-polaris',
          ],
        },
        {
          type: 'category',
          label: 'Device, materiality & burden',
          items: [
            'comparisons/comparison-dread',
            'comparisons/comparison-ten-candles',
            'comparisons/comparison-alice-is-missing',
            'comparisons/comparison-bluebeards-bride',
          ],
        },
        {
          type: 'category',
          label: 'Avery Alder',
          items: [
            'comparisons/comparison-the-quiet-year',
            'comparisons/comparison-dream-askew',
            'comparisons/comparison-monsterhearts-2',
            'comparisons/comparison-ribbon-drive',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
