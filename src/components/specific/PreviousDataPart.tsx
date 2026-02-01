"use client";
import { cn } from "@/assets/lib/cn";
import ColumnChat from "../common/ColumnChat";
import SectionTitle from "../common/SectionTitle";
import { RiArmchairFill } from "react-icons/ri";
import { MdHowToVote } from "react-icons/md";
import RadialBarChart2 from "../common/RadialBarChart2";
import { useState, useMemo } from "react";
import toBengaliDigits from "@/assets/lib/toBanglaDigits";
import { PreviousElectionItem } from "@/types";

interface Props {
  previousResultData?: PreviousElectionItem[];
}

interface IVoterYear {
  year: string;
  seats: number[];
  votes: number[];
}

const safeNum = (v: any) => {
  const s = String(v || "").replace(/[^0-9\-]/g, "");
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
};

const PreviousDataPart: React.FC<Props> = ({ previousResultData = [] }) => {
  // build years and aggregated data dynamically from previousResultData
  const years = useMemo(() => {
    const yearSet = previousResultData
      .map((p) => p.electionYear)
      .filter(Boolean);
    // use Array.from to avoid downlevel iteration issues when targeting older JS versions
    return Array.from(new Set(yearSet))
      .sort((a, b) => b - a)
      .map(String);
  }, [previousResultData]);

  const voterYearList: IVoterYear[] = useMemo(() => {
    if (!years.length) return [];

    return years.map((y) => {
      const yearData = previousResultData.find(
        (p) => p.electionYear === Number(y)
      );
      if (!yearData || !yearData.elections?.[0]?.parties) {
        return { year: String(y), seats: [0, 0, 0, 0], votes: [0, 0, 0, 0] };
      }

      const parties = yearData.elections[0].parties;

      const al = parties.find((p) => p.partyName.toLowerCase() === "al");
      const bnp = parties.find((p) => p.partyName.toLowerCase() === "bnp");
      const jp = parties.find((p) =>
        ["jp", "japa"].includes(p.partyName.toLowerCase())
      );
      const others = parties.filter(
        (p) => !["al", "bnp", "jp", "japa"].includes(p.partyName.toLowerCase())
      );

      const otherSeats = others.reduce(
        (sum, p) => sum + safeNum(p.totalSeat),
        0
      );
      const otherVotes = others.reduce(
        (sum, p) => sum + safeNum(p.totalVote),
        0
      );

      return {
        year: String(y),
        seats: [
          safeNum(al?.totalSeat),
          safeNum(bnp?.totalSeat),
          safeNum(jp?.totalSeat),
          otherSeats,
        ],
        votes: [
          safeNum(al?.totalVote),
          safeNum(bnp?.totalVote),
          safeNum(jp?.totalVote),
          otherVotes,
        ],
      };
    });
  }, [years, previousResultData]);

  // fallback to old static data if none present
  const fallbackVoterYear: IVoterYear[] = [
    {
      year: "2024",
      seats: [222, 0, 11, 65],
      votes: [2853161, 0, 689037, 1820835],
    },
    {
      year: "2018",
      seats: [258, 6, 23, 13],
      votes: [63805379, 9985202, 4443351, 6880499],
    },
    {
      year: "2014",
      seats: [234, 0, 34, 32],
      votes: [12357374, 0, 1199727, 3572749],
    },
    {
      year: "2008",
      seats: [230, 30, 27, 13],
      votes: [33634629, 22757101, 4926360, 8694101],
    },
    {
      year: "2001",
      seats: [62, 193, 14, 31],
      votes: [22365516, 22833978, 865389, 9671742],
    },
    {
      year: "1996",
      seats: [146, 116, 32, 6],
      votes: [15882792, 14255986, 6954981, 5324515],
    },
    {
      year: "1991",
      seats: [88, 140, 35, 37],
      votes: [10259866, 10507549, 4063537, 9272725],
    },
  ];

  const VoterYear = voterYearList.length ? voterYearList : fallbackVoterYear;

  const [selectedYear, setselectedYear] = useState(
    VoterYear[0]?.year ?? String(new Date().getFullYear())
  );

  const getSeats = () => {
    const currentData = VoterYear.find(
      (data) => data.year === selectedYear
    ) as IVoterYear;
    return currentData?.seats ?? [0, 0, 0, 0];
  };

  const getVotes = () => {
    const currentData = VoterYear.find(
      (data) => data.year === selectedYear
    ) as IVoterYear;
    return currentData?.votes ?? [0, 0, 0, 0];
  };

  // dynamic header range
  const headerRange = (() => {
    const yearsNums = VoterYear.map((v) => Number(v.year))
      .filter((n) => !Number.isNaN(n))
      .sort((a, b) => a - b);
    if (!yearsNums.length) return `পূর্বের নির্বাচনের তথ্য`;
    const min = yearsNums[0],
      max = yearsNums[yearsNums.length - 1];
    return `পূর্বের নির্বাচনের তথ্য (${toBengaliDigits(
      String(min)
    )}-${toBengaliDigits(String(max))})`;
  })();

  const seatData = getSeats();

  const VoterInfo = [
    { Party: "আ. লীগ জোট", Seat: seatData[0] ?? 0 },
    { Party: "বিএনপি জোট", Seat: seatData[1] ?? 0 },
    { Party: "জাতীয় পার্টি", Seat: seatData[2] ?? 0 },
    { Party: "অন্যান্য", Seat: seatData[3] ?? 0 },
  ];

  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="rounded-2xl bg-white">
          <SectionTitle>{headerRange}</SectionTitle>
          <div className="px-4 lg:px-6 pb-8 flex flex-wrap gap-1 mt-2">
            {VoterYear.map((item, index) => (
              <button
                key={index}
                onClick={() => setselectedYear(item.year)}
                className={cn(
                  "px-5 py-1 text-base text-PurpleDark rounded hover:bg-PurpleDark hover:text-white",
                  { "bg-PurpleDark text-white": selectedYear === item.year }
                )}
              >
                {toBengaliDigits(item?.year)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-6 px-4 pb-4 lg:px-6 lg:pb-6 ">
            <div className="col-span-12 lg:col-span-6 bg-PurpleLight rounded">
              <div className="flex pt-4 gap-2 items-center lg:px-6 px-4">
                <div className="flex gap-1 items-center">
                  <MdHowToVote size={18} />
                  <p className="text-lg font-semibold">প্রাপ্ত ভোট</p>
                </div>
                <div className="text-sm font-semibold block lg:hidden text-gray-600">
                  ({toBengaliDigits(selectedYear)})
                </div>
              </div>
              <div className="">
                <ColumnChat votes={getVotes()} />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 bg-PurpleLight rounded lg:px-6 px-4">
              <div className="flex pt-4 gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <RiArmchairFill size={18} />
                  <p className="text-lg font-semibold">প্রাপ্ত আসন</p>
                </div>
                <div className="text-sm font-semibold block lg:hidden text-gray-600">
                  ({toBengaliDigits(selectedYear)})
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-6 pt-4">
                <div className="lg:col-span-2 grid grid-cols-1 text-wrap lg:flex-col gap-1 lg:gap-0">
                  {VoterInfo.map((item, index) => (
                    <div
                      key={index}
                      className="lg:px-6 flex lg:block lg:flex-col gap-2 lg:gap-0"
                    >
                      <div className="flex gap-2 items-center text-gray-500 font-semibold">
                        <div
                          className={cn("w-[4px] h-[12px] rounded", {
                            "bg-alBorder": item.Party === "আ. লীগ জোট",
                            "bg-bnpBorder": item.Party === "বিএনপি জোট",
                            "bg-japaBorder": item.Party === "জাতীয় পার্টি",
                            "bg-otherBorder": item.Party === "অন্যান্য",
                          })}
                        ></div>
                        <div className="lg:text-base text-xs">
                          {item?.Party}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="lg:text-xl text-lg font-medium">
                          {toBengaliDigits(String(item?.Seat ?? 0))}
                        </div>
                        <div className="lg:text-sm text-xs text-gray-500">
                          সিট
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-span-4">
                  <RadialBarChart2 seats={getSeats()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousDataPart;
