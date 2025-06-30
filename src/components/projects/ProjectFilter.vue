<template>
  <div class="projects-filter">
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('filterChange', category)"
      :class="{ active: activeFilter === category }"
      class="filter-btn"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  categories: string[]
  activeFilter: string
}

defineProps<Props>()

defineEmits<{
  filterChange: [category: string]
}>()
</script>

<style scoped>
.projects-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 20px;
  border: none;
  background: transparent;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  color: var(--light-text, #636e72);
}

.filter-btn:hover {
  color: var(--primary-color, #6c5ce7);
}

.filter-btn.active {
  background: linear-gradient(
    135deg,
    var(--primary-color, #6c5ce7),
    var(--secondary-color, #a29bfe)
  );
  color: white;
  box-shadow: 0 4px 10px rgba(108, 92, 231, 0.3);
}
</style>
