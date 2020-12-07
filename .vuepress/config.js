const glob = require('glob')

// https://github.com/vuejs/vuepress/issues/613
let requirements = []
glob.sync('architecture/requirements/*.md').map(function(filename) {
  if (filename !== 'architecture/requirements/index.md') {
    requirements.push('/' + filename)
  }
})

module.exports = {
  title: 'Slipmat3 Developer Docs',
  description: 'Developer documentation for Slipmat.io platform v3.',
  themeConfig: {
    repo: 'https://gitlab.com/slipmatio/slipmat3-devdocs',
    repoLabel: '',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Development Log', link: '/devlog/' },
      { text: 'Slipmat Next', link: 'https://next.slipmat.io' },
    ],
    sidebar: {
      '/architecture/requirements/': [
        '/devlog/',
        '/features/',
        '/architecture/',
        {
          title: 'Requirements',
          path: '/architecture/requirements/',
          collapsable: false,
          children: requirements,
        },
        '/philosophy/',
      ],
      '': [
        '/devlog/',
        '/features/',
        '/architecture/',
        '/architecture/requirements/',
        '/contributing/',
        '/philosophy/',
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', // string | boolean
    logo: '/assets/img/slipmat.png',
  },
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4'],
    extendMarkdown: (md) => {
      md.use(require('markdown-it-include'), '.vuepress/includes/')
    },
  },
  extraWatchFiles: [...requirements],
  plugins: ['plausible-analytics'],
}
