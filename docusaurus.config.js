import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dukedotdev',
  tagline: 'My silly corner of the interwebs',
  favicon: 'img/site-assets/favicon.ico',

  url: 'https://dukedot.dev',
  baseUrl: '/',

  organizationName: 'dukedotdev',
  projectName: 'dukedot.dev',
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
            'https://github.com/dukedotdev/dukedot.dev/edit/main/',
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
        title: 'dukedotdev',
        logo: {
          alt: 'dukedotdev',
          src: 'img/site-assets/logo.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/dukedotdev/dukedot.dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'This Site',
            items: [
              {
                label: 'Info',
                to: '/',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/npsnnd5JwT',
              },
              {
                label: 'Steam',
                href: 'https://steamcommunity.com/id/dukedotdev/',
              },
              {
                label: 'Rec Room',
                href: 'https://rec.net/user/dukedotdev',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/dukedot.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dukedotdev',
              },
            ],
          },
          {
            title: 'Other Projects',
            items: [
              {
                label: 'magiquest.wiki',
                href: 'https://magiquest.wiki'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dukedotdev. Built with <a href="https://docusaurus.io">Docusaurus</a>.<br><a href="https://github.com/dukedotdev/dukedot.dev/commits/main/">dukedot.dev v0.1.0</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
