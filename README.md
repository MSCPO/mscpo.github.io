# Minecraft服务器集体宣传组织

[[加入委员会]](https://qm.qq.com/q/zcQwKOUZry)  [[加入玩家群]](https://qm.qq.com/q/dbRxlt3snC) 

[[添加自己的服务器到主页(问卷形式)]](https://github.com/MSCPO/mscpo.github.io/issues/new/choose) [[添加自己的服务器到主页(Pull)]](https://github.com/MSCPO/mscpo.github.io/edit/main/servers/index.md)

待处理：![Wait...](https://img.shields.io/github/issues/MSCPO/mscpo.github.io.svg)    已处理：![Completed](https://img.shields.io/github/issues-closed/MSCPO/mscpo.github.io.svg)

-------------
Languages：[English](README_EN.md);中文

-------------

## 提交服务器
温馨提示：加入集宣组织委员会后再添加服务器可以获得“成员服认证”标签，可筛选；不觉得很显眼吗💦  
在提交服务器之前，请确定你的服务器满足以下要求：

- 能长期运行

如果你的服务器满足以上要求，请按照以下步骤提交服务器：

1. fork 本仓库, 并 clone 到本地。
2. 修改 `servers/zh_CN/ServerList.yaml` 添加

``` yaml
- name: example
  icon:
    src: /server_icons/example.jpg
  type: Java/Geyser/Bedrock
  version: 你的服务器版本
  desc: example描述
  link: https://example.com（服务器官网或者是入群链接）
```

>其中icon:可以修改为单个字符，也能在夜间模式和白天模式切换

例如

``` yaml
  icon:
    dark: /dark-feature-icon.svg
    light: /light-feature-icon.svg
```

``` yaml
  icon:
    src: /cool-feature-icon.svg
```

``` yaml
  icon: 🛠️
```

3. (可选)如果你需要显示服务器图标，请在 `servers/public/server_icons/` 目录下添加图标
4. push 到你的仓库，然后提交 pull request。

### 项目信息

![Alt](https://repobeats.axiom.co/api/embed/40f1d6f2bafcf731a005ddad0f4a0178ce8e6c46.svg "Repobeats analytics image")

### 贡献者

帮助我们添加服务器的贡献者们

<a href="https://github.com/MSCPO/ServerDocumentation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MSCPO/mscpo.github.io" alt="Contributors"/>
</a>

---------

>对以上参与者致以敬意！
