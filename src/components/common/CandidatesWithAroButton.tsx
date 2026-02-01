"use client";
import { useState, useMemo, memo } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { cn } from "@/assets/lib/cn";
import { ElectionSeatResponse, Candidate, Seat } from "@/types";
import img from "@/assets/Images/partho.jpg";

interface CandidateDisplay {
  id: string;
  candidate: string;
  name: string;
  title: string;
  logo: string;
  ashonName: string;
  seatNumber: string;
  result: string;
  votesReceived?: number;
  votePercentage?: number;
}

interface Props {
  candidatesData: ElectionSeatResponse;
  heavyWeight?: boolean;
}

export default function CandidatesWithAroButton({
  candidatesData,
  heavyWeight,
}: Props) {
  const INITIAL_COUNT = heavyWeight ? 18 : 20;
  const INCREMENT = heavyWeight ? 9 : 10;
  
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT);
  const [selectedSeat, setSelectedSeat] = useState<string>("all");
  const [tempSelectedSeat, setTempSelectedSeat] = useState<string>("all");

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

  const displayedCandidates = filteredCandidates.slice(0, displayCount);

  const hasMore = displayCount < filteredCandidates.length;

  const handleLoadMore = () => setDisplayCount((prev) => prev + INCREMENT);
  const handleSubmit = () => {
    setSelectedSeat(tempSelectedSeat);
    setDisplayCount(INITIAL_COUNT);
  };

  const HeavyweightCard = memo(
    ({
      data,
    }: {
      data: CandidateDisplay & {
        votesReceived: number;
        votePercentage: number;
      };
    }) => (
      <div className="relative rounded-lg border-2 border-gray-200 hover:border-PurpleDark transition-all duration-300 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl overflow-hidden">
        {data.result !== "Pending" && (
          <div
            className={cn(
              `absolute top-0 right-0 bg-[#085f47] text-xs font-semibold px-5 py-5
                                        clip-path-triangle rounded-tr`,
              {
                "bg-[#e72d42] px-3": data.result === "পরাজয়ী",
              },
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

          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 text-center">
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
            <p className="text-sm lg:text-base text-gray-600 font-medium">
              {data.title}
            </p>
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
    ),
  );
  HeavyweightCard.displayName = "HeavyweightCard";

  return (
    <div className="container mx-auto lg:mt-14 lg:mb-14 mt-10 mb-10">
      <div className="bg-white rounded-2xl p-4 mb-4">
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between w-full gap-2">
          <h1 className="order-1 font-bold text-[#1a73e8] text-3xl pointer-events-none">
            {heavyWeight ? "হেভিওয়েট প্রার্থী" : "চূড়ান্ত প্রার্থী"}
          </h1>
          <div className="order-2 md:ml-auto w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-2">
              <h3 className="text-xl text-center font-semibold flex-1 flex justify-center items-center">
                ফিল্টার করুন:
              </h3>
              <div className="flex-1 w-full">
                <select
                  value={tempSelectedSeat}
                  onChange={(e) => setTempSelectedSeat(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent"
                >
                  <option value="all">সকল আসন</option>
                  {seatNumbers.map((seat) => (
                    <option key={seat} value={seat}>
                      {seat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex-1 flex items-center justify-center">
                  <button
                    className="bg-[#1a73e8] text-white font-bold px-10 py-2 rounded w-full md:w-auto disabled:cursor-not-allowed disabled:bg-[#1a73e8]"
                    onClick={handleSubmit}
                  >
                    সাবমিট
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="rounded-2xl bg-white">
        <div className="grid grid-cols-12 lg:gap-6 gap-4 lg:p-6 p-4">
          {displayedCandidates.map((data) =>
            heavyWeight ? (
              <div
                key={data.id}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <HeavyweightCard
                  data={{
                    ...data,
                    votesReceived: data.votesReceived ?? 0,
                    votePercentage: data.votePercentage ?? 0,
                  }}
                />
              </div>
            ) : (
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
                      },
                    )}
                  >
                    <div className="relative -top-2 -right-2 text-white rotate-45">
                      {data.result}
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
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
