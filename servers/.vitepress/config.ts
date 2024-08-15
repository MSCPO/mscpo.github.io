import { imgSize } from "@mdit/plugin-img-size";

export default {
    head: [
        ['link', { rel: 'icon', href: '/logo2.png' }],
    ],
    title: '服务器集体宣传组织',
    lastUpdated: true,
    description: 'Minecraft服务器集体宣传组织 (MSCPO)-一个致力于我的世界服务器宣传和技术交流的新兴组织',
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: '服务器集体宣传组织', //站点标题
        logo: "/logo2.png",

        logoImg: "/logo.png",
        bgImg: "/bg.webp",
        bgColor: '0,0,0',
        bgOpacity: 0.6,
        flashEnable: true,
        flashColor: ['238,17,17', '0,98,255'],
        parallaxEnable: true,
        pageBgEnable: true,
        pageBgOpacity: 0.8,
        featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)'],

        description: '一个Minecraft服务器集体宣传组织',//Minecraft Server Collective Promotion Organization
        nav: [
            { text: "成员服", link: "/" },
            { text: "须知", link: "/rules/" },
            {
              text: "开服文档",
              items: [
                { text: "集宣组织开服文档", link: "https://mscpodoc.netlify.app/" },
                { text: "笨蛋 MC 开服教程", link: "https://yizhan.wiki/NitWikit/" }
              ]
            },
            {
              text: "友情链接",
              items: [
                { text: "MCICP", link: "https://mcsite.cc/" },
              ]
            },
            { text: "特别鸣谢", link: "/acknowledgement/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MSCPO" },
        ],
        footer: {
            message: 'Minecraft Server Collective Promotion Organization',
            copyright: '-Copyright © 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a>— —<a href="https://icp.mcsite.cc/mc/00000003.html">MCICP备案</a>-'
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
    },
    vite: {
      ssr: {
        noExternal: ["vitepress-theme-vuetom"]
      }
    },
    markdown: {
      config: md => {
        md.use(imgSize)
        // md.use(InlineLinkPreviewElementTransform)
      },
      image: {
        lazyLoading: true
      },
    },
};
