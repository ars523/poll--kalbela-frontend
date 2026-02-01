"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/assets/Images/বাংলাদেশ_নির্বাচন_কমিশনের_লোগো.svg.png";
import img2 from "@/assets/Images/demo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <nav className="container bg-[#f1f4f9] p-2 hidden lg:block">
      <div className="grid grid-cols-6 text-gray-600 px-6">
        <Link href="/" className="col-span-1 flex gap-1 items-center">
          <Image
            src="/logo-kalbela.svg"
            alt="Kalbela Logo"
            width={183}
            height={56}
            className="w-[183px] h-[56px] object-cover"
          />
        </Link>
        <div className="col-span-4 flex items-center justify-center">
          <div className="flex space-x-6 text-lg font-medium items-center">
            <Link
              href="/"
              className={`hover:text-black ${
                pathname === "/" ? "text-blue-600" : ""
              }`}
            >
              <MdHome size={20} color="" />
            </Link>
            <Link
              href="/seats"
              className={`hover:text-black ${
                isActive("/seats") ? "text-blue-600" : ""
              }`}
            >
              আসন
            </Link>
            <Link
              href={"/districts"}
              className={`hover:text-black ${
                isActive("/districts") ? "text-blue-600" : ""
              }`}
            >
              জেলা
            </Link>
            <Link
              href={"/stories"}
              className={`hover:text-black ${
                isActive("/stories") ? "text-blue-600" : ""
              }`}
            >
              খবর
            </Link>
            <Link
              href={"/videos"}
              className={`hover:text-black ${
                isActive("/videos") ? "text-blue-600" : ""
              }`}
            >
              ভিডিও
            </Link>
            <Link
              href={"/results"}
              className={`hover:text-black ${
                isActive("/results") ? "text-blue-600" : ""
              }`}
            >
              ফলাফল
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Image
            src={img1}
            alt="Election Commission Logo"
            height={48}
            className="w-10 h-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
