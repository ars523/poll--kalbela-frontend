"use client";
import React, { useState } from "react";
import BangladeshMap from "@/components/common/BangladeshMap";
import SectionTitle from "@/components/common/SectionTitle";
import zilaData from "@/assets/data/districtList";
import { cn } from "@/assets/lib/cn";
import Link from "next/link";

const ZilaInfo3 = ({ className }: { className?: string }) => {
  const [selectedDivision, setSelecteDivision] = useState("dhaka");
  const divisionData = zilaData.find(
    (item) => item.division === selectedDivision
  );
  const districts = divisionData?.districts || [];

  return (
    <section>
      <div className={cn("container mx-auto lg:mb-14 mb-10", className)}>
        <div className="bg-white rounded-2xl">
          <div className="">
            <SectionTitle>নিজ জেলার তথ্য জানতে ক্লিক করুন</SectionTitle>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 pb-4 lg:pb-6">
            <div className="col-span-12 lg:col-span-4 order-2 lg:order-1 rounded-lg py-6 lg:py-0">
              <div className="">
                <BangladeshMap />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2 rounded-lg">
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-1">
                {zilaData.map((data, i) => (
                  <button
                    key={i}
                    onClick={() => setSelecteDivision(data.division)}
                    className={cn(
                      "font-semibold text-sm lg:text-lg text-center text-PurpleDark hover:bg-PurpleDark rounded px-2 py-1 hover:text-white transition-all duration-300",
                      {
                        "bg-PurpleDark text-white hover:text-white":
                          selectedDivision === data.division,
                      }
                    )}
                  >
                    {data.text}
                  </button>
                ))}
              </div>
              <div className="pt-14">
                <div className="grid grid-cols-2 h-[228px] lg:h-auto overflow-y-auto lg:grid-cols-4 gap-4">
                  {districts.map((district, i) => (
                    <Link
                      href={`/districts/${district.districtName}`}
                      key={i}
                      className="flex flex-col justify-between text-center items-center rounded-sm bg-PurpleLight py-2 hover:bg-hover duration-200"
                    >
                      <div className="text-PurpleDark text-base lg:text-lg font-semibold hover:text-black duration-200">
                        {district.districtName}
                      </div>
                      <div className="text-sm lg:text-base">
                        আসন সংখ্যা: {district.seat}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZilaInfo3;
