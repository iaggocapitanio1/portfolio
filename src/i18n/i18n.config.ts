import { createI18n } from 'vue-i18n'

export type Locale = 'en' | 'pt'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}, // initially empty
})

async function loadLocaleMessages(locale: Locale) {
  const messages = await import(`./locales/${locale}.json`)
  i18n.global.setLocaleMessage(locale, messages.default)
  i18n.global.locale.value = locale
}

export { i18n, loadLocaleMessages }
