"use client";
import React, { useState } from "react";
import SeatMap from "@/components/common/SeatMap/SeatMap";
import SectionTitle from "@/components/common/SectionTitle";
import clsx from "clsx";
import theme from "../../../theme";
import type { SeatInfo } from "@/types";

interface PreviousResultMapProps {
  seatWiseData?: SeatInfo[];
}

const PreviousResultMap = ({ seatWiseData = [] }: PreviousResultMapProps) => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedParty, setSelectedParty] = useState("");

  const years = [
    { inEnglish: "2024", inBangla: "২০২৪" },
    { inEnglish: "2018", inBangla: "২০১৮" },
    { inEnglish: "2014", inBangla: "২০১৪" },
    { inEnglish: "2008", inBangla: "২০০৮" },
    { inEnglish: "2001", inBangla: "২০০১" },
    { inEnglish: "1996", inBangla: "১৯৯৬" },
    { inEnglish: "1991", inBangla: "১৯৯১" },
  ];

  const partiesColor = [
    {
      partyName: "সব দল",
      color: "",
      partyCode: "",
    },
    {
      partyName: "আ. লীগ",
      color: theme.colors.al.bgLight,
      partyCode: "al",
    },
    {
      partyName: "বিএনপি",
      color: theme.colors.bnp.bgLight,
      partyCode: "bnp",
    },
    {
      partyName: "জাপা",
      color: theme.colors.japa.bgLight,
      partyCode: "jp",
    },
    {
      partyName: "জামায়াতে ইসলামী",
      color: theme.colors.ji.bgLight,
      partyCode: "ji",
    },
    {
      partyName: "অন্যান্য",
      color: theme.colors.others.bgLight,
      partyCode: "ao",
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl">
          <SectionTitle>দেখুন কে কোথায় জিতেছিল</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-6 pb-4 lg:pb-6">
            <div className="col-span-full lg:col-span-5">
              <div className="p-5 rounded bg-PurpleLight">
                {/* -----Year selection buttons ---- */}
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-1 mb-8">
                  {years.map((year) => (
                    <button
                      key={year.inEnglish}
                      onClick={() => setSelectedYear(year.inEnglish)}
                      className={clsx(
                        "block px-2 py-1 rounded text-sm font-medium cursor-pointer hover:bg-PurpleDark hover:text-white transition-all duration-300 text-center",
                        {
                          "bg-PurpleDark text-white":
                            selectedYear === year.inEnglish,
                          "text-gray3": selectedYear !== year.inEnglish,
                        }
                      )}
                    >
                      {year.inBangla}
                    </button>
                  ))}
                </div>

                {/* -----Party selection button start---- */}
                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-1 gap-6">
                  {partiesColor?.map((party, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedParty(party?.partyCode)}
                      className="flex gap-1 items-center cursor-pointer"
                    >
                      {party?.color ? (
                        <span
                          style={{ background: party?.color }}
                          className="inline-block w-4 h-4"
                        />
                      ) : (
                        <span className="w-4 h-4 grid grid-cols-2 grid-rows-2">
                          <span
                            style={{ background: theme.colors.al.bgLight }}
                          />
                          <span
                            style={{ background: theme.colors.bnp.bgLight }}
                          />
                          <span
                            style={{ background: theme.colors.japa.bgLight }}
                          />
                          <span
                            style={{ background: theme.colors.ji.bgLight }}
                          />
                          <span
                            style={{ background: theme.colors.others.bgLight }}
                          />
                        </span>
                      )}
                      <span
                        className={clsx("text-sm transition-all duration-300", {
                          "text-alBorder":
                            "al" === selectedParty &&
                            party.partyCode === selectedParty,
                          "text-bnpBorder":
                            "bnp" === selectedParty &&
                            party.partyCode === selectedParty,
                          "text-japaBorder":
                            "jp" === selectedParty &&
                            party.partyCode === selectedParty,
                          "text-jiBorder":
                            "ji" === selectedParty &&
                            party.partyCode === selectedParty,
                          "text-otherBorder":
                            "ao" === selectedParty &&
                            party.partyCode === selectedParty,
                        })}
                      >
                        {party?.partyName}
                      </span>
                    </div>
                  ))}
                </div>
                {/* -----Party selection button end---- */}
              </div>
            </div>
            <div className="bg-PurpleLight rounded col-span-full lg:col-span-7">
              <SeatMap
                selectedParty={selectedParty}
                selectedYear={selectedYear}
                seatWiseData={seatWiseData}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousResultMap;
