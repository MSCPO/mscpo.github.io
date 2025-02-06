import VuetomTheme from 'vitepress-theme-mscpo/docs'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/lib/icon';

import 'vitepress-plugin-back-to-top/dist/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import 'vitepress-plugin-music/lib/css/index.css'
import "./style/ArcoUI/ArcoUI.less"
import "./style/custom.scss"

import { h, watchEffect } from 'vue'
import { useData } from 'vitepress'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import vitepressMusic from 'vitepress-plugin-music'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import ServerList from 'vitepress-theme-mscpo/dist/doc/components/ServerCard/ServerList.vue'
import NavList from 'vitepress-theme-mscpo/dist/doc/components/Nav/NavList.vue'
import ServerPage from './components/ServerPage/ServerPage.vue'

if (inBrowser)
  import('vitepress-theme-mscpo/dist/doc/components/hooks/pwa')

export default {
  ...VuetomTheme,
  enhanceApp({ app, router }) {
    // Register the global component
    app.component('NavList', NavList)
    app.component('ServerPage', ServerPage)
    app.component('ServerList', ServerList)
    app.use(ArcoVue)
    app.use(ArcoVueIcon)

    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    vitepressMusic(playlist)
    vitepressBackToTop({
      // default
      threshold: 300
    })
  },

  Layout: () => {
    const props: Record<string, any> = {}
    // Get frontmatter
    const { frontmatter } = useData()

    /* Add custom class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(VuetomTheme.Layout, props)
  },
  setup() {
    const { lang } = useData()
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  }
}

const playlist = [
  {
    name: 'Moog City 2',
    author: 'C418',
    file: '/Moog_City_2.mp3',
  },
  {
    name: 'Hygeia(Remix)',
    author: 'MSCPO',
    file: '/Hygeia(Remix).mp3',
  },
  {
    name: 'DJ Got Us Fall In Love',
    author: 'Usher / Pitbull',
    file: '/DJ_Got_Us_Fall_In_Love.mp3',
  }
]
