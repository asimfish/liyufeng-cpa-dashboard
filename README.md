# Codex CPA 小时状态看板

GitHub Pages 地址：<https://asimfish.github.io/liyufeng-cpa-dashboard/>

看板按北京时间显示账号本小时状态、小时剩余时间、下一次探测倒计时、代理池失败次数、当前基线来源、异常三次确认进度和最近会话归因。中心主账号标记为 7973。

令牌会缓存到浏览器的 `localStorage`，页面上的“清除缓存”可删除。首次在 Mac 上复制本地只读看板令牌：

```bash
pbcopy < ~/.local/share/liyufeng-codex-vpn-local/dashboard.token
```

这个令牌不是 CPA 管理密钥，也不是模型客户端 API key。状态页不会显示 OAuth token、请求体或完整响应状态头。没有会话归因时，页面会明确显示“暂无会话归因”，不会把账号级记录伪装成某个会话的结果。
