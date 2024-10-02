<template>
  <div class="account-banner text-center">
    <div class="content">
      <p class="title">View all Limit 3D Illustrations</p>
      <div class="btn-wrapper">
        <button class="btn btn-primary">Get started - It's Free</button>
        <p>
          Already have an account?
          <a href="#">Log in</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAssetsStore } from "~/store/assets";

const store = useAssetsStore();
const { page, lottie_page } = storeToRefs(store);
const { assetType } = useQueryParams();

// watch(
//   [page, lottie_page],
//   ([newPage, newLottiePage]) => {
//     if (assetType.value === "lottie" && (newPage >= 3 || newLottiePage >= 3)) {
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.documentElement.style.overflow = "auto";
//     }
//   },
//   { immediate: true }
// );
</script>

<style lang="scss" scoped>
.account-banner {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba($white, 0) 0%,
    rgba($white, 0.9) 21.98%,
    rgba($white, 0.99) 100%
  );
  height: 402px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 51px 0;
  z-index: 1;

  & .content {
    max-width: 400px;
    height: 300px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;

    & .title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
    }

    & .btn-wrapper {
      & .btn {
        padding: 0.8125rem 3rem;
        height: 54px;
        width: 277px;
        color: $white;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }

      & a {
        color: $primary-foreground;
        font-weight: 600;
        text-decoration: none;
      }

      & p {
      }
    }
  }
}
</style>
