import { VPCarbon } from 'vitepress-carbon'
import 'vitepress-carbon/dist/theme/styles/index.css'
import './custom.css'
import VersionBadge from './VersionBadge.vue'
import { h } from 'vue'

export default {
  ...VPCarbon,
  Layout() {
    return h(VPCarbon.Layout, null, {
      'nav-bar-title-after': () => h(VersionBadge, { version: 'v0.2.1' })
    })
  },
  enhanceApp({ app, router, siteData }) {
    VPCarbon.enhanceApp?.({ app, router, siteData })
    
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