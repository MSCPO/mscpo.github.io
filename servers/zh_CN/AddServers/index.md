# 如何在集宣组织宣传网站中添加自己的服务器展示位置？

待处理：![Wait...](https://img.shields.io/github/issues/MSCPO/mscpo.github.io.svg)    已处理：![Completed](https://img.shields.io/github/issues-closed/MSCPO/mscpo.github.io.svg)

## 方法1：加入委员会群聊

1.加入群聊

2.私信现任委会长/在群内@说明服务器信息即可  

::: info 委员会群组

QQ 群组：[[加入 MSCPO集宣组织 | 一群]](https://qm.qq.com/cgi-bin/qm/qr?k=gWjlcHAM-9cSgtQC1B-gkMpzdW250uDv&jump_from=webapi&authKey=1ce3eEvCnXY71xkoPTH7/zOBqkuaJD6H/XlY/Mz5kDxycvwnpDdQRtM03+WPsLMh)
:::

::: tip 什么是集宣组织委员会？

- 集宣组织委员会是集宣组织的决策机构。
- 委员会决策是集宣组织决策的主要决策方式。
- 加入委员会即视为准成员服，可以参与集宣组织的民主决策，参与/发起集宣组织的各种活动。

:::

## 方法2：问卷申请

1. 提供必要信息
  [申请通道](https://github.com/MSCPO/mscpo.github.io/issues/new/choose)
2. 等待审核结果。
  如果您有GitHub账号，可以加入组织，帮助我们更新服务器列表，贡献组织下的开源项目（如[Server_Ping](https://github.com/MSCPO/Server_Ping)、[ServerDocumentation](https://github.com/MSCPO/ServerDocumentation)等）。

## 方法3：提交PR等待合并

### 一、PR提交-数据库法（基础）

1. Fork储存库[MSCPO/mscpo.github.io](https://github.com/MSCPO/mscpo.github.io/fork)
2. 按照格式修改`servers/zh_CN/ServerList.yaml`
3. 推送至远程仓库并发起PR请求等待合并

### 二、PR提交-内建页面法（高级）

1. Fork储存库[MSCPO/mscpo.github.io](https://github.com/MSCPO/mscpo.github.io/fork)
2. 向 `servers/zh_CN/servers` 目录新建 `服务器名.md` MarkDown 文件
3. 按照格式修改 `服务器名.md` MarkDown 文件
4. 推送至远程仓库并发起PR请求等待合并

::: info 举个栗子（示范格式）
[Test_Server.md](https://github.com/MSCPO/mscpo.github.io/blob/main/servers/zh_CN/servers/Test_Server.md)

[内建页面：Test Server | 测试服务器](https://mscpo.netlify.app/servers/Test_Server.html)
:::

> 如果不知道怎么编辑请看这个->[[格式：添加新服务器以及修改服务器信息]](./format/index)

我们的GitHub组织页面：[https://github.com/MSCPO](https://github.com/MSCPO)
