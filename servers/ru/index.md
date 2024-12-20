---
layout: home
title: Список серверов Minecraft (отсортированный в случайном порядке)
hero:
  name: Организация коллективного продвижения сервера Minecraft
  tagline: Организация коллективного продвижения серверов Minecraft<br>Список серверов Minecraft (отсортированный случайным образом)
  floattitle: МSCPO Россия
  actions:
    - theme: alt
      text: Присоединяйтесь к комитету
      link: https://yandex.ru/chat#/join/89d4640d-6036-48da-8a45-bb74872c3800
    - theme: alt
      text: Присоединяйтесь к сообществу
      link: https://vk.com/mscpo
    - theme: brand
      text: Особая благодарность
      link: /ru/acknowledgement/
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
