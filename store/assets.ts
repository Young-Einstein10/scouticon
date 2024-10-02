import type { IAssetData, IAssetResponse } from "~/types";

interface AssetListType {
  type: string;
  total: number;
  data: IAssetData[];
}

export const useAssetsStore = defineStore("assetsStore", () => {
  // const route = useRoute();
  const config = useRuntimeConfig();

  const { assetType, mappedQueries } = useQueryParams();

  const page = ref(1);
  const loading = ref(false);
  const isInfiniteLoading = ref(false);
  const lottie_page = ref(1); // to track page for lottie
  const errorMessage = ref("");
  const seoTitle = ref("");
  const headerTitle = ref("");
  const bodyDescription = ref("");

  const assetListTypes = reactive<AssetListType[]>([
    { type: "3d", total: 0, data: [] },
    { type: "lottie", total: 0, data: [] },
    { type: "illustration", total: 0, data: [] },
    { type: "icon", total: 0, data: [] },
  ]);

  const incrementPage = () => lottie_page.value++;

  const updatePageMeta = (asset: AssetListType) => {
    headerTitle.value = `${formatNumber(asset?.total!)} ${
      mappedQueries.value?.query
    } ${
      reverseAssetMap[
        assetType.value === "all" ? "all-assets" : assetType.value
      ]
    }`;
    bodyDescription.value = `Bring any design to life with high-quality design assets. Download ${formatNumber(
      asset.total
    )} Communication 3D Illustrations, Icons, Lottie Animations, and Vector Illustrations for free or premium use.`;
    seoTitle.value = `${headerTitle.value} - Free Download in SVG, PNG, BLEND, GIF | IconScout`;
  };

  const fetchData = async (
    queries: Record<any, any>,
    update = true,
    isInfinite = false
  ) => {
    const setLoading = (value: boolean) => {
      if (isInfinite) {
        isInfiniteLoading.value = value;
      } else {
        loading.value = value;
      }
    };

    setLoading(true);

    const {
      response: { items },
    } = await $fetch<IAssetResponse>("https://api.iconscout.com/v3/search", {
      query: { ...queries },
      headers: {
        "Client-ID": config.public.iconscoutClientId,
      },
      onRequest() {
        errorMessage.value = "";
      },
      onResponseError({ response }) {
        errorMessage.value =
          response._data?.message || "Sorry, an error occurred.";
        console.log("Error Message ", errorMessage.value);
        setLoading(false);
      },
    });

    if (update) {
      assetListTypes.forEach((asset) => {
        // console.log("Found asset === ", { asset, queries });
        if (asset.type === queries?.asset) {
          asset.data.push(...items.data);
          asset.total = items.total;
          updatePageMeta(asset);
        }
      });
    }
    setLoading(false);
    return items;
  };

  const fetchAllAssetsData = async (queries: Record<any, any>) => {
    const result = await Promise.all([
      fetchData({ ...queries, asset: "3d" }),
      fetchData({ ...queries, asset: "illustration" }),
      fetchData({ ...queries, asset: "lottie" }),
      fetchData({ ...queries, asset: "icon" }),
    ]);
    return result;
  };

  const makeApiRequest = async (
    queries: Record<any, any>,
    requestAll = false
  ) => {
    {
      return requestAll
        ? await fetchAllAssetsData(queries)
        : await fetchData(queries);
    }
  };

  async function updateLottieAssetData(queries: Record<any, any>) {
    try {
      errorMessage.value = "";
      const items = await fetchData(queries, false, true);
      assetListTypes.forEach((asset) => {
        if (asset.type === "lottie") {
          asset.total = items?.total;
          asset.data.push(...(items?.data || []));
          updatePageMeta(asset);
        }
      });
    } catch (error) {
      errorMessage.value = "Sorry, an error occurred.";
    }
  }

  const reverseAssetMap: Record<string | any, string> = {
    "all-assets": "Assets",
    "3d": "3D Illustrations",
    lottie: "Lottie Animations",
    illustration: "Illustrations",
    icon: "Icons",
  };

  return {
    page,
    lottie_page,
    loading,
    isInfiniteLoading,
    errorMessage,
    seoTitle,
    headerTitle,
    bodyDescription,
    assetListTypes,

    // Actions
    incrementPage,
    makeApiRequest,
    updateLottieAssetData,
  };
});
