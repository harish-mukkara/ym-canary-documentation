module.exports = {
  title: 'Canary',
  tagline: "Experience an awesome shopping experience",
  url: 'https://NitinNithilesh.github.io/',
  baseUrl: '/ym-canary-documentation/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'NitinNithilesh', // Usually your GitHub org/user name.
  projectName: 'ym-canary-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Canary',
      logo: {
        alt: 'Canary Logo',
        src: 'img/canary-png.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/yellowmessenger',
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
              label: 'Canary',
              to: 'docs/',
            },
            {
              label: 'Models',
              to: 'docs/User Model/',
            },
            {
              label: "Global Functions",
              to: "docs/app.global.predictNumber"
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YM Community',
              href: 'https://community.yellowmessenger.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.yellowmessenger.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yellow Messenger - Canary`,
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
