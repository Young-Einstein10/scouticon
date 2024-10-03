<template>
  <section>
    <div class="header-wrapper">
      <div>
        <h1 class="text-capitalize">
          {{ loading ? loadingHeaderText : headerTitle }}
        </h1>
        <p class="text-sm">
          {{ bodyDescription }}
        </p>
      </div>
    </div>

    <FilterNavigation />
    <div class="d-flex">
      <FilterList />
      <AssetGridContainer />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useAssetsStore } from "~/store/assets";

const store = useAssetsStore();
const { makeApiRequest, updateLottieAssetData } = store;
const { seoTitle, headerTitle, bodyDescription, loading, lottie_page } =
  storeToRefs(store);

const { mappedQueries, assetType } = useQueryParams();

const loadingHeaderText = `Searching ${assetType.value} ${mappedQueries.value?.query} ...`;

// Initial Request
await makeApiRequest(mappedQueries.value, assetType.value === "all");

watch(
  mappedQueries,
  async (newQueries) => {
    await makeApiRequest(newQueries, assetType.value === "all");
  },
  { deep: true }
);

watch(lottie_page, async (newPage) => {
  if (newPage < 2) return;

  await updateLottieAssetData({
    ...mappedQueries.value,
    page: newPage,
  });
});

useSeoMeta({
  title: seoTitle,
  description: bodyDescription,
});
</script>

<style lang="scss" scoped>
section {
  .header-wrapper {
    padding: 2.5rem 1.5rem;
    background-color: $bg-white-2;

    h1 {
      color: $black;
      font-size: 35px;
      font-weight: bold;
      line-height: 52.5px;
      margin-bottom: 0;
    }

    p {
      color: $text-muted;
    }
  }
}
</style>
