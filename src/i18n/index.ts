import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from '@/i18n/resources'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    react: {
      useSuspense: true
    }
  })

export default i18n
