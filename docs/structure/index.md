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
    avatar: '待编辑',
    name: '待编辑',
    title: '会长',
    desc: '待编辑',

  },
    {
    avatar: '/teammate/ZUY_PVZ小白.jpg',
    name: 'PVZ小白',
    title: '副会长',
    desc: '在MSCPO第一次公开选举中票数第三，ZUYCraft服务器腐竹',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>集宣组织架构</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="Server" />

</VPTeamPage>
