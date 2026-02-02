import HeroPart from "@/components/specific/HeroPart";
import MobileNavbar from "@/components/common/MobileNavbar";
import HomeSearchSection from "@/components/specific/HomeSearchSection";
import { generatePageMetadata } from "./config/metadata";
import { domain } from "./config/api/api";

export const metadata = generatePageMetadata(domain);

export default function Home() {
  return (
    <div className="lg:mb-14 mb-10">
      <MobileNavbar />
      <HeroPart />
      <HomeSearchSection />
    </div>
  );
}
