---
layout: home
title: 服务器集体宣传组织|MC联机服务器列表
hero:
  name: 服务器集体宣传组织
  tagline: 汇聚优质服务器，为玩家和服主搭建桥梁
  floattitle: MSCPO
  actions:
    - theme: alt
      text: 加入社区群组（QQ）
      link: https://qm.qq.com/q/SHcbys4Scw
    - theme: alt
      text: 加入社区群组（云湖）
      link: https://yhfx.jwznb.com/share?key=ZyP7jKb8Pxtq&ts=1745033291
    - theme: brand
      text: 添加服务器
      link: /AddServers/
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
