import React, { useEffect } from "react";
import { dynamicMapKey } from "../lib/constant";
import AMapLoader from "@amap/amap-jsapi-loader";
import { getLocationByIP } from "../services/api";
import getMap from "./getMap";

export default function useMapLoader() {
  let map: any = null;
  const getLocation = async () => {
    const res = await getLocationByIP();
    console.log("location res:", res);
    map = await getMap();
    new map.Map("container", {
      // 设置地图容器id
      viewMode: "3D", // 是否为3D地图模式
      zoom: 12, // 初始化地图级别
      center: [116.397428, 39.90923], // 初始化地图中心点位置
    });
  };
  useEffect(() => {
    getLocation();
    return () => {
      map?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  return { map };
}
