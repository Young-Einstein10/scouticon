export interface FilterOption {
  title: string;
  value: globalThis.Ref<any, string>;
  isActive: boolean;
  list: {
    title: string;
    value: string;
  }[];
}

export interface IAssetResponse {
  status: "success" | "error";
  response: {
    items: {
      current_page: number;
      data: IAssetData[];
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string | null;
      next_page_url: string;
      path: string;
      per_page: number;
      prev_page_url: string | null;
      to: number;
      total: number;
    };
  };
  meta: {};
  elements: any | null;
  message: string | null;
}

export type AssetType = "icon" | "illustration" | "3d" | "lottie";
export type Formats = "svg" | "eps" | "ai";
export type IconStyles =
  | "flat"
  | "line"
  | "sticker"
  | "colored-outline"
  | "glyph"
  | "isometric"
  | "doodle"
  | "gradient"
  | "dualtone"
  | "rounded";

export interface QueryParams {
  query: string;
  product_type?: string;
  asset?: AssetType;
  price?: "free" | "premium";
  page?: number;
  per_page?: number;
  formats?: Formats[];
  sort?: "popular" | "latest" | "relevant" | "color";
  styles?: IconStyles[];
}

// Conditional type based on if AssetType is "icon"
type IUrls =
  | {
      png_64: string;
      png_128: string;
      png_256: string;
    }
  | {
      thumb: string;
    };

export interface IAssetData {
  id: number;
  uuid: string;
  asset: AssetType;
  name: string;
  slug: string;
  price: number;
  urls: Record<string, string>;
  color_codes: {
    decimal_color: number;
    color_id: number;
  }[];
}
