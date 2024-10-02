<template>
  <div class="wrapper">
    <template v-if="store.errorMessage">
      <ClientOnly>
        <div class="error-container">
          <BAlert :modelValue="true" variant="danger" dismissible fade>
            {{ store.errorMessage }}
          </BAlert>
        </div>
      </ClientOnly>
    </template>

    <AllAssets v-else-if="isAllAssetsRoute" />
    <div v-else :class="isIconRoute ? 'icon-grid' : 'asset-grid'">
      <AssetCardSkeleton
        v-if="store.loading"
        v-for="(_, i) in cardList"
        :key="i"
        :type="isIconRoute ? 'icon' : 'asset'"
      />

      <AssetCard
        v-else
        v-for="asset in currentAsset?.data"
        :key="asset.id"
        :asset="asset"
        :isIconRoute="isIconRoute"
        :isLastAsset="false"
      />
    </div>
    <AccountBanner v-if="page >= 3 || lottie_page >= 3" />
    <template v-else>
      <InfiniteLoading
        v-if="isLottieRoute"
        @infinite="incrementPage"
        class="infinite-loader-container"
      >
        <template #spinner>
          <AssetCardSkeleton
            v-if="store.isInfiniteLoading"
            v-for="(_, i) in cardList"
            :key="i"
            :type="'asset'"
          />
        </template>
      </InfiniteLoading>
    </template>
  </div>
</template>

<script lang="ts" setup>
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import { useAssetsStore } from "~/store/assets";

const route = useRoute();
const store = useAssetsStore();
const { assetType } = useQueryParams();

const { incrementPage } = store;
const { page, lottie_page, assetListTypes } = storeToRefs(store);

const currentAsset = assetListTypes.value.find(
  (asset) => asset.type === assetType.value
);

const isIconRoute = computed(() => assetType.value === "icon");
const isLottieRoute = computed(() => assetType.value === "lottie");
const cardList = isIconRoute.value ? 96 : 25;
const isAllAssetsRoute = computed(() => assetType.value === "all");
</script>

<style>
.wrapper {
  & .error-container {
    display: block;
  }

  .asset-grid,
  .infinite-loader-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 0.75rem;
    height: 100%;
  }

  .icon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.25rem;
    margin-top: 26px;
  }
}
</style>
