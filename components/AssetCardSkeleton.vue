<template>
  <div
    class="asset-skeleton"
    :class="{ 'icon-skeleton': type === 'icon' }"
  ></div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type: "icon" | "asset";
  }>(),
  { type: "asset" }
);
</script>

<style lang="scss" scoped>
.asset-skeleton {
  height: 210px;
  width: 100%;
  background-color: $bg-skeleton;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      $bg-white-2 -1%,
      #f1f1f6 22.04%,
      $bg-white-2 49.72%,
      #f1f1f6 73.88%,
      $bg-white-2 95.02%
    );

    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
}

.icon-skeleton {
  height: 140px;
  border-radius: 6px;
  background-color: $bg-skeleton;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      $bg-white-2 -1%,
      #f1f1f6 22.04%,
      $bg-white-2 49.72%,
      #f1f1f6 73.88%,
      $bg-white-2 95.02%
    );

    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
}
</style>
