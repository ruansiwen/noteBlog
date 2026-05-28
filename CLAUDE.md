# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 项目概述

基于 **VitePress** 的静态博客站点（站点标题 "MOON"），部署到 GitHub Pages：`https://ruansiwen.github.io/noteBlog/`。内容为中文技术笔记，涵盖前端（HTML、CSS、JS、Vue、React）、后端和运维方向。

## 常用命令

```bash
npm install              # 安装依赖
npm run docs:dev         # 本地开发服务器
npm run docs:build       # 生产构建（输出到 docs/.vitepress/dist）
npm run docs:preview     # 预览生产构建
npm run docs:preview:80  # 在 8080 端口预览
npm run p                # 构建 + 预览一步到位
```

项目没有配置测试套件和代码检查工具。

## 架构

**框架**：VitePress 1.3.x，使用自定义主题，继承自 VitePress 默认主题。

**核心路径**：
- `docs/.vitepress/config.mts` — 站点配置（导航栏、侧边栏、base 路径 `/noteBlog/`、Markdown 设置）
- `docs/.vitepress/theme-config.ts` — 主题配置（作者、Giscus 评论系统、友链）
- `docs/.vitepress/theme/` — 自定义主题实现
  - `index.ts` — 主题入口，继承 `vitepress/theme`，注册自定义 Layout，引入 Element Plus
  - `layout/index.vue` — 根布局组件
  - `pages/Home/` — 首页，包含文章列表、作者卡片、浓度组件、友链等子组件
  - `pages/About/` — 关于页面
  - `components/` — 公共组件：BoardPets（看板娘）、Comment（Giscus 评论）、Waves（波浪特效）
  - `hooks/useOml2d.js` — oh-my-live2d 看板娘 hook
  - `utils/node/` — Node 端主题工具函数（getThemeConfig）
  - `utils/client/` — 客户端工具函数
  - `styles/index.less` — 全局样式（使用 Less 预处理器）
  - `types/` — TypeScript 类型定义和 Vue 声明文件

**内容目录**：`docs/` 下的 Markdown 文件，按主题分类（`front-end/HTML/`、`front-end/CSS/`、`front-end/JS/`、`front-end/VUE/`、`front-end/REACT/`）。

**主要依赖**：Element Plus（UI 组件库）、Less（样式预处理）、axios、dayjs、oh-my-live2d（看板娘）、fast-glob。

**部署方式**：GitHub Actions（`.github/workflows/deploy.yml`）— 推送到 `main` 分支触发，使用 Node 20 构建，部署到 GitHub Pages。

## 添加内容

添加新文章的步骤：
1. 在对应的 `docs/front-end/<分类>/` 目录下创建 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 中，将页面链接添加到对应路径的侧边栏配置
3. 如果是新增分类，还需在 `config.mts` 的 `nav` 数组中添加导航项
