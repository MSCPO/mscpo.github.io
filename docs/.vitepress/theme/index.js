import Theme from 'vitepress/theme'
import './style/var.css'
import Layout from './Layout.vue'

export default {
  Layout: Layout,
  ...Theme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component('MyGlobalComponent' /* ... */)
  }
}
