import React from "react";
import SectionTitle from "@/components/common/SectionTitle";

const SeatNewsPartSkeleton = () => {
  return (
    <div className="container mx-auto lg:mt-14 mt-10">
      <div className="rounded-2xl bg-white">
        <SectionTitle>নির্বাচনের খবর</SectionTitle>
        <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 pb-4 lg:pb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="col-span-12 lg:col-span-4 flex flex-col justify-between"
            >
              <div className="rounded-lg overflow-hidden bg-gray-200 animate-gray-pulse">
                {/* Image skeleton */}
                <div className="w-full h-40 bg-gray-200 animate-gray-pulse"></div>
                {/* Content skeleton */}
                <div className="p-4 space-y-3">
                  <div className="h-4 w-24 bg-gray-300 rounded animate-gray-pulse"></div>
                  <div className="h-5 w-full bg-gray-300 rounded animate-gray-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-300 rounded animate-gray-pulse"></div>
                  <div className="pt-2">
                    <div className="h-10 w-24 bg-gray-300 rounded animate-gray-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatNewsPartSkeleton;
