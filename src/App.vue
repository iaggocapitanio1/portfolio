<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import 'vue-sonner/style.css'
import Whatsapp from './components/home/Whatsapp.vue'
import Navigation from './components/navigation/Navigation.vue'
import { Toaster } from './components/ui/sonner'

const isDarkMode = ref(false)
const { t, locale } = useI18n()

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

// Function to update document metadata
const updateMetadata = () => {
  // Get translated metadata
  const title = t('metadata.title')
  const description = t('metadata.description')
  const keywords = t('metadata.keywords')

  // Update title
  document.title = title

  // Update or create description meta tag
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')

    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute('content', description)

  // Update or create keywords meta tag
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta')

    document.head.appendChild(metaKeywords)
  }
  metaKeywords.setAttribute('content', keywords)
}

// Watch for locale changes to update metadata
watch(
  locale,
  () => {
    updateMetadata()
  },
  { immediate: true },
)
</script>

<template>
  <div class="portfolio" :class="{ 'dark-mode': isDarkMode }">
    <Navigation />
    <RouterView />
    <Toaster rich-colors />
    <Whatsapp />
  </div>
</template>
