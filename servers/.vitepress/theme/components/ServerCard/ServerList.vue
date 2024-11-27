<script setup lang="ts">
import GridList, { RequestFunc } from './ServerItem.vue'
import ServerCard from './ServerCard.vue'
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import SoundFiles from 'vitepress/dist/client/theme-default/sounds/button.mp3'

//// !!! Dev !!!
// import { data } from '../hooks/servers.data'
// console.log(data);

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
  is_member?: boolean
  auth_mode?: 'official' | 'yggdrasil' | 'offline'
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
const searchQuery = ref('')

// Fetch servers function for pagination and filtering
const fetchServers: RequestFunc<Server> = async ({ page, limit }) => {
  const start = (page - 1) * limit
  const end = start + limit

  const filteredServers = shuffledServers().filter(server => {
    const matchesType = selectedValue.value ? server.type === selectedValue.value : true;
    const matchesSearch =
      server.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (server.desc && server.desc.toLowerCase().includes(searchQuery.value.toLowerCase()));
    const matchesMember = is_member_option.value ? server.is_member === true : true;

    return matchesType && matchesSearch && matchesMember;
  });

  const paginatedServers = filteredServers.slice(start, end)

  return {
    data: paginatedServers,
    total: filteredServers.length,
  }
}

const refreshServers = () => {
  gridKey.value++
  const audio = new Audio(SoundFiles)
  audio.play()
}

const i18nlang = computed(() => {
  switch (localeIndex.value) {
    case 'root':
      return {
        empty: "暂无服务器数据",
        loading: "加载中...",
        noMore: "没有更多服务器",
        search: {
          placeholder: "搜索服务器...",
          button: "检索并刷新"
        },
        select: {
          placeholder: "平台",
          options: {
            Java: 'Java',
            Bedrock: '基岩',
            Geyser: '互通',
            Netease: '网易',
          },
          width: 80
        },
        is_member: "只看成员服"
      }
    case 'en':
      return {
        empty: "No server data",
        loading: "Loading...",
        noMore: "No more servers",
        search: {
          placeholder: "Search servers...",
          button: "Search"
        },
        select: {
          placeholder: "Type",
          options: {
            Java: 'Java',
            Bedrock: 'Bedrock',
            Geyser: 'Geyser',
            Netease: 'Netease',
          },
          width: 130
        },
        is_member: "Member server"
      }
    case 'ru':
      return {
        empty: "Нет данных о серверах",
        loading: "Загрузка...",
        noMore: "Нет новых серверов",
        search: {
          placeholder: "Поисковый сервер...",
          button: "Поиск"
        },
        select: {
          placeholder: "Тип",
          options: {
            Java: 'Java',
            Bedrock: 'Bedrock',
            Geyser: 'Geyser',
            Netease: 'Netease',
          },
          width: 130
        },
        is_member: "Смотреть только одежду"
      }
    default:
      return {
        empty: "No server data",
        loading: "Loading...",
        noMore: "No more servers",
        search: {
          placeholder: "Search servers...",
          button: "Search"
        },
        select: {
          placeholder: "Type",
          options: {
            Java: 'Java',
            Bedrock: 'Bedrock',
            Geyser: 'Geyser',
            Netease: 'Netease',
          },
          width: 130
        },
        is_member: "Member server"
      }
  }
});

const options = ref([
  {
    label: i18nlang.value.select.options.Java,
    value: 'Java'
  },
  {
    label: i18nlang.value.select.options.Bedrock,
    value: 'Bedrock'
  },
  {
    label: i18nlang.value.select.options.Geyser,
    value: 'Geyser'
  },
  {
    label: i18nlang.value.select.options.Netease,
    value: 'Netease'
  }
])
const selectedValue = ref('')

const is_member_option = ref(false);
</script>

<template>
  <div class="container VPHomeFeatures">
    <div class="select-option">
      <a-input-group>
        <a-select :options="options" v-model="selectedValue" :label="i18nlang.select.placeholder" @change="refreshServers"
          :style="{ width: '90px' }" :placeholder="i18nlang.select.placeholder" allow-clear />
        <a-input-search @search="refreshServers" :style="{ width: '80%' }" v-model="searchQuery"
          :placeholder="i18nlang.search.placeholder" search-button>
          <template #button-icon>
            <icon-compass />
          </template>
          <template #button-default>
            {{ i18nlang.search.button }}
          </template>
        </a-input-search>
      </a-input-group>
      <a-checkbox v-model="is_member_option" @change="refreshServers"><span style="color: white"
          v-text="i18nlang.is_member"></span></a-checkbox>
    </div>
    <br>
    <div class="server-cards">
      <ClientOnly>
        <GridList :key="gridKey" :request="fetchServers" :column-gap="20" :row-gap="20" :limit="100" :item-min-width="250"
          class="items">
          <template #default="{ item }">
            <div class="item">
              <ServerCard :icon="item.icon" :name="item.name" :desc="item.desc" :type="item.type" :link="item.link"
                :version="item.version" :ip="item.ip" :is_member="item.is_member" :auth_mode="item.auth_mode" />
            </div>
          </template>
          <template #empty>
            <p align="center" style="color: rgb(0, 225, 255);" v-text="i18nlang.empty"></p>
          </template>
          <template #loading>
            <p align="center" style="color: rgb(0, 225, 255);" v-text="i18nlang.loading"></p>
          </template>
          <template #noMore>
            <p align="center" style="color: rgb(0, 225, 255);" v-text="i18nlang.noMore"></p>
          </template>
        </GridList>
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  display: block;
  margin: 2%;

  .server-cards {
    height: 100vh;
  }

  ;

  .select-option {
    background: linear-gradient(to right, rgba(149, 255, 11, 0.188), rgba(223, 7, 108, 0.164));
  }
}

@media (min-width: 640px) {
  .container {
    padding: 0 10px 10px;
  }
}

@media (min-width: 960px) {
  .container {
    padding: 0 30px 30px;
  }
}

.items {
  display: grid;
  height: 100%;
  margin: -8px;

  .item {
    padding: 16px;
    height: 100%;
    background: linear-gradient(to right, rgba(149, 255, 11, 0.188), rgba(223, 7, 108, 0.164));

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