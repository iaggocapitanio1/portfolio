<template>
  <div class="projects-filter">
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('filterChange', category)"
      :class="{ active: activeFilter === category }"
      class="filter-btn"
    >
      {{ t(`projects.categories.${category.toLowerCase()}`) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  categories: string[]
  activeFilter: string
}

const { t } = useI18n()
defineProps<Props>()

defineEmits<{
  filterChange: [category: string]
}>()
</script>
