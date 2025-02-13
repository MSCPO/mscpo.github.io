<script setup lang="ts">
import GridList, { RequestFunc } from './ServerItem.vue'
import ServerCard from './ServerCard.vue'
import { ref, computed, watch } from 'vue'
import { useData } from 'vitepress'
import SoundFiles from 'vitepress/dist/client/theme-default/sounds/button.mp3'
import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import VueHook from 'alova/vue';

// !!! Dev !!!
import { data } from '../hooks/servers.data'
const { localeIndex } = useData()
const currentLang = localeIndex.value === 'root' ? 'zh_CN' : localeIndex.value;
const Page_Server_Data = data.filter((server) => server.lang === currentLang);

const audio = new Audio(SoundFiles)

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
  tags?: Array<string>
}

type Servers = Server[]

const props = defineProps<{
  servers: Servers
}>()

const combinedServers = [
  ...Page_Server_Data.map(server => ({
    ...server.info,
    url: server.url,
    lang: server.lang,
  })),
  ...props.servers,
];

const filterStatus = ref("")

const allTags = combinedServers.flatMap(server => server.tags).filter(tag => tag !== null && tag !== undefined);
const uniqueTags = Array.from(new Set(allTags));
const uniqueTagsData = uniqueTags.map(tag => ({
  value: tag,
  label: tag
}))

let SelectedTags = ref<string[]>([]);

const tag = (context: string) => {
  SelectedTags.value = [context]
  refreshServers()
}

let displayfilter = ref(false)

const displayfilterswitch = () => {
  audio.play()
  displayfilter.value = !displayfilter.value
}

const filterbutton = () => {
  audio.play()
  refreshServers()
  displayfilter.value = false
}

// Fisher–Yates shuffle
const shuffledServers = (): Server[] => {
  const serversCopy = [...combinedServers];
  for (let i = serversCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [serversCopy[i], serversCopy[j]] = [serversCopy[j], serversCopy[i]];
  }
  return serversCopy;
};

const gridKey = ref(0)
const searchQuery = ref('')

const StrictTag = ref(false)

const filterclickbutton = () => {
  audio.play()
  servertype.value = ""
  SelectedTags.value = []
  StrictTag.value = false
}

// Fetch servers function for pagination and filtering
const fetchServers: RequestFunc<Server> = async ({ page, limit }) => {
  const start = (page - 1) * limit
  const end = start + limit

  const filteredServers = shuffledServers().filter(server => {
    const serverTags = server.tags ?? [];
    const serverTagsResult = () => {
      if (StrictTag.value) {
        return SelectedTags.value.every(tag => serverTags.includes(tag));
      } else {
        return SelectedTags.value.some(tag => serverTags.includes(tag));
      }
    }
    const matchesType = servertype.value ? server.type === servertype.value : true;
    const matchesSearch =
      server.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (server.desc && server.desc.toLowerCase().includes(searchQuery.value.toLowerCase()));
    const matchesMember = is_member_option.value ? server.is_member === true : true;
    const matchesTag = SelectedTags.value.length === 0 ||
      serverTagsResult();

    return matchesType && matchesSearch && matchesMember && matchesTag;
  });

  const paginatedServers = filteredServers.slice(start, end)

  return {
    data: paginatedServers,
    total: filteredServers.length,
  }
}

const refreshServers = async () => {
  gridKey.value++
  audio.play()
}

watch(
  () => displayfilter.value,
  () => {
    if (displayfilter.value) {
      filterStatus.value = "success"
    } else {
      if (JSON.stringify(SelectedTags.value) != '[]' || servertype.value != "") {
        filterStatus.value = "success"
      } else {
        filterStatus.value = ""
      }
    }
  },
  { deep: true }
)

