"use client";
import { useEffect } from "react";
import styles from "./page.module.sass";
import AMapLoader from "@amap/amap-jsapi-loader";
import { mapKey } from "./lib/constant";
import useMapLoader from "./hooks/useMapLoader";
import { Input } from "antd";
import { searchLocation } from "./services/api";

export default function Home() {
  useMapLoader();
  const { Search } = Input;
  const handleSearch = async (val: string) => {
    const res = await searchLocation({ keywords: val });
    console.log(res);
  };
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
