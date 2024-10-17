<script setup lang="ts">
import ServerCard from './ServerCard.vue';
import { watch, ref, onMounted } from 'vue'

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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
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