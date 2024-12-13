// servers/.vitepress/config.ts
import { imgSize } from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/@mdit+plugin-img-size@0.14.0_markdown-it@14.1.0/node_modules/@mdit/plugin-img-size/lib/index.js";
import { withPwa } from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/@vite-pwa+vitepress@0.5.3_vite-plugin-pwa@0.21.1_vite@5.4.11_less@4.2.1_sass@1.82.0_terser@5._prr7c43tw4we34ug5mieo3i5gi/node_modules/@vite-pwa/vitepress/dist/index.mjs";

// servers/.vitepress/plugins/pwa.ts
import fg from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/fast-glob@3.3.2/node_modules/fast-glob/out/index.js";
import { resolve } from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Blog\\mscpo.github.io\\servers\\.vitepress\\plugins";
var githubSourceContentRegex = new RegExp("^https://(((raw|user-images|camo).githubusercontent.com))/.*", "i");
var googleFontRegex = new RegExp("^https://fonts.googleapis.com/.*", "i");
var googleStaticFontRegex = new RegExp("^https://fonts.gstatic.com/.*", "i");
var jsdelivrCDNRegex = new RegExp("^https://cdn.jsdelivr.net/.*", "i");
var pwa = {
  outDir: "./.vitepress/dist",
  registerType: "autoUpdate",
  // include all static assets under public/
  includeAssets: fg.sync("**/*.{png,svg,gif,ico,txt}", { cwd: resolve(__vite_injected_original_dirname, "../../public") }),
  manifest: {
    id: "/",
    name: "Minecraft Server Collective Promotion Organization",
    short_name: "MSCPO",
    description: "The Minecraft Server Collective Promotion Organization (MSCPO) is an up-and-coming organization dedicated to the propaganda and technical communication of Minecraft servers (x) Fellow server owners group (\u221A)",
    theme_color: "#06f",
    icons: [
      {
        src: "/pwa-120x120.webp",
        sizes: "120x120",
        type: "image/webp"
      },
      {
        src: "/pwa-192x192.webp",
        sizes: "192x192",
        type: "image/webp"
      },
      {
        src: "/pwa-512x512.webp",
        sizes: "512x512",
        type: "image/webp"
      }
    ]
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    globPatterns: ["**/*.{js,css,webp,png,svg,gif,ico,woff2}"],
    navigateFallback: null,
    runtimeCaching: [
      {
        urlPattern: googleFontRegex,
        handler: "CacheFirst",
        options: {
          cacheName: "google-font-style-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365
            // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: googleStaticFontRegex,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365
            // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: jsdelivrCDNRegex,
        handler: "CacheFirst",
        options: {
          cacheName: "jsdelivr-cdn-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365
            // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: githubSourceContentRegex,
        handler: "CacheFirst",
        options: {
          cacheName: "githubusercontent-images-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365
            // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

// servers/.vitepress/config.ts
import timeline from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/vitepress-markdown-timeline@1.2.1/node_modules/vitepress-markdown-timeline/dist/cjs/index.cjs.js";
import ViteYaml from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/@modyfi+vite-plugin-yaml@1.1.0_rollup@2.79.2_vite@5.4.11_less@4.2.1_sass@1.82.0_terser@5.37.0_/node_modules/@modyfi/vite-plugin-yaml/dist/index.js";
import { defineConfigWithTheme as defineConfigWithTheme4 } from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/@mscpo+vitepress@1.5.0_async-validator@4.2.5_less@4.2.1_nprogress@0.2.0_postcss@8.4.49_qrcode_xgo7bgo2nal3dzyomtmpqpltxa/node_modules/@mscpo/vitepress/dist/node/index.js";
import viteCompression from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.11_less@4.2.1_sass@1.82.0_terser@5.37.0_/node_modules/vite-plugin-compression/dist/index.mjs";

// servers/.vitepress/i18n/zh_CN.ts
import { defineConfigWithTheme } from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/@mscpo+vitepress@1.5.0_async-validator@4.2.5_less@4.2.1_nprogress@0.2.0_postcss@8.4.49_qrcode_xgo7bgo2nal3dzyomtmpqpltxa/node_modules/@mscpo/vitepress/dist/node/index.js";
var zh_CN = defineConfigWithTheme({
  title: "\u670D\u52A1\u5668\u96C6\u4F53\u5BA3\u4F20\u7EC4\u7EC7",
  lastUpdated: true,
  description: "Minecraft\u670D\u52A1\u5668\u96C6\u4F53\u5BA3\u4F20\u7EC4\u7EC7 (MSCPO)-\u4E00\u4E2A\u81F4\u529B\u4E8E\u6211\u7684\u4E16\u754C\u670D\u52A1\u5668\u5BA3\u4F20\u548C\u6280\u672F\u4EA4\u6D41\u7684\u65B0\u5174\u7EC4\u7EC7",
  lang: "zh-CN",
  themeConfig: {
    siteTitle: "\u670D\u52A1\u5668\u96C6\u4F53\u5BA3\u4F20\u7EC4\u7EC7",
    externalLinkIcon: true,
    langMenuLabel: "\u5207\u6362\u8BED\u8A00",
    darkModeSwitchLabel: "\u4E3B\u9898",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
    sidebarMenuLabel: "\u83DC\u5355",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    lastUpdated: {
      text: "\u6700\u540E\u66F4\u65B0\u4E8E",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    docFooter: { prev: "\u4E0A\u4E00\u9875", next: "\u4E0B\u4E00\u9875" },
    outline: {
      level: [2, 4],
      label: "\u9875\u9762\u5BFC\u822A"
    },
    notFound: {
      code: "404",
      title: "\u4E0D\u5B58\u5728\u7684\u9875\u9762",
      quote: "\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709QAQ",
      linkText: "\u8FD4\u56DE\u9996\u9875"
    },
    nav: [
      { text: "\u6210\u5458\u670D", link: "/" },
      { text: "\u6DFB\u52A0\u670D\u52A1\u5668", link: "/AddServers/" },
      {
        text: "\u53CB\u60C5\u94FE\u63A5",
        items: [
          { text: "MCJPG", link: "https://mcjpg.org/" },
          {
            text: "\u5F00\u670D\u6587\u6863",
            items: [
              { text: "\u96C6\u5BA3\u7EC4\u7EC7\u5F00\u670D\u6587\u6863", link: "https://mscpodoc.netlify.app/" },
              { text: "\u7B28\u86CB MC \u5F00\u670D\u6559\u7A0B", link: "https://yizhan.wiki/NitWikit/" }
            ]
          }
        ]
      },
      {
        text: "\u66F4\u591A",
        items: [
          { text: "\u5173\u4E8E", link: "/more/about/" },
          { text: "\u7279\u522B\u9E23\u8C22", link: "/more/acknowledgement/" }
        ]
      },
      { text: "\u5BFC\u822A", link: "/nav/" }
    ],
    footer: {
      message: "Minecraft Server Collective Promotion Organization | Minecraft\u96C6\u4F53\u5BA3\u4F20\u7EC4\u7EC7",
      copyright: '- Copyright \xA9 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a> -<br>\u672C\u7AD9\u603B\u8BBF\u95EE\u91CF <span id="busuanzi_value_site_pv"></span> \u6B21 | \u672C\u7AD9\u8BBF\u5BA2\u6570 <span id="busuanzi_value_site_uv"></span> \u4EBA\u6B21'
    },
    sidebar: {
      "/more/": [
        {
          text: "\u5173\u4E8E\u96C6\u5BA3\u7EC4\u7EC7",
          items: [
            { text: "\u5173\u4E8E\u96C6\u5BA3\u7EC4\u7EC7", link: "/more/about/" }
          ]
        }
      ]
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "\u641C\u7D22\u6587\u7AE0",
            buttonAriaLabel: "\u641C\u7D22\u6587\u7AE0"
          },
          modal: {
            noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
            resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
            footer: {
              selectText: "\u9009\u62E9",
              navigateText: "\u5207\u6362"
            }
          }
        }
      }
    }
  }
});

// servers/.vitepress/i18n/en.ts
import { defineConfigWithTheme as defineConfigWithTheme2 } from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/@mscpo+vitepress@1.5.0_async-validator@4.2.5_less@4.2.1_nprogress@0.2.0_postcss@8.4.49_qrcode_xgo7bgo2nal3dzyomtmpqpltxa/node_modules/@mscpo/vitepress/dist/node/index.js";
var en = defineConfigWithTheme2({
  head: [
    ["link", { rel: "icon", href: "/logo2.webp" }]
  ],
  title: "MSCPO",
  lastUpdated: true,
  description: "Minecraft Server Collective Promotion Organization (MSCPO) - An emerging organization dedicated to Minecraft server promotion and technical exchange.",
  lang: "en",
  themeConfig: {
    siteTitle: "MSCPO",
    nav: [
      { text: "Members' Servers", link: "/en/" },
      { text: "Add a Server", link: "/en/AddServers/" },
      {
        text: "More",
        items: [
          { text: "About", link: "/en/more/about/" },
          { text: "Special Thanks", link: "/en/more/acknowledgement/" }
        ]
      },
      { text: "Navigation", link: "/en/nav/" }
    ],
    footer: {
      message: "Minecraft Server Collective Promotion Organization",
      copyright: '- Copyright \xA9 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a> -<br>Site visits: <span id="busuanzi_value_site_pv"></span> | Unique visitors: <span id="busuanzi_value_site_uv"></span>'
    },
    lastUpdatedText: "Last updated",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search articles",
            buttonAriaLabel: "Search articles"
          },
          modal: {
            noResultsText: "No relevant results found",
            resetButtonTitle: "Clear search criteria",
            footer: {
              selectText: "Select",
              navigateText: "Switch"
            }
          }
        }
      }
    }
  }
});

// servers/.vitepress/i18n/ru.ts
import { defineConfigWithTheme as defineConfigWithTheme3 } from "file:///D:/Blog/mscpo.github.io/node_modules/.pnpm/@mscpo+vitepress@1.5.0_async-validator@4.2.5_less@4.2.1_nprogress@0.2.0_postcss@8.4.49_qrcode_xgo7bgo2nal3dzyomtmpqpltxa/node_modules/@mscpo/vitepress/dist/node/index.js";
var ru = defineConfigWithTheme3({
  head: [
    ["link", { rel: "icon", href: "/logo2.webp" }]
  ],
  title: "MSCPO",
  lastUpdated: true,
  description: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 Minecraft (MSCPO) - \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F, \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 Minecraft \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043E\u0431\u043C\u0435\u043D\u043E\u043C.",
  lang: "ru",
  themeConfig: {
    siteTitle: "MSCPO",
    nav: [
      { text: "\u0421\u0435\u0440\u0432\u0435\u0440\u044B \u0434\u043B\u044F \u0447\u043B\u0435\u043D\u043E\u0432", link: "/ru/" },
      { text: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0432\u0435\u0440", link: "/ru/AddServers/" },
      {
        text: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
        items: [
          { text: "\u041E \u0441\u0430\u0439\u0442\u0435", link: "/ru/more/about/" },
          { text: "\u041E\u0441\u043E\u0431\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C", link: "/ru/more/acknowledgement/" }
        ]
      },
      { text: "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F", link: "/ru/nav/" }
    ],
    footer: {
      message: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Minecraft",
      copyright: '- Copyright \xA9 2024-present <a href="http://mscpo.netlify.app/">MSCPO</a> -<br>\u041F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432: <span id="busuanzi_value_site_pv"></span> | \u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0438: <span id="busuanzi_value_site_uv"></span>'
    },
    lastUpdatedText: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "\u041F\u043E\u0438\u0441\u043A \u0441\u0442\u0430\u0442\u0435\u0439",
            buttonAriaLabel: "\u041F\u043E\u0438\u0441\u043A \u0441\u0442\u0430\u0442\u0435\u0439"
          },
          modal: {
            noResultsText: "\u0421\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
            resetButtonTitle: "\u0427\u0435\u0442\u043A\u0438\u0435 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u043E\u0438\u0441\u043A\u0430",
            footer: {
              selectText: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435",
              navigateText: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C"
            }
          }
        }
      }
    }
  }
});

