"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const StickyAd = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => {
      setIsMounted(true);
    }, 50);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Remove from DOM after animation completes
    setTimeout(() => {
      setShouldRender(false);
    }, 300);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 py-2 bg-white shadow-lg transition-all duration-300 ease-out ${
        isClosing
          ? "translate-y-full opacity-0"
          : isMounted
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-0 right-0 -translate-y-full z-[60] bg-white text-gray-800 px-2 py-1 hover:bg-gray-100 transition-colors flex items-center justify-center"
        aria-label="Close ad"
      >
        <IoClose size={20} />
      </button>
      <div className="relative w-full max-w-[970px]">
        {/* Ad Image */}
        <Link
          href={
            "https://www.citybankplc.com/bancassurance?utm_source=alternate&utm_medium=sticky"
          }
          target="_blank"
          className="relative w-full block"
        >
          {/* Desktop Image */}
          <Image
            src="/city_970x90_22-01-2026.png"
            alt="Advertisement"
            width={970}
            height={90}
            className="hidden md:block w-full h-auto object-contain"
            priority
          />
          {/* Mobile Image */}
          <Image
            src="/city_320x50_22-01-2026.png"
            alt="Advertisement"
            width={320}
            height={50}
            className="block md:hidden w-full h-auto object-contain"
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default StickyAd;
