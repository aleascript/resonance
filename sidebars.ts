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
    'design-axes',
    'experiments',
  ],
};

export default sidebars;
