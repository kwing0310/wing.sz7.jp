export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],
  devtools: { enabled: true },

  css: [
    'normalize.css/normalize.css',
    '~/assets/scss/common.scss',
  ],

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: true,
      },
    },
  },

  image: {
    provider: 'ipx',
  },
});
