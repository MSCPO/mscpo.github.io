import { imgSize } from "@mdit/plugin-img-size";
import { withPwa } from '@vite-pwa/vitepress'
import { pwa } from './plugins/pwa'
import minipic from 'vite-plugin-minipic';
import timeline from "vitepress-markdown-timeline";
import ViteYaml from '@modyfi/vite-plugin-yaml'
import { defineConfigWithTheme } from 'vitepress'
import type { VuetomThemeConfig } from 'vitepress-theme-mscpo'
import viteCompression from "vite-plugin-compression";
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// Language import
import { zh_CN } from './i18n/zh_CN'
import { en } from './i18n/en'
// import { pt } from './i18n/pt'
import { ru } from './i18n/ru'
// import { es } from './i18n/es'
// import { ko } from './i18n/ko'

// COMMON
export default withPwa(
  defineConfigWithTheme<VuetomThemeConfig>({
    pwa,
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
        bgOpacity: 0.5,
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
    // Language introduction
    locales: {
      root: { label: '简体中文', ...zh_CN },
      en: { label: 'English', ...en },
      // pt: { label: 'Português', ...pt },
      ru: { label: 'Русский', ...ru },
      // es: { label: 'Español', ...es },
      // ko: { label: '한국어', ...ko }
    },
    vite: {
      ssr: {
        noExternal: ["vitepress-theme-mscpo"]
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern",
          },
        },
      },
      plugins: [
        quasar(),
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
        }),
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: "gzip",
          ext: ".gz",
        }),
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: "brotliCompress",
          ext: ".br",
        })
      ]
    },
    vue: {
      template: { transformAssetUrls },
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
  })
);
