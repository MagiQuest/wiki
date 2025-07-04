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
    announcementBar: {
      id: 'refactoring',
      content:
        'We are currently remaking our wiki, please use <a href="https://magiquest.fandom.com">magiquest.fandom.com</a> for now!',
      backgroundColor: '#091E42',
      textColor: '#fafbfc',
      isCloseable: false,
    },
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
      copyright: `Community content is available under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA</a> unless otherwise noted. Built with <a href="https://docusaurus.io">Docusaurus</a>.<br><a href="https://github.com/MagiQuest/wiki/commits/main/">magiquest.wiki v0.6.3</a>`,
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
    }
  },
}

module.exports = config;

export default {
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        swRegister: true,
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/site-assets/MQ.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(149, 255, 0)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/site-assets/icon512_rounded.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/site-assets/icon512_maskable.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/site-assets/icon512_maskable.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  themeConfig: {
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
};