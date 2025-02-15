<script setup lang="ts">
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import { marked } from 'marked'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import SoundFiles from 'vitepress/dist/client/theme-default/sounds/button.mp3'
import { ref, computed, watch } from "vue"
import { useClipboard } from '@vueuse/core'
import { useData } from 'vitepress'

const { localeIndex } = useData()

const source = ref('Copy')
const { copy, copied } = useClipboard({ source })

interface StatusResponse {
  online: boolean
  icon?: string
  motd?: string
  players?: {
    online: number
    max: number
  }
}

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
  is_member?: boolean
  auth_mode?: 'official' | 'yggdrasil' | 'offline'
  tags?: Array<string>
  status: Promise<StatusResponse>
}>()

const i18nlang = computed(() => {
  switch (localeIndex.value) {
    case 'root':
      return {
        online: "◉在线",
        offline: "◉离线",
        loading: "◉正在获取...",
        copied_click: "点击复制服务器地址",
        copied: "复制成功！",
        is_member: "成员服",
        is_member_desc: "此服务器是Minecraft服务器集体宣传组织的成员服，我们可以确保其可以长期运行",
        auth_mode: {
          official: "正版服",
          official_desc: "正版服务器要求玩家使用正版游戏客户端，并使用正版账号登录游戏。",
          yggdrasil: "外置登录",
          yggdrasil_desc: "外置登录要求玩家使用第三方正版验证服务器，使用第三方账户进行登录，具有正版的游玩体验。",
          offline: "离线服",
          offline_desc: "离线服务器无正版验证，允许玩家直接加入服务器。"
        },
        tags: {
          click: "筛选标签："
        }
      }
    case 'en':
      return {
        online: "◉Online",
        offline: "◉Offline",
        loading: "Loading...",
        copied_click: "Click to copy server address",
        copied: "Copy successful!",
        is_member: "Certified",
        is_member_desc: "This server is a member server of the Minecraft Server Collective Promotion Organization, and we can ensure its long-term operation",
        auth_mode: {
          official: "Online",
          official_desc: "Authentic servers require players to use legitimate game clients and log in to the game with legitimate accounts.",
          yggdrasil: "Yggdrasil",
          yggdrasil_desc: "External login requires players to use a third-party legitimate verification server, log in with a third-party account, and have a genuine gaming experience.",
          offline: "Offline",
          offline_desc: "Offline servers do not have genuine authentication, allowing players to directly join the server."
        },
        tags: {
          click: "筛选标签：" // 待翻译
        }
      }
    case 'ru':
      return {
        online: "◉Онлайн",
        offline: "◉Оффлайн",
        empty: "Нет данных о серверах",
        loading: "Загрузка...",
        copied_click: "Нажмите для копирования адреса сервера",
        copied: "Репликация удалась!",
        is_member: "Сертифицировано",
        is_member_desc: "Этот сервер является частью коллективной рекламной организации Minecraft Server, и мы можем гарантировать, что он будет работать в течение длительного времени.",
        auth_mode: {
          official: "Оригинальный костюм",
          official_desc: "Оригинальный сервер требует, чтобы игрок использовал оригинальный игровой клиент и использовал оригинальный аккаунт для входа в игру.",
          yggdrasil: "Внешний вход",
          yggdrasil_desc: "Внешний вход требует, чтобы игрок использовал сторонний аутентификационный сервер, использовал сторонний аккаунт для входа в систему и имел оригинальный игровой опыт.",
          offline: "Оффлайн",
          offline_desc: "Оффлайн - сервер не имеет аутентификации, что позволяет игрокам напрямую присоединяться к серверу."
        },
        tags: {
          click: "筛选标签：" // 待翻译
        }
      }
    default:
      return {
        online: "◉Online",
        offline: "◉Offline",
        loading: "Loading...",
        copied_click: "Click to copy server address",
        copied: "Copy successful!",
        is_member: "Certified",
        is_member_desc: "This server is a member server of the Minecraft Server Collective Promotion Organization, and we can ensure its long-term operation",
        auth_mode: {
          official: "Online",
          official_desc: "Authentic servers require players to use legitimate game clients and log in to the game with legitimate accounts.",
          yggdrasil: "Yggdrasil",
          yggdrasil_desc: "External login requires players to use a third-party legitimate verification server, log in with a third-party account, and have a genuine gaming experience.",
          offline: "Offline",
          offline_desc: "Offline servers do not have genuine authentication, allowing players to directly join the server."
        },
        tags: {
          click: "筛选标签：" // 待翻译
        }
      }
  }
});

const playSound = () => {
  const audio = new Audio(SoundFiles)
  audio.play()
}

const status_color = ref("gray")
const status_text = ref(i18nlang.value.loading)
const status_num = ref<string | null>(null)
const status_icon = ref(serverinfo.icon)

const server_status = async () => {
  try {
    const statusinfo = await serverinfo.status
    if (statusinfo.online) {
      status_color.value = "green"
      status_text.value = i18nlang.value.online
      if (statusinfo.players != null) {
        status_num.value = `${statusinfo.players.online}/${statusinfo.players.max}`
      }
      status_icon.value = statusinfo.icon
    } else {
      status_color.value = "red"
      status_text.value = i18nlang.value.offline
      status_num.value = null
      status_icon.value = serverinfo.icon
    }
  } catch (error) {
    status_color.value = "gray"
    status_text.value = i18nlang.value.loading
    status_num.value = null
    status_icon.value = serverinfo.icon
  }
}

watch(() => serverinfo.ip, () => {
  status_num.value = null
  status_icon.value = serverinfo.icon
})

const openUrl = (url: string | undefined) => {
  window.open(url, '_blank')
}

const emitEvents = defineEmits(['tag-click'])

