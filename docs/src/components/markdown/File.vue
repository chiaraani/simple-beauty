<template>
  <div v-html="processed || 'Loading...'" class="heading-counters"></div>
</template>

<script setup>
import { ref } from 'vue'

import { useMarkdown } from '@/composables/markdown'
const props = defineProps(['path'])

const raw = ref()
const processed = useMarkdown(raw)

fetch(`./markdown/${props.path}.md`)
  .then((response) => response.text())
  .then((text) => (raw.value = text))
</script>
