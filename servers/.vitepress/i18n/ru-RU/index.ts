// Конфигурация - Раздел «Язык
// Пожалуйста, обратитесь к https://vitepress.dev/ru/ для внесения изменений
// END
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-mscpo'

export const ru = defineConfigWithTheme<VuetomThemeConfig>({
  head: [
    ['link', { rel: 'icon', href: '/logo2.webp' }],
  ],
  title: 'MSCPO',
  lastUpdated: true,
  description: 'Организация коллективного продвижения серверов Minecraft (MSCPO) - развивающаяся организация, занимающаяся продвижением серверов Minecraft и техническим обменом.',
  lang: 'ru',
  themeConfig: {
    siteTitle: 'MSCPO',
    nav: [
      { text: "Серверы для членов", link: "/ru/" },
      { text: "Добавить сервер", link: "/ru/AddServers/" },
      {
        text: "Подробнее",
        items: [
          { text: "О сайте", link: "/ru/more/about/" },
          { text: "Особая благодарность", link: "/ru/more/acknowledgement/" },
        ]
      },
      { text: "Навигация", link: "/ru/nav/" },
    ],
    footer: {
      message: 'Организация коллективного продвижения сервера Minecraft',
      copyright: '- Copyright © 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a> -<br>Посещение объектов: <span id="busuanzi_value_site_pv"></span> | Уникальные посетители: <span id="busuanzi_value_site_uv"></span>'
    },
    lastUpdatedText: "Последнее обновление",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Поиск статей",
            buttonAriaLabel: "Поиск статей",
          },
          modal: {
            noResultsText: "Соответствующие результаты не найдены",
            resetButtonTitle: "Четкие критерии поиска",
            footer: {
              selectText: "Выберите",
              navigateText: "Переключатель",
            },
          },
        },
      },
    },
  }
})