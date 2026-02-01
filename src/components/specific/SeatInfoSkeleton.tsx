import React from "react";

const SeatInfoSkeleton = () => {
  return (
    <section>
      <div className="container mx-auto lg:mb-14 mb-10">
        <div className="bg-white rounded-2xl">
          {/* Header Skeleton */}
          <div className="lg:px-6 px-4 py-4 text-xl font-bold text-gray-800">
            <div className="h-6 w-64 bg-gray-200 rounded animate-gray-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 px-4 lg:px-6 pb-4 lg:pb-6">
            {/* Left Section - Division Buttons and Seats Grid */}
            <div className="col-span-12 lg:col-span-8 order-2 lg:order-1 rounded-lg">
              {/* Division Buttons Skeleton */}
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="h-8 lg:h-10 bg-gray-200 rounded animate-gray-pulse"
                  ></div>
                ))}
              </div>

              {/* Seats Grid Skeleton */}
              <div className="pt-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-[135px] lg:h-[290px] overflow-y-auto custom-scrollbar">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between text-center items-center rounded-sm bg-gray-100 py-2"
                    >
                      <div className="h-5 w-20 bg-gray-200 rounded animate-gray-pulse mb-2"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-gray-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Map Skeleton */}
            <div className="col-span-12 lg:col-span-4 order-2 lg:order-1 rounded-lg pt-6 lg:pt-0">
              <div className="w-full h-[200px] lg:h-[290px] bg-gray-200 rounded-lg animate-gray-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatInfoSkeleton;
