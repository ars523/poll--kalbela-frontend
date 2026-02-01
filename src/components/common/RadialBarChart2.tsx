'use client'
import toBengaliDigits from '@/assets/lib/toBanglaDigits'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic';


const ReactApexChart = dynamic(
  () => import('react-apexcharts').catch((err) => {
    console.error("Failed to load react-apexcharts:", err);
    return { default: () => <div>Chart failed to load</div> };
  }),
  { 
    ssr: false,
    loading: () => <div className="flex justify-center items-center h-32">Loading chart...</div>
  }
);

const RadialBarChart2: React.FC<{ seats: number[] }> = ({ seats }) => {

    const { ref, inView } = useInView({ threshold: 0.1 });
    const [isChartVisible, setIsChartVisible] = useState(false);

    if (inView && !isChartVisible) {
        setIsChartVisible(true);
    }

    // const getSeries = () => {
    //     const currentData = yearData.find(data => data.year === selectedYear)
    //     return currentData?.seats

    // }
    // getSeries()
    const config = {
        series: seats,
        options: {
            chart: {
                height: 270,
                type: 'radialBar' as 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                            formatter: function (val: number) {
                                // Convert numbers to Bengali digits
                                return toBengaliDigits(val.toString());
                            }
                        },
                        total: {
                            show: true,
                            label: 'মোট',
                            formatter: function () {
                                // Convert total to Bengali digits
                                return toBengaliDigits('৩০০');
                            }
                        },
                    },
                    track: {
                        background: "#a2a2a2",
                        strokeWidth: '97%',
                    },
                }
            },
            labels: ['আ. লীগ জোট', 'বিএনপি জোট', 'জাতীয় পার্টি', 'অন্যান্য'],
        },
    };

    return (
        <div ref={ref}>
            {isChartVisible ? (
                <ReactApexChart options={config.options} series={config.series} type="radialBar" height={265} />
            ) : (
                <p style={{ textAlign: "center", padding: "20px" }}>Loading chart...</p>
            )
            }
        </div>
    )
}

export default RadialBarChart2