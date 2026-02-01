import React from "react";

const BigFightSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="bg-white rounded-2xl">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold flex justify-between text-gray-800 items-center">
            <div className="h-6 w-40 bg-gray-200 rounded animate-gray-pulse"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-gray-pulse"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-gray-pulse"></div>
            </div>
          </div>

          {/* Swiper Skeleton */}
          <div className="lg:px-6 px-4 lg:pb-6 pb-4">
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] lg:w-[320px] relative rounded-lg border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50"
                >
                  {/* Header Skeleton */}
                  <div className="bg-gray-200 py-3 px-4 text-center animate-gray-pulse">
                    <div className="h-4 w-32 bg-gray-300 rounded mx-auto"></div>
                  </div>

                  {/* Content Skeleton */}
                  <div className="p-6 flex flex-col items-center">
                    {/* Image Skeleton */}
                    <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-200 rounded-full border-4 border-gray-300 animate-gray-pulse mb-4"></div>
                    {/* Name Skeleton */}
                    <div className="h-6 w-40 bg-gray-200 rounded animate-gray-pulse mb-2"></div>
                    {/* Party Info Skeleton */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gray-200 rounded-full animate-gray-pulse"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded animate-gray-pulse"></div>
                    </div>
                    {/* Vote Stats Skeleton */}
                    <div className="w-full mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="h-3 w-16 bg-gray-200 rounded animate-gray-pulse mb-1 mx-auto"></div>
                          <div className="h-5 w-20 bg-gray-200 rounded animate-gray-pulse mx-auto"></div>
                        </div>
                        <div>
                          <div className="h-3 w-12 bg-gray-200 rounded animate-gray-pulse mb-1 mx-auto"></div>
                          <div className="h-5 w-16 bg-gray-200 rounded animate-gray-pulse mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Dots Skeleton */}
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-gray-200 rounded-full animate-gray-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigFightSkeleton;
