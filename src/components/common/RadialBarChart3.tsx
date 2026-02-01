"use client";
import React from "react";
import dynamic from "next/dynamic";
import toBengaliDigits from "@/assets/lib/toBanglaDigits";
import ColorBoxes from "@/components/common/ColorBoxes/ColorBoxes";
import SectionTitle from "@/components/common/SectionTitle";
import ordinal from "@/assets/data/tsData/ordinal";
import theme from "../../../theme";

// Dynamically import Chart with SSR disabled to avoid "window is not defined" error
const Chart = dynamic(
  () => import("react-apexcharts").catch((err) => {
    console.error("Failed to load react-apexcharts:", err);
    return { default: () => <div>Chart failed to load</div> };
  }),
  { 
    ssr: false,
    loading: () => <div className="flex justify-center items-center h-32">Loading chart...</div>
  }
);

interface ChartData {
  electionNo: number;
  series: number[];
}

const RadialBarChart3 = ({ chartData }: { chartData: ChartData[] }) => {
  // Handle empty or undefined chartData
  if (!chartData || chartData.length === 0) {
    return (
      <section>
        <div className="rounded-2xl bg-white">
          <SectionTitle>বিগত নির্বাচনে জেলার দলীয় অবস্থান</SectionTitle>
          <div className="lg:pb-6 pb-4 px-4 lg:px-6">
            <p className="text-gray-500 text-center py-8">
              কোন তথ্য পাওয়া যায়নি
            </p>
          </div>
        </div>
      </section>
    );
  }

  const colors = [
    theme.colors.al.bgLight,
    theme.colors.bnp.bgLight,
    theme.colors.japa.bgLight,
    theme.colors.others.bgLight,
  ];
  const labels = ["আ. লীগ জোট", "বিএনপি জোট", "জাতীয় পার্টি", "অন্যান্য"];

  const options = {
    chart: {
      type: "donut" as const,
      width: "200px",
    },
    colors: colors,
    labels: labels,
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      textAnchor: "middle" as "middle",
      style: { colors: ["white"], fontWeight: "400" },
      formatter: function (val: number, opt: any) {
        const key = opt?.seriesIndex;
        const series = opt?.w?.config?.series;
        if (!series || series[key] === undefined) return "";
        return toBengaliDigits(series[key]);
      },
      // dropShadow: { enabled: true }
    },
    tooltip: {
      style: {
        fontSize: "10px",
      },
      y: {
        formatter: function (val: number) {
          return toBengaliDigits(val);
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            total: {
              show: true,
              label: "মোট",
              formatter: (value: any) => {
                const series = value?.config?.series;
                if (!series || !Array.isArray(series)) return "";
                return toBengaliDigits(
                  series.reduce(
                    (acc: number, curr: number) => acc + curr,
                    0
                  )
                );
              },
            },
          },
        },
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        offsetX: 0,
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    responsive: [
      {
        breakpoint: 768, // Tablet and smaller screens
        options: {
          chart: {
            width: "55%", // Adjust for tablets
          },
        },
      },
      {
        breakpoint: 480, // Mobile screens
        options: {
          chart: {
            width: "55%", // Adjust for smaller devices
          },
        },
      },
    ],
  };

  return (
    <section>
      <div className="rounded-2xl bg-white">
        <SectionTitle>বিগত নির্বাচনে জেলার দলীয় অবস্থান</SectionTitle>
        <div className="lg:pb-6 pb-4 block lg:hidden">
          <ColorBoxes />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:px-6 px-4 gap-4 pb-4 lg:gap-6">
          {chartData.map((element, i) => {
            if (!element || !element.series || element.series.length === 0) {
              return null;
            }
            return (
              <div key={i}>
                <div
                  className="relative flex justify-center items-center border rounded pb-5 lg:pb-0"
                >
                  <Chart
                    options={options}
                    series={element.series}
                    type="donut"
                    width="80%"
                    height="auto"
                  />
                  <span className="block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4">
                    {ordinal(element.electionNo)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pb-6 hidden lg:block">
          <ColorBoxes />
        </div>
      </div>
    </section>
  );
};

export default RadialBarChart3;
