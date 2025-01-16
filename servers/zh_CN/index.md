---
layout: home
title: MC联机服务器列表
hero:
  name: 服务器集体宣传组织
  tagline: Minecraft服务器集体宣传组织(MSCPO)是一个致力于我的世界服务器宣传和技术交流的新兴组织
  floattitle: MSCPO 中国
  actions:
    - theme: alt
      text: 加入委员会
      link: https://qm.qq.com/q/QGwqtKSnIK
    - theme: alt
      text: 加入玩家群
      link: https://qm.qq.com/q/SHcbys4Scw
    - theme: brand
      text: 添加服务器
      link: /AddServers/
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
