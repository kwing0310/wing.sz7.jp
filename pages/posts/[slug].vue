<template>
  <article
    v-if="post"
    class="formatted-text"
  >
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </article>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`posts-${slug}`, () => {
  return queryCollection('posts').path(`/posts/${slug}`).first();
});
</script>
