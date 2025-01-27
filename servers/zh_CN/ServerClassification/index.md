---
layoutClass: nav-layout
layout: doc
outline: [2, 3, 4]
---

<script setup>
import NAV_DATA from './DataBase.yaml'
</script>
<style src="./index.scss"></style>

# 找服玩

<NavList v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## 在页面添加服务器

::: tip 如何在页面添加服务器？
加入MSCPO委员会并成为正式成员服
:::
