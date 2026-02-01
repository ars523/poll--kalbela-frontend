import React from "react";
import MobileNavbar from "@/components/common/MobileNavbar";
import HeroPartSkeleton from "@/components/specific/HeroPartSkeleton";
import SearchBoxSkeleton from "@/components/specific/SearchBoxSkeleton";
import SeatInfoSkeleton from "@/components/specific/SeatInfoSkeleton";
import ZilaInfoSkeleton from "@/components/specific/ZilaInfoSkeleton";
import LiveTvWithTimelineSkeleton from "@/components/specific/LiveTvWithTimelineSkeleton";
import VoterInfoSkeleton from "@/components/specific/VoterInfoSkeleton";
import KeyCandidatesSkeleton from "@/components/specific/KeyCandidatesSkeleton";
import NewsPartSkeleton from "@/components/specific/NewsPartSkeleton";
import VideoPartSkeleton from "@/components/specific/VideoPartSkeleton";
import PreviousDataPartSkeleton from "@/components/specific/PreviousDataPartSkeleton";

const HomePageSkeleton = () => {
  return (
    <div className="lg:mb-14 mb-10">
      <MobileNavbar />
      <HeroPartSkeleton />
      <SearchBoxSkeleton />
      <SeatInfoSkeleton />
      <ZilaInfoSkeleton />
      <LiveTvWithTimelineSkeleton />
      <VoterInfoSkeleton />
      {/* AutoRotateSqure - Small rotating cube, can be omitted in skeleton or shown as small placeholder */}
      <div className="fixed bottom-[5%] right-[5%] z-50 hidden lg:block">
        <div className="w-[90px] h-[90px] bg-gray-200 rounded-lg animate-gray-pulse opacity-50"></div>
      </div>
      <KeyCandidatesSkeleton />
      <NewsPartSkeleton />
      <VideoPartSkeleton />
      <PreviousDataPartSkeleton />
      {/* StickyAd - Usually a small ad component, can be omitted or shown as placeholder */}
    </div>
  );
};

export default HomePageSkeleton;
