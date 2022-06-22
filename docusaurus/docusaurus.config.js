// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lernjournal',
  tagline: 'Lernjournal von Valentino Panico 🦕',
  url: 'https://zzelav.github.io',
  baseUrl: '/lernjournal/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ZZELAV', // Usually your GitHub org/user name.
  projectName: 'lernjournal', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          path: 'docs',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'appendix',
        path: 'appendix',
        routeBasePath: 'appendix',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      de: {
        htmlLang: 'de-CH',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: 'Lernjournal',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Doku 📖',
          },
          {
            to: '/appendix/',
            label: 'Appendix 📚',
            position: 'left',
            activeBaseRegex: `/appendix/`,
          },
          {
            to: '/docs/tags/',
            label: 'Tags 🔎',
            position: 'left',
          },
          {
            href: 'https://github.com/ZZELAV/lernjournal',
            position: 'right',
            className: 'header-github-link',
          },
          {
            href: 'https://moodle.bztf.ch/my/',
            position: 'right',
            className: 'header-moodle-link',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Aktuelle Module',
            items: [
              {
                label: 'M122',
                to: '/docs/M122',
              },
              {
                label: 'M126',
                to: '/docs/M126',
              },
              {
                label: 'M226B',
                to: '/docs/M226B',
              },
              {
                label: 'M239',
                to: '/docs/M239',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Doku',
                to: '/docs',
              },
              {
                label: 'Appendix',
                to: '/appendix',
              },
              {
                label: 'Tags',
                to: '/docs/tags',
              }
            ]
          },
          {
            title: ' ',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ZZELAV/lernjournal',
              },
              {
                label: 'Moodle',
                href: 'https://moodle.bztf.ch/my/',
              },
              {
                label: 'Markdown Guide',
                href: 'https://www.markdownguide.org/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
        ],
        copyright: `v4.15.2<br>Copyright © ${new Date().getFullYear()} Lernjournal, Valentino Panico`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'java', 'php', 'docker', 'markup'],
      },
    }),
};

module.exports = config;
