<template>
  <div class="theme-switcher">
    <Icon
      class="theme-icon"
      :name="isDark ? 'material-symbols:sunny-outline-rounded' : 'material-symbols:moon-stars-outline-rounded'"
      @click="isDark = !isDark"
    />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  },
});
</script>

<style scoped lang="scss">
.theme-switcher {
  color: var(--fg);
  font-size: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
}
</style>
