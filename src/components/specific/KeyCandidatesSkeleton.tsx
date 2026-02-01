import React from "react";

const KeyCandidatesSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto -translate-y-10 lg:-translate-y-14">
        <div className="bg-white rounded-2xl">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold flex justify-between text-gray-800 items-center">
            <div className="h-6 w-32 bg-gray-200 rounded animate-gray-pulse"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-gray-pulse"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-gray-pulse"></div>
            </div>
          </div>

          {/* Swiper Skeleton */}
          <div className="lg:px-6 px-4 lg:pb-6 pb-4">
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[200px] lg:w-[250px] grid grid-cols-6 flex-col py-4 px-4 bg-[#f1f4f9] rounded relative"
                >
                  <div className="col-span-6 flex flex-col justify-center items-center text-center">
                    {/* Image Skeleton */}
                    <div className="w-24 h-24 bg-gray-200 rounded-full animate-gray-pulse mb-4"></div>
                    {/* Name Skeleton */}
                    <div className="h-5 w-32 bg-gray-200 rounded animate-gray-pulse mb-2"></div>
                    {/* Seat Name Skeleton */}
                    <div className="h-4 w-24 bg-gray-200 rounded animate-gray-pulse mb-2"></div>
                    {/* Party Info Skeleton */}
                    <div className="flex gap-2 items-center justify-center">
                      <div className="w-6 h-6 bg-gray-200 rounded-full animate-gray-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-gray-pulse"></div>
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

export default KeyCandidatesSkeleton;
