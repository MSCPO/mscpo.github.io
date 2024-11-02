<script setup lang="ts"> 
import GridList, { RequestFunc } from './ServerItem.vue'
import ServerCard from './ServerCard.vue'
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import SoundFiles from 'vitepress/dist/client/theme-default/sounds/button.mp3'
import { CompassOutlined } from '@ant-design/icons-vue'

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
      
    return matchesType && matchesSearch;
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
          button: "搜索并刷新"
        },
        select: {
          placeholder: "平台",
          options: {
            Java: 'Java',
            Bedrock: '基岩',
            Geyser: '互通',
            Netease: '网易',
            Not_specified: '未指定'
          },
          width: 80
        }
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
            Not_specified: 'Not specified'
          },
          width: 130
        }
      }
    case 'ru':
      return {
        empty: "Нет данных о серверах",
        loading: "Загрузка...",
        noMore: "Нет новых серверов",
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
            Not_specified: 'Not specified'
          },
          width: 130
        }
      }
    default:
      return {
        empty: "暂无服务器数据",
        loading: "加载中...",
        noMore: "没有更多服务器",
        search: {
          placeholder: "搜索服务器...",
          button: "搜索并刷新"
        },
        select: {
          placeholder: "平台",
          options: {
            Java: 'Java',
            Bedrock: '基岩',
            Geyser: '互通',
            Netease: '网易',
            Not_specified: '未指定'
          },
          width: 80
        }
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
      },
      {
        label: i18nlang.value.select.options.Not_specified,
        value: ''
      }
    ])
const selectedValue = ref('')
</script>

<template>
  <div class="server-cards VPHomeFeatures">
    <div class="search-box">
    <Tooltip tooltip="选择一个服务器类型">
      <Select :placeholder="i18nlang.select.placeholder" :options="options" v-model="selectedValue" :width="i18nlang.select.width" @change="refreshServers"/>
    </Tooltip>
    <InputSearch 
      v-model:value="searchQuery" 
      :placeholder="i18nlang.search.placeholder" 
      style="margin-bottom: 10px; padding: 5px; width: 200px;"
      @search="refreshServers"
    >
      <template #search>
        <Button>
          <template #icon>
            <Tooltip :tooltip="i18nlang.search.button">
              <CompassOutlined />
            </Tooltip>
          </template>
        </Button>
      </template>
    </InputSearch>
    </div>
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
        <p align="center" style="color: rgb(0, 225, 255);" v-text="i18nlang.empty"></p>
      </template>
      <template #loading>
        <p align="center" style="color: rgb(0, 225, 255);" v-text="i18nlang.loading"></p>
      </template>
      <template #noMore>
        <p align="center" style="color: rgb(0, 225, 255);" v-text="i18nlang.noMore"></p>
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
  background: linear-gradient(to right,rgba(6,205,255,.1882352941),rgba(223, 7, 108, 0.164));
  .search-box {
    position: fixed;
    z-index: 999;
    opacity: 0.7;
  }
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