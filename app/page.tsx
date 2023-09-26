"use client";
import { useEffect } from "react";
import styles from "./page.module.sass";
import AMapLoader from "@amap/amap-jsapi-loader";
import { mapKey } from "./lib/constant";
import { Input } from "antd";
import { searchLocation } from "./services/api";
import map from "./lib/map";

export default function Home() {
  const { Search } = Input;
  const handleSearch = async (val: string) => {
    const res = await searchLocation({ keywords: val });
    console.log(
      res,
      res.pois?.[0].location.split(",").map((item: string) => +item)
    );

    const marker = new map.map.Marker({
      position: new map.map.LngLat(
        ...res.pois?.[0].location.split(",").map((item: string) => +item)
      ), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: res.pois?.[0].cityname,
    });
    map.mapInstance.add(marker);
  };
  console.log(map.map, map.mapInstance);
  return (
    <div id="container" className={styles.container}>
      <div className={styles.header}>
        <Search
          className={styles.input}
          enterButton="Search"
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
}
