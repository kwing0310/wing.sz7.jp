<template>
  <NuxtLink
    class="nav-link"
    :to="to"
  >
    <h3>
      <span>{{ title }}</span>
      <Icon
        class="nav-link-icon"
        name="material-symbols:arrow-right-alt-rounded"
      />
    </h3>
    <p>{{ desc }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
  to: string;
}>();
</script>

<style scoped lang="scss">
.nav-link {
  display: block;
  color: var(--fg);
  background: var(--secondary);
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: none;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    margin: 0.5rem 0;

    .nav-link-icon {
      font-size: 1.5rem;
      color: var(--gray);
      margin-right: 0.25rem;
    }
  }

  p {
    color: var(--gray);
    font-size: 0.9rem;
    line-height: 1.75;
    margin: 1rem 0 0.5rem 0;
  }
}
</style>
