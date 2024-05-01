import DefaultTheme from 'vitepress/theme'
import './style/var.css'
import './style/font.css'
import NewLayout from './NewLayout.vue'
import Layout from './components/Layout.vue'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    // 注册全局组件
    app.component('Layout' , Layout)
  }
}