const tagClick = (tag: string) => {
  emitEvents('tag-click', tag)
}
</script>

<template>
  <VPLink class="ServerCard" @click="openUrl(serverinfo.link)" :no-icon="true" :tag="serverinfo.link ? 'a' : 'div'">
    <article class="box" :class="[serverinfo.type]" @click="playSound">
      <div class="box-header" :title="serverinfo.name">
        <div v-if="typeof serverinfo.icon === 'object' && serverinfo.icon.wrap" class="icon">
          <VPImage class="icon" :image="serverinfo.icon" :alt="serverinfo.icon.alt"
            :height="serverinfo.icon.height || 48" :width="serverinfo.icon.width || 48"
            style="margin: 0;max-height: 48px;max-width: 48px;" />
        </div>
        <VPImage v-else-if="typeof serverinfo.icon === 'object'" class="icon" :image="status_icon"
          :alt="serverinfo.icon.alt" :height="serverinfo.icon.height || 48" :width="serverinfo.icon.width || 48"
          style="margin: 0; margin-right: 0.5rem;max-height: 48px;max-width: 48px;" />
        <div v-else-if="serverinfo.icon" class="icon" v-html="serverinfo.icon"></div>
        <div class="info-container">
          <h4 class="ServerName" v-text="serverinfo.name" />
          <a class="ServerVersion">{{ serverinfo.type }} {{ serverinfo.version }} <a v-if="serverinfo.ip"
              class="ServerVersion" :style="{ 'color': status_color }" v-html="status_text"
              v-show="server_status()"></a></a>
          <a-tooltip>
            <template #content>
              <p v-text="i18nlang.copied_click" />
              <a v-if="serverinfo.ip" class="ServerVersion" @click.stop="copy(serverinfo.ip)">
                IP: {{ copied ? i18nlang.copied : serverinfo.ip }}
              </a>
            </template>
            <a v-if="serverinfo.ip" class="ServerVersion" @click.stop="copy(serverinfo.ip)">
              IP: {{ copied ? i18nlang.copied : serverinfo.ip }}
            </a>
          </a-tooltip>
        </div>
      </div>
      <a-tooltip v-if="serverinfo.desc">
        <template #content>
          <h2 v-html="serverinfo.name"></h2>
          <a-space wrap>
            <a-tag v-if="serverinfo.ip" :color="status_color" v-text="status_text" />
            <a-tag v-if="status_num != null" v-text="status_num" />
            <a-tooltip v-if="serverinfo.is_member" :content="i18nlang.is_member_desc">
              <a-tag bordered color="green">
                <template #icon>
                  <icon-check-circle-fill />
                </template>
                <span v-text="i18nlang.is_member" />
              </a-tag>
            </a-tooltip>
            <a-tooltip v-if="serverinfo.auth_mode == 'official'" :content="i18nlang.auth_mode.official_desc">
              <a-tag color="gray" v-text="i18nlang.auth_mode.official"></a-tag>
            </a-tooltip>
            <a-tooltip v-if="serverinfo.auth_mode == 'offline'" :content="i18nlang.auth_mode.offline_desc">
              <a-tag color="magenta" v-text="i18nlang.auth_mode.offline"></a-tag>
            </a-tooltip>
            <a-tooltip v-if="serverinfo.auth_mode == 'yggdrasil'" :content="i18nlang.auth_mode.yggdrasil_desc">
              <a-tag color="blue" v-text="i18nlang.auth_mode.yggdrasil"></a-tag>
            </a-tooltip>
            <a-tooltip v-for="tag in serverinfo.tags" v-if="serverinfo.tags" :content="i18nlang.tags.click + tag" @click.stop="tagClick(tag)">
              <a-tag> {{ tag }}</a-tag>
            </a-tooltip>
          </a-space>
          <div v-html="marked(serverinfo.desc ? serverinfo.desc.replace(/\n/g, '<br>') : '')"></div>
        </template>
        <div class="desc" v-html="marked(serverinfo.desc ? serverinfo.desc.replace(/\n/g, '<br>') : '')"></div>
      </a-tooltip>
      <a-space wrap>
        <a-tooltip v-if="serverinfo.is_member" :content="i18nlang.is_member_desc">
          <a-tag bordered color="green">
            <template #icon>
              <icon-check-circle-fill />
            </template>
            <span v-text="i18nlang.is_member" />
          </a-tag>
        </a-tooltip>
        <a-tooltip v-if="serverinfo.auth_mode == 'official'" :content="i18nlang.auth_mode.official_desc">
          <a-tag color="gray" v-text="i18nlang.auth_mode.official"></a-tag>
        </a-tooltip>
        <a-tooltip v-if="serverinfo.auth_mode == 'offline'" :content="i18nlang.auth_mode.offline_desc">
          <a-tag color="magenta" v-text="i18nlang.auth_mode.offline"></a-tag>
        </a-tooltip>
        <a-tooltip v-if="serverinfo.auth_mode == 'yggdrasil'" :content="i18nlang.auth_mode.yggdrasil_desc">
          <a-tag color="blue" v-text="i18nlang.auth_mode.yggdrasil"></a-tag>
        </a-tooltip>
        <a-tooltip v-for="tag in serverinfo.tags" v-if="serverinfo.tags" :content="i18nlang.tags.click + tag" @click.stop="tagClick(tag)">
          <a-tag> {{ tag }}</a-tag>
        </a-tooltip>
      </a-space>
    </article>
  </VPLink>
</template>

<style lang="scss" scoped>
.ServerCard {
  text-decoration: unset !important;
  height: 100%;
  cursor: pointer;
  transition: all 0.25s;

  .box {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    color: var(--vp-c-text-1);

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
      line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
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