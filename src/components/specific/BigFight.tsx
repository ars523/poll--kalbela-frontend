"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef, useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { cn } from "@/assets/lib/cn";
import SectionTitle from "../common/SectionTitle";
import { ElectionSeatResponse } from "@/types";
import img from "@/assets/Images/partho.jpg";
import BigFightSkeleton from "./BigFightSkeleton";
import { useRouter } from "next/navigation";

interface BigFightProps {
  candidatesData?: ElectionSeatResponse;
}

const responsive = {
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
};

const BigFight = ({ candidatesData }: BigFightProps) => {
  const carouselRef = useRef<InstanceType<typeof Carousel> | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const heavyweightCandidates = useMemo(() => {
    if (!candidatesData?.data) return [];
    const allCandidates: Array<{
      id: string;
      candidate: string;
      name: string;
      title: string;
      logo: string;
      ashonName: string;
      result: string;
      votesReceived: number;
      votePercentage: number;
    }> = [];
    let candidateCount = 0;
    const LIMIT = 20;
    for (const seat of candidatesData.data) {
      if (candidateCount >= LIMIT) break;
      for (const candidate of seat.candidates) {
        if (candidateCount >= LIMIT) break;
        const result =
          candidate.winningStatusText === "Pending"
            ? "Pending"
            : candidate.isWinner
            ? "জয়ী"
            : "পরাজয়ী";
        const partyLogoSrc = candidate.partyLogo;
        const candidateImageSrc = candidate.candidateImage;
        const uniqueId = `${seat.seatId}-${candidate.candidateId}`;
        allCandidates.push({
          id: uniqueId,
          candidate: candidateImageSrc,
          name: candidate.candidateName,
          title: candidate.partyName,
          logo: partyLogoSrc,
          ashonName: seat.seatName,
          result: result,
          votesReceived: candidate.votesReceived,
          votePercentage: candidate.votePercentage,
        });
        candidateCount++;
      }
    }
    return allCandidates;
  }, [candidatesData]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    if (currentSlide >= 16) {
      router.push("/heavyweight-candidates");
    } else {
      carouselRef.current?.next(1);
    }
  };

  const handleAfterChange = (
    _: number,
    { currentSlide: next }: { currentSlide: number }
  ) => {
    setCurrentSlide(next);
    if (next >= 16) router.push("/heavyweight-candidates");
  };

  const HeavyweightCard = memo(
    ({
      data,
    }: {
      data: {
        id: string;
        candidate: string;
        name: string;
        title: string;
        logo: string;
        ashonName: string;
        result: string;
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
              { "bg-[#e72d42] px-3": data.result === "পরাজয়ী" }
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
                    {data.votePercentage.toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );

  HeavyweightCard.displayName = "HeavyweightCard";

  if (!isClient) {
    return <BigFightSkeleton />;
  }

  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="bg-white rounded-2xl">
          <SectionTitle
            action={
              <>
                <button
                  onClick={() => carouselRef.current?.previous(1)}
                  className="border-[1px] border-gray-400 rounded-full p-2 hover:bg-white bg-[#f1f4f9] transition"
                >
                  <MdOutlineArrowBackIosNew size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="border-[1px] border-gray-400 rounded-full p-2 hover:bg-white bg-[#f1f4f9] transition"
                >
                  <MdArrowForwardIos size={16} />
                </button>
              </>
            }
          >
            হেভিওয়েট প্রার্থী
          </SectionTitle>

          <div className="lg:px-6 px-4 lg:pb-6 pb-4">
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              partialVisible
              afterChange={handleAfterChange}
              arrows={false}
              swipeable
              draggable
              containerClass="carousel-big-fight"
              itemClass="pr-3 sm:pr-5 lg:pr-6"
              sliderClass="carousel-big-fight-track"
            >
              {heavyweightCandidates.map((data) => (
                <HeavyweightCard key={data.id} data={data} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigFight;
