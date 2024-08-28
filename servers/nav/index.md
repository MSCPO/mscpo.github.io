---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# MC导航
## 由MCJPG组织提供

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />