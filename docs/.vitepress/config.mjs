import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { getSidebar } from "./utils/getSidebar";

export default defineConfig({
  // 标签上显示的网站标题
  title: "Charles Donne",
  // titleTemplate: "🐨",
  // 在标签上显示的 logo 和网页图标
  head: [
    ["link", { rel: "icon", href: "/fish.png", id: "favicon" }], // 统一的标签页图标
    // 动态切换图标和标题的脚本
    ["script", {}, `
      let originalTitle = "Charles Donne";
      let originalIcon = "/fish.png";
      let awayTitle = "Sleeping 💤";
      let awayIcon = "/kaola.png"; // 你可以换成其他图标
      
      document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
          // 页面不可见时（切换到其他标签）
          document.title = awayTitle;
          let favicon = document.getElementById('favicon') || document.querySelector('link[rel="icon"]');
          if (favicon) {
            favicon.href = awayIcon;
          }
        } else {
          // 页面可见时（回到当前标签）
          document.title = originalTitle;
          let favicon = document.getElementById('favicon') || document.querySelector('link[rel="icon"]');
          if (favicon) {
            favicon.href = originalIcon;
          }
        }
      });
    `]
  ],

  // 网站描述，有利于被搜索引擎捕获
description:
  "Charles Donne's personal site",

  // md 文件根目录
  // 【谨慎修改】：一旦修改将引起较多变动
  srcDir: "./src",

  // 主题自定义
  themeConfig: {
    // 网站左上角 logo
    logo: "/kaola.png",
    // 顶部导航栏
    nav: [
      //{ text: "👋 AboutMe", link: "/AboutMe.md" },
      { text: "💭 Blogs", link: "/Notes/index" },
      { text: "🦄 Projects", link: "Projects.md" },
    ],
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [{ icon: "github", link: "https://github.com/Charles-Donne" }],
    // 首页底部版权声明
    footer: {
      copyright: "Copyright © 2025-present Charles Donne",
    },
    // 【文章页面左侧导航】
    sidebar: {
      "/Notes/": getSidebar("/docs/src", "/Notes/"),
    },
    // 文章内导航栏标题
    outline: {
      level: [1, 6],
    },
    outlineTitle: "导航栏",
    // 是否启动搜索功能
    search: {
      provider: "local",
    },
  },
  // 数学公式支持
  markdown: {
    math: true,
  },
  // !请勿修改
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/UpdateTime.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL("./components/Footer.vue", import.meta.url)),
        },
      ],
    },
  },
  lastUpdated: true,
});
