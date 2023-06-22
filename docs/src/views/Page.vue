<template>
  <component :is="content" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const content = defineAsyncComponent(() =>
  import(`@/pages/${route.params.path}.md`)
)
</script>
