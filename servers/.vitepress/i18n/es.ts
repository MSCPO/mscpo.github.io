// Configuración - Sección de idioma
// Consulte el https://vitepress.dev/es/ para ver la modificación
// FIN
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-mscpo'

export const es = defineConfigWithTheme<VuetomThemeConfig>({
    head: [
        ['link', { rel: 'icon', href: '/logo2.webp' }],
    ],
    title: 'MSCPO',
    lastUpdated: true,
    description: 'Minecraft Server Collective Promotion Organization (MSCPO) - An emerging organization dedicated to Minecraft server promotion and technical exchange.',
    lang: 'es',
    themeConfig: {
        siteTitle: 'MSCPO',
        nav: [
            { text: "Members' Servers", link: "/en/" },
            { text: "Add a Server", link: "/en/AddServers/" },
            {
              text: "More",
              items: [
                { text: "About", link: "/en/about/" },
                { text: "Special Thanks", link: "/en/acknowledgement/" },
              ]
            },
            { text: "Navigation", link: "/en/nav/" },
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