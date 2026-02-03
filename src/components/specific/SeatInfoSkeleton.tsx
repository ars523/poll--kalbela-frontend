import React from "react";
import { cn } from "@/assets/lib/cn";

const SeatInfoSkeleton = ({ className }: { className?: string }) => {
  return (
    <section>
      <div className={cn("container mx-auto lg:mb-14 mb-10", className)}>
        <div className="bg-white rounded-2xl">
          <div className="mb-3 lg:px-6 px-4 py-4">
            <div className="h-6 w-64 bg-gray-200 rounded animate-gray-pulse" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 px-4 lg:px-6 pb-4 lg:pb-6">
            <div className="col-span-12 lg:col-span-8 order-2 lg:order-1 rounded-lg">
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="h-8 lg:h-10 bg-gray-200 rounded font-semibold animate-gray-pulse"
                  />
                ))}
              </div>

              <div className="pt-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-[228px] lg:h-[290px] overflow-y-auto custom-scrollbar">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between text-center items-center rounded-sm bg-PurpleLight/30 py-2 animate-gray-pulse"
                    >
                      <div className="h-4 lg:h-5 w-20 bg-gray-200 rounded mx-auto mb-1" />
                      <div className="h-3 lg:h-4 w-16 bg-gray-200 rounded mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 order-2 lg:order-1 rounded-lg pt-6 lg:pt-0">
              <div className="w-full h-[228px] lg:h-[290px] bg-gray-200 rounded-lg animate-gray-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatInfoSkeleton;
