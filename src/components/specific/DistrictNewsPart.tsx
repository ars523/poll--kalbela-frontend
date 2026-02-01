import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/common/SectionTitle";
import districtNewsUrls from "@/assets/data/districtNewsUrls";
import districtData from "@/assets/data/districtList";
import { formatBnDate } from "@/assets/lib/formatBnDate";
import { NewsListResponse } from "@/types";

interface DistrictNewsPartProps {
  districtName: string;
}

const DistrictNewsPart = async ({ districtName }: DistrictNewsPartProps) => {
  let newsData: NewsListResponse | null = null;
  let newsError = false;

  try {
    // Get district code
    const getDistrictCode = () => {
      const districtCode = districtData
        .flatMap((data) => data.districts)
        .find((district) => district.districtName === districtName);

      return districtCode
        ? districtCode.districtCode
        : "Code information not found";
    };
    const districtCode = getDistrictCode();

    // Find the news URL for this district
    const districtNewsUrl = districtNewsUrls.find(
      (item) => String(item.districtCode) === String(districtCode)
    );

    if (districtNewsUrl) {
      const url = `${districtNewsUrl.url}&limit=20`;
      const res = await fetch(url, {
        cache: "no-store",
      });
      if (res.ok) {
        newsData = await res.json();
      }
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    newsError = true;
  }

  const newsArrayData = newsData?.data || [];

  return (
    <div className="rounded-2xl bg-white">
      <SectionTitle>জেলার সর্বশেষ খবর</SectionTitle>
      <div className="lg:pb-6 pb-4 px-4 lg:px-6">
        {newsError ? (
          <div className="h-[485px] flex items-center justify-center text-gray-500">
            খবর লোড করতে সমস্যা হয়েছে
          </div>
        ) : (
          <div className="h-[485px] overflow-auto custom-scrollbar rounded-sm">
            {newsArrayData.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                কোনো খবর পাওয়া যায়নি
              </div>
            ) : (
              newsArrayData.map((data, i) => {
                const newsContent = (
                  <div className="p-2 border-[1px] bg-[#f1f4f9] rounded hover:bg-[#e8ebf0] transition-colors">
                    <div className="justify-between items-center px-2">
                      {formatBnDate(data.publish_time) && (
                        <div className="flex text-xs gap-2 items-center pb-1">
                          <div className="text-[#d31c21]">
                            {formatBnDate(data.publish_time)}
                          </div>
                        </div>
                      )}
                      <div className="text-gray-700 text-sm font-bold hover:text-PurpleDark transition-colors">
                        {data?.hl2}
                      </div>
                    </div>
                  </div>
                );

                // If dtl_url exists, wrap with Link, otherwise just a div
                if (data.dtl_url) {
                  return (
                    <Link
                      key={i}
                      href={data.dtl_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-gray-300 flex flex-col pb-2 cursor-pointer"
                    >
                      {newsContent}
                    </Link>
                  );
                }

                return (
                  <div key={i} className="border-gray-300 flex flex-col pb-2">
                    {newsContent}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DistrictNewsPart;
