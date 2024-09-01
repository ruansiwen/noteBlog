---
# layout: home
navbar: true
---
# 关于我


## 笔记博客相关
使用框架：vitepress

看板娘：https://oml2d.com/

借鉴：http://niubin.site/


<script setup>
import { useSidebar } from 'vitepress/theme'

const { hasSidebar } = useSidebar()
</script>

<template>
  <div v-if="hasSidebar">Only show when sidebar exists</div>
</template>