import { getThemeConfig } from "./theme/utils/node";
export const themeConfig = getThemeConfig({
  lang: "en-US",
  title: "Rの笔记",
  description: "Keep Calm and Carry On",
  // 作者
  author: "R",
  // 评论
  comment: {
    repo: "ruansiwen/noteBlog",
    repoId: "R_kgDOMnn78A",
    category: "Announcements",
    categoryId: "DIC_kwDOMnn78M4Ch6HS",
    inputPosition: "bottom",
  },
  // 友链
  friend: [
    {
      avatar:
        "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      name: "粥里有勺糖",
      desc: "你的指尖,拥有改变世界的力量",
      link: "https://sugarat.top/",
    },
    {
      avatar: "https://cdn.jsdelivr.net/gh/hehuan2023/pic/typora/rabbit.png",
      name: "dleei",
      desc: "欢迎访问代磊的个人博客鸭~",
      link: "https://dleei.github.io/",
    },
    {
      avatar: "https://blog.lubowen.xyz/_nuxt/head.6a38cc3c.jpg",
      name: "小鹿",
      desc: "愿你一生有山可靠，有树可栖。与心爱之人，春赏花，夏纳凉。秋登山，冬扫雪。",
      link: "https://blog.lubowen.xyz/",
    },
  ],
});
