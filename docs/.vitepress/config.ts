import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ngxsmk-migrate/',
  title: "ngxsmk-migrate",
  description: "AI-Powered Angular Modernization Toolkit",
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'NPM Publishing', link: '/npm_publishing_guide' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is ngxsmk-migrate?', link: '/guide/what-is-ngxsmk' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Platform Architecture', link: '/guide/architecture' }
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'NPM Publishing Guide', link: '/npm_publishing_guide' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NGXSMK/ngxsmk-migrate' }
    ],
    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2026-present Sachin Dilshan'
    }
  }
})
