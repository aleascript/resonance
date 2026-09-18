import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'home',
    'research-fields',
    {
      type: 'category',
      label: 'What I try',
      link: {type: 'doc', id: 'experiments'},
      items: [
        'experiments/experiment-regard',
        'experiments/experiment-glorantha-perspectives',
        'experiments/experiment-scooby-doo',
        'experiments/experiment-unmind',
        'experiments/experiment-la-voie-lunaire',
      ],
    },
    'principles',
    {
      type: 'category',
      label: 'What others teach me',
      link: {type: 'doc', id: 'comparisons'},
      items: [
        'comparisons/comparison-origins',
        'comparisons/comparison-questworlds',
        'comparisons/comparison-fate',
        'comparisons/comparison-dread',
        'comparisons/comparison-polaris',
        'comparisons/comparison-ribbon-drive',
        'comparisons/comparison-pbta',
        'comparisons/comparison-the-quiet-year',
        'comparisons/comparison-dream-askew',
        'comparisons/comparison-ten-candles',
        'comparisons/comparison-bluebeards-bride',
        'comparisons/comparison-monsterhearts-2',
        'comparisons/comparison-alice-is-missing',
      ],
    },
    'about',
    {
      type: 'link',
      label: 'Publications',
      href: '/publications/',
    },
    {
      type: 'category',
      label: 'Working notes',
      collapsed: true,
      items: [
        'simplicity-complexity',
        'accessibility',
        'otherness',
        'situation',
        'design-axes',
      ],
    },
  ],
};

export default sidebars;
