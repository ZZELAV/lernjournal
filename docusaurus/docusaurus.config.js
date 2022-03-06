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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: true,
      hideableSidebar: true,
      navbar: {
        hideOnScroll: true,
        title: 'Lernjournal',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Doku',
          }
        ],
      },
      footer: {
        style: 'dark',
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
              }
            ]
          },
          {
            title: ' ',
            items: [
              {
                label: 'GitHub',
                href: 'https://zzelav.github.io/lernjournal/',
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
        copyright: `Copyright © ${new Date().getFullYear()} Lernjournal, Valentino Panico`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
