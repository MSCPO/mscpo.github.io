// Konfiguracja - Sekcja języka
// Modyfikacje można znaleźć na stronie https://vitepress.dev/zh/.
// KONIEC
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-mscpo'

export const pt = defineConfigWithTheme<VuetomThemeConfig>({
    head: [
        ['link', { rel: 'icon', href: '/logo2.webp' }],
    ],
    title: 'MSCPO',
    lastUpdated: true,
    description: 'Minecraft Server Collective Promotion Organization (MSCPO) - An emerging organization dedicated to Minecraft server promotion and technical exchange.',
    lang: 'pt',
    themeConfig: {
        siteTitle: 'MSCPO',
        nav: [
            { text: "Members' Servers", link: "/pt/" },
            { text: "Add a Server", link: "/pt/AddServers/" },
            {
              text: "More",
              items: [
                { text: "About", link: "/pt/more/about/" },
                { text: "Special Thanks", link: "/pt/more/acknowledgement/" },
              ]
            },
            { text: "Navigation", link: "/pt/nav/" },
        ],
        footer: {
            message: 'Minecraft Server Collective Promotion Organization',
            copyright: '- Copyright © 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a> -<br>Site visits: <span id="busuanzi_value_site_pv"></span> | Unique visitors: <span id="busuanzi_value_site_uv"></span>'
        },
        lastUpdatedText: "Last updated",
        search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "Search articles",
                  buttonAriaLabel: "Search articles",
                },
                modal: {
                  noResultsText: "No relevant results found",
                  resetButtonTitle: "Clear search criteria",
                  footer: {
                    selectText: "Select",
                    navigateText: "Switch",
                  },
                },
              },
            },
          },
    }
})