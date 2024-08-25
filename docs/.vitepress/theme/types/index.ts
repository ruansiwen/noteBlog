// import { Mapping, Repo } from "@giscus/vue";
import { DefaultTheme, Theme } from "vitepress";

// 文章
export interface ArticleItem {
  path: string;
  title: string;
  description: string;
  date: string;
  updateTime: string;
  month: string;
  day: string;
  cover?: string;
  tag?: string[];
  author?: string;
  sticky?: number;
  category: string;
}

// 用户标签
type userTag = {
  id: string;
  name: string;
  value: number;
};

// 作者信息
export interface AutherInfo {
  name: string;
  tags: userTag[];
}

// 评论组件配置
export interface CommentConfig {
  repo: Repo;
  repoId: string;
  category: string;
  categoryId: string;
  inputPosition?: "top" | "bottom";
  mapping?: any;
  lang?: string;
  loading?: "lazy" | "eager";
}

// 友链
export interface FriendItem {
  avatar: string;
  name: string;
  desc: string;
  link: string;
}

// 定制主题配置
export interface ThemeConfig {
  lang?: string;
  title?: string;
  description?: string;
  themeConfig?: Record<string, any>;
  author?: string;
  comment?: CommentConfig;
  friend?: FriendItem[];
}

export type ThemeConfigType = DefaultTheme.Config & {
  article?: ArticleItem[];
} & ThemeConfig;
