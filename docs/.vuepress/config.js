module.exports = {
  title: 'Machete Docs',
  description: 'The documentation for the Machete library.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        title: 'Getting Started',
        children: [
          '/getting-started/installation/',
        ],
      },
      {
        title: 'Models',
        children: [
          '/models/account/',
          '/models/character/',
        ],
      },
    ],
  },
  dest: 'public',
};
