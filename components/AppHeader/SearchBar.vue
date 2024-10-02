<template>
  <form
    class="d-none align-items-center d-md-flex search-bar"
    @submit.prevent="handleSearch"
  >
    <div class="d-flex align-items-center flex-grow-1">
      <button type="button" class="btn__dropdown">
        {{ dropdownValue }}
        <SvgoDown />
      </button>

      <div class="input-wrapper">
        <SvgoSearch class="w-6 h-6" />
        <label
          class="col-form-label visually-hidden"
          for="inline-form-input-name"
        >
          Search
        </label>
        <input
          v-model="searchQuery"
          placeholder="Search from 8 Million+ assets"
          class="w-100"
        />
        <button class="btn-gallery">
          <SvgoGallery class="w-4 h-4" />
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { watchDebounced } from "@vueuse/core";
import { useAssetsStore } from "~/store/assets";

const route = useRoute();
const router = useRouter();
const store = useAssetsStore();
// const { mappedQueries } = storeToRefs(store);
const { mappedQueries } = useQueryParams();

const dropdownValue = ref("3D");
const searchQuery = ref(route.query?.search || mappedQueries.value?.query);

const handleSearch = () => {
  if (!searchQuery.value) return;
  navigateTo({
    path: router.currentRoute.value.path,
    query: {
      ...router.currentRoute.value.query,
      search: `${searchQuery.value}`.toLowerCase(),
    },
  });
};

watchDebounced(searchQuery, handleSearch, { debounce: 500, maxWait: 1000 });
</script>

<style lang="scss" scoped>
.search-bar {
  max-width: 360px;
  width: 100%;
  background-color: #ebedf5;
  border-radius: 8px;
  padding: 8px 10px;

  .btn__dropdown {
    color: #2e334c;
    font-size: 14px;
    font-weight: 600;
    height: 100%;
    border: 0;
    background: transparent;
    margin-right: 9px;

    svg {
      width: 0.46875rem;
      height: 0.28125rem;
    }
  }

  .input-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 9px;
    padding-left: 9px;
    border-left: 1px solid #b4bad6;

    input {
      flex: 1;
      height: 28px;
      border: 0;
      background: none;
      outline: none;

      &::placeholder {
        color: #2e334c;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .btn-gallery {
      border: 0;
      background-color: #fafafc;
      padding: 6px;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
