---
layoutClass: nav-layout
layout: doc
outline: [2, 3, 4]
---

<script setup>
import NAV_DATA from './en/DataBase.yaml'
</script>
<style src="./index.scss"></style>

# Server Classification

<NavList v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## Add a server on this page

::: tip How to add a server to this page?
Join the MSCPO Committee and become a full member.
You must indicate the MSCPO on your server's website and community, and have a clear link to it (https://mscpo.top/)
:::
