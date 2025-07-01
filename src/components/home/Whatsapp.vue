<script setup lang="ts">
defineOptions({ name: 'HomeWhatsapp' })
import { MessageCircle, X } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const showTooltip = ref(false)
const showPreview = ref(false)

// Configuration - customize these values
const phoneNumber = '+55 48 991790841'
const defaultMessage = computed(() => {
  return t('contact.form.whatsAppMessage')
})

// Methods
const openWhatsApp = () => {
  const encodedMessage = encodeURIComponent(defaultMessage.value)
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* Custom animations */
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .fixed {
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Floating Button -->
    <button
      @click="openWhatsApp"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      class="group relative size-12 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out animate-bounce flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <!-- WhatsApp Icon -->
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="w-8 h-8 text-[24px]" />

      <!-- Pulse Animation -->
      <div class="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>

    <!-- Tooltip -->
    <div
      v-show="showTooltip"
      class="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap transform transition-all duration-200 ease-in-out"
      :class="showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
    >
      Chat with us on WhatsApp
      <!-- Tooltip Arrow -->
      <div
        class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"
      ></div>
    </div>

    <!-- Chat Preview (Optional) -->
    <div
      v-show="showPreview"
      class="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-lg shadow-xl border transform transition-all duration-300 ease-in-out"
      :class="
        showPreview ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      "
    >
      <!-- Header -->
      <div class="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <MessageCircle class="w-5 h-5 text-green-500" />
          </div>
          <div>
            <h3 class="font-semibold">Customer Support</h3>
            <p class="text-sm opacity-90">Typically replies instantly</p>
          </div>
        </div>
        <button
          @click="showPreview = false"
          class="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Message -->
      <div class="p-4">
        <div class="bg-gray-100 rounded-lg p-3 mb-4">
          <p class="text-gray-800 text-sm">
            Hi there! 👋<br />
            How can we help you today?
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2">
          <button
            @click="openWhatsApp"
            class="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle class="w-4 h-4" />
            <span>Start Chat</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
