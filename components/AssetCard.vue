<template>
  <article v-if="asset.asset === 'icon'" class="icon-card-container">
    <div class="link">
      <div class="asset-img">
        <img loading="lazy" :src="getAssetUrl(asset)" :alt="asset.name" />
      </div>
    </div>

    <div class="asset-overlay">
      <button class="asset-folder" title="Add to collection">
        <span class="visually-hidden">Add to collection</span>
        <SvgoFolder class="w-6 h-6" />
      </button>

      <button class="asset-download" title="Download">
        <span class="visually-hidden">Download {{ asset.name }} asset</span>
        <SvgoDownload class="w-6 h-6" />
      </button>
    </div>
  </article>

  <article v-else :title="asset.name" class="asset-card-container">
    <div v-if="asset.asset !== 'lottie'" class="link">
      <div class="asset-img">
        <img loading="lazy" :src="getAssetUrl(asset)" :alt="asset.name" />
      </div>
    </div>

    <div v-else class="link">
      <div class="asset-img">
        <video muted :src="getAssetUrl(asset)" autoplay loop />
      </div>
    </div>

    <div v-if="isLastAsset" class="view-more-overlay">
      <div id="title">
        View More
        <SvgoArrow style="" />
      </div>
    </div>

    <div v-else class="asset-overlay">
      <div id="asset-name">
        <span class="visually-hidden">{{ asset.name }}</span>
        {{ asset.name }}
      </div>

      <button class="asset-folder" title="Add to collection">
        <span class="visually-hidden">Add to collection</span>
        <SvgoFolder class="w-6 h-6" />
      </button>

      <button class="asset-download" title="Download">
        <span class="visually-hidden">Download {{ asset.name }} asset</span>
        <SvgoDownload class="w-6 h-6" />
      </button>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { IAssetData } from "~/types";

const props = defineProps<{
  asset: IAssetData;
  isIconRoute: boolean;
  isLastAsset: boolean;
}>();

const getAssetUrl = (asset: IAssetData) => {
  if (asset.asset === "icon" && asset.urls["png_128"]) {
    return asset.urls["png_128"];
  }
  return asset.urls?.thumb;
};
</script>

<style lang="scss" scoped>
.icon-card-container {
  height: 140px;
  width: 100%;
  background-color: $bg-white-2;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  & .link {
    padding: 0.5rem 0.75rem;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .asset-img {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
      width: 100%;
      max-width: 70px;
      transition: transform 0.3s ease-in-out;

      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  & .asset-overlay {
    opacity: 0;
    transition: opacity 0.15s linear;

    &::before {
      content: "";
      display: block;
      opacity: 0;
      background: rgba(46, 51, 76, 0.1);
      transition: opacity 0.15s linear;
      border-radius: 12px;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    & button {
      position: absolute;
      border: 1px solid $grey-1;
      background-color: $bg-download;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 6px;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .asset-folder {
      top: 0.5rem;
      right: 0.5rem;
    }

    & .asset-download {
      bottom: 0.5rem;
      right: 0.5rem;
    }
  }

  &:hover {
    & .asset-img {
      transform: scale(1.1);
    }

    & .asset-overlay {
      opacity: 1;

      &::before {
        opacity: 1;
      }
    }
  }
}

.asset-card-container {
  height: 210px;
  width: 100%;
  background-color: $bg-white-2;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  & .link {
    padding: 0.5rem 0.75rem;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .asset-img {
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 162px;
      width: 100%;
      max-width: 232px;
      transition: transform 0.3s ease-in-out;

      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  & .asset-overlay {
    opacity: 0;
    transition: opacity 0.15s linear;

    &::before {
      content: "";
      display: block;
      opacity: 0;
      background: rgba(46, 51, 76, 0.1);
      transition: opacity 0.15s linear;
      border-radius: 12px;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    & button {
      position: absolute;
      border: 1px solid $grey-1;
      background-color: $bg-download;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 6px;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .asset-folder {
      top: 0.5rem;
      right: 0.5rem;
    }

    & .asset-download {
      bottom: 0.5rem;
      right: 0.5rem;
    }
  }

  &:hover {
    & .asset-img {
      transform: scale(1.1);
    }

    & .asset-overlay {
      opacity: 1;

      &::before {
        opacity: 1;
      }
    }

    & .view-more-overlay {
      opacity: 1;

      &::before {
        opacity: 1;
      }
    }
  }

  .view-more-overlay {
    opacity: 0;
    transition: opacity 0.15s linear;

    &::before {
      content: "";
      display: block;
      opacity: 0;
      background: rgba(0, 0, 0, 80%);
      transition: opacity 0.15s linear;
      border-radius: 12px;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    & #title {
      font-size: 1.125rem;
      color: $white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      svg {
        width: 10px;
        height: 10px;
      }
    }
  }

  #asset-name {
    font-size: 0.75rem;
    color: $text-dark-2;
    position: absolute;
    bottom: 1rem;
    left: 1.25rem;
    z-index: 2;
  }
}
</style>
