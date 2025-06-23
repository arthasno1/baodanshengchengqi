# 🎨 爆单图生成器

一个基于 Vue 3 + TypeScript 的在线爆单图制作工具，帮助程序员快速生成专业的接单宣传图片。

## ✨ 功能特性

- 🎯 **自定义文字内容** - 支持主标题和多行副标题编辑
- 🌈 **丰富渐变背景** - 内置20种精美渐变色方案
- 📱 **响应式设计** - 完美适配各种设备屏幕
- 💾 **高清图片导出** - 一键生成1200x1200高清JPG图片
- ⚡ **实时预览** - 所见即所得的编辑体验
- 🎨 **专业排版** - 精心设计的文字布局和阴影效果

## 🚀 在线体验

访问地址：[https://arthasno1.github.io/baodanshengchengqi/](https://arthasno1.github.io/baodanshengchengqi/)

## 🛠️ 技术栈

- **前端框架**: Vue 3 (Composition API)
- **开发语言**: TypeScript
- **构建工具**: Vite
- **UI组件**: Element Plus
- **CSS预处理**: Less
- **工具库**: VueUse
- **图片生成**: Canvas API
- **部署平台**: GitHub Pages

## 📦 本地开发

### 环境要求

- Node.js >= 16
- npm >= 8

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 🎯 使用方法

1. **编辑主标题** - 在右侧面板输入您的主要宣传标语
2. **设置副标题** - 每行输入一个副标题内容，支持多行
3. **选择背景** - 点击渐变色网格选择喜欢的背景色
4. **实时预览** - 左侧预览区实时显示效果
5. **保存图片** - 点击"保存高清图"按钮下载JPG格式图片

## 📸 效果预览

生成的图片特点：
- 尺寸：1200 x 1200 像素
- 格式：JPG
- 文字：白色加阴影效果
- 字体：微软雅黑
- 主标题：120px 粗体
- 副标题：80px 中等粗细

## 🔧 项目结构

```
baodanshengchengqi/
├── src/
│   ├── App.vue              # 主应用组件
│   ├── main.ts              # 应用入口
│   ├── style.css            # 全局样式
│   └── types/               # TypeScript类型定义
├── public/                  # 静态资源
├── .github/workflows/       # GitHub Actions配置
└── dist/                    # 构建输出目录
```

## 🚀 部署说明

项目使用 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建项目
3. 构建完成后自动部署到 GitHub Pages
4. 通过 `https://arthasno1.github.io/baodanshengchengqi/` 访问

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 开源协议

本项目基于 MIT 协议开源，详情请查看 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Element Plus](https://element-plus.org/) - Vue 3组件库
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [GitHub Pages](https://pages.github.com/) - 免费静态网站托管

---

⭐ 如果这个项目对您有帮助，请给个Star支持一下！
