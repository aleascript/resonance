import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'home',
    {
      type: 'category',
      label: 'Questioning',
      link: {type: 'doc', id: 'research-fields'},
      items: [
        'question-access-without-impoverishing',
        'question-where-work-goes',
        'situation',
        'otherness',
        'question-universe-imagination',
        'question-roleplaying-borders',
      ],
    },
    {
      type: 'category',
      label: 'Trying',
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
      label: 'Learning',
      link: {type: 'doc', id: 'principles'},
      items: [
        'simplicity-complexity',
        'accessibility',
        'design-axes',
      ],
    },
    {
      type: 'category',
      label: 'Others',
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
    {
      type: 'link',
      label: 'Publications',
      href: '/publications/',
    },
  ],
};

export default sidebars;
