"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cn } from "@/assets/lib/cn";

interface CandidateInfo {
  candidateImage: string;
  candidateName: string;
  partyName: string;
  symbol: string;
}

interface SliderForRoutingSeatPageProps {
  candidatesInfoData: CandidateInfo[];
}

const responsive = {
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
  desktop: {
    breakpoint: { max: 4000, min: 640 },
    items: 3,
  },
};

const SliderForRoutingSeatPage: React.FC<SliderForRoutingSeatPageProps> = ({
  candidatesInfoData,
}) => {
  const carouselRef = useRef<InstanceType<typeof Carousel> | null>(null);

  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10 lg:hidden block">
        <div className="bg-white rounded-2xl">
          <div className="lg:px-6 px-4 py-4 text-xl font-bold flex justify-between text-gray-800 items-center">
            <div>প্রার্থী</div>
            <div className="flex items-center gap-2 text-gray-400">
              <button
                onClick={() => carouselRef.current?.previous(1)}
                className="border-[1px] border-gray-400 rounded-full p-2 hover:bg-white bg-[#f1f4f9] transition"
              >
                <MdOutlineArrowBackIosNew size={16} />
              </button>
              <button
                onClick={() => carouselRef.current?.next(1)}
                className="border-[1px] border-gray-400 rounded-full p-2 hover:bg-white bg-[#f1f4f9] transition"
              >
                <MdArrowForwardIos size={16} />
              </button>
            </div>
          </div>

          <div className="lg:px-6 px-4 lg:pb-6 pb-4">
            <Carousel
              ref={carouselRef}
              responsive={responsive}
              partialVisible
              arrows={false}
              swipeable
              draggable
              showDots
              containerClass="carousel-seat-routing"
              itemClass="pr-2.5 sm:pr-5"
              sliderClass="carousel-seat-routing-track"
            >
              {candidatesInfoData.map((data, i) => (
                <div key={i}>
                  <div className="grid grid-cols-6">
                    <div
                      className={cn(
                        "col-span-3 flex flex-col justify-center items-center text-center bg-otherLight rounded-l-lg px-2",
                        {
                          "bg-alLight": data?.symbol === "নৌকা",
                          "bg-bnpLight": data?.symbol === "বিএনপি",
                          "bg-japaLight": data?.symbol === "লাঙল",
                        }
                      )}
                    >
                      <div>
                        <p className=" text-base font-semibold">
                          {data?.candidateName}
                        </p>
                      </div>
                      <div className="text-xs font-normal flex flex-col items-center">
                        <p>দলের নাম: {data?.partyName}</p>
                        <p>প্রতীক: {data?.symbol}</p>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <Image
                        className="w-full h-auto object-cover rounded-r-lg aspect-square"
                        src={`/candidates/${data.candidateImage}`}
                        width={152}
                        height={152}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderForRoutingSeatPage;
