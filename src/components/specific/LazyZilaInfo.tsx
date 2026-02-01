"use client";

import dynamic from "next/dynamic";
import ZilaInfoSkeleton from "./ZilaInfoSkeleton";

const ZilaInfo = dynamic(() => import("./ZilaInfo"), {
  ssr: false,
  loading: () => <ZilaInfoSkeleton />,
});

export default ZilaInfo;
