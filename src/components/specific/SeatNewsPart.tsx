import React from "react";
import SectionTitle from "@/components/common/SectionTitle";
import { fetchSeatNewsList } from "@/apis";
import { NewsListResponse } from "@/types";
import NewsCard from "@/components/common/NewsCard";
import seatData from "@/assets/data/jsonData/seatInfoData.json";

interface SeatNewsPartProps {
  seatNo: string;
}

const SeatNewsPart = async ({ seatNo }: SeatNewsPartProps) => {
  let newsData: NewsListResponse | null = null;
  let newsError = false;

  try {
    const oldseatInfoData = seatData.data.find(
      (seatInfo) => seatInfo.seatNo === Number(seatNo)
    );

    const response = await fetchSeatNewsList({
      catId: 138,
      limit: 3,
      tags: oldseatInfoData?.seatName || "",
    });

    if (response) {
      newsData = response;
    }
  } catch (error) {
    console.error("Error fetching seat news:", error);
    newsError = true;
  }

  const seatInfoData = seatData.data.find(
    (seatInfo) => seatInfo.seatNo === Number(seatNo)
  );

  if (!seatInfoData) {
    return (
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="rounded-2xl bg-white">
          <SectionTitle>নির্বাচনের খবর</SectionTitle>
          <div className="lg:px-6 px-4 pb-4 lg:pb-6 text-center text-gray-500">
            আসন তথ্য পাওয়া যায়নি
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto lg:mt-14 mt-10">
      <div className="rounded-2xl bg-white">
        <SectionTitle>নির্বাচনের খবর</SectionTitle>
        {newsError ? (
          <div className="lg:px-6 px-4 pb-4 lg:pb-6">
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg font-medium">
                খবর লোড করতে সমস্যা হয়েছে
              </p>
              <p className="text-gray-400 text-sm mt-2">
                আপডেট পেতে কালবেলার সাথে থাকুন
              </p>
            </div>
          </div>
        ) : (newsData as NewsListResponse)?.data &&
          (newsData as NewsListResponse)?.data?.length > 0 ? (
          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 pb-4 lg:pb-6">
            {(newsData as NewsListResponse)?.data?.map((item, i) => (
              <div
                key={i}
                className="col-span-12 lg:col-span-4 flex flex-col justify-between"
              >
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="lg:px-6 px-4 pb-4 lg:pb-6">
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg font-medium">
                {seatInfoData.seatName} - সংক্রান্ত খবর পাওয়া যায়নি
              </p>
              <p className="text-gray-400 text-sm mt-2">
                আপডেট পেতে কালবেলার সাথে থাকুন
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatNewsPart;
