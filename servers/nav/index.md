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

## 帮助我们添加链接

::: tip 如何修改导航？
[servers/nav/DataBase_CN.yaml](https://github.com/MSCPO/mscpo.github.io/blob/main/servers/nav/DataBase_CN.yaml) 是导航的数据库，遵循 Yaml 格式编辑即可。

TIP: [什么是 Yaml？](https://www.runoob.com/w3cnote/yaml-intro.html)
:::

::: tip 图标放在哪里？如何引用？

图标位于 [servers/public/Nav_Images/](https://github.com/MSCPO/mscpo.github.io/tree/main/servers/public/Nav_Images/) 下已经进行分类，按照分类添加即可。

``` yaml{2}
    # 这是一个例子
    - title: Minecraft Forum
      icon: /Nav_Images/Unofficial_BBS/Minecraft_Forum.webp// [!code focus]
      desc: 国外比较有名的非官方Minecraft论坛
      link: https://www.minecraftforum.net/
```
:::

## 特别鸣谢

感谢 [ZhuYuxuan9302](https://github.com/ZhuYuxuan9302) 对于项目的贡献，尽管其为项目提出的 [Pull Request](https://github.com/MSCPO/mscpo.github.io/pull/15) 没有被合并，其提供的数据帮助我们完成了导航栏的构建。
