<template>
  <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="$emit('close')">
        <X :size="24" />
      </button>

      <div class="modal-image-container">
        <img :src="images[currentIndex]" :alt="`Image ${currentIndex + 1}`" class="modal-image" />
      </div>

      <div class="modal-navigation" v-if="images.length > 1">
        <button class="nav-btn prev" @click="previousImage">
          <ChevronLeft :size="24" />
        </button>
        <button class="nav-btn next" @click="nextImage">
          <ChevronRight :size="24" />
        </button>
      </div>

      <div class="modal-counter" v-if="images.length > 1">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>

      <div class="modal-thumbnails" v-if="images.length > 1">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="modal-thumbnail"
          :class="{ active: index === currentIndex }"
          @click="setCurrentIndex(index)"
        >
          <img :src="image" :alt="`Thumbnail ${index + 1}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import { watch } from 'vue'

interface Props {
  isOpen: boolean
  images: string[]
  currentIndex: number
  imageClass?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  updateIndex: [index: number]
}>()

const nextImage = () => {
  const newIndex = (props.currentIndex + 1) % props.images.length
  emit('updateIndex', newIndex)
}

const previousImage = () => {
  const newIndex = props.currentIndex === 0 ? props.images.length - 1 : props.currentIndex - 1
  emit('updateIndex', newIndex)
}

const setCurrentIndex = (index: number) => {
  emit('updateIndex', index)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.isOpen) return

  switch (event.key) {
    case 'Escape':
      emit('close')
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      previousImage()
      break
  }
}

watch(
  () => props.isOpen,
  (isOpen) => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }
  },
)

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 1001;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.modal-image-container {
  position: relative;
  max-width: 80vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-height: 70vh; /* limit to 80% of viewport height */
  height: auto; /* scale height automatically based on aspect ratio */
  max-width: 90vw; /* limit to 90% of viewport width */
  width: auto; /* scale width automatically based on aspect ratio */
  object-fit: contain; /* ensures entire image is visible without cropping */
  border-radius: 8px;
  display: block; /* ensures it doesn't overflow inline contexts */
}

@media (max-width: 640px) {
  .modal-image {
    max-width: 90%; /* overrides when screen width is 640px or LESS */
    max-height: 75vh; /* ensures it doesn't exceed 80% of viewport height */
  }
}

.modal-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  pointer-events: all;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.nav-btn.prev {
  margin-left: -25px;
}

.nav-btn.next {
  margin-right: -25px;
}

.modal-counter {
  color: white;
  margin-top: 15px;
  font-weight: 500;
}

.modal-thumbnails {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  max-width: 80vw;
  overflow-x: auto;
  padding: 10px 0;
}

.modal-thumbnail {
  width: 60px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  flex-shrink: 0;
}

.modal-thumbnail.active {
  opacity: 1;
  border: 2px solid #6c5ce7;
}

.modal-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
