<template>
  <button
    type="button"
    class="btn-hamburger d-flex d-xl-none justify-content-center align-items-center"
  >
    <SvgoHamburger class="w-5 h-5" />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.btn-hamburger {
  border: 1px solid $grey-3;
  border-radius: 50%;
  padding: 0.5rem;
  background: transparent;
  width: 34px;
  height: 34px;
}
</style>
