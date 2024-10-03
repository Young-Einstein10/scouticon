<template>
  <aside class="filter-list-container d-none d-lg-block">
    <div class="exclusive-wrapper py-5 px-6">
      <div class="d-flex align-items-center justify-content-between">
        <p class="filter-title">Iconscout Exclusive</p>
        <BFormCheckbox
          v-model="isExclusiveChecked"
          v-on:update:model-value="(value) => toggleExclusiveIcon(value)"
          class="switch-toggle"
          switch
        />
      </div>
    </div>

    <div
      v-for="option in filterOptions"
      :key="option.title"
      class="filter-container py-5 px-6"
    >
      <button
        class="btn-unstyled w-100 d-flex align-items-center justify-content-between"
        :class="{ 'mb-4': option.isActive }"
        @click="option.isActive = !option.isActive"
      >
        <p class="filter-title">{{ option.title }}</p>
        <SvgoDown
          class="svg-down w-4 h-4"
          :class="{ 'rotate-180': option.isActive }"
        />
      </button>

      <Transition name="slide">
        <div v-if="option.isActive">
          <BFormRadioGroup
            v-model="option.value"
            class="filter-list-options d-flex flex-column mb-2"
          >
            <BFormRadio
              v-for="item in option.list"
              :key="item.title"
              :name="option.title"
              :value="item.value"
              class="filter-title"
              >{{ item.title }}</BFormRadio
            >
          </BFormRadioGroup>
        </div>
      </Transition>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import type { CheckboxValue } from "bootstrap-vue-next";
import type { FilterOption } from "~/types";

const route = useRoute();
const router = useRouter();

const { mappedQueries, assetType } = useQueryParams();

const isExclusiveChecked = ref(route.query?.exclusive === "true");

const toggleExclusiveIcon = (
  value: CheckboxValue | readonly CheckboxValue[] | undefined
) => {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      exclusive: value ? "true" : "false",
    },
  });
};

const reverseAssetMap: Record<string | any, string> = {
  all: "all-assets",
  "3d": "3d-illustrations",
  lottie: "lottie-animations",
  illustration: "illustrations",
  icon: "icons",
};

const filterOptions = reactive<FilterOption[]>([
  {
    title: "Asset",
    value: ref(reverseAssetMap[assetType.value!]),
    isActive: true,
    list: [
      {
        title: "All Assets",
        value: "all-assets",
      },
      {
        title: "3D Illustrations",
        value: "3d-illustrations",
      },
      {
        title: "Lottie Animations",
        value: "lottie-animations",
      },
      {
        title: "Illustrations",
        value: "illustrations",
      },
      {
        title: "Icons",
        value: "icons",
      },
    ],
  },
  {
    title: "Price",
    value: ref(mappedQueries.value.price),
    isActive: true,
    list: [
      {
        title: "Free",
        value: "free",
      },
      {
        title: "Premium",
        value: "premium",
      },
      {
        title: "All",
        value: "all",
      },
    ],
  },
  {
    title: "View",
    value: ref(mappedQueries.value.view),
    isActive: true,
    list: [
      {
        title: "Pack",
        value: "pack",
      },
      {
        title: "Individual",
        value: "individual",
      },
    ],
  },
  {
    title: "Sort by",
    value: ref(mappedQueries.value.sort),
    isActive: true,
    list: [
      {
        title: "Relevant",
        value: "relevant",
      },
      {
        title: "Popular",
        value: "popular",
      },
      {
        title: "Latest",
        value: "latest",
      },
      {
        title: "Color",
        value: "color",
      },
    ],
  },
]);

watch(
  filterOptions,
  (newOptions) => {
    const selectedOptions = newOptions
      .map((option) => ({
        title: option.title,
        value: option.value,
        isActive: option.isActive,
      }))
      .filter((option) => Boolean(option.value));

    let result: Record<string, string> = {};

    for (const option of selectedOptions) {
      const key =
        option.title.toLowerCase().replace(" ", "_") === "sort_by"
          ? "sort"
          : option.title.toLowerCase();
      result[key] = option.value;
    }

    const { asset, ...rest } = result;

    if (asset) {
      navigateTo({
        path: `/${asset}`,
        query: {
          ...route.query,
          ...rest,
        },
      });
    } else {
      navigateTo({
        path: route.path,
        query: {
          ...route.query,
          ...rest,
        },
      });
    }
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
.filter-list-container {
  width: 16.25rem;
  flex: 0 0 16.25rem;
  transform: translateX(-16.25rem);
  transition: transform 0.2s linear;
  will-change: transform;
  border-right: 1px solid $grey-1;
  position: sticky;
  top: calc(4.375rem + 48px);
  height: calc(100vh - 4.375rem);
  overflow-y: auto;

  @media screen and (min-width: 992px) {
    transform: translateX(0);
  }

  .filter-title {
    color: $text-dark;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  .exclusive-wrapper {
    border-bottom: 1px solid $grey-1;

    .form-switch {
      height: 1.25rem;

      :deep(.form-check-input) {
        --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ffffff'/%3e%3c/svg%3e");

        width: 2.25rem;
        height: 100%;
        border: none;
        background-color: $switch-bg-color;
        background-image: var(--bs-form-check-bg-image);
        margin-top: 0;
        margin-left: 0;
        box-shadow: 0px 2px 3px 0px #0000000a;

        &:checked {
          background-color: $active-switch-bg-color;
          border-color: $primary;
        }
      }
    }
  }

  .filter-container {
    border-bottom: 1px solid $grey-1;

    .svg-down {
      width: 0.625rem;
      height: 0.375rem;
      color: #8f95b2;
    }

    .slide-enter-active,
    .slide-leave-active {
      transition: transform 0.15s ease-out, opacity 0.1s ease-out;
    }

    .slide-enter-from,
    .slide-leave-to {
      transform: translateY(-50%);
      opacity: 0;
    }

    :deep(.form-check) {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0;
      margin-bottom: 0;
      font-size: 0.875rem;

      .form-check-input {
        width: 1rem;
        height: 1rem;
        margin: 0;
        border: 1px solid $border-color;
        /* background-color: $white; */
      }
    }
  }
}
</style>
