import { defineConfig } from "vitepress";
import { themeConfig } from "./theme-config";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点的标题
  title: "MOON",
  base: "/noteBlog/",
  lang: "en-US",
  // extends: {
  //   themeConfig,
  // },
  // 站点的描述。这将呈现为页面 HTML 中的 <meta> 标签。
  description: "Keep Calm and Carry On",
  head: [["link", { rel: "icon", href: "/noteBlog/favicon.icon" }]],
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
    logo: { light: "/nav.png", dark: "/nav.png", alt: "R" },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    // 侧边导航
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
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
