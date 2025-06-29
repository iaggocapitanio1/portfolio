// src/main.ts
import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { i18n, loadLocaleMessages } from './i18n/i18n.config'
import router from './router'

async function bootstrap() {
  // Load default locale before app mount
  await loadLocaleMessages('en')

  const app = createApp(App)
  app.use(i18n)
  app.use(createPinia())
  app.use(router)

  app.mount('#app')
}

bootstrap()