// servers/.vitepress/config.ts
var config_default = withPwa(
  defineConfigWithTheme4({
    pwa,
    head: [
      ["link", { rel: "icon", href: "/logo2.webp" }]
    ],
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
      socialLinks: [
        { icon: "github", link: "https://github.com/MSCPO" }
      ]
    },
    rewrites: {
      "zh_CN/:rest*": ":rest*"
    },
    // Language introduction
    locales: {
      root: { label: "\u7B80\u4F53\u4E2D\u6587", ...zh_CN },
      en: { label: "English", ...en },
      // pt: { label: 'Português', ...pt },
      ru: { label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", ...ru }
      // es: { label: 'Español', ...es },
      // ko: { label: '한국어', ...ko }
    },
    vite: {
      ssr: {
        noExternal: [
          "vitepress-theme-mscpo"
        ]
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern"
          }
        }
      },
      plugins: [
        ViteYaml(),
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: "gzip",
          ext: ".gz"
        }),
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: "brotliCompress",
          ext: ".br"
        })
      ]
    },
    markdown: {
      config: (md) => {
        md.use(imgSize);
        md.use(timeline);
      },
      image: {
        lazyLoading: true
      }
    },
    sitemap: {
      hostname: "https://mscpo.netlify.app/",
      lastmodDateOnly: false
    }
  })
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic2VydmVycy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJzZXJ2ZXJzLy52aXRlcHJlc3MvcGx1Z2lucy9wd2EudHMiLCAic2VydmVycy8udml0ZXByZXNzL2kxOG4vemhfQ04udHMiLCAic2VydmVycy8udml0ZXByZXNzL2kxOG4vZW4udHMiLCAic2VydmVycy8udml0ZXByZXNzL2kxOG4vcnUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxCbG9nXFxcXG1zY3BvLmdpdGh1Yi5pb1xcXFxzZXJ2ZXJzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEJsb2dcXFxcbXNjcG8uZ2l0aHViLmlvXFxcXHNlcnZlcnNcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Jsb2cvbXNjcG8uZ2l0aHViLmlvL3NlcnZlcnMvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBpbWdTaXplIH0gZnJvbSBcIkBtZGl0L3BsdWdpbi1pbWctc2l6ZVwiO1xyXG5pbXBvcnQgeyB3aXRoUHdhIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcydcclxuaW1wb3J0IHsgcHdhIH0gZnJvbSAnLi9wbHVnaW5zL3B3YSdcclxuaW1wb3J0IHRpbWVsaW5lIGZyb20gXCJ2aXRlcHJlc3MtbWFya2Rvd24tdGltZWxpbmVcIjtcclxuaW1wb3J0IFZpdGVZYW1sIGZyb20gJ0Btb2R5Zmkvdml0ZS1wbHVnaW4teWFtbCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgdHlwZSB7IFZ1ZXRvbVRoZW1lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzLXRoZW1lLW1zY3BvJ1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xyXG5cclxuLy8gTGFuZ3VhZ2UgaW1wb3J0XHJcbmltcG9ydCB7IHpoX0NOIH0gZnJvbSAnLi9pMThuL3poX0NOJ1xyXG5pbXBvcnQgeyBlbiB9IGZyb20gJy4vaTE4bi9lbidcclxuLy8gaW1wb3J0IHsgcHQgfSBmcm9tICcuL2kxOG4vcHQnXHJcbmltcG9ydCB7IHJ1IH0gZnJvbSAnLi9pMThuL3J1J1xyXG4vLyBpbXBvcnQgeyBlcyB9IGZyb20gJy4vaTE4bi9lcydcclxuLy8gaW1wb3J0IHsga28gfSBmcm9tICcuL2kxOG4va28nXHJcblxyXG4vLyBDT01NT05cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShcclxuICBkZWZpbmVDb25maWdXaXRoVGhlbWU8VnVldG9tVGhlbWVDb25maWc+KHtcclxuICAgIHB3YSxcclxuICAgIGhlYWQ6IFtcclxuICAgICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9sb2dvMi53ZWJwJyB9XSxcclxuICAgIF0sXHJcbiAgICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICAgIGxhbmc6ICd6aC1DTicsXHJcbiAgICB0aGVtZUNvbmZpZzoge1xyXG4gICAgICBsb2dvOiBcIi9sb2dvMi53ZWJwXCIsXHJcbiAgICAgIGxvZ29JbWc6IFwiL2xvZ28ud2VicFwiLFxyXG4gICAgICBiZ0ltZzogXCIvYmcud2VicFwiLFxyXG4gICAgICBiZ0NvbG9yOiAnMCwwLDAnLFxyXG4gICAgICBiZ09wYWNpdHk6IDAuNSxcclxuICAgICAgZmxhc2hFbmFibGU6IHRydWUsXHJcbiAgICAgIGZsYXNoQ29sb3I6IFsnMjM4LDE3LDE3JywgJzAsOTgsMjU1J10sXHJcbiAgICAgIHBhcmFsbGF4RW5hYmxlOiB0cnVlLFxyXG4gICAgICBwYWdlQmdFbmFibGU6IHRydWUsXHJcbiAgICAgIHBhZ2VCZ09wYWNpdHk6IDAuOCxcclxuICAgICAgZmVhdHVyZXNDb2xvcjogWycjMDZjZGZmMzAnLCAncmdiYSgyMjMsNywxMDcsLjMpJ10sXHJcbiAgICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgICAgeyBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NU0NQT1wiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgcmV3cml0ZXM6IHtcclxuICAgICAgJ3poX0NOLzpyZXN0Kic6ICc6cmVzdConXHJcbiAgICB9LFxyXG4gICAgLy8gTGFuZ3VhZ2UgaW50cm9kdWN0aW9uXHJcbiAgICBsb2NhbGVzOiB7XHJcbiAgICAgIHJvb3Q6IHsgbGFiZWw6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLCAuLi56aF9DTiB9LFxyXG4gICAgICBlbjogeyBsYWJlbDogJ0VuZ2xpc2gnLCAuLi5lbiB9LFxyXG4gICAgICAvLyBwdDogeyBsYWJlbDogJ1BvcnR1Z3VcdTAwRUFzJywgLi4ucHQgfSxcclxuICAgICAgcnU6IHsgbGFiZWw6ICdcdTA0MjBcdTA0NDNcdTA0NDFcdTA0NDFcdTA0M0FcdTA0MzhcdTA0MzknLCAuLi5ydSB9LFxyXG4gICAgICAvLyBlczogeyBsYWJlbDogJ0VzcGFcdTAwRjFvbCcsIC4uLmVzIH0sXHJcbiAgICAgIC8vIGtvOiB7IGxhYmVsOiAnXHVENTVDXHVBRDZEXHVDNUI0JywgLi4ua28gfVxyXG4gICAgfSxcclxuICAgIHZpdGU6IHtcclxuICAgICAgc3NyOiB7XHJcbiAgICAgICAgbm9FeHRlcm5hbDogW1xyXG4gICAgICAgICAgXCJ2aXRlcHJlc3MtdGhlbWUtbXNjcG9cIlxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgY3NzOiB7XHJcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgICBhcGk6IFwibW9kZXJuXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBWaXRlWWFtbCgpLFxyXG4gICAgICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgICAgICB2ZXJib3NlOiB0cnVlLFxyXG4gICAgICAgICAgZGlzYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICB0aHJlc2hvbGQ6IDEwMjQwLFxyXG4gICAgICAgICAgYWxnb3JpdGhtOiBcImd6aXBcIixcclxuICAgICAgICAgIGV4dDogXCIuZ3pcIixcclxuICAgICAgICB9KSxcclxuICAgICAgICB2aXRlQ29tcHJlc3Npb24oe1xyXG4gICAgICAgICAgdmVyYm9zZTogdHJ1ZSxcclxuICAgICAgICAgIGRpc2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgdGhyZXNob2xkOiAxMDI0MCxcclxuICAgICAgICAgIGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiLFxyXG4gICAgICAgICAgZXh0OiBcIi5iclwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBtYXJrZG93bjoge1xyXG4gICAgICBjb25maWc6IG1kID0+IHtcclxuICAgICAgICBtZC51c2UoaW1nU2l6ZSk7XHJcbiAgICAgICAgbWQudXNlKHRpbWVsaW5lKTtcclxuICAgICAgICAvLyBtZC51c2UoSW5saW5lTGlua1ByZXZpZXdFbGVtZW50VHJhbnNmb3JtKVxyXG4gICAgICB9LFxyXG4gICAgICBpbWFnZToge1xyXG4gICAgICAgIGxhenlMb2FkaW5nOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2l0ZW1hcDoge1xyXG4gICAgICBob3N0bmFtZTogJ2h0dHBzOi8vbXNjcG8ubmV0bGlmeS5hcHAvJyxcclxuICAgICAgbGFzdG1vZERhdGVPbmx5OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQmxvZ1xcXFxtc2Nwby5naXRodWIuaW9cXFxcc2VydmVyc1xcXFwudml0ZXByZXNzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEJsb2dcXFxcbXNjcG8uZ2l0aHViLmlvXFxcXHNlcnZlcnNcXFxcLnZpdGVwcmVzc1xcXFxwbHVnaW5zXFxcXHB3YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQmxvZy9tc2Nwby5naXRodWIuaW8vc2VydmVycy8udml0ZXByZXNzL3BsdWdpbnMvcHdhLnRzXCI7aW1wb3J0IGZnIGZyb20gJ2Zhc3QtZ2xvYidcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGhlJ1xyXG5pbXBvcnQgdHlwZSB7IFZpdGVQV0FPcHRpb25zIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5cclxuY29uc3QgZ2l0aHViU291cmNlQ29udGVudFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXmh0dHBzOi8vKCgocmF3fHVzZXItaW1hZ2VzfGNhbW8pLmdpdGh1YnVzZXJjb250ZW50LmNvbSkpLy4qJywgJ2knKVxyXG5jb25zdCBnb29nbGVGb250UmVnZXggPSBuZXcgUmVnRXhwKCdeaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS8uKicsICdpJylcclxuY29uc3QgZ29vZ2xlU3RhdGljRm9udFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXmh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vLionLCAnaScpXHJcbmNvbnN0IGpzZGVsaXZyQ0ROUmVnZXggPSBuZXcgUmVnRXhwKCdeaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0Ly4qJywgJ2knKVxyXG4vKipcclxuICogVml0ZSBQbHVnaW4gUFdBIHVzZXMgV29ya2JveCAgbGlicmFyeSB0byBidWlsZCB0aGUgc2VydmljZSB3b3JrZXJcclxuICogY2FuIGZpbmQgbW9yZSBpbmZvcm1hdGlvbiBvbiBXb3JrYm94IHNlY3Rpb24uXHJcbiAqIEBzZWUgaHR0cHM6Ly92aXRlLXBsdWdpbi1wd2EubmV0bGlmeS5hcHAvXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcHdhOiBQYXJ0aWFsPFZpdGVQV0FPcHRpb25zPiA9IHtcclxuICBvdXREaXI6ICcuLy52aXRlcHJlc3MvZGlzdCcsXHJcbiAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgLy8gaW5jbHVkZSBhbGwgc3RhdGljIGFzc2V0cyB1bmRlciBwdWJsaWMvXHJcbiAgaW5jbHVkZUFzc2V0czogZmcuc3luYygnKiovKi57cG5nLHN2ZyxnaWYsaWNvLHR4dH0nLCB7IGN3ZDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wdWJsaWMnKSB9KSxcclxuICBtYW5pZmVzdDoge1xyXG4gICAgaWQ6ICcvJyxcclxuICAgIG5hbWU6IFwiTWluZWNyYWZ0IFNlcnZlciBDb2xsZWN0aXZlIFByb21vdGlvbiBPcmdhbml6YXRpb25cIixcclxuICAgIHNob3J0X25hbWU6IFwiTVNDUE9cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBNaW5lY3JhZnQgU2VydmVyIENvbGxlY3RpdmUgUHJvbW90aW9uIE9yZ2FuaXphdGlvbiAoTVNDUE8pIGlzIGFuIHVwLWFuZC1jb21pbmcgb3JnYW5pemF0aW9uIGRlZGljYXRlZCB0byB0aGUgcHJvcGFnYW5kYSBhbmQgdGVjaG5pY2FsIGNvbW11bmljYXRpb24gb2YgTWluZWNyYWZ0IHNlcnZlcnMgKHgpIEZlbGxvdyBzZXJ2ZXIgb3duZXJzIGdyb3VwIChcdTIyMUEpXCIsXHJcbiAgICB0aGVtZV9jb2xvcjogJyMwNmYnLFxyXG4gICAgaWNvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogJy9wd2EtMTIweDEyMC53ZWJwJyxcclxuICAgICAgICBzaXplczogJzEyMHgxMjAnLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS93ZWJwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi53ZWJwJyxcclxuICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS93ZWJwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi53ZWJwJyxcclxuICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS93ZWJwJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB3b3JrYm94OiB7XHJcbiAgICBuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFsvXlxcL25ldyQvXSxcclxuICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3Msd2VicCxwbmcsc3ZnLGdpZixpY28sd29mZjJ9J10sXHJcbiAgICBuYXZpZ2F0ZUZhbGxiYWNrOiBudWxsLFxyXG4gICAgcnVudGltZUNhY2hpbmc6IFtcclxuICAgICAge1xyXG4gICAgICAgIHVybFBhdHRlcm46IGdvb2dsZUZvbnRSZWdleCxcclxuICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnQtc3R5bGUtY2FjaGUnLFxyXG4gICAgICAgICAgZXhwaXJhdGlvbjoge1xyXG4gICAgICAgICAgICBtYXhFbnRyaWVzOiAxMCxcclxuICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1LCAvLyA8PT0gMzY1IGRheXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xyXG4gICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB1cmxQYXR0ZXJuOiBnb29nbGVTdGF0aWNGb250UmVnZXgsXHJcbiAgICAgICAgaGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGNhY2hlTmFtZTogJ2dvb2dsZS1mb250cy1jYWNoZScsXHJcbiAgICAgICAgICBleHBpcmF0aW9uOiB7XHJcbiAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxyXG4gICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUsIC8vIDw9PSAzNjUgZGF5c1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XHJcbiAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVybFBhdHRlcm46IGpzZGVsaXZyQ0ROUmVnZXgsXHJcbiAgICAgICAgaGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGNhY2hlTmFtZTogJ2pzZGVsaXZyLWNkbi1jYWNoZScsXHJcbiAgICAgICAgICBleHBpcmF0aW9uOiB7XHJcbiAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxyXG4gICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUsIC8vIDw9PSAzNjUgZGF5c1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XHJcbiAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVybFBhdHRlcm46IGdpdGh1YlNvdXJjZUNvbnRlbnRSZWdleCxcclxuICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgY2FjaGVOYW1lOiAnZ2l0aHVidXNlcmNvbnRlbnQtaW1hZ2VzLWNhY2hlJyxcclxuICAgICAgICAgIGV4cGlyYXRpb246IHtcclxuICAgICAgICAgICAgbWF4RW50cmllczogMTAsXHJcbiAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSwgLy8gPD09IDM2NSBkYXlzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHtcclxuICAgICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxCbG9nXFxcXG1zY3BvLmdpdGh1Yi5pb1xcXFxzZXJ2ZXJzXFxcXC52aXRlcHJlc3NcXFxcaTE4blwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQmxvZ1xcXFxtc2Nwby5naXRodWIuaW9cXFxcc2VydmVyc1xcXFwudml0ZXByZXNzXFxcXGkxOG5cXFxcemhfQ04udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Jsb2cvbXNjcG8uZ2l0aHViLmlvL3NlcnZlcnMvLnZpdGVwcmVzcy9pMThuL3poX0NOLnRzXCI7Ly8gXHU5MTREXHU3RjZFIC0gXHU4QkVEXHU4QTAwXHU5MEU4XHU1MjA2XHJcbi8vIFx1OEJGN1x1NTNDMlx1NzE2NyBodHRwczovL3ZpdGVwcmVzcy5kZXYvemgvIFx1NEZFRVx1NjUzOVxyXG4vLyBFTkRcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnV2l0aFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgdHlwZSB7IFZ1ZXRvbVRoZW1lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzLXRoZW1lLW1zY3BvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoX0NOID0gZGVmaW5lQ29uZmlnV2l0aFRoZW1lPFZ1ZXRvbVRoZW1lQ29uZmlnPih7XHJcbiAgdGl0bGU6ICdcdTY3MERcdTUyQTFcdTU2NjhcdTk2QzZcdTRGNTNcdTVCQTNcdTRGMjBcdTdFQzRcdTdFQzcnLFxyXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gIGRlc2NyaXB0aW9uOiAnTWluZWNyYWZ0XHU2NzBEXHU1MkExXHU1NjY4XHU5NkM2XHU0RjUzXHU1QkEzXHU0RjIwXHU3RUM0XHU3RUM3IChNU0NQTyktXHU0RTAwXHU0RTJBXHU4MUY0XHU1MjlCXHU0RThFXHU2MjExXHU3Njg0XHU0RTE2XHU3NTRDXHU2NzBEXHU1MkExXHU1NjY4XHU1QkEzXHU0RjIwXHU1NDhDXHU2MjgwXHU2NzJGXHU0RUE0XHU2RDQxXHU3Njg0XHU2NUIwXHU1MTc0XHU3RUM0XHU3RUM3JyxcclxuICBsYW5nOiAnemgtQ04nLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBzaXRlVGl0bGU6ICdcdTY3MERcdTUyQTFcdTU2NjhcdTk2QzZcdTRGNTNcdTVCQTNcdTRGMjBcdTdFQzRcdTdFQzcnLFxyXG4gICAgZXh0ZXJuYWxMaW5rSWNvbjogdHJ1ZSxcclxuICAgIGxhbmdNZW51TGFiZWw6ICdcdTUyMDdcdTYzNjJcdThCRURcdThBMDAnLFxyXG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NEUzQlx1OTg5OCcsXHJcbiAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRicsXHJcbiAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU1MjMwXHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGJyxcclxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTgzRENcdTUzNTUnLFxyXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogJ1x1OEZENFx1NTZERVx1OTg3Nlx1OTBFOCcsXHJcblxyXG4gICAgbGFzdFVwZGF0ZWQ6IHtcclxuICAgICAgdGV4dDogJ1x1NjcwMFx1NTQwRVx1NjZGNFx1NjVCMFx1NEU4RScsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcclxuICAgICAgICBkYXRlU3R5bGU6ICdzaG9ydCcsXHJcbiAgICAgICAgdGltZVN0eWxlOiAnbWVkaXVtJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkb2NGb290ZXI6IHsgcHJldjogJ1x1NEUwQVx1NEUwMFx1OTg3NScsIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTk4NzUnIH0sXHJcblxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogWzIsIDRdLFxyXG4gICAgICBsYWJlbDogJ1x1OTg3NVx1OTc2Mlx1NUJGQ1x1ODIyQScsXHJcbiAgICB9LFxyXG5cclxuICAgIG5vdEZvdW5kOiB7XHJcbiAgICAgIGNvZGU6ICc0MDQnLFxyXG4gICAgICB0aXRsZTogJ1x1NEUwRFx1NUI1OFx1NTcyOFx1NzY4NFx1OTg3NVx1OTc2MicsXHJcbiAgICAgIHF1b3RlOiAnXHU4RkQ5XHU5MUNDXHU0RUMwXHU0RTQ4XHU5MEZEXHU2Q0ExXHU2NzA5UUFRJyxcclxuICAgICAgbGlua1RleHQ6ICdcdThGRDRcdTU2REVcdTk5OTZcdTk4NzUnLFxyXG4gICAgfSxcclxuXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiBcIlx1NjIxMFx1NTQ1OFx1NjcwRFwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHU2REZCXHU1MkEwXHU2NzBEXHU1MkExXHU1NjY4XCIsIGxpbms6IFwiL0FkZFNlcnZlcnMvXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU5NEZFXHU2M0E1XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJNQ0pQR1wiLCBsaW5rOiBcImh0dHBzOi8vbWNqcGcub3JnL1wiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU1RjAwXHU2NzBEXHU2NTg3XHU2ODYzXCIsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgeyB0ZXh0OiBcIlx1OTZDNlx1NUJBM1x1N0VDNFx1N0VDN1x1NUYwMFx1NjcwRFx1NjU4N1x1Njg2M1wiLCBsaW5rOiBcImh0dHBzOi8vbXNjcG9kb2MubmV0bGlmeS5hcHAvXCIgfSxcclxuICAgICAgICAgICAgICB7IHRleHQ6IFwiXHU3QjI4XHU4NkNCIE1DIFx1NUYwMFx1NjcwRFx1NjU1OVx1N0EwQlwiLCBsaW5rOiBcImh0dHBzOi8veWl6aGFuLndpa2kvTml0V2lraXQvXCIgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2NkY0XHU1OTFBXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTUxNzNcdTRFOEVcIiwgbGluazogXCIvbW9yZS9hYm91dC9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NzI3OVx1NTIyQlx1OUUyM1x1OEMyMlwiLCBsaW5rOiBcIi9tb3JlL2Fja25vd2xlZGdlbWVudC9cIiB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NUJGQ1x1ODIyQVwiLCBsaW5rOiBcIi9uYXYvXCIgfSxcclxuICAgIF0sXHJcblxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdNaW5lY3JhZnQgU2VydmVyIENvbGxlY3RpdmUgUHJvbW90aW9uIE9yZ2FuaXphdGlvbiB8IE1pbmVjcmFmdFx1OTZDNlx1NEY1M1x1NUJBM1x1NEYyMFx1N0VDNFx1N0VDNycsXHJcbiAgICAgIGNvcHlyaWdodDogJy0gQ29weXJpZ2h0IFx1MDBBOSAyMDI0LXByZXNlbnQgPGEgaHJlZj1cImh0dHA6Ly9tc2Nwby5uZXRsaWZ5LmFwcC9cIj5NU0NQTzwvYT4gLTxicj5cdTY3MkNcdTdBRDlcdTYwM0JcdThCQkZcdTk1RUVcdTkxQ0YgPHNwYW4gaWQ9XCJidXN1YW56aV92YWx1ZV9zaXRlX3B2XCI+PC9zcGFuPiBcdTZCMjEgfCBcdTY3MkNcdTdBRDlcdThCQkZcdTVCQTJcdTY1NzAgPHNwYW4gaWQ9XCJidXN1YW56aV92YWx1ZV9zaXRlX3V2XCI+PC9zcGFuPiBcdTRFQkFcdTZCMjEnXHJcbiAgICB9LFxyXG5cclxuICAgIHNpZGViYXI6IHtcclxuICAgICAgJy9tb3JlLyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU1MTczXHU0RThFXHU5NkM2XHU1QkEzXHU3RUM0XHU3RUM3JyxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NTE3M1x1NEU4RVx1OTZDNlx1NUJBM1x1N0VDNFx1N0VDNycsIGxpbms6ICcvbW9yZS9hYm91dC8nIH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIixcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU3QUUwXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTdBRTBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIlx1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5Q1wiLFxyXG4gICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxyXG4gICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICBzZWxlY3RUZXh0OiBcIlx1OTAwOVx1NjJFOVwiLFxyXG4gICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogXCJcdTUyMDdcdTYzNjJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfVxyXG59KSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQmxvZ1xcXFxtc2Nwby5naXRodWIuaW9cXFxcc2VydmVyc1xcXFwudml0ZXByZXNzXFxcXGkxOG5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEJsb2dcXFxcbXNjcG8uZ2l0aHViLmlvXFxcXHNlcnZlcnNcXFxcLnZpdGVwcmVzc1xcXFxpMThuXFxcXGVuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9CbG9nL21zY3BvLmdpdGh1Yi5pby9zZXJ2ZXJzLy52aXRlcHJlc3MvaTE4bi9lbi50c1wiOy8vIENvbmZpZ3VyYXRpb24gLSBMYW5ndWFnZSBwYXJ0XHJcbi8vIFBsZWFzZSByZWZlciB0byBodHRwczovL3ZpdGVwcmVzcy5kZXYvZW4vIGZvciBtb2RpZmljYXRpb25cclxuLy8gRU5EXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZ1dpdGhUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHR5cGUgeyBWdWV0b21UaGVtZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcy10aGVtZS1tc2NwbydcclxuXHJcbmV4cG9ydCBjb25zdCBlbiA9IGRlZmluZUNvbmZpZ1dpdGhUaGVtZTxWdWV0b21UaGVtZUNvbmZpZz4oe1xyXG4gIGhlYWQ6IFtcclxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvbG9nbzIud2VicCcgfV0sXHJcbiAgXSxcclxuICB0aXRsZTogJ01TQ1BPJyxcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICBkZXNjcmlwdGlvbjogJ01pbmVjcmFmdCBTZXJ2ZXIgQ29sbGVjdGl2ZSBQcm9tb3Rpb24gT3JnYW5pemF0aW9uIChNU0NQTykgLSBBbiBlbWVyZ2luZyBvcmdhbml6YXRpb24gZGVkaWNhdGVkIHRvIE1pbmVjcmFmdCBzZXJ2ZXIgcHJvbW90aW9uIGFuZCB0ZWNobmljYWwgZXhjaGFuZ2UuJyxcclxuICBsYW5nOiAnZW4nLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBzaXRlVGl0bGU6ICdNU0NQTycsXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiBcIk1lbWJlcnMnIFNlcnZlcnNcIiwgbGluazogXCIvZW4vXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIkFkZCBhIFNlcnZlclwiLCBsaW5rOiBcIi9lbi9BZGRTZXJ2ZXJzL1wiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIk1vcmVcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcIkFib3V0XCIsIGxpbms6IFwiL2VuL21vcmUvYWJvdXQvXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJTcGVjaWFsIFRoYW5rc1wiLCBsaW5rOiBcIi9lbi9tb3JlL2Fja25vd2xlZGdlbWVudC9cIiB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIk5hdmlnYXRpb25cIiwgbGluazogXCIvZW4vbmF2L1wiIH0sXHJcbiAgICBdLFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdNaW5lY3JhZnQgU2VydmVyIENvbGxlY3RpdmUgUHJvbW90aW9uIE9yZ2FuaXphdGlvbicsXHJcbiAgICAgIGNvcHlyaWdodDogJy0gQ29weXJpZ2h0IFx1MDBBOSAyMDI0LXByZXNlbnQgPGEgaHJlZj1cImh0dHA6Ly9tc2Nwby5uZXRsaWZ5LmFwcC9cIj5NU0NQTzwvYT4gLTxicj5TaXRlIHZpc2l0czogPHNwYW4gaWQ9XCJidXN1YW56aV92YWx1ZV9zaXRlX3B2XCI+PC9zcGFuPiB8IFVuaXF1ZSB2aXNpdG9yczogPHNwYW4gaWQ9XCJidXN1YW56aV92YWx1ZV9zaXRlX3V2XCI+PC9zcGFuPidcclxuICAgIH0sXHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6IFwiTGFzdCB1cGRhdGVkXCIsXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIixcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IFwiU2VhcmNoIGFydGljbGVzXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJTZWFyY2ggYXJ0aWNsZXNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIk5vIHJlbGV2YW50IHJlc3VsdHMgZm91bmRcIixcclxuICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogXCJDbGVhciBzZWFyY2ggY3JpdGVyaWFcIixcclxuICAgICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJTZWxlY3RcIixcclxuICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwiU3dpdGNoXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH1cclxufSkiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEJsb2dcXFxcbXNjcG8uZ2l0aHViLmlvXFxcXHNlcnZlcnNcXFxcLnZpdGVwcmVzc1xcXFxpMThuXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxCbG9nXFxcXG1zY3BvLmdpdGh1Yi5pb1xcXFxzZXJ2ZXJzXFxcXC52aXRlcHJlc3NcXFxcaTE4blxcXFxydS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQmxvZy9tc2Nwby5naXRodWIuaW8vc2VydmVycy8udml0ZXByZXNzL2kxOG4vcnUudHNcIjsvLyBcdTA0MUFcdTA0M0VcdTA0M0RcdTA0NDRcdTA0MzhcdTA0MzNcdTA0NDNcdTA0NDBcdTA0MzBcdTA0NDZcdTA0MzhcdTA0NEYgLSBcdTA0MjBcdTA0MzBcdTA0MzdcdTA0MzRcdTA0MzVcdTA0M0IgXHUwMEFCXHUwNDJGXHUwNDM3XHUwNDRCXHUwNDNBXHJcbi8vIFx1MDQxRlx1MDQzRVx1MDQzNlx1MDQzMFx1MDQzQlx1MDQ0M1x1MDQzOVx1MDQ0MVx1MDQ0Mlx1MDQzMCwgXHUwNDNFXHUwNDMxXHUwNDQwXHUwNDMwXHUwNDQyXHUwNDM4XHUwNDQyXHUwNDM1XHUwNDQxXHUwNDRDIFx1MDQzQSBodHRwczovL3ZpdGVwcmVzcy5kZXYvcnUvIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0MzJcdTA0M0RcdTA0MzVcdTA0NDFcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEYgXHUwNDM4XHUwNDM3XHUwNDNDXHUwNDM1XHUwNDNEXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM5XHJcbi8vIEVORFxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWdXaXRoVGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCB0eXBlIHsgVnVldG9tVGhlbWVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MtdGhlbWUtbXNjcG8nXHJcblxyXG5leHBvcnQgY29uc3QgcnUgPSBkZWZpbmVDb25maWdXaXRoVGhlbWU8VnVldG9tVGhlbWVDb25maWc+KHtcclxuICBoZWFkOiBbXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2xvZ28yLndlYnAnIH1dLFxyXG4gIF0sXHJcbiAgdGl0bGU6ICdNU0NQTycsXHJcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgZGVzY3JpcHRpb246ICdcdTA0MUVcdTA0NDBcdTA0MzNcdTA0MzBcdTA0M0RcdTA0MzhcdTA0MzdcdTA0MzBcdTA0NDZcdTA0MzhcdTA0NEYgXHUwNDNBXHUwNDNFXHUwNDNCXHUwNDNCXHUwNDM1XHUwNDNBXHUwNDQyXHUwNDM4XHUwNDMyXHUwNDNEXHUwNDNFXHUwNDMzXHUwNDNFIFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzNFx1MDQzMlx1MDQzOFx1MDQzNlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0RiBcdTA0NDFcdTA0MzVcdTA0NDBcdTA0MzJcdTA0MzVcdTA0NDBcdTA0M0VcdTA0MzIgTWluZWNyYWZ0IChNU0NQTykgLSBcdTA0NDBcdTA0MzBcdTA0MzdcdTA0MzJcdTA0MzhcdTA0MzJcdTA0MzBcdTA0NEVcdTA0NDlcdTA0MzBcdTA0NEZcdTA0NDFcdTA0NEYgXHUwNDNFXHUwNDQwXHUwNDMzXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM3XHUwNDMwXHUwNDQ2XHUwNDM4XHUwNDRGLCBcdTA0MzdcdTA0MzBcdTA0M0RcdTA0MzhcdTA0M0NcdTA0MzBcdTA0NEVcdTA0NDlcdTA0MzBcdTA0NEZcdTA0NDFcdTA0NEYgXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDM0XHUwNDMyXHUwNDM4XHUwNDM2XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1XHUwNDNDIFx1MDQ0MVx1MDQzNVx1MDQ0MFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQzRVx1MDQzMiBNaW5lY3JhZnQgXHUwNDM4IFx1MDQ0Mlx1MDQzNVx1MDQ0NVx1MDQzRFx1MDQzOFx1MDQ0N1x1MDQzNVx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzQyBcdTA0M0VcdTA0MzFcdTA0M0NcdTA0MzVcdTA0M0RcdTA0M0VcdTA0M0MuJyxcclxuICBsYW5nOiAncnUnLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBzaXRlVGl0bGU6ICdNU0NQTycsXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiBcIlx1MDQyMVx1MDQzNVx1MDQ0MFx1MDQzMlx1MDQzNVx1MDQ0MFx1MDQ0QiBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDQ3XHUwNDNCXHUwNDM1XHUwNDNEXHUwNDNFXHUwNDMyXCIsIGxpbms6IFwiL3J1L1wiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJcdTA0MTRcdTA0M0VcdTA0MzFcdTA0MzBcdTA0MzJcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDQxXHUwNDM1XHUwNDQwXHUwNDMyXHUwNDM1XHUwNDQwXCIsIGxpbms6IFwiL3J1L0FkZFNlcnZlcnMvXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHUwNDFGXHUwNDNFXHUwNDM0XHUwNDQwXHUwNDNFXHUwNDMxXHUwNDNEXHUwNDM1XHUwNDM1XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTA0MUUgXHUwNDQxXHUwNDMwXHUwNDM5XHUwNDQyXHUwNDM1XCIsIGxpbms6IFwiL3J1L21vcmUvYWJvdXQvXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTA0MUVcdTA0NDFcdTA0M0VcdTA0MzFcdTA0MzBcdTA0NEYgXHUwNDMxXHUwNDNCXHUwNDMwXHUwNDMzXHUwNDNFXHUwNDM0XHUwNDMwXHUwNDQwXHUwNDNEXHUwNDNFXHUwNDQxXHUwNDQyXHUwNDRDXCIsIGxpbms6IFwiL3J1L21vcmUvYWNrbm93bGVkZ2VtZW50L1wiIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHUwNDFEXHUwNDMwXHUwNDMyXHUwNDM4XHUwNDMzXHUwNDMwXHUwNDQ2XHUwNDM4XHUwNDRGXCIsIGxpbms6IFwiL3J1L25hdi9cIiB9LFxyXG4gICAgXSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBtZXNzYWdlOiAnXHUwNDFFXHUwNDQwXHUwNDMzXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM3XHUwNDMwXHUwNDQ2XHUwNDM4XHUwNDRGIFx1MDQzQVx1MDQzRVx1MDQzQlx1MDQzQlx1MDQzNVx1MDQzQVx1MDQ0Mlx1MDQzOFx1MDQzMlx1MDQzRFx1MDQzRVx1MDQzM1x1MDQzRSBcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0MzRcdTA0MzJcdTA0MzhcdTA0MzZcdTA0MzVcdTA0M0RcdTA0MzhcdTA0NEYgXHUwNDQxXHUwNDM1XHUwNDQwXHUwNDMyXHUwNDM1XHUwNDQwXHUwNDMwIE1pbmVjcmFmdCcsXHJcbiAgICAgIGNvcHlyaWdodDogJy0gQ29weXJpZ2h0IFx1MDBBOSAyMDI0LXByZXNlbnQgPGEgaHJlZj1cImh0dHA6Ly9tc2Nwby5uZXRsaWZ5LmFwcC9cIj5NU0NQTzwvYT4gLTxicj5cdTA0MUZcdTA0M0VcdTA0NDFcdTA0MzVcdTA0NDlcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDNFXHUwNDMxXHUwNDRBXHUwNDM1XHUwNDNBXHUwNDQyXHUwNDNFXHUwNDMyOiA8c3BhbiBpZD1cImJ1c3VhbnppX3ZhbHVlX3NpdGVfcHZcIj48L3NwYW4+IHwgXHUwNDIzXHUwNDNEXHUwNDM4XHUwNDNBXHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDRCXHUwNDM1IFx1MDQzRlx1MDQzRVx1MDQ0MVx1MDQzNVx1MDQ0Mlx1MDQzOFx1MDQ0Mlx1MDQzNVx1MDQzQlx1MDQzODogPHNwYW4gaWQ9XCJidXN1YW56aV92YWx1ZV9zaXRlX3V2XCI+PC9zcGFuPidcclxuICAgIH0sXHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6IFwiXHUwNDFGXHUwNDNFXHUwNDQxXHUwNDNCXHUwNDM1XHUwNDM0XHUwNDNEXHUwNDM1XHUwNDM1IFx1MDQzRVx1MDQzMVx1MDQzRFx1MDQzRVx1MDQzMlx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHByb3ZpZGVyOiBcImxvY2FsXCIsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBidXR0b25UZXh0OiBcIlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQSBcdTA0NDFcdTA0NDJcdTA0MzBcdTA0NDJcdTA0MzVcdTA0MzlcIixcclxuICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiBcIlx1MDQxRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQSBcdTA0NDFcdTA0NDJcdTA0MzBcdTA0NDJcdTA0MzVcdTA0MzlcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIlx1MDQyMVx1MDQzRVx1MDQzRVx1MDQ0Mlx1MDQzMlx1MDQzNVx1MDQ0Mlx1MDQ0MVx1MDQ0Mlx1MDQzMlx1MDQ0M1x1MDQ0RVx1MDQ0OVx1MDQzOFx1MDQzNSBcdTA0NDBcdTA0MzVcdTA0MzdcdTA0NDNcdTA0M0JcdTA0NENcdTA0NDJcdTA0MzBcdTA0NDJcdTA0NEIgXHUwNDNEXHUwNDM1IFx1MDQzRFx1MDQzMFx1MDQzOVx1MDQzNFx1MDQzNVx1MDQzRFx1MDQ0QlwiLFxyXG4gICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1MDQyN1x1MDQzNVx1MDQ0Mlx1MDQzQVx1MDQzOFx1MDQzNSBcdTA0M0FcdTA0NDBcdTA0MzhcdTA0NDJcdTA0MzVcdTA0NDBcdTA0MzhcdTA0MzggXHUwNDNGXHUwNDNFXHUwNDM4XHUwNDQxXHUwNDNBXHUwNDMwXCIsXHJcbiAgICAgICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICAgIHNlbGVjdFRleHQ6IFwiXHUwNDEyXHUwNDRCXHUwNDMxXHUwNDM1XHUwNDQwXHUwNDM4XHUwNDQyXHUwNDM1XCIsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiBcIlx1MDQxRlx1MDQzNVx1MDQ0MFx1MDQzNVx1MDQzQVx1MDQzQlx1MDQ0RVx1MDQ0N1x1MDQzMFx1MDQ0Mlx1MDQzNVx1MDQzQlx1MDQ0Q1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn0p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LE1BQ2YsZUFBZSxDQUFDLGFBQWEsb0JBQW9CO0FBQUEsTUFDakQsYUFBYTtBQUFBLFFBQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSwyQkFBMkI7QUFBQSxNQUNyRDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUE7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE1BQU0sRUFBRSxPQUFPLDRCQUFRLEdBQUcsTUFBTTtBQUFBLE1BQ2hDLElBQUksRUFBRSxPQUFPLFdBQVcsR0FBRyxHQUFHO0FBQUE7QUFBQSxNQUU5QixJQUFJLEVBQUUsT0FBTyw4Q0FBVyxHQUFHLEdBQUc7QUFBQTtBQUFBO0FBQUEsSUFHaEM7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLEtBQUs7QUFBQSxRQUNILFlBQVk7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNILHFCQUFxQjtBQUFBLFVBQ25CLE1BQU07QUFBQSxZQUNKLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULGdCQUFnQjtBQUFBLFVBQ2QsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFVBQ1QsV0FBVztBQUFBLFVBQ1gsV0FBVztBQUFBLFVBQ1gsS0FBSztBQUFBLFFBQ1AsQ0FBQztBQUFBLFFBQ0QsZ0JBQWdCO0FBQUEsVUFDZCxTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxLQUFLO0FBQUEsUUFDUCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLFFBQVEsUUFBTTtBQUNaLFdBQUcsSUFBSSxPQUFPO0FBQ2QsV0FBRyxJQUFJLFFBQVE7QUFBQSxNQUVqQjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixpQkFBaUI7QUFBQSxJQUNuQjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWdXaXRoVGhlbWUiLCAiZGVmaW5lQ29uZmlnV2l0aFRoZW1lIiwgImRlZmluZUNvbmZpZ1dpdGhUaGVtZSIsICJkZWZpbmVDb25maWdXaXRoVGhlbWUiLCAiZGVmaW5lQ29uZmlnV2l0aFRoZW1lIiwgImRlZmluZUNvbmZpZ1dpdGhUaGVtZSJdCn0K
