import fg from 'fast-glob'
import { resolve } from 'pathe'
import type { VitePWAOptions } from 'vite-plugin-pwa'

const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
/**
 * Vite Plugin PWA uses Workbox  library to build the service worker
 * can find more information on Workbox section.
 * @see https://vite-plugin-pwa.netlify.app/
 */
export const pwa: Partial<VitePWAOptions> = {
  outDir: './.vitepress/dist',
  registerType: 'autoUpdate',
  // include all static assets under public/
  includeAssets: fg.sync('**/*.{png,svg,gif,ico,txt}', { cwd: resolve(__dirname, '../../public') }),
  manifest: {
    id: '/',
    name: "Minecraft Server Collective Promotion Organization",
    short_name: "MSCPO",
    description: "The Minecraft Server Collective Promotion Organization (MSCPO) is an up-and-coming organization dedicated to the propaganda and technical communication of Minecraft servers (x) Fellow server owners group (√)",
    theme_color: '#06f',
    icons: [
      {
        src: '/pwa-120x120.webp',
        sizes: '120x120',
        type: 'image/webp',
      },
      {
        src: '/pwa-192x192.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/pwa-512x512.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    globPatterns: ['**/*.{js,css,webp,png,svg,gif,ico,woff2}'],
    navigateFallback: null,
    runtimeCaching: [
      {
        urlPattern: googleFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-font-style-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: googleStaticFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: jsdelivrCDNRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jsdelivr-cdn-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: githubSourceContentRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'githubusercontent-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}