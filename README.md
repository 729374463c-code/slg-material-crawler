# SLG 海外吸量素材情报库

一个用于整理、拆解和横向比较海外 SLG 广告素材的前端 Demo。当前收录 4 条样本，包含素材播放、产品与创意标签、吸量侧观察和对比视图。

## 本地运行

环境要求：

- Node.js 20 或更高版本
- pnpm 9 或更高版本

```bash
git clone https://github.com/729374463c-code/slg-creative-intelligence-demo.git
cd slg-creative-intelligence-demo
pnpm install
pnpm dev
```

启动后打开终端显示的本地地址，通常为 `http://localhost:5173`。

## 构建与检查

```bash
pnpm test
pnpm build
```

生产构建文件会生成在 `dist/` 目录。

## 当前功能

- 概览：查看样本数量与主要创意观察
- 素材库：播放广告视频并查看结构化拆解
- 横向对比：比较不同素材的钩子、卖点、制作方式等标签
- 失败兜底：保留素材原始页面链接，视频无法播放时可跳转查看

## 数据与素材说明

本项目中的广告视频、产品名称、商标及相关素材仅用于内部研究 Demo 和创意分析，权利归各自权利人所有，不属于本仓库 MIT 许可证的授权范围。公开分享或继续使用前，请自行确认相应平台条款和素材授权。

## 开源许可

除上述第三方广告素材外，本项目源代码采用 [MIT License](./LICENSE)。
