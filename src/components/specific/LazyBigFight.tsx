"use client";

import dynamic from "next/dynamic";
import BigFightSkeleton from "./BigFightSkeleton";

const BigFight = dynamic(() => import("./BigFight"), {
  ssr: false,
  loading: () => <BigFightSkeleton />,
});

export default BigFight;
