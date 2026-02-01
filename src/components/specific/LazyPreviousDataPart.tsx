"use client";

import dynamic from "next/dynamic";
import PreviousDataPartSkeleton from "./PreviousDataPartSkeleton";

const PreviousDataPart = dynamic(() => import("./PreviousDataPart"), {
  ssr: false,
  loading: () => <PreviousDataPartSkeleton />,
});

export default PreviousDataPart;
