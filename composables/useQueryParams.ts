export default () => {
  const route = useRoute();

  const assetMap: Record<string, string> = {
    "all-assets": "all",
    "3d-illustrations": "3d",
    "lottie-animations": "lottie",
    illustrations: "illustration",
    icons: "icon",
  };

  const assetType = computed(() => {
    const value = assetMap[route.params?.slug.toString()];
    return value ? value : "all";
  });

  const mappedQueries = computed(() => {
    const {
      search = "design",
      view = "individual",
      price = "free",
      sort = "relevant",
      ...rest
    } = route.query;

    // For initial load of the app
    const defaultQuery = {
      query: search,
      view: view,
      price: price === "all" ? "" : price,
      sort: sort,
      //   page: page.value,
      per_page: assetType.value === "icon" ? 100 : 60,
      ...(assetType.value !== "all" && { asset: assetType.value }),
    };

    return {
      ...rest,
      ...defaultQuery,
    };
  });

  return { assetType, mappedQueries };
};
