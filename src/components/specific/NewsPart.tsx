import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import NewsCard from "../common/NewsCard";
import SectionTitle from "../common/SectionTitle";
import { NewsListResponse } from "@/types";

interface NewsPartProps {
  newsData: NewsListResponse;
}

const NewsPart = ({ newsData }: NewsPartProps) => {
  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="rounded-2xl bg-white">
          <SectionTitle
            action={
              <Link
                href={"/stories"}
                className="flex items-center hover:text-gray-500"
              >
                <div className="hidden lg:block">আরও</div>
                <div>
                  <IoIosArrowForward />
                </div>
              </Link>
            }
          >
            নির্বাচনের খবর
          </SectionTitle>
          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 pb-4 lg:pb-6">
            {newsData.data.map((item, i) => (
              <div
                key={i}
                className="col-span-12 lg:col-span-4 flex flex-col justify-between"
              >
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPart;
