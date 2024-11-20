import VuetomTheme from 'vitepress-theme-mscpo'
import { Quasar, Notify, Dialog, LoadingBar, Loading } from 'quasar'
import VueAmazingUI from 'vue-amazing-ui'

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass'
import 'vitepress-plugin-back-to-top/dist/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import 'vitepress-plugin-music/lib/css/index.css'
import 'vue-amazing-ui/css'
import "./style/custom.scss"

import { h, watchEffect } from 'vue'
import { useData } from 'vitepress'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import vitepressMusic from 'vitepress-plugin-music'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import NavList from './components/Nav/NavList.vue'
import ServerList from './components/ServerCard/ServerList.vue'

if (inBrowser)
  import('./components/hooks/pwa')

export default {
  ...VuetomTheme,
  enhanceApp({app, router}) {
    // Register the global component
    app.component('NavList' , NavList)
    app.component('ServerList' , ServerList)
    app.use(VueAmazingUI)
    app.use(Quasar, {
      config: {
        brand: {
          primary: '#151515',
          sunshine: '#f4f4f4',
          whiteField: '#E2E1E1',
          darkBG: '#151515',
        },
        globalProperties: {},
        screen: {
          bodyClasses: true,
        },
      },
      importStrategy: 'auto',
      plugins: {
        Notify, Dialog, LoadingBar, Loading,
      },
    })
    
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    vitepressMusic(playlist)
    vitepressBackToTop({
      // default
      threshold:300
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
]
