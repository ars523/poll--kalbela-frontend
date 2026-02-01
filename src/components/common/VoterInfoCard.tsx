import React from "react";
import Image, { StaticImageData } from "next/image";
import Counter from "@/components/common/Counter";

interface VoterInfoItem {
  logo: StaticImageData;
  title: string;
  total: number;
  percentage: string;
}

const VoterInfoCard = ({ data }: { data: VoterInfoItem }) => {
  return (
    <div className="py-2 lg:py-4 lg:grid grid-cols-2 flex flex-col gap-2 lg:gap-0">
      <div className="flex justify-center items-center">
        <Image className="w-8 lg:w-16 h-auto" src={data?.logo} alt="" />
      </div>
      <div className="flex gap-y-1 flex-col items-center justify-center">
        <div className="text-sm lg:text-lg font-semibold">{data?.title}</div>
        <div className="text-sm font-semibold">
          {Number.isNaN(data.total) ? (
            "চূড়ান্ত হয়নি"
          ) : (
            <Counter targetNumber={Number(data.total)} />
          )}
        </div>
        <div className="text-xs font-semibold">{data?.percentage}</div>
      </div>
    </div>
  );
};

export default VoterInfoCard;
