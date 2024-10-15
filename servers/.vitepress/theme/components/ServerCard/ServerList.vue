<script setup lang="ts">
import ServerCard from './ServerCard.vue';
import { computed, watch, ref, onMounted } from 'vue'

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

type Servers = Server[];

const props = defineProps<{
  servers: Servers;
}>();
// CSS judgment
const grid = computed(() => {
  const length = props.servers.length
  return length === 0 ? undefined
    : length === 2 ? 'grid-2'
    : length === 3 ? 'grid-3'
    : length % 3 === 0 ? 'grid-6'
    : 'grid-4'
})
// Random part
const shuffledServers = ref<Servers>([])
const shuffleServers = () => {
  shuffledServers.value = [...props.servers].sort(() => Math.random() - 0.5)
}
watch(() => props.servers, shuffleServers, { immediate: true })
onMounted(shuffleServers)
</script>

<template>
  <div class="server-cards VPHomeFeatures">
    <div class="items">
      <div
        v-for="(server, index) in shuffledServers"
        :key="server.name + index"
        class="item"
        :class="[grid]"
      >
        <ServerCard
          :key="server.name + index"
          :icon="server.icon"
          :name="server.name"
          :desc="server.desc"
          :type ="server.type"
          :link="server.link"
          :linkText="server.linkText"
          :version="server.version"
          :ip="server.ip"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.server-cards {
  position: relative;
  display: block;
  height: 100%;
  margin-bottom: 5%;
  background: linear-gradient(to right,rgba(6,205,255,.1882352941),rgba(223,7,107,.3));
}

@media (min-width: 640px) {
  .server-cards {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .server-cards {
    padding: 0 64px;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
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