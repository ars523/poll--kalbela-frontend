import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaCalendar } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";

interface VideoCardProps {
  item: {
    logo: string | StaticImageData;
    title: string;
    date: string;
  };
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const VideoCard: React.FC<VideoCardProps> = ({ item, headingLevel = "h3" }) => {
  const HeadingTag = headingLevel;
  return (
    <>
      <div className="">
        <div className="relative">
          <div className="relative w-full overflow-hidden rounded">
            <Image
              className="w-full h-auto aspect-16/9 object-cover rounded"
              src={item?.logo}
              width={310}
              height={174}
              alt=""
            />
            <div className="absolute -left-full group-hover:left-0 top-0 h-full w-full bg-black opacity-50 transition-all duration-200 ease-in-out"></div>
          </div>
          <div className="bg-PurpleDark hover:bg-white hover:text-PurpleDark border border-PurpleDark py-1 px-3 absolute translate-y-1/2 bottom-0 right-[5%] text-white flex justify-center items-center rounded-lg z-40 w-fit gap-1 duration-200">
            <IoPlayOutline size={18} />
            <p className="font-semibold ">দেখুন</p>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-10 mb-10">
          <div className="">
            <HeadingTag className="text-lg font-semibold text-gray-700">
              {item?.title}
            </HeadingTag>
          </div>
        </div>
      </div>
      <div className="flex text-sm text-PurpleDark px-4 py-3 justify-center items-center border-t">
        {/* <div className='border border-PurpleDark px-4 py-1 rounded-lg font-medium text-xs'>জাতীয়</div> */}
        <div className="flex gap-2 items-center">
          <FaCalendar className="text-PurpleDark" />
          <div className="">{item?.date}</div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
