/**
 * Resonance-specific values. The site structure and visual system come
 * from resonance-site-template; the experimental identity lives here.
 */

export type SiteIdentity = {
  logo: string | null;
  favicon: string | null;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type SiteLineage = {
  designedWith: ProjectLink | null;
  poweredBy: ProjectLink | null;
};

export type ContentLicense = {
  label: string;
  href: string;
  attribution: {
    title: string;
    author: string;
    href: string | null;
  };
};

export type ThemePalette = {
  primary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
};

export type SiteTheme = {
  colors: {
    light: ThemePalette;
    dark: ThemePalette;
  };
  typography: {
    body: string;
    heading: string;
    mono: string;
    headingWeight: number;
  };
  shape: {
    radius: string;
    borderWidth: string;
    navbarShadow: string;
  };
  layout: {
    contentWidth: string;
  };
};

export const site = {
  title: 'Resonance',
  tagline: 'An experimental game design paradigm for tabletop role-playing games',
  description: 'A laboratory for exploring how systems, players, fiction and worlds shape one another in tabletop role-playing games.',
  author: 'AleaScript',
  defaultLocale: 'en',
  locales: {
    en: {
      htmlLang: 'en',
      label: 'English',
    },
    fr: {
      htmlLang: 'fr',
      label: 'Français',
    },
  },
  repository: {
    defaultFullName: 'aleascript/resonance',
  },
  identity: {
    logo: 'img/site/resonance-mode-maitre-icon-100.png',
    favicon: 'img/site/resonance-mode-maitre-icon-100.png',
  } satisfies SiteIdentity,
  license: {
    label: 'CC BY 4.0',
    href: 'https://creativecommons.org/licenses/by/4.0/',
    attribution: {
      title: 'Resonance',
      author: 'AleaScript',
      href: null,
    },
  } satisfies ContentLicense,
  lineage: {
    designedWith: null,
    poweredBy: null,
  } as SiteLineage,
  theme: {
    colors: {
      light: {
        primary: '#171717',
        background: '#f4f2ed',
        surface: '#ebe8e1',
        text: '#171717',
        muted: '#66635d',
        border: '#d2cec5',
      },
      dark: {
        primary: '#f4f2ed',
        background: '#0b0b0b',
        surface: '#151515',
        text: '#f4f2ed',
        muted: '#b4b0a8',
        border: '#333333',
      },
    },
    typography: {
      body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      heading: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
      headingWeight: 650,
    },
    shape: {
      radius: '0.18rem',
      borderWidth: '1px',
      navbarShadow: '0 1px 0 rgb(0 0 0 / 10%)',
    },
    layout: {
      contentWidth: '50rem',
    },
  } satisfies SiteTheme,
} as const;
