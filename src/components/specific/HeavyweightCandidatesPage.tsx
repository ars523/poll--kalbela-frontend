"use client";
import React, { useState, useMemo, memo } from "react";
import Image from "next/image";
import { cn } from "@/assets/lib/cn";
import { ElectionSeatResponse, Candidate, Seat } from "@/types";
import img from "@/assets/Images/partho.jpg";
import { IoIosArrowForward } from "react-icons/io";
import FilterSectionTitle from "@/components/common/FilterSectionTitle";
import SearchableSelect from "@/components/common/SearchableSelect";

interface CandidateDisplay {
  id: string;
  candidate: string;
  name: string;
  title: string;
  logo: string;
  ashonName: string;
  seatNumber: string;
  result: string;
  votesReceived: number;
  votePercentage: number;
}

interface Props {
  candidatesData: ElectionSeatResponse;
}

export default function HeavyweightCandidatesPage({ candidatesData }: Props) {
  const page_size = 20;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSeat, setSelectedSeat] = useState<string>("all");

  const allCandidates = useMemo(() => {
    if (!candidatesData?.data) return [];

    const candidates: CandidateDisplay[] = [];

    candidatesData.data.forEach((seat: Seat) => {
      seat.candidates.forEach((candidate: Candidate) => {
        const result =
          candidate.winningStatusText === "Pending"
            ? "Pending"
            : candidate.isWinner
            ? "জয়ী"
            : "পরাজয়ী";

        const uniqueId = `${seat.seatId}-${candidate.candidateId}`;

        candidates.push({
          id: uniqueId,
          candidate: candidate.candidateImage,
          name: candidate.candidateName,
          title: candidate.partyName,
          logo: candidate.partyLogo,
          ashonName: seat.seatName,
          seatNumber: String(seat.seatId),
          result,
          votesReceived: candidate.votesReceived ?? 0,
          votePercentage: candidate.votePercentage ?? 0,
        });
      });
    });

    return candidates;
  }, [candidatesData]);

  const seatNumbers = useMemo(() => {
    const seats = new Set<string>();
    allCandidates.forEach((c) => seats.add(c.ashonName));
    return Array.from(seats).sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, "")) || 0;
      const numB = parseInt(b.replace(/\D/g, "")) || 0;
      return numA - numB;
    });
  }, [allCandidates]);

  const filteredCandidates = useMemo(() => {
    if (selectedSeat === "all") return allCandidates;
    return allCandidates.filter((c) => c.ashonName === selectedSeat);
  }, [allCandidates, selectedSeat]);

  const displayCount = currentPage * page_size;
  const displayedCandidates = filteredCandidates.slice(0, displayCount);

  const hasMore = displayCount < filteredCandidates.length;

  const handleLoadMore = () => setCurrentPage((prev) => prev + 1);
  const handleFilterChange = (value: string) => {
    setSelectedSeat(value);
    setCurrentPage(1);
  };

  const HeavyweightCard = memo(({ data }: { data: CandidateDisplay }) => (
    <div className="relative rounded-lg border-2 border-gray-200 hover:border-PurpleDark transition-all duration-300 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl overflow-hidden h-full">
      {data.result !== "Pending" && (
        <div
          className={cn(
            `absolute top-0 right-0 bg-[#085f47] text-xs font-semibold px-5 py-5
                                        clip-path-triangle rounded-tr`,
            {
              "bg-[#e72d42] px-3": data.result === "পরাজয়ী",
            }
          )}
        >
          <div className="relative -top-2 -right-2 text-white rotate-45">
            {data.result}
          </div>
        </div>
      )}

      <div className="bg-PurpleDark text-white py-3 px-4 text-center font-semibold shadow-lg">
        <p className="text-sm lg:text-base">{data.ashonName}</p>
      </div>

      <div className="p-6 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-PurpleDark shadow-xl overflow-hidden bg-gradient-to-br from-PurpleDark to-purple-600">
            <Image
              className="w-full h-full object-cover"
              src={data.candidate || ""}
              alt={data.name || "Candidate"}
              width={160}
              height={160}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const fallbackImg = (img as any)?.src || img;
                target.src =
                  typeof fallbackImg === "string" ? fallbackImg : fallbackImg;
              }}
            />
          </div>
          <div className="absolute -inset-2 rounded-full border-2 border-PurpleDark opacity-20"></div>
        </div>

        <h3 className="text-lg lg:text-lg font-bold text-gray-800 mb-2 text-center">
          {data.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          {data.logo && (
            <Image
              className="w-8 h-8 rounded-full border-2 border-gray-300 p-1 object-contain bg-white"
              src={data.logo}
              alt={data.title || "Party Logo"}
              width={32}
              height={32}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          )}
          <p className="text-sm text-gray-600 font-medium">{data.title}</p>
        </div>

        {data.votesReceived > 0 && (
          <div className="w-full mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">মোট ভোট</p>
                <p className="text-lg font-bold text-PurpleDark">
                  {data.votesReceived.toLocaleString("bn-BD")}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">শতাংশ</p>
                <p className="text-lg font-bold text-PurpleDark">
                  {data.votePercentage?.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ));
  HeavyweightCard.displayName = "HeavyweightCard";

  return (
    <div className="container mx-auto lg:mt-14 lg:mb-14 mt-10 mb-10">
      {/* Candidates Grid */}
      <div className="rounded-2xl bg-white">
        <FilterSectionTitle
          headingLevel="h1"
          action={
            <div className="w-full lg:w-[300px]">
              <SearchableSelect
                options={seatNumbers}
                value={selectedSeat}
                onChange={handleFilterChange}
                placeholder="সকল আসন"
              />
            </div>
          }
        >
          হেভিওয়েট প্রার্থী
        </FilterSectionTitle>
        <div className="grid grid-cols-12 lg:gap-6 gap-4 lg:p-6 p-4">
          {displayedCandidates.map((data) => (
            <div
              key={data.id}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <HeavyweightCard data={data} />
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex flex-col justify-center items-center mt-6">
          <button
            onClick={handleLoadMore}
            className="
              flex items-center justify-center gap-1
              border bg-PurpleDark text-white text-lg
              px-4 py-1 rounded-lg
              hover:text-PurpleDark hover:bg-white hover:border-PurpleDark
              transition-all duration-200
            "
          >
            <span>আরো</span>
            <IoIosArrowForward />
          </button>
        </div>
      )}

      {/* No Results Message */}
      {filteredCandidates.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          কোন প্রার্থী পাওয়া যায়নি
        </div>
      )}
    </div>
  );
}
