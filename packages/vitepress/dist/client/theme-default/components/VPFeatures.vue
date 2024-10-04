<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed, watch, ref, onMounted } from 'vue'
import VPFeature from './VPFeature.vue'

export interface Feature {
  icon?: DefaultTheme.FeatureIcon
  title: string
  type: 'Java' | 'Bedrock' | 'Geyser' | '网易'
  details: string
  link?: string
  linkText?: string
  rel?: string
  target?: string
}

const props = defineProps<{
  features: Feature[]
}>()
// 计算网格类名
const grid = computed(() => {
  const length = props.features.length
  return length === 0 ? undefined
    : length === 2 ? 'grid-2'
    : length === 3 ? 'grid-3'
    : length % 3 === 0 ? 'grid-6'
    : 'grid-4'
})
// 随机排列特性列表
const shuffledFeatures = ref<Feature[]>([])
const shuffleFeatures = () => {
  shuffledFeatures.value = [...props.features].sort(() => Math.random() - 0.5)
}
// 监听 features 的变化并随机排列
watch(() => props.features, shuffleFeatures, { immediate: true })
// 组件挂载时初始打乱
onMounted(shuffleFeatures)
</script>

<template>
  <div v-if="features" class="VPFeatures">
    <div class="container">
      <div class="items">
        <div
          v-for="(feature, index) in shuffledFeatures"
          :key="feature.title + index"
          class="item"
          :class="[grid]"
        >
          <VPFeature
            :icon="feature.icon"
            :title="feature.title"
            :details="feature.details"
            :link="feature.link"
            :link-text="feature.linkText"
            :rel="feature.rel"
            :target="feature.target"
            :type ="feature.type"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
