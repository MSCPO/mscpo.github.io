// Configuration - Language part
// Please refer to https://vitepress.dev/en/ for modification
// END
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-mscpo'

export const en = defineConfigWithTheme<VuetomThemeConfig>({
  head: [
    ['link', { rel: 'icon', href: '/logo2.webp' }],
  ],
  title: 'MSCPO',
  lastUpdated: true,
  description: 'Minecraft Server Collective Promotion Organization (MSCPO) - An emerging organization dedicated to Minecraft server promotion and technical exchange.',
  lang: 'en',
  themeConfig: {
    siteTitle: 'MSCPO',
    nav: [
      { text: "Members' Servers", link: "/en/" },
      { text: "Server Classification", link: "/en/ServerClassification/" },
      { text: "Add a Server", link: "/en/AddServers/" },
      {
        text: "More",
        items: [
          { text: "About", link: "/en/more/about/" },
          { text: "Special Thanks", link: "/en/more/acknowledgement/" },
        ]
      },
      { text: "Navigation", link: "/en/nav/" },
    ],
    footer: {
      message: 'Minecraft Server Collective Promotion Organization',
      copyright: '- Copyright © 2024-present <a href="http://mscpo.top/">MSCPO</a> -<br>Site visits: <span id="busuanzi_value_site_pv"></span> | Unique visitors: <span id="busuanzi_value_site_uv"></span>'
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