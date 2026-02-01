import React from "react";

const PreviousDataPartSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="rounded-2xl bg-white">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold flex justify-between">
            <div className="h-6 w-64 bg-gray-200 rounded animate-gray-pulse"></div>
          </div>

          {/* Year Buttons Skeleton */}
          <div className="px-4 lg:px-6 pb-8 flex flex-wrap gap-1 mt-2">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="h-8 w-16 bg-gray-200 rounded animate-gray-pulse"
              ></div>
            ))}
          </div>

          {/* Main Content Grid Skeleton */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 px-4 pb-4 lg:px-6 lg:pb-6">
            {/* Left Section - Votes Chart Skeleton */}
            <div className="col-span-12 lg:col-span-6 bg-PurpleLight rounded">
              <div className="flex pt-4 gap-2 items-center lg:px-6 px-4">
                <div className="flex gap-1 items-center">
                  <div className="h-5 w-5 bg-gray-200 rounded animate-gray-pulse"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded animate-gray-pulse"></div>
                </div>
                <div className="text-sm font-semibold block lg:hidden text-gray-600">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-gray-pulse"></div>
                </div>
              </div>
              <div className="">
                <div className="h-[200px] lg:h-[250px] bg-gray-200 rounded animate-gray-pulse mx-4 lg:mx-6 mb-4 lg:mb-6"></div>
              </div>
            </div>

            {/* Right Section - Seats Info and Chart Skeleton */}
            <div className="col-span-12 lg:col-span-6 bg-PurpleLight rounded lg:px-6 px-4">
              <div className="flex pt-4 gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <div className="h-5 w-5 bg-gray-200 rounded animate-gray-pulse"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded animate-gray-pulse"></div>
                </div>
                <div className="text-sm font-semibold block lg:hidden">
                  <div className="h-4 w-12 bg-gray-200 rounded animate-gray-pulse"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-6 pt-4">
                {/* Party List Skeleton */}
                <div className="lg:col-span-2 grid grid-cols-1 text-wrap lg:flex-col gap-1 lg:gap-0">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="lg:px-6 flex lg:block lg:flex-col gap-2 lg:gap-0">
                      <div className="flex gap-2 items-center text-gray-500 font-semibold">
                        <div className="w-[4px] h-[12px] bg-gray-200 rounded animate-gray-pulse"></div>
                        <div className="lg:text-base text-xs">
                          <div className="h-4 w-20 lg:w-24 bg-gray-200 rounded animate-gray-pulse"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="lg:text-xl text-lg font-medium">
                          <div className="h-5 lg:h-6 w-12 lg:w-16 bg-gray-200 rounded animate-gray-pulse"></div>
                        </div>
                        <div className="lg:text-sm text-xs text-gray-500">
                          <div className="h-4 w-8 bg-gray-200 rounded animate-gray-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Chart Skeleton - Proper circle shape */}
                <div className="col-span-4 flex items-center justify-center">
                  <svg 
                    width="265" 
                    height="265" 
                    className="animate-gray-pulse"
                    viewBox="0 0 265 265"
                  >
                    <circle
                      cx="132.5"
                      cy="132.5"
                      r="130"
                      fill="#e5e7eb"
                      className="animate-gray-pulse"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousDataPartSkeleton;
