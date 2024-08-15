import Layout from './components/Layout.vue'
import VuetomTheme from 'vitepress-theme-vuetom'
import "./style/custom.scss"
import Confetti from "./components/Confetti.vue"
import Button from "./components/Button.vue"

export default {
  ...VuetomTheme,
  enhanceApp({app}) {
    // 注册全局组件
    app.component('Layout' , Layout)
    app.component('Confetti' , Confetti)
    app.component('Button' , Button)
  }
}
