import axios from "axios";
import service from "./service";
import { GeoType, ReGeoType, SearchLocationType } from "./type";

export async function getLocationByAddress(params: GeoType) {
  const res = await service.get("https://restapi.amap.com/v3/geocode/geo", {
    params: {
      ...params,
    },
  });
  return res?.data.geocodes?.[0];
}

export async function getAddressByLocation(params: ReGeoType) {
  const res = await service.get("https://restapi.amap.com/v3/geocode/regeo", {
    params: {
      ...params,
    },
  });
  return res?.data;
}

export async function getLocationByIP(ip?: string) {
  const res = await service.get("https://restapi.amap.com/v3/ip", {
    params: {
      ip,
    },
  });
  return res?.data;
}

export async function searchLocation(params: SearchLocationType) {
  const res = await service.get("https://restapi.amap.com/v5/place/text", {
    params: {
      ...params,
    },
  });
  return res?.data;
}
