<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'vue-sonner/style.css'
import Whatsapp from './components/home/Whatsapp.vue'
import Navigation from './components/navigation/Navigation.vue'
import { Toaster } from './components/ui/sonner'
const isDarkMode = ref(false)
// Initialize theme from localStorage or system preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = prefersDark
  }
})
</script>

<template>
  <div class="portfolio" :class="{ 'dark-mode': isDarkMode }">
    <Navigation />

    <RouterView />

    <Toaster rich-colors />
    <Whatsapp />
  </div>
</template>
