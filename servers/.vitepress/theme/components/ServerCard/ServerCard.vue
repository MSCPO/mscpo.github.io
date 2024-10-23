<script setup lang="ts">
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import SoundFiles from 'vitepress/dist/client/theme-default/sounds/button.mp3'
import { ref, computed } from "vue"
import { useClipboard } from '@vueuse/core'
import { useData } from 'vitepress'
const { localeIndex } = useData()

const source = ref('Copy')
const { copy, copied } = useClipboard({ source })

const serverinfo = defineProps<{
  icon?: 
  | string
  | {
      src: {
        type: string
        required: true
        default: '/logo.webp'
      }
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

const lang = computed(() => {
  switch (localeIndex.value) {
    case 'root':
      return {
        online: "◉在线",
        offline: "◉离线",
        loading: "◉正在获取...",
        copied: "复制成功！",
      }
    case 'en':
      return {
        online: "◉Online",
        offline: "◉Offline",
        loading: "Loading...",
        copied: "复制成功！",
      }
    case 'ru':
      return {
        online: "◉Онлайн",
        empty: "Нет данных о серверах",
        loading: "Загрузка...",
        copied: "复制成功！",
      }
    default:
      return {
        online: "◉Online",
        offline: "◉Offline",
        loading: "Loading...",
        copied: "复制成功！",
      }
  }
});

const playSound = () => {
  const audio = new Audio(SoundFiles)
  audio.play()
}

const props = {
  server: serverinfo.ip
}

const server_status = ref<string | undefined>(lang.value.loading)
const status_color = ref("gray")

const handleServerInfo = async () => {
  if (props.server != null) {
    try {
      const res = await fetch(
        `https://mcstat.mcskin.cn/api/status/${props.server}`
      )
      const data = await res.json()
      if (data.online) {
        server_status.value = lang.value.online
        status_color.value = "green"
      } else {
        server_status.value = lang.value.offline
        status_color.value = "red"
      }
    } catch (e) {
      server_status.value = lang.value.offline
      status_color.value = "red"
    }
  }
}

handleServerInfo()

const openUrl = (url: string | undefined) => {
  window.open(url, '_blank')
}
</script>

<template>
  <VPLink
    class="ServerCard"
    @click="openUrl(serverinfo.link)"
    :no-icon="true"
    :tag="link ? 'a' : 'div'"
  >
    <article
      class="box"
      :class="[serverinfo.type]"
      @click="playSound"
    >
      <div class="box-header" :title="serverinfo.name">
        <div v-if="typeof serverinfo.icon === 'object' && serverinfo.icon.wrap" class="icon">
          <VPImage
            class="icon"
            :image="serverinfo.icon"
            :alt="serverinfo.icon.alt"
            :height="serverinfo.icon.height || 48"
            :width="serverinfo.icon.width || 48"
            style="margin: 0;max-height: 48px;max-width: 48px;"
          />
        </div>
        <VPImage
          v-else-if="typeof serverinfo.icon === 'object'"
          class="icon"
          :image="serverinfo.icon"
          :alt="serverinfo.icon.alt"
          :height="serverinfo.icon.height || 48"
          :width="serverinfo.icon.width || 48"
          style="margin: 0; margin-right: 0.5rem;max-height: 48px;max-width: 48px;"
        />
        <div v-else-if="icon" class="icon" v-html="icon"></div>
        <div class="info-container">
          <h4 class="ServerName" v-html="name"></h4>
          <a class="ServerVersion">{{ serverinfo.type }} {{ serverinfo.version }} <a v-if="ip" class="ServerVersion" :style="{'color':status_color}" v-html="server_status"></a></a>
          <a v-if="ip" class="ServerVersion" @click.stop="copy(serverinfo.ip)" >IP: {{ copied ? lang.copied : serverinfo.ip }}</a>
        </div>
      </div>
      <p v-if="desc" class="desc" :title="serverinfo.desc" v-html="serverinfo.desc ? serverinfo.desc.replace(/\n/g, '<br>' ) : ''"></p>
    </article>
  </VPLink>
</template>

<style lang="scss" scoped>
.ServerCard {
  text-decoration: unset!important;
  height: 100%;
  cursor: pointer;
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