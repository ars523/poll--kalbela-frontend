'use client'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic';
import toBengaliDigits from '@/assets/lib/toBanglaDigits'
import theme from '../../../theme'

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

const ColumnChart = ({ votes }: { votes: number[] }) => {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const [isChartVisible, setIsChartVisible] = useState(false);

    if (inView && !isChartVisible) {
        setIsChartVisible(true);
    }

    const config = {
        series: [{ name: 'প্রাপ্ত ভোট', data: votes }],
        options: {
            chart: {
                height: 300,
                type: 'bar' as const,
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: { position: 'top' },
                    distributed: true
                }
            },
            colors: [
                theme.colors.al.bgLight,
                theme.colors.bnp.bgLight,
                theme.colors.japa.bgLight,
                theme.colors.others.bgLight
            ],
            dataLabels: {
                enabled: true,
                formatter: (val: number) => toBengaliDigits(val.toFixed(0)),
                offsetY: -20,
                style: { fontSize: '12px', colors: ["#304758"] }
            },
            xaxis: {
                categories: ["আ. লীগ জোট", "বিএনপি জোট", "জাতীয় পার্টি", "অন্যান্য"],
                labels: {
                    show: true,
                    style: { fontSize: '12px', colors: ["#000"] }
                }
            },
            yaxis: { labels: { show: false } },
            grid: { show: false },
            tooltip: {
                y: { formatter: (val: number) => toBengaliDigits(val.toString()) }
            },
            legend: {
                position: 'bottom' as 'bottom',
                horizontalAlign: 'center' as 'center',
                offsetY: 5
            },
            responsive: [{
                breakpoint: 768,
                options: {
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left',
                        offsetY: 10,
                        fontSize: "8px"
                    },
                    dataLabels: {
                        style: { fontSize: '8px' }
                    },
                    xaxis: {
                        labels: {
                            style: { fontSize: '8px', colors: ["#000"] }
                        }
                    }
                }
            }]
        },
    };

    return (
        <div ref={ref}>
            {isChartVisible ? (
                <ReactApexChart options={config.options} series={config.series} type="bar" height={270} />
            ) : (
                <p style={{ textAlign: "center", padding: "20px" }}>Loading chart...</p>
            )}
        </div>
    );
};

export default ColumnChart;

