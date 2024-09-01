import type { Awaitable, EnhanceAppContext, Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./layout/index.vue";
import "./styles/index.less";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const MineTheme: Theme = {
  // 扩展另一个主题，在我们的主题之前调用它的 `enhanceApp`,
  extends: DefaultTheme,
  // 每个页面的根布局组件
  Layout: Layout,
  /**
   * 增强 Vue 应用实例
   * @param param0
   * app:Vue 应用实例
   * router:VitePress 路由实例
   * siteData:站点级元数据
   */
  async enhanceApp({ app, router, siteData }: EnhanceAppContext){
    // ctx.app.component("Archive", Archive); // 全局注册组件
    // if (!import.meta!.env.SSR) {
    //   const { loadOml2d } = await import('oh-my-live2d');
    //   loadOml2d({
    //     models: [
    //       {
    //         path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
    //       }
    //     ]
    //   });
    // }
  },
};

export default MineTheme;
