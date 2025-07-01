<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue-sonner'

const { t } = useI18n()
const isSubmitting = ref(false)
const formSubmitted = ref(false)
const formData = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    const response = await fetch('https://formspree.io/f/mzzgowor', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
      }),
    })

    if (response.ok) {
      formSubmitted.value = true
      formData.value = { name: '', email: '', message: '' }

      // 🔑 If you change locale here, await nextTick for t() to update
      // locale.value = 'pt'
      // await nextTick()

      toast.success(t('contact.form.successMessage'))

      setTimeout(() => {
        formSubmitted.value = false
      }, 3000)
    } else {
      toast.error(t('contact.form.errorMessage'))
    }
  } catch (error) {
    console.error('Formspree error:', error)
    toast.error(t('contact.form.errorMessage'))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="section-header">
      <h2 class="section-title dark:text-gray-300 text-gray-500">{{ t('contact.title') }}</h2>
      <div class="section-divider"></div>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">
            <font-awesome-icon icon="envelope" />
          </div>
          <div class="contact-text">
            <h3>{{ t('contact.form.email') }}</h3>
            <p>
              <a href="mailto:iaggo.capitanio@gmail.com">iaggo.capitanio@gmail.com</a>
            </p>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <font-awesome-icon icon="phone" />
          </div>
          <div class="contact-text">
            <h3>{{ t('contact.form.phone') }}</h3>
            <p>
              <a href="tel:+5548991790841">+55 (48) 99179-0841</a>
            </p>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <font-awesome-icon icon="map-marker-alt" />
          </div>
          <div class="contact-text">
            <h3>{{ t('contact.form.location') }}</h3>
            <a
              href="https://www.google.com/maps/place/Pilarzinho,+Curitiba+-+State+of+Paraná"
              target="_blank"
            >
              {{ t('contact.address') }}
            </a>
          </div>
        </div>

        <div class="social-links">
          <a href="https://github.com/iaggocapitanio1" class="social-link" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/iaggo-capitanio/"
            class="social-link"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/iaggocapitanio/" class="social-link" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" /> Instagram
          </a>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">{{ t('contact.form.name') }}</label>
          <input type="text" id="name" v-model="formData.name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">{{ t('contact.form.email') }}</label>
          <input type="email" id="email" v-model="formData.email" name="email" required />
        </div>
        <div class="form-group">
          <label for="message">{{ t('contact.form.message') }}</label>
          <textarea
            id="message"
            v-model="formData.message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          {{ isSubmitting ? t('contact.form.sending') : t('contact.form.submitButton') }}
        </button>
        <p v-if="formSubmitted" class="form-success">{{ t('contact.form.success') }}</p>
      </form>
    </div>
  </section>
</template>
