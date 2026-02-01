import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import VideoCard from "../common/VideoCard";
import SectionTitle from "../common/SectionTitle";
import { VideoItem } from "@/app/config/interfaces/interfaces";
import { formatBnDate } from "@/assets/lib/formatBnDate";

interface VideoPartProps {
  videoData: VideoItem[];
}

const VideoPart = ({ videoData }: VideoPartProps) => {
  const transformedVideos = videoData
    .filter((video) => video.publish === 1)
    .slice(0, 3)
    .map((video) => {
      const formattedDate = formatBnDate(video.entry_time);

      let coverPhotoUrl = "";
      if (video.cover_photo_from_server) {
        try {
          coverPhotoUrl = decodeURIComponent(video.cover_photo_from_server);
        } catch (e) {
          coverPhotoUrl = video.cover_photo_from_server;
        }
      }

      return {
        title: video.video_title,
        logo: coverPhotoUrl,
        date: formattedDate,
        url: video.url,
      };
    });

  if (transformedVideos.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10 lg:mb-14 mb-10">
        <div className="rounded-2xl bg-white">
          <SectionTitle
            action={
              <Link
                href={"/videos"}
                className="flex items-center hover:text-gray-500"
              >
                <div className="hidden lg:block">আরও</div>
                <div>
                  <IoIosArrowForward />
                </div>
              </Link>
            }
          >
            ভিডিও
          </SectionTitle>
          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 pb-4 lg:pb-6">
            {transformedVideos.map((item, i) => (
              <Link
                key={i}
                href={`https://www.kalbela.com${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-12 lg:col-span-4 border group rounded flex flex-col justify-between pt-4 px-4 hover:border-PurpleDark transition-colors"
              >
                <VideoCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPart;
