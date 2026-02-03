import React from "react";
import MobileNavbar from "@/components/common/MobileNavbar";
import HeroPartSkeleton from "@/components/specific/HeroPartSkeleton";
import SearchBoxSkeleton from "@/components/specific/SearchBoxSkeleton";
import SeatInfoSkeleton from "@/components/specific/SeatInfoSkeleton";

export default function HomePageSkeleton() {
  return (
    <div className="lg:mb-14 mb-10">
      <MobileNavbar />
      <HeroPartSkeleton />
      <SearchBoxSkeleton />
      <SeatInfoSkeleton className="lg:mt-14 mt-10" />
    </div>
  );
}
