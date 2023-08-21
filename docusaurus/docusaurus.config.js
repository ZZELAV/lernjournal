// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lernjournal",
  tagline: "Lernjournal von Valentino Panico 🦕",
  url: "https://lernjournal.valentino-panico.ch",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "data/favicon.ico",
  organizationName: "zzelav", // github user name
  projectName: "lernjournal", // repo name
  trailingSlash: false,

  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    localeConfigs: {
      de: {
        htmlLang: "de-CH",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          path: "docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "appendix",
        path: "appendix",
        routeBasePath: "appendix",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    "docusaurus-plugin-image-zoom",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      zoom: {
        selector: "img",
        background: {
          dark: "rgb(32, 35, 42)",
        },
        config: {
          margin: 100,
        },
      },
      navbar: {
        title: "Lernjournal",
        logo: {
          alt: "Logo",
          src: "data/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Doku 📖",
          },
          {
            to: "/appendix/",
            label: "Appendix 📚",
            position: "left",
            activeBaseRegex: `/appendix/`,
          },
          {
            to: "/docs/tags/",
            label: "Tags 🔎",
            position: "left",
          },
          {
            href: "https://github.com/ZZELAV/lernjournal",
            position: "right",
            className: "header-github-link",
          },
          {
            href: "https://moodle.bztf.ch/my/",
            position: "right",
            className: "header-moodle-link",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "// Aktuelle Module",
            items: [
              {
                label: "M145",
                to: "/docs/M145/",
              },
              {
                label: "M182",
                to: "/docs/M182/",
              },
            ],
          },
          {
            title: "// Links",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Doku",
                to: "/docs",
              },
              {
                label: "Appendix",
                to: "/appendix",
              },
              {
                label: "Tags",
                to: "/docs/tags",
              },
            ],
          },
          {
            title: " ",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ZZELAV/lernjournal",
              },
              {
                label: "Moodle",
                href: "https://moodle.bztf.ch/my/",
              },
              {
                label: "Markdown Guide",
                href: "https://www.markdownguide.org/",
              },
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/",
              },
            ],
          },
        ],
        copyright: `v7.1<br>Copyright © ${new Date().getFullYear()} Lernjournal, Valentino Panico. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // https://prismjs.com/#supported-languages
        additionalLanguages: [
          "powershell",
          "java",
          "php",
          "docker",
          "markup",
          "mongodb",
          "json",
        ],
      },
    }),
};

module.exports = config;
