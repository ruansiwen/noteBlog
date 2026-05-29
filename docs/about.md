---
# layout: home
navbar: true
---
# 关于我


## 笔记博客相关
使用框架：[VitePress](https://vitepress.dev/)

看板娘：[l2d-widget](https://github.com/hacxy/l2d-widget)（作者 hacxy）

借鉴：http://niubin.site/


<script setup>
import { useSidebar } from 'vitepress/theme'

const { hasSidebar } = useSidebar()
</script>

<template>
  <div v-if="hasSidebar">Only show when sidebar exists</div>
</template>