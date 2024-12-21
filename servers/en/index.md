---
layout: home
title: Minecraft Server List (Randomly Sorted)
hero:
  name: MSCPO
  tagline: Minecraft Server Collective Promotion Organization<br>Minecraft Server List (Randomly Sorted)
  floattitle: MSCPO International
  actions:
    - theme: alt
      text: Contact us
      link: mailto:ushio_noa@mail.ru
    - theme: alt
      text: Join our player community
      link: https://discord.gg/hygPY8Kryv
    - theme: brand
      text: Special Thanks
      link: /en/acknowledgement/
---
<script setup>
import Server_DATA from './ServerList.yaml'
</script>

<ServerList :servers="Server_DATA"/>
