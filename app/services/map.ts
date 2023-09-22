import axios from "axios";
import { mapKey } from "../lib/constant";

export async function getLocationByAddress(params: {
  address: string;
  city?: string;
  sig?: string;
  output?: string;
  callback?: any;
}) {
  const res = await axios.get("https://restapi.amap.com/v3/geocode/geo", {
    params: {
      key: mapKey,
      ...params,
    },
  });
  return res;
}

export async function getAddressByLocation(params: any) {}
