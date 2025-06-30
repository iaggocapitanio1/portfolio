<script setup lang="ts">
interface Props {
  images?: string[]
  title: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  openGallery: [images: string[], index: number]
}>()

const openGallery = (index: number) => {
  if (props.images) {
    emit('openGallery', props.images, index)
  }
}
</script>
<template>
  <div class="project-images" v-if="images && images.length > 0">
    <div class="main-image" @click="openGallery(0)">
      <img :src="images[0]" :alt="title" class="project-main-img" />
      <div class="image-overlay">
        <span class="view-gallery">View Gallery ({{ images.length }})</span>
      </div>
    </div>

    <div class="thumbnail-grid" v-if="images.length > 1">
      <div
        v-for="(image, index) in images.slice(1, 4)"
        :key="index"
        class="thumbnail"
        @click="openGallery(index + 1)"
      >
        <img :src="image" :alt="`${title} ${index + 2}`" />
        <div v-if="index === 2 && images.length > 4" class="more-overlay">
          +{{ images.length - 4 }}
        </div>
      </div>
    </div>
  </div>

  <div v-else class="project-image">
    <div class="image-placeholder">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<style scoped>
.project-images {
  position: relative;
}

.main-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px 15px 0 0;
}

.project-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.main-image:hover .project-main-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.main-image:hover .image-overlay {
  opacity: 1;
}

.view-gallery {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.thumbnail-grid {
  display: flex;
  gap: 2px;
  height: 60px;
}

.thumbnail {
  flex: 1;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumbnail:hover img {
  transform: scale(1.1);
}

.more-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
