import React from "react";

const VideoPartSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10 lg:mb-14 mb-10">
        <div className="rounded-2xl bg-white">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold flex gap-2 items-center lg:justify-between">
            <div className="h-6 w-24 bg-gray-200 rounded animate-gray-pulse"></div>
            <div className="flex items-center gap-2">
              <div className="hidden lg:block h-5 w-12 bg-gray-200 rounded animate-gray-pulse"></div>
              <div className="h-5 w-5 bg-gray-200 rounded animate-gray-pulse"></div>
            </div>
          </div>

          {/* Video Cards Grid Skeleton */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 pb-4 lg:pb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="col-span-12 lg:col-span-4 flex flex-col justify-between"
              >
                <div className="border border-gray-300 rounded flex flex-col justify-between pt-4 px-4 bg-white">
                  <div className="">
                    <div className="relative">
                      {/* Image Skeleton */}
                      <div className="relative w-full overflow-hidden rounded">
                        <div className="w-full aspect-video bg-gray-200 rounded animate-gray-pulse"></div>
                      </div>
                      {/* Play Button Skeleton */}
                      <div className="absolute translate-y-1/2 bottom-0 right-[5%] bg-gray-200 border border-gray-300 py-1 px-3 rounded-lg z-40 w-fit gap-1 flex justify-center items-center animate-gray-pulse">
                        <div className="h-4 w-4 bg-gray-300 rounded"></div>
                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    {/* Title Skeleton */}
                    <div className="flex flex-col justify-center mt-10 mb-10">
                      <div className="h-6 bg-gray-200 rounded animate-gray-pulse mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded animate-gray-pulse w-3/4"></div>
                    </div>
                  </div>
                  {/* Date Skeleton */}
                  <div className="flex text-sm px-4 py-3 justify-center items-center border-t border-gray-300">
                    <div className="flex gap-2 items-center">
                      <div className="h-4 w-4 bg-gray-200 rounded animate-gray-pulse"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded animate-gray-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPartSkeleton;
