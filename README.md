# 服务器集体宣传组织

[[添加自己的服务器到主页(问卷形式)]](https://github.com/MSCPO/mscpo.github.io/issues/new/choose) [[添加自己的服务器到主页(Pull)]](https://github.com/MSCPO/mscpo.github.io/edit/main/servers/index.md)

-------------
Languages：[English](README_EN.md);中文

-------------

## 提交服务器

在提交服务器之前，请确定你的服务器满足以下要求：

- 无

如果你的服务器满足以上要求，请按照以下步骤提交服务器：

1. fork 本仓库, 并 clone 到本地。
2. 修改 `docs/index.md` 的features字段，添加

``` index.md
  - icon:
      src: /server_icons/example.jpg
    title: example
    details: 版本：JAVA/JAVA互通/基岩 | example</br>example描述
    link: https://example.com（服务器官网或者是入群链接）
    linkText: example（链接名字，如“加入我们awa”）
```

>其中icon:可以修改为单个字符，也能在夜间模式和白天模式切换

例如

``` index.md
  - icon:
      dark: /dark-feature-icon.svg
      light: /light-feature-icon.svg
```

``` index.md
  - icon:
      src: /cool-feature-icon.svg
```

``` index.md
  - icon: 🛠️
```

3. (可选)如果你需要显示服务器图标，请在 `docs/public/server_icons/` 目录下添加图标
4. push 到你的仓库，然后提交 pull request。

## 特别鸣谢

## ZUY工作室

[ZUYCraft](https://mc.zuyst.top/)为我们提供了一个网站节点

[服务器集体宣传组织(MSCPO)](https://mscpo.zuyst.top) https://mscpo.zuyst.top

### MFT服务器联盟

[MFT服务器联盟](https://mc.mscaome.top/)为我们提供了一个网站节点

[服务器集体宣传组织(MSCPO)](https://mscpo.mscaome.top) https://mscpo.mscaome.top

### 贡献者

帮助我们添加服务器的贡献者们

<a href="https://github.com/MSCPO/ServerDocumentation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MSCPO/mscpo.github.io" alt="Contributors"/>
</a>

---------

>对以上参与者致以敬意！
