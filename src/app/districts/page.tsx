import SubHeroPart from "@/components/common/SubHeroPart";
import React from "react";
import ZilaInfo3 from "@/components/specific/ZilaInfo";
import MobileNavbar from "@/components/common/MobileNavbar";
import StickyAd from "@/components/common/StickyAd";
import { generatePageMetadata } from "../config/metadata";
import { domain } from "../config/api/api";

export const metadata = generatePageMetadata(`${domain}/districts`);

const page = () => {
  const herotitle = {
    title: "এক নজরে ৬৪ জেলার তথ্য",
  };
  return (
    <section>
      <div className="lg:mb-14 mb-10">
        <MobileNavbar />
        <SubHeroPart data={herotitle} />
        <ZilaInfo3 className="lg:mt-14 mt-10" />
        {/* <StickyAd /> */}
      </div>
    </section>
  );
};

export default page;
