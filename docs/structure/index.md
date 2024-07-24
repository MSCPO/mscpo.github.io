---
layout: page
title: 集宣组织架构
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const Server = [
    {
    avatar: '/teammate/2/peg195.jpg',
    name: 'peg195',
    title: '副会长',
    desc: '在MSCPO第二次公开选举中票数第三，ZUYCraft服务器腐竹',
  },
  {
    avatar: '/teammate/2/白千琴.jpg',
    name: '白千琴',
    title: '会长',
    desc: '在MSCPO第二次公开选举中票数第一，OURCRAFT（予巧）团队代表，同时也是OURCRAFT服务器腐竹、OURCRAFT委员会总执事',
  },
  {
    avatar: '/teammate/2/Ленинград.jpg',
    name: 'Ленинград',
    title: '副会长',
    desc: '在MSCPO第二次公开选举中票数第二，明灯·Alethea服务器维护',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>集宣组织架构</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="Server" />

</VPTeamPage>
