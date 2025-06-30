import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'

export type Locale = 'en' | 'pt'

const i18n = createI18n({
  legacy: false,
  locale: 'pt', // default locale
  fallbackLocale: 'en',
  messages: {
    en,
    pt,
  },
})

export { i18n }
