import React from "react";

const HeroPartSkeleton = () => {
  return (
    <section>
      <div className="bg-cover w-full bg-center bg-no-repeat h-[250px] lg:h-[450px] bg-gray-300">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm text-white py-2 justify-center items-center h-full flex flex-col relative">
          {/* Mobile Navigation Items Skeleton */}
          <div className="block lg:hidden absolute top-2 left-0 right-0 w-full z-10">
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="lg:h-9 lg:w-14 h-4 w-10 bg-white bg-opacity-20 rounded animate-gray-pulse"
                ></div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center lg:mt-12 mt-0">
            {/* Title Skeleton */}
            <div className="col-span-6 text-xl md:text-4xl font-bold mb-2">
              <div className="h-8 lg:h-12 w-64 lg:w-96 bg-white bg-opacity-20 rounded animate-gray-pulse"></div>
            </div>

            {/* Countdown Timer Skeleton */}
            <div className="w-[300px] mt-4">
              <div className="flex gap-2 md:gap-4 justify-center items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative flex flex-col gap-1 md:gap-2 items-center"
                  >
                    {/* Glow effect skeleton */}
                    <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg md:rounded-xl blur-sm"></div>
                    {/* Main card skeleton */}
                    <div className="relative flex flex-col gap-1 md:gap-2 items-center bg-white bg-opacity-10 w-16 md:w-24 rounded-lg md:rounded-xl px-2 py-2 md:px-3 md:py-4 border border-white border-opacity-30 animate-gray-pulse">
                      {/* Time display skeleton */}
                      <div className="h-6 md:h-10 w-12 md:w-16 bg-white bg-opacity-20 rounded animate-gray-pulse"></div>
                      {/* Separator line skeleton */}
                      <div className="w-full h-px bg-white bg-opacity-20"></div>
                      {/* Unit label skeleton */}
                      <div className="h-3 md:h-4 w-12 md:w-16 bg-white bg-opacity-20 rounded animate-gray-pulse"></div>
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

export default HeroPartSkeleton;
