import React from "react";

const SearchBoxSkeleton = () => {
  return (
    <section className="lg:-translate-y-1/2 -translate-y-9">
      <div className="container mx-auto lg:mb-14 mb-10">
        <div className="bg-white rounded-2xl p-4 lg:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Division Select Skeleton */}
            <div className="sm:col-span-1">
              <div className="h-10 bg-gray-200 rounded-lg animate-gray-pulse"></div>
            </div>

            {/* District Select Skeleton */}
            <div className="sm:col-span-1">
              <div className="h-10 bg-gray-200 rounded-lg animate-gray-pulse"></div>
            </div>

            {/* Seat Select and Button Skeleton */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-end gap-2">
              <div className="flex-1">
                <div className="h-10 bg-gray-200 rounded-lg animate-gray-pulse"></div>
              </div>
              <div className="h-10 w-16 bg-gray-200 rounded-lg animate-gray-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBoxSkeleton;
