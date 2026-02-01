"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { cn } from "@/assets/lib/cn";
import theme from "../../../theme";

interface CandidateData {
  candidateImage: string;
  candidateName: string;
  partyName: string;
  symbol: string;
  logo: StaticImageData | null;
  [key: string]: any;
}

interface CandidatesTimelineProps {
  data: CandidateData[];
}

const CandidatesTimeline: React.FC<CandidatesTimelineProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>কোন প্রার্থী পাওয়া যায়নি</p>
      </div>
    );
  }

  // Use consistent theme color for all cards
  const themeColor = {
    border: theme.colors.primary.dark,
    bg: theme.colors.primary.light,
    icon: theme.colors.primary.dark,
    text: theme.colors.primary.dark,
  };

  return (
    <VerticalTimeline lineColor="#d31c21">
      {data.map((item, i) => {
        return (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--candidate"
            contentStyle={{
              background: themeColor.bg,
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              borderRadius: "0.75rem",
              padding: 0,
              overflow: "hidden",
              border: `2px solid ${themeColor.border}`,
            }}
            contentArrowStyle={{
              borderRight: `8px solid ${themeColor.border}`,
            }}
            iconStyle={{
              background: themeColor.icon,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0 0 4px ${themeColor.bg}`,
              width: "60px",
              height: "60px",
            }}
            iconClassName="candidate-icon"
            icon={
              item?.partyLogo ? (
                <div
                  className="w-full h-full rounded-full bg-white flex items-center justify-center"
                  style={{ border: `2px solid #d31c21` }}
                >
                  <Image
                    className="w-full h-full object-contain p-2 rounded-full"
                    src={item?.partyLogo}
                    unoptimized={true}
                    alt={`${item?.symbol || item?.partySymbol} এর সিম্বল`}
                    width={60}
                    height={60}
                  />
                </div>
              ) : null
            }
          >
            <div className="grid grid-cols-12 gap-0 overflow-hidden rounded-lg">
              <div className="col-span-12 sm:col-span-5 relative">
                <Image
                  className="w-full h-48 sm:h-full object-cover"
                  src={item?.candidateImage}
                  width={400}
                  height={400}
                  alt={`${item?.candidateName} এর ছবি`}
                  unoptimized={true}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: themeColor.border }}
                />
              </div>

              <div className="col-span-12 sm:col-span-7 flex flex-col justify-center px-4 py-4 sm:px-6 sm:py-5 bg-white">
                <h3
                  className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b-2 pb-2 sm:pb-3 leading-tight"
                  style={{
                    borderColor: themeColor.border,
                    color: themeColor.text,
                  }}
                >
                  {item?.candidateName}
                </h3>
                <div className="flex flex-col gap-2.5 sm:gap-3 text-sm sm:text-base">
                  <div className="flex items-start gap-2">
                    <span
                      className="font-semibold min-w-[75px] sm:min-w-[85px]"
                      style={{ color: themeColor.text }}
                    >
                      দলের নাম:
                    </span>
                    <span className="text-gray-700 flex-1">
                      {item?.partyName}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="font-semibold min-w-[75px] sm:min-w-[85px]"
                      style={{ color: themeColor.text }}
                    >
                      প্রতীক:
                    </span>
                    <span className="text-gray-700 flex-1 font-medium">
                      {item?.partySymbol || item?.symbol}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default CandidatesTimeline;
