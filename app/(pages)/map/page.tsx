"use client"
import { getLocationByAddress } from "@/app/services/api";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Home() {
  const getLocation = async () => {
    const res = await getLocationByAddress({ address: "天安门" });
    console.log(res);
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div>
      map
      <Link href={"/home"}>home</Link>
    </div>
  );
}
