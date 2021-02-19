module.exports = {
  title: 'DAppNode Documentation',
  tagline: 'DAppNode connects the decentralized internet by allowing a user to conveniently host P2P clients',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dappnode', // Usually your GitHub org/user name.
  projectName: 'DAppNodeDocsv2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DAppNode Documentation',
      logo: {
        alt: 'DAppNode Documentation',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discourse',
              href: 'https://discourse.dappnode.io/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/c28an8dA5k',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DAppNode',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dappnode',
            },
            {
              label: 'DAppNode Shop',
              href: 'https://shop.dappnode.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DAppNode | Decentralized P2P Networking | Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),        },
      },
    ],
  ],
};
