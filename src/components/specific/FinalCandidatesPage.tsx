"use client";
import React, { useState, useMemo } from "react";
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
}

interface Props {
  candidatesData: ElectionSeatResponse;
}

export default function FinalCandidatesPage({ candidatesData }: Props) {
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
                className="w-full lg:w-[300px]"
              />
            </div>
          }
        >
          প্রার্থী তালিকা
        </FilterSectionTitle>
        <div className="grid grid-cols-12 lg:gap-6 gap-4 lg:p-6 p-4">
          {displayedCandidates.map((data) => (
            <div
              key={data.id}
              className="col-span-12 lg:col-span-3 border px-4 py-4 rounded-md flex flex-col justify-between group relative"
            >
              <div className="flex flex-col justify-center items-center text-center">
                <div>
                  <Image
                    className="w-24 h-24 rounded-full object-cover"
                    src={data.candidate || ""}
                    alt={data.name || "Candidate"}
                    width={96}
                    height={96}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const fallbackImg = (img as any)?.src || img;
                      target.src =
                        typeof fallbackImg === "string"
                          ? fallbackImg
                          : fallbackImg;
                    }}
                  />
                </div>
                <div className="pt-4 flex flex-col">
                  <h3 className="font-normal text-lg">{data.name}</h3>
                  <div className="font-normal text-base text-gray-500">
                    {data.ashonName}
                  </div>
                  <div className="flex gap-1 lg:gap-2 items-center justify-center">
                    {data.logo && (
                      <Image
                        className="w-6 h-6 rounded-full border-2 border-gray-600 p-1 object-contain"
                        src={data.logo}
                        alt={data.title || "Party Logo"}
                        width={24}
                        height={24}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    )}
                    <div className="font-normal text-base pt-1">
                      {data.title}
                    </div>
                  </div>
                </div>
              </div>
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
