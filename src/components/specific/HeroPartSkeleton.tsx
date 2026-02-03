import React from "react";

const HeroPartSkeleton = () => {
  return (
    <section>
      <div className="bg-cover w-full bg-center bg-no-repeat h-[250px] lg:h-[450px] bg-gray-400 animate-gray-pulse">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm text-white py-2 justify-center items-center h-full flex flex-col">
          <div className="flex flex-col justify-center items-center text-center px-4">
            <div className="h-8 sm:h-9 md:h-10 lg:h-12 w-64 sm:w-72 md:w-80 lg:w-96 max-w-2xl bg-white/20 rounded animate-gray-pulse" />
            <div className="mt-4 h-5 sm:h-6 w-48 sm:w-56 bg-white/20 rounded animate-gray-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPartSkeleton;
