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
const { data: post } = await useAsyncData(`otaku`, () => {
  return queryCollection('otaku').path(`/otaku`).first();
});
</script>
