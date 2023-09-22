import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      home
      <Link href={"/map"}>map</Link>
    </div>
  );
}
