<script setup lang="ts">
import VPImage from 'vitepress/dist/client/theme-default/components//VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import SoundFiles from 'vitepress/dist/client/theme-default/sounds/button.mp3'

defineProps<{
  icon?: 
  | string
  | {
      src: string
      alt?: string
      width?: string
      height?: string
      wrap?: boolean
    }
  | {
      light: string
      dark: string
      alt?: string
      width?: string
      height?: string
      wrap?: boolean
    }
  name: string
  desc?: string
  type: 'Java' | 'Bedrock' | 'Geyser' | 'Netease'
  link?: string
  version?: string | number
  ip?: string
}>()

const playSound = () => {
  const audio = new Audio(SoundFiles);
  audio.play();
}
</script>

<template>
  <VPLink
    class="ServerCard"
    :href="link"
    :no-icon="true"
    :tag="link ? 'a' : 'div'"
  >
    <article
      class="box"
      :class="[type]"
      :title="desc"
      @click="playSound"
    >
      <div class="box-header">
        <div v-if="typeof icon === 'object' && icon.wrap" class="icon">
          <VPImage
            class="icon"
            :image="icon"
            :alt="icon.alt"
            :height="icon.height || 48"
            :width="icon.width || 48"
            style="margin: 0;max-height: 48px;max-width: 48px;"
          />
        </div>
        <VPImage
          v-else-if="typeof icon === 'object'"
          class="icon"
          :image="icon"
          :alt="icon.alt"
          :height="icon.height || 48"
          :width="icon.width || 48"
          style="margin: 0; margin-right: 0.5rem;max-height: 48px;max-width: 48px;"
        />
        <div v-else-if="icon" class="icon" v-html="icon"></div>
        <div class="info-container">
          <h4 class="ServerName" v-html="name"></h4>
          <a class="ServerVersion">{{ type }} {{ version }}</a>
        </div>
      </div>
      <p v-if="desc" class="desc" v-html="desc ? desc.replace(/\n/g, '<br>') : ''"></p>
    </article>
  </VPLink>
</template>

<style lang="scss" scoped>
.ServerCard {
  text-decoration: unset!important;
  display: block;
  height: 100%;
  transition: all 0.25s;

  .box {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    &.has-badge {
      padding-top: calc(var(--m-nav-box-gap) + 2px);
    }
    &-header {
      display: flex;
      align-items: flex-start;
      flex-direction: row;

      .info-container {
        display: flex;
        flex-direction: column;
        max-width: calc(100% - 48px - 0.5rem);
        .ServerName {
          color: var(--vp-c-brand-light);
          overflow: hidden;
          flex-grow: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          margin: 0px;
        }
        .ServerVersion {
          color: white;
          font-size: 12px;
          margin-top: 5px;
          line-height: 80%;
        }
      }
    }
  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: white;
  }
  }
}
.Java {
  background-image: url("/JavaEditon.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
}

.Bedrock {
  background-image: url("/BedRock.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
}

.Geyser {
  background-image: url("/BedRock.webp"), url("/JavaEditon.webp");
  background-blend-mode: luminosity;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
}

.Netease {
  background-image: url("/Netease.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
}

@media (max-width: 960px) {
  .ServerCard {
    .title {
      font-size: 14px;
    }
  }
}
</style>