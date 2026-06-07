# Ethereal Style

Ethereal Style 是一个面向 Zotero 7-9 的模块化插件，用于增强文献阅读、条目列表展示、标签管理和图谱浏览体验。

## 特性

- 阅读进度与批注进度可视化
- 自定义 Zotero 条目列表列
- 标签列、文本标签列、期刊标签列
- 评分、影响因子、出版物信息展示
- 文献关系图谱视图
- React 18 + Ant Design 5 iframe UI
- TypeScript + zotero-plugin-scaffold + esbuild 构建

## 兼容性

| 项目 | 版本 |
| --- | --- |
| Zotero | `>= 7.0` |
| React | `18.x` |
| Ant Design | `5.x` |
| 构建工具 | `zotero-plugin-scaffold` + `esbuild` |
| 语言 | TypeScript |

## 安装

从 GitHub Releases 下载最新的 XPI 文件：

https://github.com/Step2312/zotero-style/releases/latest/download/zotero-style.xpi

## 开发

```bash
npm install
npm run tsc
npm run build
```

构建产物：

- 插件目录：`builds/addon`
- XPI 文件：`builds/zotero-style.xpi`

## 目录结构

```text
src/index.ts                  插件入口
src/app                       启动、运行时、清理、上下文
src/features                  功能注册边界
src/modules                   Zotero 集成与核心功能实现
src/ui/graph                  React + Ant Design 图谱 iframe UI
addon/chrome/content/dist     iframe 静态入口与图谱 legacy 资产
tools/build.mts               scaffold 构建入口
tools/config.mts              scaffold 构建配置
```

## 架构说明

React 和 Ant Design 只运行在 chrome iframe 页面内，避免污染 Zotero 主窗口和 XUL 环境。

旧版 PIXI 图谱渲染逻辑被保留为 `graph-engine.js`，外层图谱控制界面已迁移到可维护的 React 源码。

## 常用命令

```bash
npm run build-dev
npm run build-prod
npm run restart
```

## 链接

- 项目主页：https://github.com/Step2312/zotero-style
- 问题反馈：https://github.com/Step2312/zotero-style/issues
- 最新发布：https://github.com/Step2312/zotero-style/releases

## 许可

AGPL-3.0-or-later
