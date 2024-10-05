---
layout: home
title: Список серверов Minecraft (отсортированный в случайном порядке)
hero:
  name: MSCPO
  tagline: Организация коллективного продвижения серверов Minecraft<br>Список серверов Minecraft (отсортированный случайным образом)
  floattitle: MSCPO International
  actions:
    - theme: brand
      text: Добавьте свой собственный сервер в список
      link: /ru/AddServers/
    - theme: alt
      text: Особая благодарность
      link: /ru/acknowledgement/
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
