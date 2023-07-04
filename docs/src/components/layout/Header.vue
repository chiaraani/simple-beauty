<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }" class="brand">
        <span>Simple</span> <span>beauty</span>
      </RouterLink>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'index' }">Docs</RouterLink>
    </nav>
  </header>
</template>
