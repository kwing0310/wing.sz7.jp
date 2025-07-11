import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
    }),
    otaku: defineCollection({
      type: 'page',
      source: 'otaku.md',
    }),
  },

  highlight: {
    theme: 'github-dark',
  },
});
