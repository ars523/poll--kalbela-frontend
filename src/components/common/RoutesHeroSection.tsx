import React from "react";
import img3 from "@/assets/Images/BannerImage/bangladesh-election-banner-background-ballot-box-vector-33411615.jpg";
import toBengaliDigits from "@/assets/lib/toBanglaDigits";

interface data {
  title: string;
  seatNo: string;
  text: string;
}

const SubHeroPart = ({ data }: { data: data }) => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${img3.src})` }}
        className="bg-cover w-full bg-center bg-no-repeat h-[250px]"
      >
        <div className="backdrop-blur-sm mx-auto text-white py-2 flex flex-col justify-center items-center bg-black bg-opacity-40 h-full text-center">
          <h1 className="col-span-6 text-3xl font-semibold ">{data?.title}</h1>
          <div className="border-4 rounded-full mt-2 p-4 flex flex-col justify-center items-center">
            <div>
              <p className="text-xl font-semibold">
                {toBengaliDigits(data?.seatNo)}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold">{data?.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHeroPart;
