import { imgSize } from "@mdit/plugin-img-size";
import { withPwa } from "@vite-pwa/vitepress";
import { pwa } from "./plugins/pwa";
import timeline from "vitepress-markdown-timeline";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import { defineConfigWithTheme } from "vitepress";
import type { VuetomThemeConfig } from "vitepress-theme-mscpo";
import viteCompression from "vite-plugin-compression";

// Language import
import { zh_CN } from "./i18n/zh_CN/index";

// COMMON
export default withPwa(
  defineConfigWithTheme<VuetomThemeConfig>({
    pwa,
    head: [["link", { rel: "icon", href: "/logo2.webp" }]],
    lastUpdated: true,
    lang: "zh-CN",
    themeConfig: {
      logo: "/logo2.webp",
      logoImg: "/logo.webp",
      bgImg: "/bg.webp",
      bgColor: "0,0,0",
      bgOpacity: 0.5,
      flashEnable: true,
      flashColor: ["238,17,17", "0,98,255"],
      parallaxEnable: true,
      pageBgEnable: true,
      pageBgOpacity: 0.8,
      featuresColor: ["#06cdff30", "rgba(223,7,107,.3)"],
      socialLinks: [{ icon: "github", link: "https://github.com/MSCPO" }],
    },
    rewrites: {
      "zh_CN/:rest*": ":rest*",
    },
    // Language introduction
    locales: {
      root: { label: "简体中文", ...zh_CN },
    },
    vite: {
      ssr: {
        noExternal: ["vitepress-theme-mscpo"],
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern",
          },
        },
      },
      plugins: [
        ViteYaml(),
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
        }),
      ],
    },
    markdown: {
      config: (md) => {
        md.use(imgSize);
        md.use(timeline);
        // md.use(InlineLinkPreviewElementTransform)
      },
      image: {
        lazyLoading: true,
      },
    },
    sitemap: {
      hostname: "https://mscpo.netlify.app/",
      lastmodDateOnly: false,
    },
  })
);
