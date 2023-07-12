<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'home' }" class="canvas-bg brand">
      <span>Simple</span> <span class="secondary-text">beauty</span>
    </RouterLink>
  </header>
  <nav class="horizontal-sm secondary sticky">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'index' }">Docs</RouterLink>
  </nav>
</template>
