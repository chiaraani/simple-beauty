<template>
  <MarkdownProcessing :raw="raw" v-if="raw" />
  <p v-else>Loading...</p>
</template>

<script setup>
import { ref } from 'vue'

import MarkdownProcessing from './Processing.vue'
const props = defineProps(['path'])

const raw = ref()

fetch(`./markdown/${props.path}.md`)
  .then((response) => response.text())
  .then((text) => (raw.value = text))
</script>
