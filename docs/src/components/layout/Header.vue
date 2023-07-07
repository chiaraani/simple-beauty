<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'home' }" class="brand">
      <span>Simple</span> <span class="secondary-text">beauty</span>
    </RouterLink>
    <nav class="secondary">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'index' }">Docs</RouterLink>
    </nav>
  </header>
</template>
