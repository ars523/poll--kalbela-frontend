"use client";

import React from "react";
import { SelectedSeatProvider } from "@/contexts/SelectedSeatContext";
import SearchBox from "@/components/specific/SearchBox/SearchBox";
import SeatCandidatesResult from "@/components/specific/SeatCandidatesResult";

export default function HomeSearchSection() {
  return (
    <SelectedSeatProvider>
      <SearchBox />
      <SeatCandidatesResult />
    </SelectedSeatProvider>
  );
}
