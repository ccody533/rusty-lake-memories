# Rusty Lake 锈湖粉丝站 · Memories

> 一个为锈湖（Rusty Lake / Cube Escape）系列打造的中文同人粉丝站，集合角色档案、作品编年、抽卡体验、视频轮播与角色关系图等交互内容。

## 项目介绍

本项目是一个**同人创作展示站**，以锈湖系列游戏的世界观为基础，整合了角色资料、系列作品信息、互动玩法与视觉化关系图谱，希望能为同样喜爱锈湖的玩家提供一个可看、可玩、可探索的中文资料角落。

### 功能特性

- **首页 `index.html`**：站点入口，包含 3D 记忆立方体、视频轮播等视觉展示
- **角色档案 `characters.html`**：锈湖系列角色资料卡片
- **作品编年 `series.html`**：系列作品按时间线/类别整理
- **抽卡系统 `gacha.html`**：以锈湖角色为主题的互动抽卡体验
- **游戏指南 `guide.html`**：系列游玩指引
- **我的成就 `myachieve.html`**：个人成就记录页
- **角色关系图 `relation.html`**：基于 Canvas 绘制的角色关系网络图

### 开发方式

本项目为**纯原生前端实现**（HTML / CSS / JavaScript / Canvas），未使用前端框架。

开发过程中**借助多个 AI 编程模型辅助生成初版**，并在多个工具间进行横向对比：
在保持提示词一致、且不启用任何 Skill 的前提下，用同一组需求分别生成初版，
人工筛选出最贴合预期的版本作为基底，再手动迭代调整与整合。

> 记录这个对比过程并非"不专业"——这是一次关于「相同提示词下不同 AI 模型初版质量」的真实探索。

参与对比的工具包括（按首字母排序）：
- 豆包
- DeepSeek
- Cursor
- 千问（Qwen）
- miMo
- Trae

最终主开发与整合在 **Trae** 中完成。

## 在线预览

> 即将上线（GitHub Pages 配置完成后将在此填入访问地址）

<!-- 配置完成后请将上一行替换为：
**在线访问**：https://ccody533.github.io/rusty-lake-memories/
-->

## 本地运行

本项目为纯静态网站，无需构建，任意一种方式即可打开：

### 方式一：直接打开

双击 `index.html`，在浏览器中即可访问。

### 方式二：用 Git 克隆

```bash
git clone https://github.com/ccody533/rusty-lake-memories.git
cd rusty-lake-memories
# 直接在文件夹中打开 index.html，或用任意静态服务器托管
```

### 方式三：用本地服务器（推荐）

若需完整体验视频轮播、Canvas 等交互功能，建议通过本地服务器访问：

```bash
# Python 3
python -m http.server 8000
# 然后浏览器访问 http://localhost:8000/
```

## 目录结构

```
rusty-lake-memories/
├── index.html              # 首页（3D 记忆立方体 / 视频轮播）
├── characters.html         # 角色档案
├── series.html             # 作品编年
├── gacha.html              # 抽卡系统
├── guide.html              # 游戏指南
├── myachieve.html          # 我的成就
├── relation.html           # 角色关系图（Canvas）
├── data.js                 # 全站共享数据（角色 / 作品信息）
├── css/
│   ├── style.css           # 公共样式
│   ├── index_style.css
│   ├── characters_style.css
│   ├── series_style.css
│   ├── gacha_style.css
│   ├── guide_style.css
│   └── myachieve_style.css
├── js/
│   ├── index.js
│   ├── characters.js
│   ├── series.js
│   ├── gacha.js
│   ├── guide.js
│   └── myachieve.js
├── images/                 # 图片素材
└── video/                  # 视频素材
```

## 素材来源与版权声明

本项目为**非营利性同人创作**，仅供学习与粉丝交流用途。

站内所使用的图片、视频、角色名、游戏名等相关素材，版权归 **Rusty Lake Studio** 所有。
本项目不对原始素材主张任何权利，亦不用于任何商业用途。

部分素材与文案来源如下：
- **锈湖官方**：游戏截图、角色名、系列作品信息、官方宣传图
- **小红书**：部分同人图与玩家整理资料
- **哔哩哔哩**：部分视频素材
- **AI 优化**：部分文案与图片经 AI 工具二次优化处理

