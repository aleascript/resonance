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
    'experiments',
    'comparisons',
  ],
};

export default sidebars;
