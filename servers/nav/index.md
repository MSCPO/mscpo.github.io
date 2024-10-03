---
layoutClass: nav-layout
layout: doc
outline: [2, 3, 4]
---

<script setup>
import NAV_DATA from './DataBase_CN.yaml'
</script>
<style src="./index.scss"></style>

# Minecraft导航

<NavList v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## 特别鸣谢

感谢 [ZhuYuxuan9302](https://github.com/ZhuYuxuan9302) 对于项目的贡献，尽管其为项目提出的 [Pull Request](https://github.com/MSCPO/mscpo.github.io/pull/15) 没有被合并，其提供的数据帮助我们完成了导航栏的构建。