// Language Part
const i18nlang = computed(() => {
  switch (localeIndex.value) {
    case 'root':
      return {
        empty: "QAQ~ 暂无服务器数据",
        loading: "加载中...",
        noMore: "QAQ~ 没有更多服务器",
        search: {
          placeholder: "搜索服务器...",
          button: "检索并刷新"
        },
        filter: {
          placeholder: "平台",
          tags: "标签",
          options: {
            Java: 'Java',
            Bedrock: '基岩',
            Geyser: '互通',
            Netease: '网易',
          },
          StrictTag: '严格模式',
          TagSelectTitle: ['待选标签', '已选标签'],
          filter: '筛选',
          filterclean: '清除',
          width: 80
        },
        is_member: "只看成员服"
      }
    case 'en':
      return {
        empty: "QAQ~ No server data",
        loading: "Loading...",
        noMore: "QAQ~ No more servers",
        search: {
          placeholder: "Search servers...",
          button: "Search"
        },
        filter: {
          tags: "Tags",
          placeholder: "Type",
          options: {
            Java: 'Java',
            Bedrock: 'Bedrock',
            Geyser: 'Geyser',
            Netease: 'Netease',
          },
          StrictTag: 'Strict Mode',
          TagSelectTitle: ['No label selected', 'Selected tags'],
          filter: 'Filter',
          filterclean: 'Clean',
          width: 130
        },
        is_member: "Member server"
      }
    case 'ru':
      return {
        empty: "QAQ~ Нет данных о серверах",
        loading: "Загрузка...",
        noMore: "QAQ~ Нет новых серверов",
        search: {
          placeholder: "Поисковый сервер...",
          button: "Поиск"
        },
        filter: {
          tags: "Tags", // 待翻译 Not translated!
          placeholder: "Тип",
          options: {
            Java: 'Java',
            Bedrock: 'Bedrock',
            Geyser: 'Geyser',
            Netease: 'Netease',
          },
          StrictTag: 'Strict Mode', // 待翻译 Not translated!
          TagSelectTitle: ['No label selected', 'Selected tags'], // 待翻译 Not translated!
          filter: 'Filter', // 待翻译 Not translated!
          filterclean: 'Clean', // 待翻译 Not translated!
          width: 130
        },
        is_member: "Смотреть только одежду"
      }
    default:
      return {
        empty: "QAQ~ No server data",
        loading: "Loading...",
        noMore: "QAQ~ No more servers",
        search: {
          placeholder: "Search servers...",
          button: "Search"
        },
        filter: {
          tags: "Tags",
          placeholder: "Type",
          options: {
            Java: 'Java',
            Bedrock: 'Bedrock',
            Geyser: 'Geyser',
            Netease: 'Netease',
          },
          StrictTag: 'Strict Mode',
          TagSelectTitle: ['No label selected', 'Selected tags'],
          filter: 'Filter',
          filterclean: 'Clean',
          width: 130
        },
        is_member: "Member server"
      }
  }
});

const servertype = ref('')

const is_member_option = ref(false);

const alova = createAlova({
  requestAdapter: adapterFetch(),
  statesHook: VueHook,
  responded: response => response.json()
});

interface StatusResponse {
  online: boolean
  icon?: string
  motd?: string
  players?: {
    online: number
    max: number
  }
}

async function checkStatus(ip: string): Promise<StatusResponse> {
  if (ip != null) {
    try {
      const response = await alova.Get<StatusResponse>(`https://mcstat.mcskin.cn/api/status/${ip}`, {
        shareRequest: true
      })
      if (response.online) {
        return response
      } else {
        return { online: false }
      }
    } catch (e) {
      return { online: false }
    }
  }
  return { online: false }
}
</script>

<template>
  <div class="container VPHomeFeatures">
    <div class="search">
      <a-input-group>
        <a-button type="primary" :status="filterStatus" @click="displayfilterswitch">
          <template #icon>
            <icon-filter />
          </template>
        </a-button>
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
      <div v-if="displayfilter" class="search-filters">
        {{ i18nlang.filter.placeholder }}:
        <a-radio-group type="button" v-model="servertype" @change="audio.play()">
          <a-radio value="Java">{{ i18nlang.filter.options.Java }}</a-radio>
          <a-radio value="Geyser">{{ i18nlang.filter.options.Geyser }}</a-radio>
          <a-radio value="Bedrock">{{ i18nlang.filter.options.Bedrock }}</a-radio>
          <a-radio value="Netease">{{ i18nlang.filter.options.Netease }}</a-radio>
        </a-radio-group>
        <br>
        {{ i18nlang.filter.tags }}:
        <a-checkbox v-model="StrictTag" @change="audio.play()"><span v-text="i18nlang.filter.StrictTag"></span></a-checkbox>
        <a-transfer :data="uniqueTagsData" v-model="SelectedTags" :style="{ 'max-width': '360px', width: '100%' }" simple
          :title="i18nlang.filter.TagSelectTitle" @change="audio.play()" show-search />
        <br>
        <div style="float: right; display: flex; gap: 5px;">
          <a-button @click="filterclickbutton" v-text="i18nlang.filter.filterclean"></a-button>
          <a-button type="primary" @click="filterbutton" v-text="i18nlang.filter.filter"></a-button>
        </div>
      </div>
    </div>
    <br>
    <div class="server-cards">
      <ClientOnly>
        <GridList :key="gridKey" :request="fetchServers" :column-gap="20" :row-gap="20" :limit="100" class="items">
          <template #default="{ item }">
            <div class="item">
              <ServerCard :icon="item.icon" :name="item.name" :desc="item.desc" :type="item.type" :link="item.link"
                :version="item.version" :ip="item.ip" :is_member="item.is_member" :auth_mode="item.auth_mode"
                :tags="item.tags" :status="checkStatus(item.ip)" @tag-click="tag" />
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
  };

  .search {
    margin: -8px;
    background: linear-gradient(to right, rgba(149, 255, 11, 0.188), rgba(223, 7, 108, 0.164));

    .search-filters {
      z-index: 1;
      max-width: 360px;
      background-color: var(--vp-nav-bg-color);
      position: absolute;
      border-radius: 2px;
      padding: 0.5rem;

      @media screen and (max-width: 400px) {
        width: 100%;
      }
    }
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