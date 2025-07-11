<template>
  <div class="container">
    <header>
      <div
        class="back-link"
        @click="router.back()"
      >
        <Icon
          class="arrow-icon"
          name="material-symbols:arrow-back-ios-rounded"
        />
        <span>Back</span>
      </div>
      <div class="site-title">
        <NuxtLink to="/">wing</NuxtLink>
      </div>
      <AppThemeSwitcher />
    </header>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style scoped lang="scss">
.container {
  position: sticky;
  top: 0;
  padding-bottom: 0.75em;
  background: var(--bg);
}

header {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--darkgray);

  .back-link {
    display: flex;
    align-items: center;
    color: var(--link);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    .arrow-icon {
      font-size: 0.75rem;
    }
  }

  .site-title a {
    font-weight: bold;
    color: var(--fg);

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
