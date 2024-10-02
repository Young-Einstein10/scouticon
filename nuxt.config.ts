// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@bootstrap-vue-next/nuxt", "nuxt-svgo", "@vueuse/nuxt", "@pinia/nuxt"],
  svgo: {
    // autoImportPath: "./assets/icons/",
    defaultImport: "component",
  },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_partials.scss" as *;',
        },
      },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      iconscoutClientId: process.env.NUXT_PUBLIC_ICONSCOUT_CLIENT_ID,
    },
  },
  typescript: {
    strict: true,
  },
});