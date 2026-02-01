"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { cn } from "@/assets/lib/cn";
import ordinal from "@/assets/data/tsData/ordinal";
import { ElectionInfo } from "@/types";

interface TeamSymbol {
  symbolName: string;
  logo: StaticImageData;
}

interface ElectionResultItem extends ElectionInfo {
  logo: StaticImageData | null;
}

interface ElectionResultsTimelineProps {
  data: ElectionResultItem[];
  teamSymbol: TeamSymbol[];
}

const ElectionResultsTimeline: React.FC<ElectionResultsTimelineProps> = ({
  data,
  teamSymbol,
}) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>কোন নির্বাচনী ফলাফল পাওয়া যায়নি</p>
      </div>
    );
  }

  const getPartyColors = (symbol: string | undefined) => {
    switch (symbol) {
      case "নৌকা":
        return {
          border: "#006A4E",
          bg: "#E8F5F0",
          icon: "#006A4E",
          text: "#006A4E",
        };
      case "ধানের শীষ":
        return {
          border: "#008000",
          bg: "#E8F5E8",
          icon: "#008000",
          text: "#008000",
        };
      case "লাঙল":
        return {
          border: "#FF6B00",
          bg: "#FFF4E8",
          icon: "#FF6B00",
          text: "#FF6B00",
        };
      case "দাঁড়িপাল্লা":
        return {
          border: "#8B4513",
          bg: "#F5E6D3",
          icon: "#8B4513",
          text: "#8B4513",
        };
      default:
        return {
          border: "#963d97",
          bg: "#f5e8f5",
          icon: "#963d97",
          text: "#963d97",
        };
    }
  };

  // Create gradient for timeline line - each segment uses the party color of the election above it
  const createLineGradient = () => {
    if (data.length === 0) return "#d31c21";
    if (data.length === 1) {
      return getPartyColors(data[0].symbol).icon;
    }

    // Create gradient stops - each segment between circles uses the color of the election above it
    const segments = data.length;
    const segmentSize = 100 / segments;
    const gradientStops: string[] = [];

    data.forEach((item, i) => {
      const color = getPartyColors(item.symbol).icon;
      const startPercent = i * segmentSize;
      const endPercent = (i + 1) * segmentSize;

      // Create solid color segment - use same color at start and end with sharp transition
      // Add color at start (or use previous color for sharp transition)
      if (i > 0) {
        const prevColor = getPartyColors(data[i - 1].symbol).icon;
        // Sharp transition: previous color ends exactly where new color starts
        gradientStops.push(`${prevColor} ${startPercent}%`);
      }
      gradientStops.push(`${color} ${startPercent}%`);
      gradientStops.push(`${color} ${endPercent}%`);
    });

    return `linear-gradient(to bottom, ${gradientStops.join(", ")})`;
  };

  const lineGradient = createLineGradient();

  return (
    <div
      className="election-timeline-wrapper"
      style={{ "--timeline-gradient": lineGradient } as React.CSSProperties}
    >
      <VerticalTimeline lineColor="#d31c21">
        {data.map((item, i) => {
          const colors = getPartyColors(item.symbol);
          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--election"
              contentStyle={{
                background: "#ffffff",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                borderRadius: "0.75rem",
                padding: 0,
                overflow: "hidden",
                border: `2px solid ${colors.border}`,
              }}
              contentArrowStyle={{
                borderRight: `8px solid ${colors.border}`,
              }}
              iconStyle={{
                background: colors.icon,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0 0 4px ${colors.bg}`,
                width: "60px",
                height: "60px",
              }}
              iconClassName="election-icon"
              icon={
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: colors.icon }}
                >
                  <span className="text-xs sm:text-sm leading-tight text-center px-1">
                    {item.electionYearBn}
                  </span>
                </div>
              }
            >
              <div className="bg-white">
                {/* Header with party colors */}
                <div
                  className="w-full text-white px-4 py-3"
                  style={{ background: colors.border }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold uppercase leading-tight mb-1">
                        {item.winningCandidate}
                      </h3>
                      <p className="text-xs opacity-90">
                        {item.partyName} • {item.symbol}
                      </p>
                    </div>
                    {item.logo && (
                      <div className="flex-shrink-0">
                        <Image
                          className="w-12 h-12 p-1 bg-white rounded-full"
                          src={item.logo}
                          alt={`${item.symbol} এর সিম্বল`}
                          width={48}
                          height={48}
                          unoptimized={true}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 py-4">
                  <div className="mb-4">
                    <div
                      className="text-lg font-semibold mb-3 pb-2 border-b-2"
                      style={{
                        borderColor: colors.border,
                        color: colors.text,
                      }}
                    >
                      {ordinal(Number(item.electionNoEn))} সংসদ নির্বাচন • {item.electionYearBn}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex flex-col">
                      <span
                        className="font-semibold text-xs mb-1"
                        style={{ color: colors.text }}
                      >
                        মোট ভোটার
                      </span>
                      <span className="text-gray-700">{item.totalVoter}</span>
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="font-semibold text-xs mb-1"
                        style={{ color: colors.text }}
                      >
                        মোট কেন্দ্র
                      </span>
                      <span className="text-gray-700">{item.totalCenter}</span>
                    </div>
                    <div className="flex flex-col sm:col-span-2">
                      <span
                        className="font-semibold text-xs mb-1"
                        style={{ color: colors.text }}
                      >
                        প্রাপ্ত ভোট
                      </span>
                      <span className="text-gray-700 text-base font-medium">
                        {item.winningVote}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ElectionResultsTimeline;
