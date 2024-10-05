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
        nav: [
            { text: "成员服", link: "/" },
            { text: "添加服务器", link: "/AddServers/" },
            {
              text: "友情链接",
              items: [
                { text: "MCJPG", link: "https://mcjpg.org/" },
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
                { text: "关于", link: "/about/" },
                { text: "特别鸣谢", link: "/acknowledgement/" },
              ]
            },
            { text: "导航", link: "/nav/" },
        ],
        footer: {
            message: 'Minecraft Server Collective Promotion Organization | Minecraft集体宣传组织',
            copyright: '- Copyright © 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a> -<br>本站总访问量 <span id="busuanzi_value_site_pv"></span> 次 | 本站访客数 <span id="busuanzi_value_site_uv"></span> 人次'
        },
        lastUpdatedText: "最近更新时间",
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