"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import toBengaliDigits from "@/assets/lib/toBanglaDigits";

dayjs.extend(utc);
dayjs.extend(timezone);

interface CountdownTimerProps {
  electionDate: string;
}

const units = ["দিন", "ঘণ্টা", "মিনিট", "সেকেন্ড"];
const ZERO_TIME = ["০০", "০০", "০০", "০০"];

const format = (num: number) =>
  toBengaliDigits(num.toString().padStart(2, "0"));

const computeRemaining = (electionDate: string): string[] => {
  const now = dayjs().tz("Asia/Dhaka");

  const hasTZ = /Z|[+\-]\d{2}:\d{2}$/.test(electionDate);
  const electionDateTime = hasTZ
    ? dayjs.utc(electionDate).tz("Asia/Dhaka")
    : dayjs.tz(electionDate, "Asia/Dhaka");

  const duration = electionDateTime.diff(now);

  if (duration <= 0) return ZERO_TIME;

  const DAY = 1000 * 60 * 60 * 24;
  const HOUR = 1000 * 60 * 60;
  const MINUTE = 1000 * 60;

  return [
    format(Math.floor(duration / DAY)),
    format(Math.floor((duration % DAY) / HOUR)),
    format(Math.floor((duration % HOUR) / MINUTE)),
    format(Math.floor((duration % MINUTE) / 1000)),
  ];
};

const CountdownTimer = ({ electionDate }: CountdownTimerProps) => { 
  const [timeRemaining, setTimeRemaining] = useState<string[]>(ZERO_TIME); 

  useEffect(() => {
    setTimeRemaining(computeRemaining(electionDate));

    const interval = setInterval(() => {
      setTimeRemaining(computeRemaining(electionDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [electionDate]);

  return (
    <div className="py-3 md:py-4 rounded-xl mx-auto">
      <div className="flex gap-2 md:gap-4 justify-center">
        {timeRemaining.map((element, i) => (
          <div
            key={i}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-lg md:rounded-xl blur-sm opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            {/* Main card */}
            <div className="relative flex flex-col gap-1 md:gap-2 items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 w-16 md:w-24 rounded-lg md:rounded-xl px-2 py-2 md:px-3 md:py-4 border md:border-2 border-red-600 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              {/* Time display */}
              <div className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                {element}
              </div>
              
              {/* Separator line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              
              {/* Unit label */}
              <div className="text-[10px] md:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                {units[i]}
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-0.5 -left-0.5 md:-bottom-1 md:-left-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-400 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;