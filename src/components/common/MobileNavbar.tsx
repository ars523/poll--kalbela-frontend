"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/Images/demo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  const mobileMenu = [
    { mainNav: "আসন", link: "/seats" },
    { mainNav: "জেলা", link: "/districts" },
    { mainNav: "খবর", link: "/stories" },
    { mainNav: "ভিডিও", link: "/videos" },
    { mainNav: "ফলাফল", link: "/results" },
  ];

  return (
    <div className="bg-white block lg:hidden group sticky top-0 left-0 right-0 z-50">
      <div className="col-span-12 lg:col-span-4 grid grid-cols-2 content-center py-2">
        <Link href={"/"} className="flex justify-start ml-8 ">
          <Image
            src="/logo-kalbela.svg"
            alt="Kalbela Logo"
            width={128}
            height={39}
            className="w-[128px] h-auto object-cover"
          />
        </Link>
        <button
          className="items-center flex justify-end mr-8"
          onClick={toggleNavbar}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <RxCross2 className="text-gray-600 text-3xl" />
          ) : (
            <IoReorderThreeOutline className="text-gray-600 text-3xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-1 text-base px-8 text-gray-600">
          {mobileMenu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`border-b-[1px] last:border-b-0 border-gray-600 py-2 px-4 ${
                isActive(item.link) ? "text-blue-600" : ""
              }`}
            >
              {item.mainNav}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
