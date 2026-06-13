import { VPCarbon } from 'vitepress-carbon'
import 'vitepress-carbon/dist/theme/styles/index.css'
import './custom.css'
import VersionBadge from './Components/VersionBadge.vue'
import FileTree from './Components/FileTree.vue'
import { h } from 'vue'

export default {
  ...VPCarbon,
  Layout() {
    return h(VPCarbon.Layout, null, {
      'nav-bar-title-after': () => h(VersionBadge)
    })
  },
  enhanceApp({ app, router, siteData }) {
    VPCarbon.enhanceApp?.({ app, router, siteData })
    app.component('FileTree', FileTree)
    
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {        
        const observer = new MutationObserver(() => {
          document.querySelectorAll('.menu-divider').forEach(el => el.remove())
          document.querySelectorAll('a[href*="llms"]').forEach(el => el.remove())
        })
        observer.observe(document.body, { childList: true, subtree: true })
      })
    }
  }
}