import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MagiQuest Wiki',
  tagline: 'MagiQuest Fandom Wiki Mirror',
  favicon: 'img/site-assets/favicon.ico',

  url: 'https://magiquest.wiki',
  baseUrl: '/',

  organizationName: 'magiquest',
  projectName: 'wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/MagiQuest/wiki/edit/main/',
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

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'MQ Wiki',
      logo: {
        alt: 'MQ Wiki Logo',
        src: 'img/site-assets/MQ.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/magiquest/wiki',
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
            {
              label: 'Blog',
              to: '/blog',
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
              label: 'Fandom',
              href: 'https://magiquest.fandom.com',
            },
          ],
        },
        {
          title: 'magiquest.wiki',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/magiquest',
            },
            {
              label: 'BlueSky',
              href: 'https://bsky.app/profile/magiquest.wiki',
            },
          ],
        },
      ],
      copyright: `Community content is available under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA</a> unless otherwise noted. Built with <a href="https://docusaurus.io">Docusaurus</a>.<br><a href="https://github.com/MagiQuest/wiki/commits/main/">magiquest.wiki v0.6.2</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
      metadata: [
      {name: 'keywords', content: 'magiquest, magi quest, magic quest, mq, wiki, info, archive'},
    ],
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://magiquest.wiki',
        },
      },
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'MagiQuest Wiki',
          url: 'https://github.com/MagiQuest/',
          logo: 'https://github.com/MagiQuest.png/',
        }),
      },
    ],
  },
}

module.exports = config;