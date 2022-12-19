import { createI18n } from 'vue-i18n'
import am from '../locales/armenian.json'
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'am',
    messages: {
      am
       
      
    }
  })

  vueApp.use(i18n)
})