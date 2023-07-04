<template>
  <div v-html="pageContent || 'Loading..'"></div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

import { useMarkdownFile } from '@/composables/markdown'
const pageContent = useMarkdownFile(`./markdown/${route.params.path}`)

import { useMetaTags } from '@/composables/metaTags'
useMetaTags()
</script>
