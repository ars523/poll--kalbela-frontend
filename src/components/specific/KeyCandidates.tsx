"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef, useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import img from "@/assets/Images/partho.jpg";
import { cn } from "@/assets/lib/cn";
import SectionTitle from "../common/SectionTitle";
import { ElectionSeatResponse } from "@/types";
import KeyCandidatesSkeleton from "./KeyCandidatesSkeleton";
import { useRouter } from "next/navigation";

interface KeyCandidatesProps {
  candidatesData?: ElectionSeatResponse;
}

const responsive = {
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 4000, min: 640 },
    items: 4,
  },
};

export default function KeyCandidates({ candidatesData }: KeyCandidatesProps) {
  const carouselRef = useRef<InstanceType<typeof Carousel> | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  const voterData = useMemo(() => {
    if (!candidatesData?.data) return [];
    const allCandidates: Array<{
      id: string;
      candidate: string;
      name: string;
      title: string;
      logo: string;
      ashonName: string;
      result: string;
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
      router.push("/candidates");
    } else {
      carouselRef.current?.next(1);
    }
  };

  const handleAfterChange = (
    _: number,
    { currentSlide: next }: { currentSlide: number }
  ) => {
    setCurrentSlide(next);
    if (next >= 16) router.push("/candidates");
  };

  const CandidateCard = memo(({ data }: { data: (typeof voterData)[0] }) => (
    <div className="grid grid-cols-6 flex-col py-4 px-4 bg-[#f1f4f9] rounded relative">
      <div className="col-span-6 flex flex-col justify-center items-center text-center">
        <div>
          <Image
            className="w-24 h-24 rounded-full object-cover"
            src={data?.candidate || ""}
            alt={data?.name || "Candidate"}
            width={96}
            height={96}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const fallbackImg = (img as any)?.src || img;
              target.src =
                typeof fallbackImg === "string" ? fallbackImg : fallbackImg;
            }}
          />
        </div>
        <div className="pt-4 flex flex-col">
          <h3 className="font-normal text-lg">{data?.name}</h3>
          <div className="font-normal text-base text-gray-500">
            {data?.ashonName}
          </div>
          <div className="flex gap-1 lg:gap-2 items-center justify-center">
            {data.logo && (
              <Image
                className="w-6 h-6 rounded-full border-2 border-gray-600 p-1 object-contain"
                src={data.logo}
                alt={data?.title || "Party Logo"}
                width={24}
                height={24}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            )}
            <div className="font-normal text-base pt-1">{data?.title}</div>
          </div>
        </div>
      </div>
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
    </div>
  ));

  CandidateCard.displayName = "CandidateCard";

  if (!isClient) {
    return <KeyCandidatesSkeleton />;
  }

  return (
    <section className="lg:mt-14 mt-10">
      <div className="container mx-auto">
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
            প্রার্থী তালিকা
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
              containerClass="carousel-key-candidates"
              itemClass="pr-2.5 sm:pr-5"
              sliderClass="carousel-key-candidates-track"
            >
              {voterData.map((data) => (
                <CandidateCard key={data.id} data={data} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
