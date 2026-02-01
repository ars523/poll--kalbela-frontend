import Link from "next/link";
import districtPaths from "@/assets/data/districtpath";
function BangladeshMap() {
  return (
    <div>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 800 1000"
        style={
          {
            // enableBackground: 'new 0 0 800 1000'
          }
        }
        xmlSpace="preserve"
      >
        {districtPaths.map((district, i) => {
          return (
            <Link key={i} href={`/districts/${district.districtName}`}>
              <g className="hover:fill-[#eda4a6] fill-[#f6d2d3] transition-all duration-500 stroke-[#e98e90] stroke-1">
                {district.paths.map((path, i) => (
                  <path key={i} d={path} className="" />
                ))}
              </g>
              <text
                transform={district?.transform}
                className="pointer-events-none text-base font-semibold fill-black hover:fill-white"
              >
                {district?.districtName}
              </text>
            </Link>
          );
        })}
      </svg>
    </div>
  );
}

export default BangladeshMap;
