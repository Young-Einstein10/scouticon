<template>
  <div class="filter-container">
    <div class="filter-toggle d-none d-lg-flex px-6 py-3">
      <div
        class="d-flex flex-grow-1 align-items-center justify-content-between"
      >
        <button class="btn-unstyled">
          <SvgoFilter class="w-6 h-6" />
          <span>Filters</span>
        </button>

        <button class="btn-unstyled close-btn">
          <SvgoClose class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div class="filter-nav-wrapper">
      <div class="d-flex align-items-center justify-content-between gap-6">
        <NuxtLink
          v-for="option in filterOptions"
          :key="option.title"
          :to="getLinkPath(option.link)"
          active-class="active"
          >{{ option.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const filterOptions = [
  { title: "All Assets", link: "all-assets" },
  { title: "3D Illustrations", link: "3d-illustrations" },
  { title: "Lottie Animations", link: "lottie-animations" },
  { title: "Illustrations", link: "illustrations" },
  { title: "Icons", link: "icons" },
];

const route = useRoute();

const getLinkPath = (option: string) => {
  const defaultQueryParams: Record<string, any> = {
    price: "free",
    sort: "relevant",
    view: "individual",
    exclusive: false,
    ...route.query,
  };
  const searchParams = new URLSearchParams(defaultQueryParams);
  return `/${option}?${searchParams.toString()}`;
};
</script>

<style lang="scss" scoped>
.filter-container {
  height: 48px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 4.365rem;
  z-index: 999;
  background-color: $bg-white-2;
  border-bottom: 1px solid $grey-1;
}

.filter-toggle {
  width: 260px;
  border-right: 1px solid $grey-1;
}

.filter-nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 43px;
  padding-right: 1.5rem;
  /* padding-top: 2px;
  padding-bottom: 2px; */

  a {
    color: $primary-foreground;
    font-weight: 600;
    padding: 12px 0;
    text-decoration: none;

    &:hover {
      color: $black;
    }

    &.active {
      color: $black;
      border-bottom: 2px solid $black;
    }
  }
}
</style>
