// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Private keys are only available on the server side
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  modules: ['@nuxtjs/tailwindcss']
})
