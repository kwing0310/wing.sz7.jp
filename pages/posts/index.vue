<template>
  <div id="posts">
    <h1>Posts</h1>
    <UiNavLink
      v-for="post in posts"
      :key="post"
      :to="post.path"
      :title="post.title"
      :desc="post.description"
    />
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
  return queryCollection('posts').all();
});
</script>
