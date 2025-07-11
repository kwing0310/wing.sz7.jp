<template>
  <div id="no-header">
    <div class="container">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
#no-header {
  margin-top: 3em;
}
</style>
