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
    description: t('projects.sigiloMobile.description'),
    tags: ['Flutter', 'Firebase', 'Dart', 'BloC', 'GetIt', 'Provider'],
    category: 'Mobile',
    deployLink:
      'https://play.google.com/store/apps/details?id=br.com.modula.sigilomobile&pcampaignid=web_share',
  },
  {
    title: 'Kindra Track',
    images: [
      '/kindra-track/login.png',
      '/kindra-track/dashboard.png',
      '/kindra-track/dashboard_2.png',
      '/kindra-track/gtas.png',
      '/kindra-track/gta.png',
      '/kindra-track/trucks.png',
      '/kindra-track/producers.png',
      '/kindra-track/producer_2.png',
      '/kindra-track/producer_3.png',
      '/kindra-track/producer_4.png',
      '/kindra-track/settings.png',
    ],
    description: t('projects.kindraTrack.description'),
    tags: [
      'AWS',
      'Tailwind CSS',
      'TypeScript',
      'Django',
      'PostgreSQL',
      'Docker',
      t('projects.kindraTrack.computationalVision'),
      t('projects.kindraTrack.iot'),
      'Next.js',
      'React',
      'Node.js',
      'OAuth2',
    ],
    category: 'Web',
    deployLink: 'https://track.kindraindustria.com',
  },
  {
    title: 'WW 4.0',
    images: ['/ww4/project.jpeg', '/ww4/wood.jpeg'],
    description: t('projects.ww4.description'),

    tags: [
      'Nginx',
      'Node.js',
      'Tailwind CSS',
      'Docker',
      'PostgreSQL',
      'Django',
      'Python',
      'Next.js',
      'React',
      'TypeScript',
      'OAuth2',
      'Machine Learning',
      'IoT',
    ],
    category: 'Web',
    deployLink: 'https://morecolab.pt/inicio/projetos/projetos-ww4-0/',
  },
  {
    title: 'Vamo.com.vc',
    images: [
      '/vamo/main.png',
      '/vamo/who_we_are.png',
      '/vamo/search.png',
      '/vamo/payment.png',
      '/vamo/checkout.png',
    ],
    description: t('projects.vamo.description'),
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Vercel',
      'Azure',
      'Redis',
      'PostgreSQL',
    ],
    category: 'Web',
  },
  {
    title: 'Weed Vision',
    images: [
      '/weed/weed_0.png',
      '/weed/weed_1.jpg',
      '/weed/weed_2.jpg',
      '/weed/weed_3.png',
      '/weed/weed_4.jpg',
      '/weed/weed_5.jpg',
    ],
    description: t('projects.weed.description'),
    tags: [
      'Qt',
      'C++',
      'QML',
      'OpenCV',
      'Python',
      'CAN-BUS',
      t('projects.weed.computationalVision'),
    ],
    category: 'Embedded',
    deployLink: 'https://weedvision.com.br/',
  },
])

const categories = ['All', 'Web', 'Mobile', 'Embedded']

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
      <h2 class="section-title">{{ t('projects.title') }}</h2>
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
