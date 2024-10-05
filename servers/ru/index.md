---
layout: home
title: Minecraft Server List (Randomly Sorted)
hero:
  name: MSCPO
  tagline: Minecraft Server Collective Promotion Organization<br>Minecraft Server List (Randomly Sorted)
  floattitle: MSCPO International
  actions:
    - theme: brand
      text: Add your own server to the list
      link: /en/AddServers/
    - theme: alt
      text: Special Thanks
      link: /en/acknowledgement/
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
