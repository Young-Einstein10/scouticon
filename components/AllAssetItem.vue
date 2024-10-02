<template>
  <div class="section-wrapper">
    <AssetCardSkeleton
      v-if="loading"
      :type="'asset'"
      style="height: 40px; margin-bottom: 1rem"
    />
    <h2 v-else class="title">{{ sectionTitle }}</h2>

    <div class="asset-grid">
      <AssetCardSkeleton
        v-if="loading"
        v-for="(_, i) in cardList"
        :key="i"
        :type="type === 'icon' ? 'icon' : 'asset'"
      />

      <AssetCard
        v-else
        v-for="(asset, i) in assetData"
        :key="asset.id"
        :asset="asset"
        :isIconRoute="type === 'icon'"
        :isLastAsset="isLastAsset(i, assetData.length - 1)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type: string;
  loading: boolean;
  assetData: any[];
}>();

const isLastAsset = (idx: number, length: number) => idx === length;

const reverseAssetMap: Record<string | any, string> = {
  "all-assets": "Assets",
  "3d": "3D Illustrations",
  lottie: "Lottie Animations",
  illustration: "Illustrations",
  icon: "Icons",
};

const cardList = 15;
const sectionTitle = computed(() => reverseAssetMap[props.type]);
</script>

<style lang="scss" scoped>
.section-wrapper {
  .title {
    color: $grey-4;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .asset-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.75rem;
  }

  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.25rem;
  }
}
</style>
