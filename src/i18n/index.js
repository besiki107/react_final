import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ka from './locales/ka.json'

const resources = { en: { translation: en }, ka: { translation: ka } }

const stored = (() => {
  try{ return localStorage.getItem('lang') }catch(e){ return null }
})()

i18n.use(initReactI18next).init({
  resources,
  lng: stored || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
