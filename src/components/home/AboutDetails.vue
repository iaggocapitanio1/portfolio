<script setup lang="ts">
import { defineProps, type Component } from 'vue'

interface Item {
  value?: string
  description?: string
}

defineProps<{
  title: string
  description?: string
  icon: Component
  items: Item[]
}>()
</script>

<template>
  <div class="generic-list text-gray-700 dark:text-gray-300 text-sm">
    <div class="flex items-center gap-2 justify-start">
      <component :is="icon" class="icon text-purple-500 size-24" />
      <h3 class="font-bold text-lg tracking-wider">{{ title }}</h3>
    </div>
    <span v-if="description" class="text-md font-semibold text-justify">{{ description }}</span>
    <ul v-if="items.length">
      <li v-for="(item, index) in items" :key="index">
        <p class="value" v-if="item.value">{{ item.value }}</p>
        <p class="text-xs text-gray-700 dark:text-gray-400 mb-1" v-if="item.description">
          {{ item.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.generic-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
}

.icon {
  width: 24px;
  height: 24px;
}
.value {
  font-weight: bold;
}
</style>
