<script setup lang="ts">
import { onMounted, onUnmounted, watch, nextTick, computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import {
  useFlash,
  useBackground,
  useFeatures,
  useHeroMove,
} from '../composables/home.js'

import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import ruRU from '@arco-design/web-vue/es/locale/lang/ru-ru';
import esES from '@arco-design/web-vue/es/locale/lang/es-es';
import jaJP from '@arco-design/web-vue/es/locale/lang/ja-jp';
import idID from '@arco-design/web-vue/es/locale/lang/id-id';
import frFR from '@arco-design/web-vue/es/locale/lang/fr-fr';
import ptPT from '@arco-design/web-vue/es/locale/lang/pt-pt';
import deDE from '@arco-design/web-vue/es/locale/lang/de-de';
import koKR from '@arco-design/web-vue/es/locale/lang/ko-kr';
import itIT from '@arco-design/web-vue/es/locale/lang/it-it';
import thTH from '@arco-design/web-vue/es/locale/lang/th-th';
import viVN from '@arco-design/web-vue/es/locale/lang/vi-vn';

const { Layout } = DefaultTheme
// const route = useRoute()
const { site, theme, isDark, localeIndex } = useData()
const { base } = site.value
const { logoImg } = theme.value
const { flashEnable, flashStyle } = useFlash()
const { bgEnable, bgStyle } = useBackground()
const { ftStyle } = useFeatures()
const { parallaxEnable, heroMove } = useHeroMove()

const localeMap = {
  root: zhCN,
  zh_CN: zhCN,
  en: enUS,
  ru: ruRU,
  es: esES,
  ja: jaJP,
  id: idID,
  fr: frFR,
  pt: ptPT,
  de: deDE,
  ko: koKR,
  it: itIT,
  th: thTH,
  vi: viVN
};

const arcoLocale = computed(() => {
  return localeMap[localeIndex.value] || enUS; // 默认返回 zhCN
});

const pageBgEnable = theme.value.pageBgEnable || true
const pageBgOpacity = theme.value.pageBgOpacity || 0.8

const logoSrc = `${base}${logoImg}`.replaceAll('//', '/')

watch(isDark, async () => {
  if (isDark.value) {
    document.body.setAttribute('arco-theme', 'dark')
  } else {
    document.body.removeAttribute('arco-theme')
  }
}, { immediate: true })

const renderHomeBg = () => {
  const domStyle = document.documentElement.style
  // 首页闪烁动画样式设置
  if (flashEnable && flashStyle) {
    domStyle.setProperty('--vt-bg-light', flashStyle)
  }
  // 文章背景图设置
  if (pageBgEnable && pageBgOpacity) {
    domStyle.setProperty('--vt-bg-doc', `rgba(var(--vt-c-bg-rgb), ${pageBgOpacity})`)
  }
  // 首页背景图设置
  if (bgEnable && bgStyle) {
    domStyle.setProperty('--vt-bg-content', bgStyle)
  }
  if (ftStyle) {
    const vpFeat: any = document.getElementsByClassName('VPFeatures')[0]
    const fs = vpFeat?.style
    if (fs) fs.background = ftStyle
  }
}

const getBrowserWidth = function () {
  if (window.innerWidth < 768) {
    return false;
  } else {
    return true;
  }

};

onMounted(() => {
  renderHomeBg()
  if (getBrowserWidth()) {
    if (parallaxEnable) window.addEventListener('mousemove', heroMove)
  }
})

onUnmounted(() => {
  if (parallaxEnable) window.removeEventListener('mousemove', heroMove)
})
</script>

<template>
  <a-config-provider :locale="arcoLocale">
    <Layout>
      <template #home-hero-before>
        <img class="VPHeroLogo" :src="logoSrc" />
        <slot name="home-hero-before" />
      </template>
    </Layout>
  </a-config-provider>
</template>
