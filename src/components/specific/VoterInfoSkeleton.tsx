import React from "react";

const VoterInfoSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="rounded-2xl bg-white">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold text-gray-800">
            <div className="h-6 w-48 bg-gray-200 rounded animate-gray-pulse"></div>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 lg:pb-6 pb-4">
            {/* Left Section - Gender Info Cards (2x2 grid) */}
            <div
              className="col-span-12 lg:col-span-6 border border-gray-300 bg-gray-50 relative rounded
                        before:block before:absolute before:w-full before:h-[0.25px] before:bg-gray-300 before:left-0 before:top-1/2
                        after:block after:absolute after:w-[0.25px] after:h-full after:bg-gray-300 after:left-1/2 after:top-0"
            >
              <div className="grid grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4">
                    {/* Logo Skeleton */}
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-full animate-gray-pulse"></div>
                    </div>
                    {/* Title Skeleton */}
                    <div className="h-4 w-20 bg-gray-200 rounded animate-gray-pulse mx-auto mb-2"></div>
                    {/* Total Skeleton */}
                    <div className="h-6 w-24 bg-gray-200 rounded animate-gray-pulse mx-auto mb-1"></div>
                    {/* Percentage Skeleton */}
                    <div className="h-4 w-16 bg-gray-200 rounded animate-gray-pulse mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Voter Data Cards (2x2 grid) */}
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="col-span-1 rounded bg-gray-50 border border-gray-300 p-4"
                  >
                    {/* Logo Skeleton */}
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 bg-gray-200 rounded-full animate-gray-pulse"></div>
                    </div>
                    {/* Title Skeleton */}
                    <div className="h-4 w-24 bg-gray-200 rounded animate-gray-pulse mx-auto mb-2"></div>
                    {/* Total Skeleton */}
                    <div className="h-6 w-20 bg-gray-200 rounded animate-gray-pulse mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoterInfoSkeleton;
