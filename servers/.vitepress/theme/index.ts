import Layout from './components/Layout.vue'
import VuetomTheme from 'vitepress-theme-mscpo'
import "./style/custom.scss"
import Confetti from "./components/Confetti.vue"
import Button from "./components/Button.vue"
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  ...VuetomTheme,
  enhanceApp({app, router}) {
    // 注册全局组件
    app.component('Layout' , Layout)
    app.component('Confetti' , Confetti)
    app.component('Button' , Button)
    
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
