// RadialBarCharts.tsx
'use client'
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import toBengaliDigits from '@/assets/lib/toBanglaDigits';

// Dynamically import ReactApexChart with SSR disabled
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
import Counter from '@/components/common/Counter';

const RadialBarCharts: React.FC = () => {
    const [isChartLoaded, setIsChartLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsChartLoaded(true);
        }, 800); // সামান্য দেরি করে div দেখানো হবে
    }, []);
    const [state, setState] = useState({
        series: [60, 70, 80, 90],
        options: {
            chart: {
                type: 'radialBar' as 'radialBar',
                offsetY: -20,
                sparkline: { enabled: true },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: '97%',
                    },
                    dataLabels: {
                        name: { show: false },
                        value: {
                            offsetY: -2,
                            fontSize: '22px',
                            formatter: function (val: number) {
                                return toBengaliDigits(Math.round(val)) + "%";
                            }
                        }
                    }
                }
            },
            stroke: {
                show: true,
                width: 3,
                colors: ['#000000']
            },
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.6
                    }
                },
                active: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            labels: ['গড় ফলাফল'],
        },
    });

    return (
        <div>
            <div className="relative">
                <ReactApexChart options={state.options} series={state.series} type="radialBar" />
                {isChartLoaded && (
                    <div className="font-semibold text-center text-xs md:text-base text-gray-700 absolute top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                        <div>মোট আসন <Counter targetNumber={Number(300)} /></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RadialBarCharts;
