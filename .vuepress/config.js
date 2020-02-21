const glob = require('glob')

// https://github.com/vuejs/vuepress/issues/613
let requirements = []
glob.sync('architecture/requirements/*.md').map(function(filename) {
  if (filename !== 'architecture/requirements/index.md') {
    requirements.push('/' + filename)
  }
})

module.exports = {
  title: 'Slipmat3 Dev Docs',
  description: 'Developer documentation for the new Slipmat.io platform.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development Log', link: '/devlog/' },
      { text: 'Slipmat Next', link: 'https://next.slipmat.io' },
    ],
    sidebar: [
      '/devlog/',
      '/notebook/',
      '/features/',
      '/architecture/',

      {
        title: 'Requirements',
        path: '/architecture/requirements/',
        // collapsable: false,
        children: requirements,
      },
      '/philosophy/',
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', // string | boolean
    logo: '/assets/img/slipmat.png',
  },
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  extraWatchFiles: [...requirements],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-41815464-11',
      },
    ],
  ],
}
