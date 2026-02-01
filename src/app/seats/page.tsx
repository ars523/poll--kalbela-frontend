import HeroPart from "@/components/specific/HeroPart";
import React from "react";
import SubHeroPart from "./../../components/common/SubHeroPart";
import SeatInfo3 from "@/components/specific/SeatInfo";
import MobileNavbar from "@/components/common/MobileNavbar";
import StickyAd from "@/components/common/StickyAd";
import { generatePageMetadata } from "../config/metadata";
import { domain } from "../config/api/api";

export const metadata = generatePageMetadata(`${domain}/seats`);

const page = () => {
  const herotitle = {
    title: "এক নজরে ৩০০ আসন",
  };
  return (
    <section>
      <div className="lg:mb-14 mb-10">
        <MobileNavbar />
        <SubHeroPart data={herotitle} />
        <SeatInfo3 className="lg:mt-14 mt-10" />
        {/* <StickyAd /> */}
      </div>
    </section>
  );
};

export default page;
