import { defineConfig } from 'vitepress'

import enSidebar from './sidebar/en'
import uaSidebar from './sidebar/ua'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['vitepress-carbon']
    }
  },
  ignoreDeadLinks: true,

  markdown: {
    shikiSetup(shiki) {},
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        sidebar: enSidebar
      }
    },

    ua: {
      label: 'Українська',
      lang: 'uk',
      themeConfig: {
        sidebar: uaSidebar
      }
    },
  },
  
  title: "SharpCraft Docs",
  description: "Documentation for SharpCraft, a Minecraft-like engine written in C#.",
  appearance: 'force-dark',


  themeConfig: {
    sidebar: enSidebar,

    footer: {
      message: 'Released under the <a href="/AboutSetup/license">MIT License</a>',
      copyright: '© 2026 MiraDiv &nbsp;·&nbsp; © 2026 SharpCraft Contributors'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MiraDiv-git/SharpCraft' },
    ]
  }
})
