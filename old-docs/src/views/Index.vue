<template>
  <h1>Documentation index</h1>
  <ol>
    <h2 v-for="page in docsIndex" :key="page.path">
      <li>
        <RouterLink :to="{ name: 'page', params: { path: page.path } }">
          {{ page.title }}
        </RouterLink>
      </li>
    </h2>
  </ol>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import docsIndex from '@/docsIndex'

import { useMetaTags } from '@/composables/metaTags'
useMetaTags({
  description: docsIndex
    .map((page, index) => {
      return `${index + 1}. ${page.title}`
    })
    .join(' '),
})
</script>
