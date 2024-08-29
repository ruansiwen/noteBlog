import { defineConfig } from "vitepress";
import { themeConfig } from "./theme-config";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点的标题
  title: "MOON",
  base: "/noteBlog/",
  lang: "en-US",
  extends: {
    themeConfig,
  },
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签。
  description: "Keep Calm and Carry On",
  head: [
    ["link", { rel: "icon", href: "/noteBlog/favicon.icon" }],
    // [
    //   "module",
    //   {
    //     async: "",
    //     src: "https://files.cnblogs.com/files/liuzhou1/L2Dwidget.min.js",
    //   },
    // ],
    // [
    //   "module",
    //   {
    //     async: "",
    //     src: "https://l2dwidget.js.org/lib/L2Dwidget.min.js",
    //   },
    // ],
  ],
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config'
    // 顶上导航
    siteTitle: "MOON",
    outline: [2, 3],
    logo: { light: "/nav.png", dark: "/nav.png", alt: "R" },
    nav: [
      { text: "主页", link: "/" },
      { text: "举例", link: "/markdown-examples" },
      {
        text: "前端",
        items: [
          { text: "HTML", link: "/front-end/HTML/html原生" },
          { text: "css", link: "/front-end/CSS/css进阶" },
          { text: "js", link: "/front-end/JS/js基础" },
          { text: "vue", link: "/front-end/VUE/vue基础" },
          { text: "react", link: "/front-end/REACT/react基础" },
        ],
      },
      {
        text: "后端",
        items: [],
      },
      {
        text: "运维",
        items: [],
      },
      { text: "关于", link: "/about" },
    ],
    // 侧边导航
    // sidebar: [
    //   {
    //     text: "目录",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    sidebar: {
      "/front-end/HTML/": [
        {
          text: "HTML",
          items: [
            { text: "html介绍", link: "/front-end/HTML/html介绍" },
            { text: "html原生", link: "/front-end/HTML/html原生" },
          ],
        },
      ],
      "/front-end/CSS/": [
        {
          text: "CSS",
          items: [
            { text: "css进阶", link: "/front-end/CSS/css进阶" },
            { text: "css基础", link: "/front-end/CSS/css基础" },
          ],
        },
      ],
      "/front-end/JS/": [
        {
          text: "JS",
          items: [{ text: "js基础", link: "/front-end/JS/js基础" }],
        },
      ],
      "/front-end/VUE/": [
        {
          text: "VUE",
          items: [{ text: "vue基础", link: "/front-end/VUE/vue基础" }],
        },
      ],
      "/front-end/REACT/": [
        {
          text: "REACT",
          items: [{ text: "react基础", link: "/front-end/REACT/react基础" }],
        },
      ],
    },
    aside: true,
    // 右上角
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 页脚
    footer: {
      message: "素材均来源于互联网，若有侵权，请联系qq 2273357202 速删",
      copyright: "Copyright © 2024-present R",
    },
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
  },
  sitemap: {
    hostname: "https://example.com/noteBlog/",
    lastmodDateOnly: false,
  },
});
