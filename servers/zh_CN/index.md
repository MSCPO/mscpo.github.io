---
layout: home
title: MC联机服务器列表
hero:
  name: 服务器集体宣传组织
  tagline: 服务器列表（随机排序）<br>Github Issue 提交
  floattitle: MSCPO 中国
  actions:
    - theme: brand big
      text: 添加自己的服务器到列表
      link: /AddServers/
    - theme: alt big
      text: 加入我们
      link: https://qm.qq.com/q/QGwqtKSnIK
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
