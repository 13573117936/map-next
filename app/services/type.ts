export interface BaseType {
  sig?: string;
  output?: string;
  callback?: any;
}

export interface GeoType extends BaseType {
  address: string;
  city?: string;
}

export interface ReGeoType extends BaseType {
  location: string;
}

export interface SearchLocationType extends BaseType {
  keywords: string; // 关键字
  types?: number; // 指定地点类型
  page_size?: number;
  page_num?: number;
}
