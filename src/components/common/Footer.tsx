import Link from "next/link";
import React from "react";

const Footer = () => {
  const menus = [
    { title: "কালবেলা", url: "/#" },
    { title: "গোপনীয়তার নীতি", url: "/#" },
    { title: "শর্তাবলি", url: "/#" },
    { title: "মন্তব্য প্রকাশের নীতিমালা", url: "/#" },
    { title: "বিজ্ঞাপন", url: "/#" },
    { title: "যোগাযোগ", url: "/#" },
    { title: "ছুটির তালিকা", url: "/#" },
    { title: "দিবস", url: "/#" },
  ];

  return (
    <section className="bg-white">
      <div className="container text-gray-700 py-8">
        <div className="sm:items-center gap-2 font-bold md:hidden flex flex-col items-center border-b pb-5">
          <p>সম্পাদক: সন্তোষ শর্মা</p>
          <p>প্রকাশক: মিয়া নুরুদ্দিন আহাম্মেদ অপু</p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 pb-5 pt-5 md:pt-0">
          <div className="flex flex-col gap-y-2 pb-5 md:pb-0">
            <p>
              বাংলাদেশ ও বিশ্বের সকল খবর, ব্রেকিং নিউজ, লাইভ নিউজ, রাজনীতি,
              বাণিজ্য, খেলা, বিনোদনসহ সকল সর্বশেষ সংবাদ সবার আগে পড়তে ক্লিক করুন
              কালবেলা ডট কম।
            </p>
          </div>
          <div className="pt-5 md:pt-0 border-t md:border-t-0">
            <ul className="flex flex-wrap gap-x-3 font-bold">
              {menus.map((menu, i) => (
                <Link key={i} href={menu.url}>
                  <li className="cursor-pointer hover:text-gray-900">
                    {menu.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div> */}

        {/* Middle section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 py-5">
          <div className="flex flex-col gap-y-2 md:mt-0">
            <div className="sm:items-center gap-2 font-bold hidden md:flex">
              <p>সম্পাদক: সন্তোষ শর্মা</p>
              <span>|</span>
              <p>প্রকাশক: মিয়া নুরুদ্দিন আহাম্মেদ অপু</p>
            </div>
            <p>
              কালবেলা মিডিয়া লিমিটেডের পক্ষে প্রকাশক কর্তৃক নিউমার্কেট সিটি
              কমপ্লেক্স, ৪৪/১, রহিম স্কয়ার, নিউমার্কেট, ঢাকা থেকে প্রকাশিত এবং
              ২৮/বি, টয়েনবি সার্কুলার রোড, মতিঝিল ঢাকা, শরীয়তপুর প্রিন্টিং
              প্রেস থেকে মুদ্রিত।
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-col gap-y-2">
              <p>ফোন : +৮৮ ০২ ৪৪৬১৭০০৩, +৮৮ ০২ ৪৪৬১৭০০৪ ।</p>
              <p>ফ্যাক্স : +৮৮ ০২ ৪৪৬১৭০০২ । ই-মেইল: news@kalbela.com.</p>
              <p>বিজ্ঞাপন বিভাগ: ফোন: +৮৮ ০২ ৪৪৬১৭০০৫, ০১৭৩০ ০৯৩৩২৮ ।</p>
              <p>ই-মেইল: ads@kalbela.com.</p>
              <p>
                সার্কুলেশন : ফোন: ০১৭৩০ ০৯৩৩৪৭ । কালবেলা মিডিয়া লিমিটেডের একটি
                প্রকাশনা।
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="w-full pt-5 flex flex-col md:flex-row justify-between text-sm items-center border-t gap-y-2 md:gap-y-0">
          <p>স্বত্ব © কালবেলা মিডিয়া লিমিটেড ২০২৬</p>
          <p>ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
