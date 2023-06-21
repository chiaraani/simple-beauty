<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="namespace">
        <span>Simple</span> <span>beauty</span>
      </RouterLink>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
</template>
