import React from "react";
import SectionTitle from "@/components/common/SectionTitle";

const DistrictNewsPartSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white">
      <SectionTitle>জেলার সর্বশেষ খবর</SectionTitle>
      <div className="lg:pb-6 pb-4 px-4 lg:px-6">
        <div className="h-[485px] overflow-auto custom-scrollbar rounded-sm space-y-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="p-2 border-[1px] bg-gray-100 rounded animate-gray-pulse"
            >
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 rounded animate-gray-pulse"></div>
                <div className="h-5 w-full bg-gray-200 rounded animate-gray-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictNewsPartSkeleton;
