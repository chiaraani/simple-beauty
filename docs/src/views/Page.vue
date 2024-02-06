<template>
  <MarkdownFile :path="$route.params.path" />
</template>

<script setup>
import MarkdownFile from '@/components/markdown/File.vue'
import { useMetaTags } from '@/composables/metaTags'
useMetaTags()
</script>
