<template>
  <div class="d-flex flex-column gap-6">
    <AllAssetItem
      v-for="(asset, i) in store.assetListTypes"
      :type="asset.type"
      :loading="store.loading"
      :assetData="asset.data.slice(0, 15)"
    />
  </div>
</template>

<script lang="ts" setup>
import { useAssetsStore } from "~/store/assets";
const store = useAssetsStore();
</script>
