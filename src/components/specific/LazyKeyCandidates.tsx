"use client";

import dynamic from "next/dynamic";
import KeyCandidatesSkeleton from "./KeyCandidatesSkeleton";

const KeyCandidates = dynamic(() => import("./KeyCandidates"), {
  ssr: false,
  loading: () => <KeyCandidatesSkeleton />,
});

export default KeyCandidates;
