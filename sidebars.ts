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
    'comparisons',
  ],
};

export default sidebars;
