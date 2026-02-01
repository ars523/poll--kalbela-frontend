"use client";
import React, { useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import toBengaliDigits from "@/assets/lib/toBanglaDigits";
import SectionTitle from "@/components/common/SectionTitle";
import theme from "../../../theme";
import { PreviousElectionItem } from "@/types";

const ReactApexChart = dynamic(
  () => import("react-apexcharts").catch((err) => {
    console.error("Failed to load react-apexcharts:", err);
    return { default: () => <div>Chart failed to load</div> };
  }),
  { 
    ssr: false,
    loading: () => <div className="flex justify-center items-center h-32">Loading chart...</div>
  }
);

interface Props {
  previousResultData?: PreviousElectionItem[];
}

const LineChart: React.FC<Props> = ({ previousResultData = [] }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [isChartVisible, setIsChartVisible] = useState(false);

  if (inView && !isChartVisible) {
    setIsChartVisible(true);
  }

  const safeNum = (v: any) => {
    const s = String(v || "").replace(/[^0-9\-]/g, "");
    const n = Number(s);
    return Number.isFinite(n) ? n : 0;
  };

  const { yearsDesc, series } = useMemo(() => {
    const items = previousResultData || [];
    const yearsSet = Array.from(
      new Set(items.map((i) => Number(i.electionYear || 0)))
    )
      .filter((n) => !Number.isNaN(n) && n > 0)
      .sort((a, b) => b - a); // descending: latest -> oldest

    const years = yearsSet;

    const parties = ["al", "bnp", "japa", "ji", "others"];

    const buildSeriesFor = (partyKey: string) =>
      years.map((y) => {
        const yearData = items.find((i) => Number(i.electionYear) === y);
        if (!yearData?.elections?.[0]?.parties) return 0;

        const allParties = yearData.elections[0].parties;

        if (partyKey === "others") {
          // sum all parties not matching al, bnp, jp/japa, ji
          return allParties
            .filter((p) => {
              const normalized = String(p.partyName || "")
                .toLowerCase()
                .trim();
              return !["al", "bnp", "jp", "japa", "ji", "jamaat"].some((k) =>
                normalized.includes(k)
              );
            })
            .reduce((sum, p) => sum + safeNum(p.totalSeat), 0);
        }

        // find matching party
        const party = allParties.find((p) => {
          const normalized = String(p.partyName || "")
            .toLowerCase()
            .trim();
          if (partyKey === "al") return normalized.includes("al");
          if (partyKey === "bnp") return normalized.includes("bnp");
          if (partyKey === "japa")
            return normalized.includes("jp") || normalized.includes("japa");
          if (partyKey === "ji")
            return normalized.includes("ji") || normalized.includes("jamaat");
          return false;
        });

        return safeNum(party?.totalSeat);
      });

    const seriesArr = parties.map((p) => ({
      name:
        p === "al"
          ? "আ. লীগ"
          : p === "bnp"
          ? "বিএনপি"
          : p === "japa"
          ? "জাতীয় পার্টি"
          : p === "ji"
          ? "জামায়াতে ইসলামী"
          : "অন্যান্য",
      data: buildSeriesFor(p),
    }));

    return { yearsDesc: years, series: seriesArr };
  }, [previousResultData]);

  const options = {
    chart: {
      height: 500,
      type: "line" as "line",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: [
      theme.colors.al.bgLight,
      theme.colors.bnp.bgLight,
      theme.colors.japa.bgLight,
      theme.colors.ji?.bgLight ?? "#999999",
      theme.colors.others.bgLight,
    ],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => toBengaliDigits(val),
      dropShadow: { enabled: true },
    },
    tooltip: {
      style: { fontSize: "12px" },
      y: { formatter: (val: number) => toBengaliDigits(val) },
    },
    xaxis: {
      categories: yearsDesc.length
        ? yearsDesc.map((y) => toBengaliDigits(String(y)))
        : ["২০২৪", "২০১৮", "২০১৪", "২০০৮", "২০০১", "১৯৯৬"],
    },
    yaxis: {
      show: true,
      labels: { formatter: (value: number) => toBengaliDigits(value) },
    },
  };

  return (
    <section ref={ref}>
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl">
          <SectionTitle>
            কার ভাগে কত আসন{" "}
            {yearsDesc.length
              ? `(${toBengaliDigits(
                  String(yearsDesc[yearsDesc.length - 1])
                )}-${toBengaliDigits(String(yearsDesc[0]))})`
              : "(১৯৯১-২০২৪)"}
          </SectionTitle>
          <div className="lg:px-6 px-4 lg:pb-6 pb-4">
            {isChartVisible ? (
              <ReactApexChart
                options={options}
                series={series}
                type="line"
                width="100%"
                height={350}
              />
            ) : (
              <p style={{ textAlign: "center", padding: "20px" }}>
                Loading chart...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineChart;