如有素材原作者认为内容存在侵权，请通过 GitHub Issues 联系，将在确认后第一时间删除。

## 作者

**ccody533**

- GitHub：https://github.com/ccody533

---

*"Your memories belong to the lake now."*

---

# Rusty Lake Fan Site · Memories (English)

> A Chinese-language fan site for the Rusty Lake / Cube Escape series, bringing together character profiles, series chronology, a gacha-style interactive experience, video carousels, and a Canvas-based character relationship graph.

## About

This is a **fan-made showcase site** built on the lore of the Rusty Lake series. It integrates character profiles, series work info, interactive features, and a visualized relationship graph, aiming to provide a readable, playable, and explorable corner in Chinese for fellow Rusty Lake fans.

### Features

- **Home `index.html`**: site entry, includes a 3D memory cube and video carousel
- **Characters `characters.html`**: profile cards for Rusty Lake characters
- **Series `series.html`**: series works organized by timeline / category
- **Gacha `gacha.html`**: an interactive gacha experience themed on Rusty Lake characters
- **Guide `guide.html`**: a playthrough guide for the series
- **My Achievements `myachieve.html`**: personal achievement record page
- **Relation Graph `relation.html`**: a Canvas-based character relationship network

### How It Was Built

This project is a **vanilla front-end implementation** (HTML / CSS / JavaScript / Canvas) with no front-end framework.

During development, **multiple AI coding models were used to generate the initial drafts**, and a horizontal comparison was made across tools:
keeping the prompt identical and without enabling any Skill, the same set of requirements was fed to each tool to produce a first draft, then the version closest to expectations was selected as the base and manually iterated.

> Recording this comparison is not "unprofessional" — it is a genuine exploration of "the initial-draft quality of different AI models under the same prompt."

Tools compared (alphabetical):
- Cursor
- DeepSeek
- Doubao (豆包)
- miMo
- Qwen (千问)
- Trae

Final development and integration were done in **Trae**.

## Live Preview

> Coming soon (the URL will be filled in once GitHub Pages is configured)

<!-- After configuration, replace the line above with:
**Live site**: https://ccody533.github.io/rusty-lake-memories/
-->

## Run Locally

This is a purely static site with no build step. Open it in any of the following ways:

### Option 1: Open directly

Double-click `index.html` to view it in a browser.

### Option 2: Clone via Git

```bash
git clone https://github.com/ccody533/rusty-lake-memories.git
cd rusty-lake-memories
# open index.html in the folder, or serve with any static server
```

### Option 3: Use a local server (recommended)

For the full experience of video carousel, Canvas, and other interactive features, a local server is recommended:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000/ in your browser
```

## Directory Structure

```
rusty-lake-memories/
├── index.html              # home (3D memory cube / video carousel)
├── characters.html         # character profiles
├── series.html             # series chronology
├── gacha.html              # gacha system
├── guide.html              # playthrough guide
├── myachieve.html          # my achievements
├── relation.html           # character relation graph (Canvas)
├── data.js                 # shared data across the site (characters / works)
├── css/
│   ├── style.css           # shared styles
│   ├── index_style.css
│   ├── characters_style.css
│   ├── series_style.css
│   ├── gacha_style.css
│   ├── guide_style.css
│   └── myachieve_style.css
├── js/
│   ├── index.js
│   ├── characters.js
│   ├── series.js
│   ├── gacha.js
│   ├── guide.js
│   └── myachieve.js
├── images/                 # image assets
└── video/                  # video assets
```

## Asset Sources & Copyright

This project is a **non-commercial fan work**, created for learning and fan communication only.

All images, videos, character names, and game names used in this site are the property of **Rusty Lake Studio**.
This project makes no claim of ownership over the original assets and is not used for any commercial purpose.

Some assets and copy are sourced from:
- **Rusty Lake official**: game screenshots, character names, series info, official promotional images
- **Xiaohongshu (RED)**: fan art and player-organized materials
- **Bilibili**: some video assets
- **AI optimization**: some copy and images were post-processed by AI tools

If any original author considers content infringing, please reach out via GitHub Issues; it will be removed promptly upon confirmation.

## Author

**ccody533**

- GitHub: https://github.com/ccody533
