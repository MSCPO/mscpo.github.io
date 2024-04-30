export default {
    head: [
        ['link', { rel: 'icon', href: '/logo2.png' }],
    ],
    title: '服务器集体宣传组织',
    description: '一个Minecraft服务器集体宣传组织',
    lang: 'zh-CN',
    themeConfig: {
        siteTitle: '服务器集体宣传组织', //站点标题
        logo: "/logo2.png",
        description: '一个Minecraft服务器集体宣传组织',//Minecraft Server Collective Promotion Organization
        nav: [
            {
                text: '服务器',
                items: [
                  { text: "成员服", link: "/" },
                  { text: "已离开的成员服", link: "/return/" },
                ]
            },
            { text: "须知", link: "/rules/" },
            { text: "组织架构", link: "/structure/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MSCPO" },
        ],
        footer: {
            message: 'Minecraft Server Collective Promotion Organization',
            copyright: 'Copyright © 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a>'
        },
    },
};
