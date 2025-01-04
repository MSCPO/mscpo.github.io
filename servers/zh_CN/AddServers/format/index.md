# 格式: 添加新服务器以及修改服务器信息

## 数据库法(快速)

数据库法通常用于以下情况：

1. 成员服有自己的宣传页面
2. 成员服所提供的信息并不完整

::: tip
数据库法可以仅提供简短的信息便可添加服务器卡片，但是相比之下信息总量较少，最好在成员服有官网的时候使用它
:::

### 添加服务器

步骤大致如下

1. fork 本仓库, 并 clone 到本地。
2. 修改 `servers/zh_CN/ServerList.yaml` 按照格式添加服务器信息
3. 推送至远程仓库并发起PR请求等待合并

数据库格式如下

``` yaml:line-numbers
- name: (必选)示例服务器
  icon:
    src: 图像地址
  type: Geyser # (必选)这是服务器的类型，可选Java（电脑），Geyser（互通服），Bedrock（基岩版）
  version: 1.20.1 # (必选)这是服务器的版本
  desc: |
        (必选)这是服务器的描述
  link: https://mc.mscaome.top/
  ip: aomemsc.giize.com # (可选)这是服务器的IP地址，添加后可以将服务器状态显示在服务器卡片上
  is_member: false # (可选)服务器是否加入了MSCPO组织
  auth_mode: offline # (可选)这是服务器的认证方式，可选offline(离线服务器)，yggdrasil(外置登录)，official(正版服务器)
```

::: warning
注意缩进，遵循YAML数组语法，并且按照先后顺序向下排列以便于管理。
:::

## 内建页面法(高级)

内建页面法通常用于以下情况：

1. 成员服没有自己的宣传页面
2. 成员服所提供的信息包含多个段落以及图片

::: tip
内建页面法允许成员服在本站详细描述信息，添加图片等。当成员服没有自己的宣传页面时，本站可以为各个成员服创建一个单独的子页面用来宣传。
:::

### 添加服务器

步骤大致如下

1. fork 本仓库, 并 clone 到本地。
2. 向 `servers/zh_CN/servers` 目录新建 `服务器名.md` MarkDown 文件
3. 按照格式修改 `服务器名.md` MarkDown 文件
4. 推送至远程仓库并发起PR请求等待合并

MarkDown 文件格式如下

``` md{15-17}:line-numbers
---
name: (必选)示例服务器// [!code warning]
icon:// [!code warning]
  src: 图像地址// [!code warning]
type: Geyser # (必选)这是服务器的类型，可选Java（电脑），Geyser（互通服），Bedrock（基岩版）// [!code warning]
version: 1.20.1 # (必选)这是服务器的版本// [!code warning]
desc: |// [!code warning]
      (必选)这是服务器的描述// [!code warning]
ip: aomemsc.giize.com # (可选)这是服务器的IP地址，添加后可以将服务器状态显示在服务器卡片上// [!code warning]
is_member: false # (可选)服务器是否加入了MSCPO组织// [!code warning]
auth_mode: offline # (可选)这是服务器的认证方式，可选offline(离线服务器)，yggdrasil(外置登录)，official(正版服务器)// [!code warning]
hide: false # (可选，仅限内建页面法)这定义了服务器是否能在主页面上展示，为真时隐藏服务器卡片，默认为显示服务器// [!code warning]
---
# 服务器标题(从这里往下其实可以不用这么死板)

正文，即服务器内容(按照 MarkDown 格式写就可以了)
```

::: info 举个栗子
[Test_Server.md](https://github.com/MSCPO/mscpo.github.io/blob/main/servers/zh_CN/servers/Test_Server.md)
:::

::: tip 阅读这些可能会有帮助

- [基础 | MarkDown 基本语法](https://markdown.com.cn/basic-syntax/)
- [进阶 | 本站的 Markdown 扩展](https://vitepress.dev/zh/guide/markdown)

:::

::: warning
服务器数据部分采用了 YAML frontmatter，使用 [gray-matter](https://github.com/jonschlinkert/gray-matter) 进行解析。
frontmatter 必须位于 Markdown 文件的顶部 (在任何元素之前，包括 `<script>` 标签)，并且需要在三条虚线之间采用有效的 YAML 格式，其余的自由处理即可。
:::
