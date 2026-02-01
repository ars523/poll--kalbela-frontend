"use client";
import "./SeatMap.css";
import seatPaths from "@/assets/data/seatPaths/seatPaths";
// import seatPreviousResult from '@/assets/election-2026/assets/data/jsonData/seatPreviousResult.json'
import React from "react";
import type { SeatInfo, ElectionInfo } from "@/types";

interface Props {
  selectedParty?: string | null;
  selectedYear?: number | string | null;
  seatNo?: number | string;
  seatPreviousResult?: SeatInfo[];
  seatWiseData?: SeatInfo[];
}

type CurrentSeat = string | number;

interface ISetFillColor {
  (currentSeat: CurrentSeat): string;
}

const SeatMap: React.FC<Props> = ({
  selectedParty,
  selectedYear,
  seatNo,
  seatPreviousResult,
  seatWiseData = [],
}) => {
  const filter = (currentSeat: CurrentSeat): ElectionInfo | undefined => {
    const seat = seatWiseData.find((s) => s.seatNo == currentSeat);
    if (!seat) return undefined;

    const found = seat.elections.find((y) => {
      const yearMatch =
        !selectedYear || y.electionYearEn === String(selectedYear);
      const partyMatch = !selectedParty || y.partyCode === selectedParty;
      return yearMatch && partyMatch;
    });
    return found;
  };

  const setFillColor: ISetFillColor = (currentSeat) => {
    const found: ElectionInfo | undefined = filter(currentSeat);

    if (found?.partyCode === "al") {
      return `fill-[#239cf8] stroke-white stroke-3`;
    } else if (found?.partyCode === "bnp") {
      return `fill-[#23e4a3] stroke-white stroke-3`;
    } else if (found?.partyCode === "jp") {
      return `fill-[#fbb938] stroke-white stroke-3`;
    } else if (found?.partyCode === "ji") {
      return `fill-[#60a5fa] stroke-white stroke-3`;
    } else if (found?.partyCode === "ao") {
      return `fill-[#fc5d75] stroke-white stroke-3`;
    } else {
      return `fill-[#ddd] stroke-white stroke-3`;
    }
  };

  return (
    <div style={{ width: "100%" }} className="mx-auto">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1500 1800"
        xmlSpace="preserve"
      >
        {seatPaths.map((seat) => {
          if (seat?.seatNo == "101") {
            return (
              <polygon
                key={`polygon-${seat.seatNo}`} // 🔥 Ensure unique key
                id="st_101"
                className={setFillColor(seat?.seatNo)}
                points={seat?.paths[0]}
              />
            );
          } else if (seat?.paths.length > 1) {
            return (
              <g key={`group-${seat.seatNo}`}>
                {" "}
                {/* 🔥 Unique key for group */}
                {seat?.paths.map((path, index) => (
                  <path
                    key={`path-${seat.seatNo}-${index}`} // 🔥 Unique key
                    className={setFillColor(seat?.seatNo)}
                    d={path}
                  />
                ))}
              </g>
            );
          } else {
            return (
              <path
                key={`path-${seat?.seatNo}`} // 🔥 Unique key
                id="st_57"
                className={setFillColor(seat?.seatNo)}
                d={seat.paths[0]}
              />
            );
          }
        })}

        {/* Red marker start */}
        <g>
          <rect
            x="1193.6"
            y="621.3"
            className="st1"
            width="218.1"
            height="267.5"
          />
          <path
            className="st2"
            d="M715.3,836.7h-40.6v57.5h40.6V836.7z M714.3,893.2h-38.6v-55.5h38.6V893.2z"
          />
          <path
            className="st2"
            d="M1192.6,620.3v133.8l0.4-0.1l0.2,1l-0.6,0.2v134.6h220.1V620.3H1192.6z M1411.7,888.8h-218.1V621.3h218.1
						V888.8z"
          />
          <polygon
            className="st2"
            points="714.9,871.5 714.9,872.5 1192.6,755.2 1192.6,754.1 	"
          />
          <polygon
            className="st2"
            points="1193,754 1192.6,754.1 1192.6,755.2 1193.2,755 	"
          />
        </g>
        {/* Red marker end */}

        {/* Seat no start */}
        <g>
          <text
            transform="matrix(1 0 0 1 233.3739 151.369)"
            className="st3 st4 st5"
          >
            ১
          </text>
          <g>
            <text
              transform="matrix(1 0 0 1 205.1892 234.3353)"
              className="st3 st4 st5"
            >
              ৩
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 255.8684 203.7962)"
              className="st3 st4 st5"
            >
              ২
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 241.5736 285.6678)"
              className="st3 st4 st5"
            >
              ৬
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 220.7831 347.3958)"
              className="st3 st4 st5"
            >
              ৭
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 163.6029 288.2659)"
              className="st3 st4 st5"
            >
              ৫
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 150.6057 234.3353)"
              className="st3 st4 st5"
            >
              ৪
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 285.7572 330.4998)"
              className="st3 st4 st5"
            >
              ৯
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 344.8871 430.5648)"
              className="st3 st4 st5"
            >
              ১১
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 252.62 362.9896)"
              className="st3 st4 st5"
            >
              ৮
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 511.8778 251.8787)"
              className="st3 st4 st5"
            >
              ২৫
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 314.677 367.7045)"
              className="st3 st4 st5"
            >
              ১০
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 481.8767 560.5183)"
              className="st3 st4 st5"
            >
              ৩৬
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 314.1018 208.9959)"
              className="st3 st4 st5"
            >
              ১২
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 530.0702 383.7835)"
              className="st3 st4 st5"
            >
              ২৮
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 498.2303 338.9485)"
              className="st3 st4 st5"
            >
              ২৭
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 485.8871 479.9476)"
              className="st3 st4 st5"
            >
              ৩৩
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 354.6328 198.5983)"
              className="st3 st4 st5"
            >
              ১৬
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 395.6303 373.5551)"
              className="st3 st4 st5"
            >
              ২৩
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 344.8871 488.3914)"
              className="st3 st4 st5"
            >
              ৩৪
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 490.6529 304.4993)"
              className="st3 st4 st5"
            >
              ২৬
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 424.8098 489.6932)"
              className="st3 st4 st5"
            >
              ৩২
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 364.3817 528.0297)"
              className="st3 st4 st5"
            >
              ৩৫
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 409.1127 268.206)"
              className="st3 st4 st5"
            >
              ১৭
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 439.5453 421.3903)"
              className="st3 st4 st5"
            >
              ৩১
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 338.3867 337.973)"
              className="st3 st4 st5"
            >
              ২০
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 483.287 391.5775)"
              className="st3 st4 st5"
            >
              ২৯
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 397.5784 413.4842)"
              className="st3 st4 st5"
            >
              ২৪
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 440.4032 342.845)"
              className="st3 st4 st5"
            >
              ২২
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 300.0531 283.0677)"
              className="st3 st4 st5"
            >
              ১৩
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 337.0912 251.2283)"
              className="st3 st4 st5"
            >
              ১৪
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 383.705 298.6633)"
              className="st3 st4 st5"
            >
              ১৯
            </text>
          </g>
          <text
            transform="matrix(1 0 0 1 481.877 763.8958)"
            className="st4 st5"
          >
            ৬৭
          </text>
          <g>
            <text
              transform="matrix(1 0 0 1 474.7683 433.8137)"
              className="st3 st4 st5"
            >
              ৩০
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 412.4637 528.0297)"
              className="st3 st4 st5"
            >
              ৩৭
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 586.6005 486.4461)"
              className="st3 st4 st5"
            >
              ১৪৫
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 531.6952 466.3016)"
              className="st3 st4 st5"
            >
              ১৩৮
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 524.1843 563.8516)"
              className="st3 st4 st5"
            >
              ১৪০
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 446.437 292.9396)"
              className="st3 st4 st5"
            >
              ১৮
            </text>
          </g>
          <g>
            <text
              transform="matrix(0.9962 -8.680832e-02 8.680832e-02 0.9962 335.4821 296.664)"
              className="st3 st4 st5"
            >
              ১৫
            </text>
          </g>
          <g>
            <text
              transform="matrix(1 0 0 1 505.5143 514.8976)"
              className="st3 st4 st5"
            >
              ১৩৯
            </text>
          </g>
          <text
            transform="matrix(1 0 0 1 666.3054 1132.3134)"
            className="st4 st5"
          >
            ১২১
          </text>
          <g>
            <text
              transform="matrix(1 0 0 1 387.3532 334.7081)"
              className="st3 st4 st5"
            >
              ২১
            </text>
          </g>
          <text
            transform="matrix(1 0 0 1 676.2671 611.8505)"
            className="st4 st5"
          >
            ১৪৯
          </text>
          <text
            transform="matrix(1 0 0 1 466.9268 1145.7789)"
            className="st4 st5"
          >
            ১০০
          </text>
          <text
            transform="matrix(1 0 0 1 1134.3162 1507.2294)"
            className="st3 st6 st5"
          ></text>
          <text
            transform="matrix(1 0 0 1 624.8772 507.8872)"
            className="st4 st5"
          >
            ১৪৪
          </text>
          <text
            transform="matrix(1 0 0 1 684.6067 507.8871)"
            className="st4 st5"
          >
            ১৪৬
          </text>
          <text
            transform="matrix(1 0 0 1 772.2781 511.5537)"
            className="st4 st5"
          >
            ১৫৭
          </text>
          <text
            transform="matrix(1 0 0 1 860.8008 530.6278)"
            className="st4 st5"
          >
            ২২৪
          </text>
          <text
            transform="matrix(1 0 0 1 779.7358 560.5182)"
            className="st4 st5"
          >
            ১৫৮
          </text>
          <text
            transform="matrix(1 0 0 1 735.551 546.2245)"
            className="st4 st5"
          >
            ১৬১
          </text>
          <text
            transform="matrix(1 0 0 1 684.6067 557.2704)"
            className="st4 st5"
          >
            ১৪৭
          </text>
          <text
            transform="matrix(1 0 0 1 927.0771 512.1107)"
            className="st4 st5"
          >
            ২২৭
          </text>
          <text
            transform="matrix(1 0 0 1 978.2041 536.4781)"
            className="st4 st5"
          >
            ২২৮
          </text>
          <text
            transform="matrix(1 0 0 1 1073.2749 511.5537)"
            className="st4 st5"
          >
            ২৩২
          </text>
          <text
            transform="matrix(1 0 0 1 1159.6938 534.5295)"
            className="st4 st5"
          >
            ২৩৩
          </text>
          <text
            transform="matrix(1 0 0 1 1102.0232 576.7639)"
            className="st4 st5"
          >
            ২৩৪
          </text>
          <text
            transform="matrix(1 0 0 1 1049.4426 549.4722)"
            className="st4 st5"
          >
            ২২৯
          </text>
          <text
            transform="matrix(1 0 0 1 1059.7288 602.101)"
            className="st4 st5"
          >
            ২৩১
          </text>
          <text
            transform="matrix(1 0 0 1 1018.6931 604.7031)"
            className="st4 st5"
          >
            ২৩০
          </text>
          <text
            transform="matrix(1 0 0 1 1032.3394 661.2329)"
            className="st4 st5"
          >
            ২৩৭
          </text>
          <text
            transform="matrix(1 0 0 1 1088.2205 674.8779)"
            className="st4 st5"
          >
            ২৩৬
          </text>
          <text
            transform="matrix(1 0 0 1 1124.7996 624.1964)"
            className="st4 st5"
          >
            ২৩৫
          </text>
          <text
            transform="matrix(1 0 0 1 971.2976 602.2777)"
            className="st4 st5"
          >
            ২২৬
          </text>
          <text
            transform="matrix(1 0 0 1 968.7129 671.3032)"
            className="st4 st5"
          >
            ২৩৯
          </text>
          <text
            transform="matrix(1 0 0 1 962.1663 758.2111)"
            className="st4 st5"
          >
            ২৪২
          </text>
          <text
            transform="matrix(1 0 0 1 927.0781 720.0361)"
            className="st4 st5"
          >
            ২৪১
          </text>
          <text
            transform="matrix(1 0 0 1 921.229 674.2267)"
            className="st4 st5"
          >
            ২৪০
          </text>
          <text
            transform="matrix(1 0 0 1 915.3845 599.8684)"
            className="st4 st5"
          >
            ২২৫
          </text>
          <text
            transform="matrix(1 0 0 1 849.1047 608.2778)"
            className="st4 st5"
          >
            ১৬০
          </text>
          <text
            transform="matrix(1 0 0 1 856.2522 682.6748)"
            className="st4 st5"
          >
            ১৬৫
          </text>
          <text
            transform="matrix(1 0 0 1 881.5933 763.8958)"
            className="st4 st5"
          >
            ২৪৩
          </text>
          <text
            transform="matrix(1 0 0 1 861.4497 788.3241)"
            className="st4 st5"
          >
            ২৪৪
          </text>
          <text
            transform="matrix(1 0 0 1 877.3721 822.3756)"
            className="st4 st5"
          >
            ২৪৫
          </text>
          <text
            transform="matrix(1 0 0 1 385.5739 602.2777)"
            className="st4 st5"
          >
            ৩৯
          </text>
          <text
            transform="matrix(1 0 0 1 354.6326 581.3112)"
            className="st4 st5"
          >
            ৩৮
          </text>
          <text
            transform="matrix(1 0 0 1 446.5742 633.2939)"
            className="st4 st5"
          >
            ৪০
          </text>
          <text
            transform="matrix(1 0 0 1 428.0572 596.8683)"
            className="st4 st5"
          >
            ৪২
          </text>
          <text
            transform="matrix(1 0 0 1 117.0572 616.3992)"
            className="st4 st5"
          >
            ৪৩
          </text>
          <text
            transform="matrix(1 0 0 1 163.6031 595.6052)"
            className="st4 st5"
          >
            ৪৪
          </text>
          <text
            transform="matrix(1 0 0 1 138.606 661.2329)"
            className="st4 st5"
          >
            ৪৫
          </text>
          <text
            transform="matrix(1 0 0 1 184.6061 663.1823)"
            className="st4 st5"
          >
            ৫২
          </text>
          <text
            transform="matrix(1 0 0 1 231.7168 703.7959)"
            className="st4 st5"
          >
            ৫৩
          </text>
          <text
            transform="matrix(1 0 0 1 233.777 678.1351)"
            className="st4 st5"
          >
            ৫৪
          </text>
          <text
            transform="matrix(1 0 0 1 279.9102 646.6128)"
            className="st4 st5"
          >
            ৫৫
          </text>
          <text
            transform="matrix(1 0 0 1 283.1591 688.5237)"
            className="st4 st5"
          >
            ৫৬
          </text>
          <text
            transform="matrix(1 0 0 1 280.3139 740.5042)"
            className="st4 st5"
          >
            ৫৭
          </text>
          <text
            transform="matrix(1 0 0 1 319.8412 745.0514)"
            className="st4 st5"
          >
            ৫৮
          </text>
          <text
            transform="matrix(1 0 0 1 323.4429 686.8989)"
            className="st4 st5"
          >
            ৫৯
          </text>
          <text
            transform="matrix(1 0 0 1 378.4278 678.1276)"
            className="st4 st5"
          >
            ৬০
          </text>
          <text
            transform="matrix(1 0 0 1 220.131 549.4724)"
            className="st4 st5"
          >
            ৪৬
          </text>
          <text
            transform="matrix(1 0 0 1 257.8175 507.8875)"
            className="st4 st5"
          >
            ৪৭
          </text>
          <text transform="matrix(1 0 0 1 275.2111 548.4739)" className="st7">
            <tspan x="0" y="0" className="st4 st5">
              ৪
            </tspan>
            <tspan x="6.8" y="0" className="st3 st4 st5">
              ৮
            </tspan>
          </text>
          <text
            transform="matrix(1 0 0 1 257.8175 606.0016)"
            className="st4 st5"
          >
            ৪৯
          </text>
          <text
            transform="matrix(1 0 0 1 309.8175 587.8093)"
            className="st4 st5"
          >
            ৫০
          </text>
          <text
            transform="matrix(1 0 0 1 333.5937 627.4462)"
            className="st4 st5"
          >
            ৫১
          </text>
          <text
            transform="matrix(1 0 0 1 421.9601 565.3925)"
            className="st4 st5"
          >
            ৪১
          </text>
          <text
            transform="matrix(1 0 0 1 372.324 720.7118)"
            className="st4 st5"
          >
            ৬১
          </text>
          <text
            transform="matrix(1 0 0 1 502.8275 637.2939)"
            className="st4 st5"
          >
            ৬২
          </text>
          <text
            transform="matrix(1 0 0 1 499.5004 692.5172)"
            className="st4 st5"
          >
            ৬৩
          </text>
          <text
            transform="matrix(1 0 0 1 431.7097 676.7982)"
            className="st4 st5"
          >
            ৬৪
          </text>
          <text
            transform="matrix(1 0 0 1 461.2415 719.5818)"
            className="st4 st5"
          >
            ৬৫
          </text>
          <text
            transform="matrix(1 0 0 1 511.8777 737.2556)"
            className="st4 st5"
          >
            ৬৬
          </text>
          <text
            transform="matrix(1 0 0 1 467.6923 802.3241)"
            className="st4 st5"
          >
            ৬৮
          </text>
          <text
            transform="matrix(1 0 0 1 539.168 845.7672)"
            className="st4 st5"
          >
            ১৬৮
          </text>
          <text
            transform="matrix(1 0 0 1 471.5919 840.5692)"
            className="st4 st5"
          >
            ৬৯
          </text>
          <text
            transform="matrix(1 0 0 1 419.6096 756.3241)"
            className="st4 st5"
          >
            ৭০
          </text>
          <text
            transform="matrix(1 0 0 1 353.6112 783.8241)"
            className="st4 st5"
          >
            ৭১
          </text>
          <text transform="matrix(1 0 0 1 404.664 816.527)" className="st4 st5">
            ৭২
          </text>
          <text
            transform="matrix(1 0 0 1 238.1112 888.8241)"
            className="st4 st5"
          >
            ৭৩
          </text>
          <text
            transform="matrix(1 0 0 1 270.1112 851.6135)"
            className="st4 st5"
          >
            ৭৪
          </text>
          <text
            transform="matrix(1 0 0 1 289.0072 802.3241)"
            className="st4 st5"
          >
            ৭৫
          </text>
          <text
            transform="matrix(1 0 0 1 334.4921 831.4716)"
            className="st4 st5"
          >
            ৭৬
          </text>
          <text
            transform="matrix(1 0 0 1 348.2928 861.3242)"
            className="st4 st5"
          >
            ৭৭
          </text>
          <text
            transform="matrix(1 0 0 1 389.7207 860.5476)"
            className="st4 st5"
          >
            ৭৮
          </text>
          <text
            transform="matrix(1 0 0 1 303.1112 893.8241)"
            className="st4 st5"
          >
            ৭৯
          </text>
          <text
            transform="matrix(1 0 0 1 266.5893 930.5946)"
            className="st4 st5"
          >
            ৮০
          </text>
          <text
            transform="matrix(1 0 0 1 391.1752 904.8958)"
            className="st4 st5"
          >
            ৮১
          </text>
          <text
            transform="matrix(1 0 0 1 351.3839 925.6874)"
            className="st4 st5"
          >
            ৮২
          </text>
          <text
            transform="matrix(1 0 0 1 296.1112 994.2393)"
            className="st4 st5"
          >
            ৮৩
          </text>
          <text
            transform="matrix(1 0 0 1 368.9142 980.9177)"
            className="st4 st5"
          >
            ৮৪
          </text>
          <text
            transform="matrix(1 0 0 1 309.1112 1084.3241)"
            className="st4 st5"
          >
            ৮৫
          </text>
          <text
            transform="matrix(1 0 0 1 342.6112 1053.6912)"
            className="st4 st5"
          >
            ৮৬
          </text>
          <text
            transform="matrix(1 0 0 1 373.476 1038.7469)"
            className="st4 st5"
          >
            ৮৭
          </text>
          <text
            transform="matrix(1 0 0 1 417.0114 1032.8983)"
            className="st4 st5"
          >
            ৮৮
          </text>
          <text
            transform="matrix(1 0 0 1 380.6112 1085.5306)"
            className="st4 st5"
          >
            ৮৯
          </text>
          <text
            transform="matrix(1 0 0 1 387.3532 1120.9426)"
            className="st4 st5"
          >
            ৯০
          </text>
          <text
            transform="matrix(1 0 0 1 431.7097 940.6343)"
            className="st4 st5"
          >
            ৯১
          </text>
          <text
            transform="matrix(1 0 0 1 449.1112 990.6638)"
            className="st4 st5"
          >
            ৯২
          </text>
          <text
            transform="matrix(1 0 0 1 488.4851 1080.3317)"
            className="st4 st5"
          >
            ৯৩
          </text>
          <text
            transform="matrix(1 0 0 1 478.7393 1032.8983)"
            className="st4 st5"
          >
            ৯৪
          </text>
          <text
            transform="matrix(1 0 0 1 531.374 1132.314)"
            className="st4 st5"
          >
            ৯৫
          </text>
          <text
            transform="matrix(1 0 0 1 530.0709 1175.1986)"
            className="st4 st5"
          >
            ৯৬
          </text>
          <text
            transform="matrix(1 0 0 1 492.3784 1228.4788)"
            className="st4 st5"
          >
            ৯৭
          </text>
          <text
            transform="matrix(1 0 0 1 535.2687 1246.6731)"
            className="st4 st5"
          >
            ৯৮
          </text>
          <text
            transform="matrix(1 0 0 1 449.1112 1231.0796)"
            className="st4 st5"
          >
            ৯৯
          </text>
          <text
            transform="matrix(1 0 0 1 457.6073 1122.9697)"
            className="st4 st5"
          >
            ১০১
          </text>
          <text
            transform="matrix(1 0 0 1 483.9364 1121.2679)"
            className="st4 st5"
          >
            ১০২
          </text>
          <text
            transform="matrix(1 0 0 1 428.0572 1147.9098)"
            className="st4 st5"
          >
            ১০৩
          </text>
          <text
            transform="matrix(1 0 0 1 411.158 1226.5291)"
            className="st4 st5"
          >
            ১০৪
          </text>
          <text
            transform="matrix(1 0 0 1 380.6112 1159.2793)"
            className="st4 st5"
          >
            ১০৫
          </text>
          <text
            transform="matrix(1 0 0 1 335.4821 1162.2042)"
            className="st4 st5"
          >
            ১০৬
          </text>
          <text
            transform="matrix(1 0 0 1 355.2753 1214.8348)"
            className="st4 st5"
          >
            ১০৭
          </text>
          <text
            transform="matrix(1 0 0 1 357.2318 1272.6663)"
            className="st4 st5"
          >
            ১০৮
          </text>
          <text
            transform="matrix(1 0 0 1 626.1111 1318.8241)"
            className="st4 st5"
          >
            ১০৯
          </text>
          <text
            transform="matrix(1 0 0 1 602.4832 1290.2102)"
            className="st4 st5"
          >
            ১১০
          </text>
          <text
            transform="matrix(1 0 0 1 651.6111 1275.3241)"
            className="st4 st5"
          >
            ১১১
          </text>
          <text
            transform="matrix(1 0 0 1 718.4636 1250.7476)"
            className="st4 st5"
          >
            ১১২
          </text>
          <text
            transform="matrix(1 0 0 1 701.7078 1299.3534)"
            className="st4 st5"
          >
            ১১৩
          </text>
          <text
            transform="matrix(1 0 0 1 630.459 1404.9189)"
            className="st4 st5"
          >
            ১১৪
          </text>
          <text
            transform="matrix(1 0 0 1 741.6111 1169.9987)"
            className="st4 st5"
          >
            ১১৫
          </text>
          <text
            transform="matrix(1 0 0 1 774.8577 1240.7451)"
            className="st4 st5"
          >
            ১১৬
          </text>
          <text
            transform="matrix(1 0 0 1 782.0679 1284.9701)"
            className="st4 st5"
          >
            ১১৭
          </text>
          <text
            transform="matrix(1 0 0 1 772.8958 1334.1099)"
            className="st4 st5"
          >
            ১১৮
          </text>
          <text
            transform="matrix(1 0 0 1 626.1111 1097.8752)"
            className="st4 st5"
          >
            ১১৯
          </text>
          <text
            transform="matrix(1 0 0 1 628.7761 1134.2621)"
            className="st4 st5"
          >
            ১২০
          </text>
          <text
            transform="matrix(1 0 0 1 703.6111 1111.4911)"
            className="st4 st5"
          >
            ১২২
          </text>
          <text
            transform="matrix(1 0 0 1 680.1064 1170.0001)"
            className="st4 st5"
          >
            ১২৩
          </text>
          <text
            transform="matrix(1 0 0 1 685.9075 1209.6364)"
            className="st4 st5"
          >
            ১২৪
          </text>
          <text
            transform="matrix(1 0 0 1 613.2375 1214.8348)"
            className="st4 st5"
          >
            ১২৫
          </text>
          <text
            transform="matrix(1 0 0 1 635.9822 1185.27)"
            className="st4 st5"
          >
            ১২৬
          </text>
          <text
            transform="matrix(1 0 0 1 576.2045 1154.407)"
            className="st4 st5"
          >
            ১২৭
          </text>
          <text
            transform="matrix(1 0 0 1 604.1436 1166.8583)"
            className="st4 st5"
          >
            ১২৮
          </text>
          <text
            transform="matrix(1 0 0 1 568.9447 1277.538)"
            className="st4 st5"
          >
            ১২৯
          </text>
          <text
            transform="matrix(1 0 0 1 588.874 628.7441)"
            className="st4 st5"
          >
            ১৩০
          </text>
          <text
            transform="matrix(1 0 0 1 547.2883 663.1823)"
            className="st4 st5"
          >
            ১৩১
          </text>
          <text
            transform="matrix(1 0 0 1 591.1492 678.1354)"
            className="st4 st5"
          >
            ১৩২
          </text>
          <text
            transform="matrix(1 0 0 1 576.8533 715.1632)"
            className="st4 st5"
          >
            ১৩৩
          </text>
          <text
            transform="matrix(1 0 0 1 545.0146 743.4286)"
            className="st4 st5"
          >
            ১৩৪
          </text>
          <text
            transform="matrix(1 0 0 1 552.4866 790.5361)"
            className="st4 st5"
          >
            ১৩৫
          </text>
          <text
            transform="matrix(1 0 0 1 604.7937 783.4906)"
            className="st4 st5"
          >
            ১৩৬
          </text>
          <text
            transform="matrix(1 0 0 1 617.1394 733.3567)"
            className="st4 st5"
          >
            ১৩৭
          </text>
          <text
            transform="matrix(1 0 0 1 541.1161 599.8684)"
            className="st4 st5"
          >
            ১৪১
          </text>
          <text
            transform="matrix(1 0 0 1 591.1492 576.7639)"
            className="st4 st5"
          >
            ১৪২
          </text>
          <text
            transform="matrix(1 0 0 1 588.874 536.4781)"
            className="st4 st5"
          >
            ১৪৩
          </text>
          <text
            transform="matrix(1 0 0 1 726.1006 602.101)"
            className="st4 st5"
          >
            ১৪৮
          </text>
          <text
            transform="matrix(1 0 0 1 635.3323 604.0521)"
            className="st4 st5"
          >
            ১৫০
          </text>
          <text
            transform="matrix(1 0 0 1 644.3794 651.1356)"
            className="st4 st5"
          >
            ১৫১
          </text>
          <text
            transform="matrix(1 0 0 1 684.6067 652.1359)"
            className="st4 st5"
          >
            ১৫২
          </text>
          <text
            transform="matrix(1 0 0 1 732.7974 633.2939)"
            className="st4 st5"
          >
            ১৫৩
          </text>
          <text
            transform="matrix(1 0 0 1 752.9412 656.6841)"
            className="st4 st5"
          >
            ১৫৪
          </text>
          <text
            transform="matrix(1 0 0 1 718.824 702.8176)"
            className="st4 st5"
          >
            ১৫৫
          </text>
          <text
            transform="matrix(1 0 0 1 664.6111 697.8241)"
            className="st4 st5"
          >
            ১৫৬
          </text>
          <text
            transform="matrix(1 0 0 1 784.7808 620.2977)"
            className="st4 st5"
          >
            ১৫৯
          </text>
          <text
            transform="matrix(1 0 0 1 769.3411 692.4218)"
            className="st4 st5"
          >
            ১৬২
          </text>
          <text
            transform="matrix(1 0 0 1 773.7329 728.1584)"
            className="st4 st5"
          >
            ১৬৩
          </text>
          <text
            transform="matrix(1 0 0 1 805.5691 676.1776)"
            className="st4 st5"
          >
            ১৬৪
          </text>
          <text
            transform="matrix(1 0 0 1 823.5967 737.2556)"
            className="st4 st5"
          >
            ১৬৬
          </text>
          <text
            transform="matrix(1 0 0 1 817.2681 776.2412)"
            className="st4 st5"
          >
            ১৬৭
          </text>
          <text
            transform="matrix(1 0 0 1 576.2045 882.8041)"
            className="st4 st5"
          >
            ১৬৯
          </text>
          <text
            transform="matrix(1 0 0 1 583.3524 837.9696)"
            className="st4 st5"
          >
            ১৭০
          </text>
          <text
            transform="matrix(1 0 0 1 657.5818 930.5946)"
            className="st4 st5"
          >
            ১৭১
          </text>
          <text
            transform="matrix(1 0 0 1 685.3645 960.1265)"
            className="st4 st5"
          >
            ১৭২
          </text>
          <text
            transform="matrix(1 0 0 1 740.2708 940.6343)"
            className="st4 st5"
          >
            ১৭৩
          </text>
          <text
            transform="matrix(1 0 0 1 614.9758 908.1454)"
            className="st4 st5"
          >
            ১৭৪
          </text>
          <text
            transform="matrix(1 0 0 1 653.9111 882.8037)"
            className="st4 st5"
          >
            ১৭৫
          </text>
          <text
            transform="matrix(1 0 0 1 684.061 907.5243)"
            className="st4 st5"
          >
            ১৭৬
          </text>
          <text
            transform="matrix(1 0 0 1 1309.1309 856.1632)"
            className="st4 st5"
          >
            ১৭৭
          </text>
          <text
            transform="matrix(1 0 0 1 1336.1111 832.121)"
            className="st4 st5"
          >
            ১৭৮
          </text>
          <text
            transform="matrix(1 0 0 1 1283.5105 838.1073)"
            className="st4 st5"
          >
            ১৭৯
          </text>
          <text
            transform="matrix(1 0 0 1 1266.1443 821.0233)"
            className="st4 st5"
          >
            ১৮০
          </text>
          <text
            transform="matrix(1 0 0 1 1275.2224 806.1313)"
            className="st4 st5"
          >
            ১৮১
          </text>
          <text
            transform="matrix(1 0 0 1 1312.9446 793.2987)"
            className="st4 st5"
          >
            ১৮২
          </text>
          <text
            transform="matrix(1 0 0 1 1315.1313 745.0513)"
            className="st4 st5"
          >
            ১৮৩
          </text>
          <text
            transform="matrix(1 0 0 1 1269.9448 780.5043)"
            className="st4 st5"
          >
            ১৮৪
          </text>
          <text
            transform="matrix(1 0 0 1 1248.1079 802.3242)"
            className="st4 st5"
          >
            ১৮৫
          </text>
          <text
            transform="matrix(1 0 0 1 1230.2781 780.0139)"
            className="st4 st5"
          >
            ১৮৬
          </text>
          <text
            transform="matrix(1 0 0 1 1225.886 753.3154)"
            className="st4 st5"
          >
            ১৮৭
          </text>
          <text
            transform="matrix(1 0 0 1 1250.9446 745.0513)"
            className="st4 st5"
          >
            ১৮৮
          </text>
          <text
            transform="matrix(1 0 0 1 1241.2856 716.4635)"
            className="st4 st5"
          >
            ১৮৯
          </text>
          <text
            transform="matrix(1 0 0 1 1276.8442 740.5039)"
            className="st4 st5"
          >
            ১৯০
          </text>
          <text
            transform="matrix(1 0 0 1 1307.1614 675.1871)"
            className="st4 st5"
          >
            ১৯১
          </text>
          <text
            transform="matrix(1 0 0 1 652.6746 840.5693)"
            className="st4 st5"
          >
            ১৯২
          </text>
          <text
            transform="matrix(1 0 0 1 621.6863 832.121)"
            className="st4 st5"
          >
            ১৯৩
          </text>
          <text
            transform="matrix(1 0 0 1 648.9792 788.3241)"
            className="st4 st5"
          >
            ১৯৪
          </text>
          <text
            transform="matrix(1 0 0 1 679.0935 831.1465)"
            className="st4 st5"
          >
            ১৯৫
          </text>
          <text
            transform="matrix(1 0 0 1 689.5869 764.0573)"
            className="st4 st5"
          >
            ১৯৬
          </text>
          <text
            transform="matrix(1 0 0 1 736.3708 766.0056)"
            className="st4 st5"
          >
            ১৯৭
          </text>
          <text
            transform="matrix(1 0 0 1 715.9021 817.6648)"
            className="st4 st5"
          >
            ১৯৮
          </text>
          <text
            transform="matrix(1 0 0 1 765.3386 852.3148)"
            className="st4 st5"
          >
            ১৯৯
          </text>
          <text
            transform="matrix(1 0 0 1 744.4944 837.1211)"
            className="st4 st5"
          >
            ২০০
          </text>
          <text
            transform="matrix(1 0 0 1 773.9573 804.1804)"
            className="st4 st5"
          >
            ২০১
          </text>
          <text
            transform="matrix(1 0 0 1 771.7852 768.7692)"
            className="st4 st5"
          >
            ২০২
          </text>
          <text
            transform="matrix(1 0 0 1 805.9805 832.0637)"
            className="st4 st5"
          >
            ২০৩
          </text>
          <text
            transform="matrix(1 0 0 1 715.9019 861.3242)"
            className="st4 st5"
          >
            ২০৪
          </text>
          <text
            transform="matrix(1 0 0 1 751.6914 877.2557)"
            className="st4 st5"
          >
            ২০৫
          </text>
          <text
            transform="matrix(1 0 0 1 735.5508 895.7982)"
            className="st4 st5"
          >
            ২০৬
          </text>
          <text
            transform="matrix(1 0 0 1 696.4609 920.5946)"
            className="st4 st5"
          >
            ২০৭
          </text>
          <text
            transform="matrix(1 0 0 1 715.2534 909.4451)"
            className="st4 st5"
          >
            ২০৮
          </text>
          <text
            transform="matrix(1 0 0 1 495.6328 880.2029)"
            className="st4 st5"
          >
            ২০৯
          </text>
          <text
            transform="matrix(1 0 0 1 438.4525 882.8041)"
            className="st4 st5"
          >
            ২১০
          </text>
          <text
            transform="matrix(1 0 0 1 499.5004 980.9177)"
            className="st4 st5"
          >
            ২১১
          </text>
          <text
            transform="matrix(1 0 0 1 541.1161 969.8682)"
            className="st4 st5"
          >
            ২১২
          </text>
          <text
            transform="matrix(1 0 0 1 535.2684 917.8903)"
            className="st4 st5"
          >
            ২১৩
          </text>
          <text
            transform="matrix(1 0 0 1 591.7971 951.6785)"
            className="st4 st5"
          >
            ২১৪
          </text>
          <text
            transform="matrix(1 0 0 1 545.0145 1017.955)"
            className="st4 st5"
          >
            ২১৫
          </text>
          <text
            transform="matrix(1 0 0 1 540.4653 1064.7371)"
            className="st4 st5"
          >
            ২১৬
          </text>
          <text
            transform="matrix(1 0 0 1 586.9249 1084.8823)"
            className="st4 st5"
          >
            ২১৭
          </text>
          <text
            transform="matrix(1 0 0 1 621.6863 986.7664)"
            className="st4 st5"
          >
            ২১৮
          </text>
          <text
            transform="matrix(1 0 0 1 609.9917 1025.7528)"
            className="st4 st5"
          >
            ২১৯
          </text>
          <text
            transform="matrix(1 0 0 1 635.9819 1058.9061)"
            className="st4 st5"
          >
            ২২০
          </text>
          <text
            transform="matrix(1 0 0 1 664.6111 982.8662)"
            className="st4 st5"
          >
            ২২১
          </text>
          <text
            transform="matrix(1 0 0 1 691.865 1009.506)"
            className="st4 st5"
          >
            ২২২
          </text>
          <text
            transform="matrix(1 0 0 1 690.5645 1059.5387)"
            className="st4 st5"
          >
            ২২৩
          </text>
          <text
            transform="matrix(1 0 0 1 1021.4126 720.7118)"
            className="st4 st5"
          >
            ২৩৮
          </text>
          <text
            transform="matrix(1 0 0 1 829.9409 854.6981)"
            className="st4 st5"
          >
            ২৪৭
          </text>
          <text
            transform="matrix(1 0 0 1 873.3982 867.859)"
            className="st4 st5"
          >
            ২৪৬
          </text>
          <text
            transform="matrix(1 0 0 1 791.1543 872.2571)"
            className="st4 st5"
          >
            ২৪৮
          </text>
          <text
            transform="matrix(1 0 0 1 777.6323 949.7292)"
            className="st4 st5"
          >
            ২৪৯
          </text>
          <text
            transform="matrix(1 0 0 1 784.7808 906.5205)"
            className="st4 st5"
          >
            ২৫০
          </text>
          <text transform="matrix(1 0 0 1 829.24 900.7188)" className="st4 st5">
            ২৫১
          </text>
          <text
            transform="matrix(1 0 0 1 831.5623 934.7855)"
            className="st4 st5"
          >
            ২৫২
          </text>
          <text
            transform="matrix(1 0 0 1 864.7009 934.7855)"
            className="st4 st5"
          >
            ২৫৩
          </text>
          <text
            transform="matrix(1 0 0 1 884.6377 956.226)"
            className="st4 st5"
          >
            ২৫৪
          </text>
          <text
            transform="matrix(1 0 0 1 820.4983 962.0001)"
            className="st4 st5"
          >
            ২৫৫
          </text>
          <text
            transform="matrix(1 0 0 1 851.0347 984.167)"
            className="st4 st5"
          >
            ২৫৬
          </text>
          <text transform="matrix(1 0 0 1 856.9048 1030.3)" className="st4 st5">
            ২৫৭
          </text>
          <text
            transform="matrix(1 0 0 1 886.1418 1053.6912)"
            className="st4 st5"
          >
            ২৫৮
          </text>
          <text
            transform="matrix(1 0 0 1 901.1406 1009.506)"
            className="st4 st5"
          >
            ২৫৯
          </text>
          <text
            transform="matrix(1 0 0 1 801.4241 986.7664)"
            className="st4 st5"
          >
            ২৬০
          </text>
          <text
            transform="matrix(1 0 0 1 750.991 978.9797)"
            className="st4 st5"
          >
            ২৬১
          </text>
          <text
            transform="matrix(1 0 0 1 757.4553 1022.6501)"
            className="st4 st5"
          >
            ২৬২
          </text>
          <text
            transform="matrix(1 0 0 1 773.9578 1049.5941)"
            className="st4 st5"
          >
            ২৬৩
          </text>
          <text
            transform="matrix(1 0 0 1 812.0664 1025.7533)"
            className="st4 st5"
          >
            ২৬৪
          </text>
          <text
            transform="matrix(1 0 0 1 958.3069 1064.8375)"
            className="st4 st5"
          >
            ২৬৫
          </text>
          <text
            transform="matrix(1 0 0 1 954.3782 1104.8013)"
            className="st4 st5"
          >
            ২৬৬
          </text>
          <text transform="matrix(1 0 0 1 947.1682 1133.3)" className="st4 st5">
            ২৬৭
          </text>
          <text
            transform="matrix(1 0 0 1 840.666 1075.7762)"
            className="st4 st5"
          >
            ২৬৮
          </text>
          <text
            transform="matrix(1 0 0 1 882.5725 1080.9819)"
            className="st4 st5"
          >
            ২৬৯
          </text>
          <text
            transform="matrix(1 0 0 1 862.1038 1106.9731)"
            className="st4 st5"
          >
            ২৭০
          </text>
          <text
            transform="matrix(1 0 0 1 863.4009 1171.948)"
            className="st4 st5"
          >
            ২৭১
          </text>
          <text
            transform="matrix(1 0 0 1 894.2661 1140.1149)"
            className="st4 st5"
          >
            ২৭২
          </text>
          <text
            transform="matrix(1 0 0 1 870.0728 1304.6251)"
            className="st4 st5"
          >
            ২৭৩
          </text>
          <text
            transform="matrix(1 0 0 1 802.9719 1059.5387)"
            className="st4 st5"
          >
            ২৭৪
          </text>
          <text
            transform="matrix(1 0 0 1 773.7329 1089.4498)"
            className="st4 st5"
          >
            ২৭৫
          </text>
          <text
            transform="matrix(1 0 0 1 809.47 1112.8223)"
            className="st4 st5"
          >
            ২৭৬
          </text>
          <text
            transform="matrix(1 0 0 1 816.137 1178.1793)"
            className="st4 st5"
          >
            ২৭৭
          </text>
          <text
            transform="matrix(1 0 0 1 981.8892 1155.9015)"
            className="st4 st5"
          >
            ২৭৮
          </text>
          <text
            transform="matrix(1 0 0 1 1032.3391 1168.0507)"
            className="st4 st5"
          >
            ২৭৯
          </text>
          <text
            transform="matrix(1 0 0 1 1008.7512 1204.3855)"
            className="st4 st5"
          >
            ২৮০
          </text>
          <text
            transform="matrix(1 0 0 1 1047.7341 1223.3873)"
            className="st4 st5"
          >
            ২৮১
          </text>
          <text
            transform="matrix(1 0 0 1 1078.199 1228.4789)"
            className="st4 st5"
          >
            ২৮২
          </text>
          <text
            transform="matrix(1 0 0 1 1120.3784 1249.5928)"
            className="st4 st5"
          >
            ২৮৩
          </text>
          <text
            transform="matrix(1 0 0 1 1096.561 1263.974)"
            className="st4 st5"
          >
            ২৮৪
          </text>
          <text
            transform="matrix(1 0 0 1 1066.9043 1262.5022)"
            className="st4 st5"
          >
            ২৮৫
          </text>
          <text
            transform="matrix(1 0 0 1 1040.5315 1269.9237)"
            className="st4 st5"
          >
            ২৮৬
          </text>
          <text
            transform="matrix(1 0 0 1 1047.7341 1290.424)"
            className="st4 st5"
          >
            ২৮৭
          </text>
          <text
            transform="matrix(1 0 0 1 1100.4033 1287.424)"
            className="st4 st5"
          >
            ২৮৮
          </text>
          <text
            transform="matrix(1 0 0 1 1071.9116 1308.0245)"
            className="st4 st5"
          >
            ২৮৯
          </text>
          <text
            transform="matrix(1 0 0 1 1126.6885 1318.8245)"
            className="st4 st5"
          >
            ২৯০
          </text>
          <text
            transform="matrix(1 0 0 1 1126.6892 1372.1066)"
            className="st4 st5"
          >
            ২৯১
          </text>
          <text
            transform="matrix(1 0 0 1 1090.6553 1381.9359)"
            className="st4 st5"
          >
            ২৯২
          </text>
          <text
            transform="matrix(1 0 0 1 972.0625 1244.3514)"
            className="st4 st5"
          >
            ২৯৩
          </text>
          <text
            transform="matrix(1 0 0 1 1102.5098 1434.2323)"
            className="st4 st5"
          >
            ২৯৪
          </text>
          <text
            transform="matrix(1 0 0 1 1088.2202 1489.3817)"
            className="st4 st5"
          >
            ২৯৫
          </text>
          <text
            transform="matrix(1 0 0 1 1126.6887 1526.4701)"
            className="st4 st5"
          >
            ২৯৬
          </text>
          <text
            transform="matrix(1 0 0 1 1134.3167 1594.8635)"
            className="st4 st5"
          >
            ২৯৭
          </text>
          <text
            transform="matrix(1 0 0 1 1083.3467 1045.2452)"
            className="st4 st5"
          >
            ২৯৮
          </text>
          <text
            transform="matrix(1 0 0 1 1168.2776 1165.7725)"
            className="st4 st5"
          >
            ২৯৯
          </text>
          <text
            transform="matrix(1 0 0 1 1208.9048 1439.588)"
            className="st4 st5"
          >
            ৩০০
          </text>
        </g>
        {/* Seat no end */}
      </svg>
    </div>
  );
};

export default SeatMap;
