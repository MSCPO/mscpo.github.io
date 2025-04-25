// 配置 - 语言部分
// 请参照 https://vitepress.dev/zh/ 修改
// END
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-mscpo'

export const zh_CN = defineConfigWithTheme<VuetomThemeConfig>({
  title: '服务器集体宣传组织',
  lastUpdated: true,
  description: 'Minecraft服务器集体宣传组织 (MSCPO)-一个致力于我的世界服务器宣传和技术交流的新兴组织',
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: '服务器集体宣传组织',
    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      }
    },

    docFooter: { prev: '上一页', next: '下一页' },

    outline: {
      level: [2, 4],
      label: '页面导航',
    },

    notFound: {
      code: '404',
      title: '不存在的页面',
      quote: '这里什么都没有QAQ',
      linkText: '返回首页',
    },

    nav: [
      { text: "首页", link: "/" },
      { text: "找服玩", link: "/ServerClassification/" },
      { text: "添加服务器", link: "/AddServers/" },
      {
        text: "合作伙伴",
        items: [
          { text: "维和服区", link: "https://qm.qq.com/q/ftRMUc1ztm" },
          { text: "Cuberite Minecraft服务器联盟", link: "https://cmsa.flmp.uk/" }
        ]
      },
      {
        text: "友情链接",
        items: [
          { text: "MCJPG", link: "https://mcjpg.org/" },
          { text: "MC导航网", link: "https://www.mcicp.com/nav/" },
          { text: "和谐论坛", link: "https://bbs.hxit.top/" },
          { text: "Cuberite Minecraft服务器联盟", link: "https://cmsa.flmp.uk/" },
          {
            text: "开服文档",
            items: [
              { text: "集宣组织开服文档", link: "https://mscpodoc.netlify.app/" },
              { text: "笨蛋 MC 开服教程", link: "https://yizhan.wiki/NitWikit/" }
            ]
          },
        ]
      },
      {
        text: "更多",
        items: [
          { text: "关于", link: "/more/about/" },
          { text: "特别鸣谢", link: "/more/acknowledgement/" },
        ]
      },
      { text: "前往新站", link: "https://mscpo.crashvibe.cn/" },
    ],

    footer: {
      message: 'Minecraft Server Collective Promotion Organization | Minecraft集体宣传组织',
      copyright: '- Copyright © 2024-present <a href="http://mscpo.top/">MSCPO</a> -<br><a href="https://mcicp.com/index.php?search=2025000002">MCICP备2025000002号</a><br>本站总访问量 <span id="busuanzi_value_site_pv"></span> 次 | 本站访客数 <span id="busuanzi_value_site_uv"></span> 人次'
    },
    // DEV !!!
    sidebar: {
      '/more/': [
        {
          text: '更多',
          items: [
            { text: '关于我们', link: '/more/about/' },
            { text: '特别鸣谢', link: '/more/acknowledgement/' },
          ],
          collapsed: true, 
        }
      ],
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文章",
            buttonAriaLabel: "搜索文章",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
