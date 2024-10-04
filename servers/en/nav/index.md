---
layoutClass: nav-layout
layout: doc
outline: [2, 3, 4]
---

<script setup>
import NAV_DATA from './DataBase_EN.yaml'
</script>
<style src="./index.scss"></style>

# Minecraft Navigation

<NavList v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

## Help us in adding link cards

::: tip How to Edit the Navigation?
The navigation database is stored at [servers/nav/DataBase_CN.yaml](https://github.com/MSCPO/mscpo.github.io/blob/main/servers/nav/DataBase_CN.yaml), and it follows YAML format. Simply edit it accordingly.

TIP: [What is YAML?](https://www.freecodecamp.org/news/what-is-yaml-the-yml-file-format/)
:::

::: Where are the icons and how to reference them?

The icons are located in the [servers/public/Nav_Images/](https://github.com/MSCPO/mscpo.github.io/tree/main/servers/public/Nav_Images/) directory, already organized into categories. Just add the icons according to their respective categories.

``` yaml{2}
    # Here's an example
    - title: Minecraft Forum
      icon: /Nav_Images/Unofficial_BBS/Minecraft_Forum.webp// [!code focus]
      desc: A well-known non-official Minecraft forum in the international community
      link: https://www.minecraftforum.net/
```
:::

## Special Thanks

We are grateful to [ZhuYuxuan9302](https://github.com/ZhuYuxuan9302) for their contribution to the project, even though their [Pull Request](https://github.com/MSCPO/mscpo.github.io/pull/15) was not merged. Their data was instrumental in helping us create the navigation bar.
