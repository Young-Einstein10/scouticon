<template>
  <div
    class="random-query-list"
    :class="{ 'mb-all': isAllAssetsRoute, 'mb-icon': isIconRoute }"
  >
    <div class="wrapper d-flex align-items-center">
      <button v-for="item in queryList" :key="item" class="query-item">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const isIconRoute = computed(() => route.params.slug === "icon");
const isAllAssetsRoute = computed(() => route.params.slug === "all-assets");

const queryList = [
  // random search queries
  "Data",
  "Crypto",
  "Conversation",
  "Design",
  "Video",
  "Data",
  "Crypto",
  // "Conversation",
  // "Design",
  // "Video",
  // "Data",
  // "Crypto",
  // "Conversation",
  // "Design",
  // "Video",
];
</script>

<style lang="scss" scoped>
.random-query-list {
  overflow-x: auto;
  margin-bottom: 18px;

  &.mb-all {
    margin-bottom: 1.5rem;
  }
  &.mb-icon {
    margin-bottom: 35px;
  }

  .wrapper {
    gap: 0.625rem;

    .query-item {
      padding: 7px 12px;
      background: none;
      border: 1px solid #e4e9f2;
      color: #636c7e;
      font-size: 14px;
      border-radius: 5px;
      height: 34px;
    }
  }
}
</style>
