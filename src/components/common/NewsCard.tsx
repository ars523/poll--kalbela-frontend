import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NewsItem } from "@/types";
import { formatBnDate } from "@/assets/lib/formatBnDate";

interface NewsCardProps {
  item: NewsItem;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const NewsCard = ({ item, headingLevel = "h3" }: NewsCardProps) => {
  const HeadingTag = headingLevel;
  // Format date from "2026-01-22 22:27:02" to Bengali format
  // Uses consistent formatting to prevent hydration errors
  const formattedDate = formatBnDate(item.publish_time || "");

  // Get title from hl2, fallback to hl1, or empty string
  const title = item.hl2 || item.hl1 || "";

  if (!item.dtl_url) {
    return (
      <div className="h-full flex flex-col border rounded px-4 py-4">
        <div className="flex flex-col items-center pb-4 flex-grow">
          <div className="overflow-hidden w-full relative rounded">
            <Image
              className="rounded w-full h-auto object-cover aspect-16/9"
              src={item.img_url || ""}
              width={310}
              height={174}
              alt={title}
            />
            <div className="absolute -left-full group-hover:left-0 top-0 h-full w-full bg-black opacity-50 transition-all duration-200 ease-in-out"></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="pt-4">
              <HeadingTag className="text-lg font-semibold text-gray-700">{title}</HeadingTag>
            </div>
            {formattedDate && (
              <div className="pt-2 text-sm text-gray-500">{formattedDate}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-t pt-4">
          <div className="flex justify-center items-center gap-2 w-fit border py-2 px-4 rounded-lg border-PurpleDark text-white bg-PurpleDark">
            <p className="font-semibold text-xs">বিস্তারিত</p>
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.dtl_url}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full flex flex-col group border rounded px-4 py-4 hover:border-PurpleDark transition-colors"
    >
      <div className="flex flex-col items-center pb-4 flex-grow">
        <div className="overflow-hidden w-full relative rounded">
          <Image
            className="rounded w-full h-auto object-cover aspect-16/9"
            src={item.img_url || ""}
            width={310}
            height={174}
            alt={title}
          />
          <div className="absolute -left-full group-hover:left-0 top-0 h-full w-full bg-black opacity-50 transition-all duration-200 ease-in-out"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="pt-4">
            <HeadingTag className="text-lg font-semibold text-gray-700 group-hover:text-PurpleDark transition-colors">
              {title}
            </HeadingTag>
          </div>
          {formattedDate && (
            <div className="pt-2 text-sm text-gray-500">{formattedDate}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border-t pt-4">
        <div className="flex justify-center items-center gap-2 w-fit border hover:border-PurpleDark hover:text-PurpleDark py-2 px-4 rounded-lg border-PurpleDark text-white bg-PurpleDark hover:bg-white duration-200">
          <p className="font-semibold text-xs">বিস্তারিত</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
