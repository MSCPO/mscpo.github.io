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
    avatar: '/MLX.png',
    name: '落雪 生存服务器',
    title: '会长',
    desc: '版本:JAVA1.19.4跨版本</br>这是一个纯生存java版服务器。然后？没了，嗯，没了。（你干嘛哎呦！）',

  },
    {
    avatar: '/ZUYMC.webp',
    name: 'ZUYCraft服务器',
    title: '副会长',
    desc: '版本:基岩1.20.72</br>筑梦于虚拟，创造不凡篇章。欢迎来到ZUYCraft基岩生存建筑服务器。',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>集宣组织架构</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="Server" />

</VPTeamPage>
