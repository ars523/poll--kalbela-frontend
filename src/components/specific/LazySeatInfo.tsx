"use client";

import dynamic from "next/dynamic";
import SeatInfoSkeleton from "./SeatInfoSkeleton";

const SeatInfo = dynamic(() => import("./SeatInfo"), {
  ssr: false,
  loading: () => <SeatInfoSkeleton />,
});

export default SeatInfo;
