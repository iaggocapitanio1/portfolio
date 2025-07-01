import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import { i18n } from './i18n/i18n.config'
import router from './router'
const app = createApp(App)

library.add(
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faInstagram,
)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
