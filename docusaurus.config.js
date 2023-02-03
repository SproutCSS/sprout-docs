// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SproutCSS',
  tagline: 'A Tiny React Component Library',
  url: 'http://sproutcss-dejmedus.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sprout.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dejmedus', // Usually your GitHub org/user name.
  projectName: 'sprout-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'SproutCSS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/sprout.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/dejmedus/sproutcss',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/sproutcss',
            label: 'NPM',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'in-progress',
        content:
          'Currently in development. See the changelog <a target="_blank" rel="noopener noreferrer" href="/changelog">here</a>',
        backgroundColor: 'rgb(107, 166, 255, 0.6)',
        textColor: '#000',
        isCloseable: true,
      },
      footer: {
        links: [

          {
            label: 'Docs',
            to: '/docs/intro',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/dejmedus/sproutcss',
          },
          {
            label: 'NPM',
            href: 'https://www.npmjs.com/package/sproutcss',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
