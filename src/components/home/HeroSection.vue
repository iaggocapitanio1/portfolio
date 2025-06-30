<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="greeting">{{ t('home.heroSection.title') }}</span>
        <span class="name">Iaggo Capitanio</span>
      </h1>
      <p class="hero-subtitle">{{ t('home.heroSection.softwareEngineer') }}</p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">{{ t('home.heroSection.viewMyWork') }}</a>
        <a href="#contact" class="btn btn-secondary">{{ t('home.heroSection.contactMe') }}</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </section>
</template>
