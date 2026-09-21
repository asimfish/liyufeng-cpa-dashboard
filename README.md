# Codex CPA 小时状态看板

GitHub Pages 地址：<https://asimfish.github.io/liyufeng-cpa-dashboard/>

这是一个只读状态页，显示中心 CPA 的账号小时状态、代理池健康度、当前有效基线、注入计数和最近会话归因。页面通过单独的只读看板令牌访问中心 API；令牌只保存在浏览器当前标签页，不写入 URL、仓库或日志。

在 Mac 上复制本地看板令牌到剪贴板：

```bash
pbcopy < ~/.local/share/liyufeng-codex-vpn-local/dashboard.token
```

这个令牌不是 CPA 管理密钥，也不是模型客户端 API key。状态页不会显示 OAuth token、请求体或完整响应状态头。没有会话归因时，页面会明确显示“暂无会话归因”，不会把账号级记录伪装成某个会话的结果。
