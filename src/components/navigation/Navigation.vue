<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'
import ModeSelector from './ModeSelector.vue'

const { t } = useI18n()
defineOptions({
  name: 'AppNavigation',
})

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="logo">
      <span class="logo-text text-white">Portfolio</span>
    </div>
    <nav class="nav">
      <a href="#about" class="nav-link">{{ t('navigation.about') }}</a>
      <a href="#projects" class="nav-link">{{ t('navigation.projects') }}</a>
      <a href="#skills" class="nav-link">{{ t('navigation.skills') }}</a>
      <a href="#contact" class="nav-link">{{ t('navigation.contact') }}</a>
    </nav>

    <!-- Theme Toggle Button -->

    <ModeSelector />

    <!-- Menu toggle for mobile -->
    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      <div class="hamburger" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <LanguageSelector />
  </header>
</template>
