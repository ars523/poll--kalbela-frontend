import React from "react";
import logo1 from "@/assets/Images/totalvote-logo.png";
import logo2 from "@/assets/Images/man-logo.png";
import logo3 from "@/assets/Images/Female-logo.png";
import logo4 from "@/assets/Images/transgender-logo.png";
import logo5 from "@/assets/Images/team-logo.png";
import logo6 from "@/assets/Images/team-logo.png";
import logo7 from "@/assets/Images/Voter-Seat.png";
import logo8 from "@/assets/Images/team-building.png";
import VoterInfoCard from "../common/VoterInfoCard";
import SectionTitle from "../common/SectionTitle";
import { ElectionShortItem } from "@/app/config/interfaces/interfaces";
import toBengaliDigits from "@/assets/lib/toBanglaDigits";

interface VoterInfoProps {
  electionShortData: { data: ElectionShortItem[] };
}

const VoterInfo = ({ electionShortData }: VoterInfoProps) => {
  const items = electionShortData.data;

  const parseNum = (v: any) => {
    const s = String(v ?? "").replace(/[^0-9\-]/g, "");
    const n = Number(s);
    return Number.isFinite(n) ? n : 0;
  };

  const highestElectionNumber =
    items.length > 0
      ? Math.max(...items.map((it) => Number(it.electionNumber || 0)))
      : 0;
  const latest =
    items.find((it) => Number(it.electionNumber) === highestElectionNumber) ??
    ({} as ElectionShortItem);

  const totalVoters = parseNum(latest.totalVoter);
  const maleVoters = parseNum(latest.maleVoter);
  const femaleVoters = parseNum(latest.femaleVoter);
  const thirdGenderVoters = parseNum(latest.thirdGenderVoter);

  const formatPct = (part: number) => {
    if (!totalVoters) return `${toBengaliDigits("0.00")} %`;
    const pct = (part / totalVoters) * 100;
    return `${toBengaliDigits(String(pct.toFixed(4)))} %`;
  };

  const voterData = [
    {
      title: "মোট প্রার্থী",
      logo: logo5,
      total: parseNum(latest.totalCandidate),
      percentage: "",
    },
    {
      title: "স্বতন্ত্র প্রার্থী",
      logo: logo6,
      total: parseNum(latest.independentCandidate),
      percentage: "",
    },
    {
      title: "আসন সংখ্যা",
      logo: logo7,
      total: parseNum(latest.totalSeat),
      percentage: "",
    },
    {
      title: "দল",
      logo: logo8,
      total: parseNum(latest.totalParty),
      percentage: "",
    },
  ];

  const genderInfo = [
    {
      logo: logo1,
      title: "মোট ভোটার",
      total: totalVoters,
      percentage: totalVoters
        ? `${toBengaliDigits("100")} %`
        : `${toBengaliDigits("0.00")} %`,
    },
    {
      logo: logo2,
      title: "পুরুষ",
      total: maleVoters,
      percentage: formatPct(maleVoters),
    },
    {
      logo: logo3,
      title: "মহিলা",
      total: femaleVoters,
      percentage: formatPct(femaleVoters),
    },
    {
      logo: logo4,
      title: "অন্যান্য",
      total: thirdGenderVoters,
      percentage: formatPct(thirdGenderVoters),
    },
  ];

  return (
    <section>
      <div className="container mx-auto lg:mt-14 mt-10">
        <div className="rounded-2xl bg-white">
          <SectionTitle>নির্বাচনের সংক্ষিপ্ত তথ্য</SectionTitle>
          <div className="grid grid-cols-12 gap-4 lg:gap-6 lg:px-6 px-4 lg:pb-6 pb-4">
            <div
              className="col-span-12 lg:col-span-6 border bg-PurpleLight relative border-PurpleDark rounded text-gray-700
                        before:block before:absolute before:w-full before:h-[0.25px] before:bg-[#f8f7fe] before:left-0 before:top-1/2
                        after:block after:absolute after:w-[0.25px] after:h-full after:bg-[#f8f7fe] after:left-1/2 after:top-0"
            >
              <div className="grid grid-cols-2">
                {genderInfo.map((item, i) => (
                  <div key={i} className="">
                    <VoterInfoCard data={item} />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {voterData.map((item, i) => (
                  <div
                    key={i}
                    className="col-span-1 text-gray-700 rounded bg-PurpleLight border border-PurpleDark"
                  >
                    <VoterInfoCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoterInfo;
