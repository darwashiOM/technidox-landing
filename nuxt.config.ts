// https://nuxt.com/docs/api/configuration/nuxt-config

// baseURL the site is served from (e.g. "/technidox-landing/" on GitHub Pages,
// "/" in dev). Head link hrefs aren't auto-prefixed, so build them off this.
const base = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'TechniDox — AI-Native Documentation Engine',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'AI-native platform that generates documentation from code, scores quality in real-time, and delivers measurable ROI for enterprise teams.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${base}favicon.ico`, sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: `${base}favicon.png` },
        { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Montserrat:wght@600&family=Sora:wght@600;700&display=swap',
        },
      ],
    },
  },
})
