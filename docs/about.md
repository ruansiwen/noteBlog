---
# layout: home
navbar: true
---
# 关于我


<script setup>
import { useSidebar } from 'vitepress/theme'

const { hasSidebar } = useSidebar()
</script>

<template>
  <div v-if="hasSidebar">Only show when sidebar exists</div>
</template>