<template>
  <div v-html="processed || 'Loading...'" class="heading-counters"></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { marked } from '@/config/marked'
import hljs from '@/config/hljs'

import { addSnippets } from '@/helpers/snippet'

const props = defineProps(['raw'])
const processed = ref()

watch(processed, () => {
  addSnippets()
  hljs.highlightAll()
})
processed.value = marked(props.raw)
</script>
