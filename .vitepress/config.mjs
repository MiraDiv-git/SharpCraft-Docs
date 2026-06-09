import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SharpCraft Docs",
  description: "Documentation for SharpCraft, a Minecraft-like engine written in C#.",
  appearance: false,
  head: [
    [
      'script',
      {},
      `document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches)`
    ]
  ],


  themeConfig: {
    footer: {
      message: 'Released under the <a href="license">MIT License</a>',
      copyright: '© 2026 MiraDiv &nbsp;·&nbsp; © 2026 SharpCraft Contributors'
    },
    sidebar: [
      {
        text: 'About & Setup',
        items: [
          { text: 'Introduction', link: '/setup' },
          { text: 'License', link: '/license' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Game',
        items: [
          { text: 'World', link: '/game/world' },
        ]
      },
      {
        text: 'Engine',
        items: [
          { text: 'Rendering', link: '/engine/rendering' },
          { text: 'Physics', link: '/engine/physics' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MiraDiv-git/SharpCraft' },
      // { icon: 'twitter', link: 'https://twitter.com/vuejs' }
    ]
  }
})
