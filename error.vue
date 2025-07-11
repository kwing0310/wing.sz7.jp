<template>
  <div id="error">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <UiButton
      element="nuxt-link"
      to="/"
      text="Home"
    />
  </div>
</template>

<script setup lang="ts">
const error = useError();
</script>

<style scoped lang="scss">
#error {
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  p {
    color: var(--gray);
  }
}
</style>
