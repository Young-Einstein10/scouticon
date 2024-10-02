<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
main {
  @media screen and (min-width: 576px) {
    min-height: calc(100vh - (70px + 488px));
  }
}
</style>
