# 🌌 星云守护 - 塔防游戏

<div align="center">

![星云守护](https://img.shields.io/badge/版本-v1.0.0-blue.svg)
![技术栈](https://img.shields.io/badge/技术栈-TypeScript%20%7C%20Pixi.js%20%7C%20Webpack-brightgreen.svg)
![许可证](https://img.shields.io/badge/许可证-ISC-green.svg)
![状态](https://img.shields.io/badge/状态-开发中-orange.svg)

**一款基于Pixi.js开发的现代化H5塔防游戏**

[快速开始](#-快速开始) • [游戏特色](#-游戏特色) • [技术文档](#-技术文档) • [部署指南](#-部署指南)

</div>

---

## 📋 目录

- [🚀 快速开始](#-快速开始)
- [🎮 游戏特色](#-游戏特色)
- [🛠 技术架构](#-技术架构)
- [📁 项目结构](#-项目结构)
- [🎯 核心系统](#-核心系统)
- [🎨 界面预览](#-界面预览)
- [🔧 配置说明](#-配置说明)
- [📱 平台支持](#-平台支持)
- [🔍 开发工具](#-开发工具)
- [🚀 部署指南](#-部署指南)
- [🤝 贡献指南](#-贡献指南)
- [📞 技术支持](#-技术支持)

---

## 🚀 快速开始

### 📋 环境要求

- **Node.js**: >= 12.22.7
- **npm**: >= 6.14.13 或 **yarn**: >= 1.22.10
- **现代浏览器**: Chrome 80+, Firefox 75+, Safari 13+

### ⚡ 安装和运行

```bash
# 1. 克隆项目
git clone <项目地址>
cd "play game 3.0"

# 2. 安装依赖
npm install
# 或者使用 yarn
yarn

# 3. 启动开发服务器
npm run dev
# 或者使用 yarn
yarn dev

# 4. 访问游戏
# 浏览器自动打开 http://localhost:9001
```

### 🎮 游戏控制

| 操作类型 | 按键 | 功能说明 |
|---------|------|----------|
| **移动控制** | W/A/S/D | 移动游戏视角 |
| **菜单操作** | ESC | 打开/关闭游戏菜单 |
| **快捷选择** | 1-9 | 快速选择防御塔 |
| **游戏控制** | 空格 | 暂停/继续游戏 |
| **视角缩放** | 鼠标滚轮 | 放大/缩小游戏视角 |

---

## 🎮 游戏特色

### 🌟 核心玩法
- **🌌 星空主题**: 独特的宇宙空间背景和视觉效果
- **🏰 塔防策略**: 经典塔防玩法结合科技元素
- **🤖 智能AI**: 基于行为树的复杂敌人AI系统
- **⚡ 实时战斗**: 流畅的战斗系统和技能释放

### 🎯 游戏内容
- **🗺️ 多样关卡**: 4个精心设计的关卡，难度递增
- **🏗️ 防御系统**: 多种防御塔类型和升级路径
- **👾 外星敌人**: 智能AI控制的多样化敌人单位
- **💫 特效系统**: 绚丽的粒子效果和技能动画

### 🎨 视觉体验
- **🌠 动态背景**: 流动的星空和星云效果
- **✨ 现代UI**: 玻璃质感的用户界面设计
- **🎬 流畅动画**: 60FPS的流畅游戏体验
- **📱 响应式**: 完美适配各种屏幕尺寸

---

## 🛠 技术架构

### 💻 技术栈

```
前端框架: Pixi.js 6.5.9          # 2D渲染引擎
编程语言: TypeScript 4.6.4       # 类型安全的JavaScript
构建工具: Webpack 5.74.0        # 模块打包器
开发环境: Node.js 12.22.7+      # JavaScript运行时
包管理: npm/yarn                # 依赖管理工具
```

### 📦 核心依赖

| 库名 | 版本 | 用途描述 |
|------|------|----------|
| `pixi.js` | 6.5.9 | 2D渲染引擎，提供高性能的Canvas和WebGL渲染 |
| `@pixi/sound` | 4.3.3 | 音频管理，支持游戏音效和背景音乐 |
| `pixi-spine` | 3.0.13 | Spine骨骼动画支持，实现角色动画 |
| `pixi-filters` | 4.2.0 | 视觉特效滤镜库 |
| `@zip.js/zip.js` | 2.4.10 | 资源压缩打包管理 |
| `intersects` | 2.7.2 | 数学碰撞检测算法 |
| `lodash` | 4.17.20 | JavaScript工具函数库 |

---

## 📁 项目结构

```
星云守护/
├── 📂 src/                     # 源代码目录
│   ├── 📂 class/               # 游戏核心类
│   │   ├── behaviorTree.ts     # AI行为树系统
│   │   ├── bullet.ts           # 子弹和弹道系统
│   │   ├── camera.ts           # 相机控制
│   │   ├── gameMenu.ts         # 游戏菜单
│   │   ├── gun.ts              # 武器防御系统
│   │   ├── role.ts             # 角色系统
│   │   ├── tiledmap.ts         # 地图编辑器
│   │   └── ...                 # 其他核心类
│   ├── 📂 core/                # 核心系统
│   │   ├── main.ts             # 主程序入口
│   │   └── gameMain.ts         # 游戏主循环
│   ├── 📂 ui/                  # 用户界面
│   │   ├── scene.ts            # 场景管理
│   │   ├── map.ts              # 地图渲染
│   │   ├── roleui.ts           # 角色界面
│   │   ├── towerSelect.ts      # 防御塔选择
│   │   └── ...                 # 其他UI组件
│   ├── 📂 utils/               # 工具函数
│   │   ├── types.ts            # TypeScript类型定义
│   │   ├── utils.ts            # 通用工具函数
│   │   └── enum.ts             # 枚举常量
│   └── 📂 css/                 # 样式文件
├── 📂 public/                   # 静态资源
│   ├── 📂 gameData/            # 游戏数据
│   ├── 📂 audio/               # 音频文件
│   ├── 📂 img/                 # 图片资源
│   ├── 📂 plist/               # 精灵图集
│   └── 📂 scene/               # 场景数据
├── 📂 example/                  # 入口文件
│   ├── all.html                # 主页面
│   └── all.ts                  # 入口脚本
├── 📂 build/                    # 构建脚本
├── 📂 docs/                     # 项目文档
├── webpack.config.js           # Webpack配置
├── tsconfig.json                # TypeScript配置
└── package.json                # 项目配置
```

---

## 🎯 核心系统

### 🧠 AI行为树系统
复杂的敌人AI决策系统，支持：
- **选择器节点**: 从多个行为中选择最优解
- **序列器节点**: 按顺序执行多个行为
- **条件节点**: 基于游戏状态进行条件判断
- **动作节点**: 执行具体的游戏行为

### ⚔️ 战斗系统
- **角色系统**: 玩家控制单位和敌人AI单位
- **武器系统**: 多种防御塔和攻击模式
- **弹道系统**: 智能子弹轨迹和跟随机制
- **道具系统**: 增益效果和临时装备

### 🗺️ 地图系统
- **瓦片地图**: 灵活的地图编辑和设计
- **路径规划**: 敌人寻路和移动轨迹
- **碰撞检测**: 高效的四叉树空间划分算法
- **场景管理**: 多场景切换和生命周期管理

### 🎨 UI系统
- **响应式设计**: 自适应不同屏幕尺寸
- **触控优化**: 支持多点触控和手势操作
- **组件化**: 模块化的UI组件设计
- **动画效果**: 流畅的过渡和微交互动画

---

## 🎨 界面预览

### 🌟 启动界面
- 炫酷的星空背景动画
- 渐变色的游戏标题
- 优雅的加载进度条

### 🎮 游戏界面
- 现代化的玻璃质感UI
- 实时的性能监控面板
- 直观的操作控制面板

### 📱 移动端适配
- 完美的触控体验
- 自适应的界面布局
- 流畅的动画效果

---

## 🔧 配置说明

### 📋 游戏主配置 (config.json)
```json
{
  "level_color_1": "#ffffff",        // 关卡颜色配置
  "lang": "zh",                      // 界面语言
  "keyboard": {                      // 键盘控制配置
    "moveW": "KeyW",                 // W键 - 向上
    "moveS": "KeyS",                 // S键 - 向下
    "moveA": "KeyA",                 // A键 - 向左
    "moveD": "KeyD",                 // D键 - 向右
    "menu": "Escape"                 // ESC键 - 菜单
  },
  "UI布局配置": {                     // UI组件位置
    "roleui": {"pos": "left-top"},    // 角色信息
    "towerSelect": {"pos": "bottom"}, // 防御塔选择
    "resShow": {"pos": "left-bottom"}, // 资源显示
    "timeTooltip": {"pos": "top"},    // 时间提示
    "map": {"pos": "right-top"}       // 小地图
  }
}
```

### ⚙️ 开发配置
- **开发服务器**: localhost:9001
- **热更新**: 支持实时代码重载
- **调试模式**: 内置性能监控和调试工具
- **TypeScript**: 严格的类型检查

---

## 📱 平台支持

### 🌐 Web端
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### 📱 移动端
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ 微信浏览器
- ✅ WebView控件

### 💻 桌面端
- ✅ Electron支持
- ✅ NW.js支持
- ✅ PWA支持

---

## 🔍 开发工具

### 🛠️ 内置工具
```bash
# 启动地图编辑器
npm run devtiled

# 启动数据生成器
npm run devgen

# 启动精灵图集查看器
npm run devplist

# 生成项目文档
npm run doc
```

### 🎯 调试功能
- **FPS监控**: 实时帧率显示
- **内存监控**: 内存使用情况
- **碰撞框可视化**: 调试碰撞检测
- **路径可视化**: AI寻路路径显示

---

## 🚀 部署指南

### 📦 构建生产版本
```bash
# 标准生产构建
npm run build

# 开发环境构建
npm run build:dev

# 构建地图编辑器版本
npm run build:devtiled
```

### 🌐 Web部署
1. 构建项目：`npm run build`
2. 部署dist目录到Web服务器
3. 配置HTTPS（推荐）
4. 启用Gzip压缩

### 📱 移动端部署
```bash
# 使用Capacitor构建移动应用
npm install @capacitor/cli
npx cap init
npx cap add android
npx cap add ios
npx cap run android
```

### 🐳 Docker部署
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🤝 贡献指南

### 📝 开发规范
- 使用ESLint和Prettier保持代码一致性
- 遵循TypeScript严格模式
- 为复杂逻辑添加详细注释
- 遵循Conventional Commits规范

### 🔄 提交类型
- `feat`: 新功能开发
- `fix`: 问题修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程变动

### 🌟 贡献流程
1. Fork项目到个人仓库
2. 创建功能分支
3. 完成开发和测试
4. 提交Pull Request
5. 代码审查和合并

---

## 📞 技术支持

### 🆘 获取帮助
- **📧 作者**: 1829738634@qq.com
 
---

## 📄 许可证

本项目采用 **ISC 许可证**，允许在遵守许可证条款的前提下自由使用、修改和分发。

 

<div align="center">

**🌟 感谢您对星云守护项目的关注！**

如果这个项目对您有帮助，请给我们一个 ⭐ Star！

</div>

---

## 📊 项目统计

| 指标 | 数值 | 说明 |
|------|------|------|
| 📁 文件数量 | 673+ | 包含源码、资源、配置等 |
| 📝 代码行数 | 10,000+ | TypeScript核心代码 |
| 🎨 资源文件 | 300+ | 图片、音频、动画资源 |
| 🌐 支持平台 | 3+ | Web、移动端、桌面端 |

---

<div align="center">

**⚡ 最新更新**: 2024年 | **🔧 维护状态**: 活跃开发中

</div>