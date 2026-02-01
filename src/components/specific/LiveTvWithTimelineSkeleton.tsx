import React from "react";

const LiveTvWithTimelineSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold flex gap-2 items-center">
            <div className="w-[15px] h-[15px] bg-gray-200 rounded-full animate-gray-pulse"></div>
            <div className="h-6 w-48 bg-gray-200 rounded animate-gray-pulse"></div>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 lg:pb-6 pb-4">
            {/* Video Section Skeleton */}
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-center items-center">
                <div className="w-full max-w-2xl aspect-video rounded shadow-lg overflow-hidden bg-gray-200 animate-gray-pulse"></div>
              </div>
            </div>

            {/* Timeline Section Skeleton */}
            <div className="col-span-12 lg:col-span-6">
              <div className="lg:max-h-[297px] max-h-[170px] overflow-y-auto border-[1px] border-gray-300 rounded px-4 py-4 custom-scrollbar bg-white">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-12 mb-4">
                    <div className="col-span-1 relative flex items-baseline">
                      <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-300">
                        <div className="w-[12px] h-[12px] rounded-full bg-gray-200 animate-gray-pulse"></div>
                      </div>
                    </div>
                    <div className="col-span-11 flex flex-col -mt-[6px]">
                      <div className="font-semibold justify-between items-center grid grid-cols-8 lg:-ml-5">
                        <div className="col-span-7">
                          {/* Time Skeleton */}
                          <div className="text-base pb-1">
                            <div className="h-4 w-20 bg-gray-200 rounded animate-gray-pulse mb-2"></div>
                          </div>
                          {/* Title Skeleton - 2 lines */}
                          <div className="h-4 bg-gray-200 rounded animate-gray-pulse mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded animate-gray-pulse w-3/4"></div>
                        </div>
                      </div>
                    </div>
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

export default LiveTvWithTimelineSkeleton;
