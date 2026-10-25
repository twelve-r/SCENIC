# SCENIC 🌄

A personal landscape collection website.

SCENIC is a simple and elegant image gallery website that showcases beautiful landscapes from around the world.

The website is designed with a focus on visual presentation, smooth interaction, and a clean user experience.

---

## 📌 Project Introduction

SCENIC is a personal scenic photography website created with front-end technologies.

Users can browse different types of landscapes, filter images by category, and click images to view larger versions with detailed information.

The project aims to create a simple but beautiful web experience for discovering and appreciating natural scenery.

---

## ✨ Features

### 🖼️ Landscape Gallery

Display different categories of landscapes:

- Mountains
- Oceans
- Forests
- Deserts


### 🔍 Category Filter

Users can filter images by clicking category buttons.

Available categories:

- All
- Mountains
- Oceans
- Forests
- Deserts


### 🌌 Image Preview

Click any image to open a modal window.

The preview displays:

- Larger image
- Image category
- Image title


### 🎨 Visual Effects

The website includes:

- Image hover zoom effect
- Dark overlay effect
- Smooth modal animation
- Scroll reveal animation


### 📱 Responsive Design

The layout adapts to different screen sizes:

- Desktop
- Tablet
- Mobile devices

---

## 🛠️ Technologies Used

### Front-end

- HTML5
- CSS3
- JavaScript


### Main Techniques

- CSS Grid layout
- CSS transition animation
- JavaScript DOM manipulation
- Dataset attribute filtering
- Intersection Observer API

---

## 📂 Project Structure

```
SCENIC
│
├── index.html
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
├── images
│   ├── mountain images
│   ├── ocean images
│   ├── forest images
│   └── desert images
│
└── README.md
```

---

## 🚀 How to Run

### Method 1

Open:

```
index.html
```

directly in a browser.


### Method 2

Use VS Code Live Server extension.

Steps:

1. Install Live Server extension.
2. Open `index.html`.
3. Right click.
4. Select:

```
Open with Live Server
```

---

## 📸 Website Preview

The website contains:

- Hero section
- Landscape category navigation
- Image gallery
- Image preview modal
- About section
- Footer


---

## 🎯 Project Goals

The main goals of this project are:

- Learn basic front-end website development.
- Practice HTML page structure design.
- Understand CSS layout and animation.
- Use JavaScript to create interactive functions.
- Build a complete personal website project.

---

## 📈 Future Improvements

Possible improvements:

- Add more landscape categories.
- Add image loading optimization.
- Improve mobile experience.
- Add more interactive animations.

---

## 👤 Author

SCENIC

A personal landscape collection website.

---

## 📄 License

This project is created for learning and educational purposes.


## Linux 云服务器部署

> 本节为课程改造部署方案，实际服务器信息及部署结果将在部署完成后补充。

### 部署架构

- 源码管理：GitHub 公开仓库
- 操作系统：Ubuntu Linux
- Web 服务器：Nginx
- 网站类型：HTML、CSS、JavaScript 静态网站
- 预计部署目录：`/var/www/scenic`
- 正式访问方式：云服务器公网 IP 或域名

### 部署步骤

1. 创建 Linux 云服务器，并配置 SSH 登录及 HTTP 访问所需的安全组规则。
2. 通过 SSH 连接服务器，使用命令行安装 Git 和 Nginx。
3. 从 GitHub 克隆 SCENIC 源码到服务器。
4. 配置 Nginx 的网站根目录，执行 `nginx -t` 检查配置。
5. 启动或重新加载 Nginx，通过公网 IP 在浏览器中访问网站。
6. 验证首页、风景分类、图片预览等功能。

### 网站版本更新

1. 在本地修改网站文件并进行测试。
2. 使用 `git add`、`git commit`、`git push` 提交并推送修改。
3. 通过 SSH 进入云服务器，使用 `git pull` 更新网站文件。
4. 刷新浏览器，确认新版本生效。

### 注意事项

GitHub 用于源码托管与版本管理，正式网站由 Linux 云服务器上的 Nginx 提供访问，不使用 GitHub Pages、Vercel 或 Netlify 发布。