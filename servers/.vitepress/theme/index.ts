import VuetomTheme from 'vitepress-theme-mscpo'
import "./style/custom.scss"
import { h } from 'vue'
import { useData } from 'vitepress'
import Confetti from "./components/Confetti.vue"
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import NavList from './components/Nav/NavList.vue'
import ServerList from './components/ServerCard/ServerList.vue'

export default {
  ...VuetomTheme,
  enhanceApp({app, router}) {
    // Register the global component
    app.component('Confetti' , Confetti)
    app.component('NavList' , NavList)
    app.component('ServerList' , ServerList)
    
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
