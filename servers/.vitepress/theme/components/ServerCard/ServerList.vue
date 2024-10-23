<script setup lang="ts">
import GridList, { RequestFunc } from './ServerItem.vue'
import ServerCard from './ServerCard.vue'
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import SoundFiles from 'vitepress/dist/client/theme-default/sounds/button.mp3'
// import { data } from '../hooks/servers.data'
// console.log(data)

const { localeIndex } = useData()

type Server = {
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
  linkText?: string
  version?: string | number
  ip?: string
}

type Servers = Server[]

const props = defineProps<{
  servers: Servers
}>()

// Fisher–Yates shuffle
const shuffledServers = (): Server[] => {
  const serversCopy = [...props.servers]
  for (let i = serversCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [serversCopy[i], serversCopy[j]] = [serversCopy[j], serversCopy[i]];
  }
  return serversCopy
}

const gridKey = ref(0)

// Fetch servers function for pagination
const fetchServers: RequestFunc<Server> = async ({ page, limit }) => {
  const start = (page - 1) * limit
  const end = start + limit

  // Get paginated servers from shuffledServers
  const paginatedServers = shuffledServers().slice(start, end)

  return {
    data: paginatedServers,
    total: shuffledServers().length,
  }
}

const refreshServers = () => {
  gridKey.value++
  const audio = new Audio(SoundFiles)
  audio.play()
}


const lang = computed(() => {
  switch (localeIndex.value) {
    case 'root':
      return {
        button: "更新服务器列表",
        empty: "暂无服务器数据",
        loading: "加载中...",
        noMore: "没有更多服务器"
      }
    case 'en':
      return {
        button: "Update server list",
        empty: "No server data",
        loading: "Loading...",
        noMore: "No more servers"
      }
    case 'ru':
      return {
        button: "Обновить список серверов",
        empty: "Нет данных о серверах",
        loading: "Загрузка...",
        noMore: "Нет новых серверов"
      }
    default:
      return {
        button: "更新服务器列表",
        empty: "暂无服务器数据",
        loading: "加载中...",
        noMore: "没有更多服务器"
      }
  }
});

</script>

<template>
  <div class="server-cards VPHomeFeatures">
    <button @click="refreshServers" style="color: aqua;" v-text="lang.button"></button>
    <GridList 
      :key="gridKey"
      :request="fetchServers" 
      :column-gap="20" 
      :row-gap="20" 
      :limit="100" 
      :item-min-width="250" 
      class="items"
    >
      <template #default="{ item }">
        <div class="item">
          <ServerCard
            :icon="item.icon"
            :name="item.name"
            :desc="item.desc"
            :type="item.type"
            :link="item.link"
            :version="item.version"
            :ip="item.ip"
          />
        </div>
      </template>
      <template #empty>
        <p align="center" style="color: rgb(0, 225, 255);" v-text="lang.empty"></p>
      </template>
      <template #loading>
        <p align="center" style="color: rgb(0, 225, 255);" v-text="lang.loading"></p>
      </template>
      <template #noMore>
        <p align="center" style="color: rgb(0, 225, 255);" v-text="lang.noMore"></p>
      </template>
    </GridList>
  </div>
</template>

<style lang="scss" scoped>
.server-cards {
  position: relative;
  display: block;
  height: 100vh;
  margin: 2%;
  background: linear-gradient(to right,rgba(6,205,255,.1882352941),rgba(223,7,107,.3));
}

@media (min-width: 640px) {
  .server-cards {
    padding: 0 30px;
  }
}

@media (min-width: 960px) {
  .server-cards {
    padding: 0 10px;
  }
}

.items {
  display: grid;
  height: 100%;
  margin: -8px;
  .item {
    padding: 16px;
    &:hover {
          -webkit-animation-name: hfhover-zoom;
          animation-name: hfhover-zoom;
          -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          -webkit-animation-iteration-count: 1;
          animation-iteration-count: 1;
          color: var(--c-sub-brand-light);
    }
  }
}
</style>