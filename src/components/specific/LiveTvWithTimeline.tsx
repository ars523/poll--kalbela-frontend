import React from "react";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import { NewsListResponse } from "@/types";
import { VideoItem } from "@/app/config/interfaces/interfaces";
import { formatBnTime } from "@/assets/lib/formatBnDate";

interface LiveTvWithTimelineProps {
  newsData: NewsListResponse;
  videoData: VideoItem[];
}

const LiveTvWithTimeline = ({
  newsData,
  videoData,
}: LiveTvWithTimelineProps) => {
  const breaking = newsData.data.map((item) => {
    const time = formatBnTime(item.publish_time || "");
    const title = item.hl2 || item.hl1 || "";
    return {
      title,
      time,
      dtl_url: item.dtl_url || "",
      id: item.id,
    };
  });

  const liveVideo: VideoItem | null =
    videoData.length > 0 ? videoData[0] : null;

  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl">
          <SectionTitle
            icon={
              <div className="flex justify-center items-center blinking-dot"></div>
            }
          >
            নির্বাচনের সর্বশেষ তথ্য
          </SectionTitle>

          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 lg:pb-6 pb-4">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-center items-center">
                <div className="w-full max-w-2xl aspect-video rounded shadow-lg overflow-hidden">
                  <div
                    className="w-full h-full [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0"
                    dangerouslySetInnerHTML={{
                      __html: liveVideo?.embed_code ?? "",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="lg:max-h-[297px] max-h-[300px] overflow-y-auto border-[1px] border-gray-300 rounded px-4 py-4 custom-scrollbar bg-white">
                {breaking.map((data, i) => {
                  const content = (
                    <div className="grid grid-cols-12">
                      <div className="col-span-1 relative flex items-baseline">
                        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-PurpleDark">
                          <div className="w-[12px] h-[12px] rounded-full bg-PurpleDark flex justify-center items-center"></div>
                        </div>
                      </div>
                      <div className="col-span-11 flex flex-col -mt-[6px]">
                        <div className="font-semibold justify-between items-center grid grid-cols-8 lg:-ml-5">
                          <div className="col-span-7">
                            {data?.time && (
                              <div className="text-base pb-1">
                                <div className="text-PurpleDark lg:text-base text-sm">
                                  {data?.time}
                                </div>
                              </div>
                            )}
                            <h3 className="text-gray-700 lg:pb-10 pb-5 text-sm lg:text-base hover:text-PurpleDark transition-colors">
                              {data?.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );

                  if (data.dtl_url) {
                    return (
                      <Link
                        key={data.id || i}
                        href={data.dtl_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:bg-gray-50 rounded transition-colors"
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <div key={data.id || i} className="block">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTvWithTimeline;
