<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ImageGallery from './ImageGallery.vue'

const { t } = useI18n()
interface Project {
  title: string
  images?: string[]
  description: string
  tags: string[]
  category: string
  deployLink?: string
  codeLink?: string
  imageClass?: string
}

interface Props {
  project: Project
  animationDelay?: number
}

defineProps<Props>()

const emit = defineEmits<{
  openGallery: [images: string[], index: number]
}>()

const handleOpenGallery = (images: string[], index: number) => {
  emit('openGallery', images, index)
}
</script>

<template>
  <div class="project-card" :style="{ 'animation-delay': `${animationDelay}s` }">
    <ImageGallery
      :images="project.images"
      :title="project.title"
      @open-gallery="handleOpenGallery"
    />

    <div class="project-info">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>

      <div class="project-tags">
        <span v-for="(tag, index) in project.tags" :key="index" class="tag">
          {{ tag }}
        </span>
      </div>

      <div class="project-links">
        <a
          v-if="project.deployLink"
          :href="project.deployLink"
          class="project-link bg-gray-100 dark:bg-gray-800 rounded-lg"
          target="_blank"
        >
          <span>{{ t('projects.actions.view') }}</span>
        </a>
        <a
          v-if="project.codeLink"
          :href="project.codeLink"
          class="project-link bg-gray-100 dark:bg-gray-800 rounded-lg"
          target="_blank"
        >
          <span>{{ t('projects.actions.code') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
