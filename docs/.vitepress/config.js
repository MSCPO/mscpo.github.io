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
        description: '一个Minecraft服务器集体宣传组织',//Minecraft Server Collective Promotion Organization
        nav: [
            { text: "成员服", link: "/" },
            { text: "须知", link: "/rules/" },
            { text: "MCICP", link: "https://mcsite.cc/" },
            { text: "组织架构", link: "/structure/" },
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
};
