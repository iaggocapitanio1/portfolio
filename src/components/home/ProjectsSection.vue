<script setup lang="ts">
import ImageModal from '@/components/projects/ImageModal.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectFilter from '@/components/projects/ProjectFilter.vue'
import type { Project } from '@/components/projects/project'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const projects = ref<Project[]>([
  {
    title: 'Sigilo Mobile',
    images: [
      '/sigilo-mobile/login.png',
      '/sigilo-mobile/settings.png',
      '/sigilo-mobile/people_blur.png',
      '/sigilo-mobile/people_detail.png',
      '/sigilo-mobile/notifications.png',
      '/sigilo-mobile/price.png',
      '/sigilo-mobile/sales.png',
      '/sigilo-mobile/settings.png',
      '/sigilo-mobile/indicadores_de_estoque.png',
      '/sigilo-mobile/saldo.png',
      '/sigilo-mobile/saldo_1.png',
      '/sigilo-mobile/saldo_2.png',
    ],
    description: t('projects.projectList[0].description'),
    tags: ['Flutter', 'Firebase', 'Dart', 'BloC', 'GetIt', 'Provider'],
    category: 'Mobile',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Task Management App',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    ],
    description:
      'A productivity app for managing tasks, projects, and deadlines with team collaboration.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    category: 'Web',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Fitness Tracker',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    ],
    description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
    tags: ['Vue Native', 'GraphQL', 'Chart.js'],
    category: 'Mobile',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Portfolio Website',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    ],
    description: 'Creative portfolio website showcasing projects and skills.',
    tags: ['Vue.js', 'GSAP', 'CSS Animations'],
    category: 'Design',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Weather Dashboard',
    images: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    ],
    description: 'Real-time weather information with forecasts and interactive maps.',
    tags: ['Vue.js', 'API Integration', 'D3.js'],
    category: 'Web',
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'UI Component Library',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    ],
    description: 'Collection of reusable UI components with comprehensive documentation.',
    tags: ['Vue.js', 'Storybook', 'SCSS'],
    category: 'Design',
    demoLink: '#',
    codeLink: '#',
  },
])

const categories = ['All', 'Web', 'Mobile', 'Design']
const activeFilter = ref('All')

const handleFilterChange = (category: string) => {
  activeFilter.value = category
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter((project) => project.category === activeFilter.value)
})

const isModalOpen = ref(false)
const currentImages = ref<string[]>([])
const currentImageIndex = ref(0)
const currentImageClass = ref<string>('')

const handleOpenGallery = (images: string[], index: number, imageClass?: string) => {
  currentImages.value = images
  currentImageIndex.value = index
  currentImageClass.value = imageClass || ''
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const updateImageIndex = (index: number) => {
  currentImageIndex.value = index
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="section-header">
      <h2 class="section-title">My Projects</h2>
      <div class="section-divider"></div>
    </div>

    <ProjectFilter
      :categories="categories"
      :active-filter="activeFilter"
      @filter-change="handleFilterChange"
    />

    <div class="projects-grid">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
        :animation-delay="index * 0.1"
        @open-gallery="handleOpenGallery"
      />
    </div>

    <ImageModal
      :is-open="isModalOpen"
      :images="currentImages"
      :current-index="currentImageIndex"
      :image-class="currentImageClass"
      @close="closeModal"
      @update-index="updateImageIndex"
    />
  </section>
</template>

<style scoped></style>
