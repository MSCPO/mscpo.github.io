import { imgSize } from "@mdit/plugin-img-size";
import minipic from 'vite-plugin-minipic';
import timeline from "vitepress-markdown-timeline";
import ViteYaml from '@modyfi/vite-plugin-yaml'
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-mscpo'
// 语言文件
import { zh_CN } from './languages/zh_CN'
import { en } from './languages/en'
// import { pt } from './languages/pt'
// import { ru } from './languages/ru'
// import { es } from './languages/es'
// import { ko } from './languages/ko'

// COMMON
export default defineConfigWithTheme<VuetomThemeConfig>({
    head: [
        ['link', { rel: 'icon', href: '/logo2.webp' }],
    ],
    lastUpdated: true,
    lang: 'zh-CN',
    themeConfig: {
        logo: "/logo2.webp",
        logoImg: "/logo.webp",
        bgImg: "/bg.webp",
        bgColor: '0,0,0',
        bgOpacity: 0.6,
        flashEnable: true,
        flashColor: ['238,17,17', '0,98,255'],
        parallaxEnable: true,
        pageBgEnable: true,
        pageBgOpacity: 0.8,
        featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)'],
        socialLinks: [
            { icon: "github", link: "https://github.com/MSCPO" },
        ],
    },
    rewrites: {
      'zh_CN/:rest*': ':rest*'
    },
    // 语言引入
    locales: {
      root: { label: '简体中文', ...zh_CN },
      en: { label: 'English', ...en },
      // pt: { label: 'Português', ...pt },
      // ru: { label: 'Русский', ...ru },
      // es: { label: 'Español', ...es },
      // ko: { label: '한국어', ...ko }
    },
    vite: {
      ssr: {
        noExternal: ["vitepress-theme-mscpo"]
      },
      plugins: [
        ViteYaml(),
        minipic({
          sharpOptions: {
            avif: {
              quality: 75
            },
            jpeg: {
              quality: 75
            },
            jpg: {
              quality: 75
            },
            png: {
              quality: 75
            },
            webp: {
              quality: 75
            },
            gif:{}
          },
          convert: [
            { from: 'png', to: 'webp' },
            { from: 'jpg', to: 'webp' },
            { from: 'jpeg', to: 'webp' },
            { from: 'avif', to: 'webp' }
          ],
          cache: true
        })
      ]
    },
    markdown: {
      config: md => {
        md.use(imgSize);
        md.use(timeline);
        // md.use(InlineLinkPreviewElementTransform)
      },
      image: {
        lazyLoading: true
      },
    },
    sitemap: {
      hostname: 'https://mscpo.netlify.app/',
      lastmodDateOnly: false
    }
});
