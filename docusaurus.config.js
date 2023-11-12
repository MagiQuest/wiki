import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MQ Wiki',
  tagline: 'MQ Fandom Wiki Mirror',
  favicon: 'img/favicon.ico',

  url: 'https://magiquest.wiki',
  baseUrl: '/',

  organizationName: 'magiquest',
  projectName: 'wiki-mirror',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/MagiQuest/wiki-mirror/tree/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MQ Wiki',
        logo: {
          alt: 'MQ Wiki Logo',
          src: 'img/MQ.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://github.com/magiquest/wiki-mirror',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Our Site',
            items: [
              {
                label: 'Wiki',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/6e4whagCph',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/MagiQuest',
              },
              {
                label: 'Wiki',
                href: 'https://magiquest.fandom.com',
              },
            ],
          },
          {
            title: 'MQ-VR',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/magiquest',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MQ-VR, Co-op. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;