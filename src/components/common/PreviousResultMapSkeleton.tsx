import React from "react";

const PreviousResultMapSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold text-gray-800">
            <div className="h-6 w-48 bg-gray-200 rounded animate-gray-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-6 pb-4 lg:pb-6">
            {/* Left Section - Year and Party Selection */}
            <div className="col-span-full lg:col-span-5">
              <div className="p-5 rounded bg-PurpleLight">
                {/* Year Selection Buttons Skeleton */}
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 mb-8">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div
                      key={i}
                      className="h-8 lg:h-10 bg-gray-200 rounded animate-gray-pulse"
                    ></div>
                  ))}
                </div>

                {/* Party Selection Skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-1 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded animate-gray-pulse"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded animate-gray-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Map Skeleton */}
            <div className="bg-PurpleLight rounded col-span-full lg:col-span-7">
              <div className="w-full h-[400px] lg:h-[500px] bg-gray-200 rounded animate-gray-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousResultMapSkeleton;
