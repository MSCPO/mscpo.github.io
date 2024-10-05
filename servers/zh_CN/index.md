---
layout: home
title: MC联机服务器列表
hero:
  name: 服务器集体宣传组织
  tagline: Minecraft服务器集体宣传组织 (MSCPO)<br>服务器列表（随机排序）
  floattitle: MSCPO 中国
  actions:
    - theme: brand
      text: 添加自己的服务器到列表
      link: /AddServers/
    - theme: alt
      text: 加入我们
      link: https://qm.qq.com/q/QGwqtKSnIK
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
