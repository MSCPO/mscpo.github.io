import Layout from './components/Layout.vue'
import VuetomTheme from 'vitepress-theme-vuetom'
import "./style/custom.scss"

export default {
  ...VuetomTheme,
  enhanceApp({app}) {
    // 注册全局组件
    app.component('Layout' , Layout)
  }
}
