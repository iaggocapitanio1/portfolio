<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'
import ModeSelector from './ModeSelector.vue'

const { t } = useI18n()
defineOptions({
  name: 'AppNavigation',
})
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

    <div class="flex flex-row items-center gap-2">
      <ModeSelector />

      <LanguageSelector />
    </div>
  </header>
</template>
