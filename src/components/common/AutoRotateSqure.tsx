"use client";

import { motion } from "framer-motion";
import img1 from "@/assets/partyLogo/bnp.jpg";
import img2 from "@/assets/partyLogo/jamat-new.webp";
import img3 from "@/assets/partyLogo/ncp.jpeg";

import { useEffect, useRef, useState } from "react";

export default function RotatingCube() {
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number | null>(null);
  useEffect(() => {
    const animate = () => {
      setRotation((prev) => prev + 0.3);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={{ left: -1100, right: 0, top: -370, bottom: 0 }}
      className="fixed bottom-[5%] right-[5%] z-50 hidden lg:block cursor-move"
    >
      <div className="">
        <div
          className="relative w-[90px] h-[90px]"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg) rotateX(4deg)`,
          }}
        >
          <div
            className="absolute w-[90px] h-[90px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://kalbela.ideahubbd.com/1.jpg)`,
              transform: "translateZ(45px)",
            }}
          ></div>
          <div
            className="absolute w-[90px] h-[90px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://kalbela.ideahubbd.com/4.jpg)`,
              transform: "rotateY(90deg) translateZ(45px)",
            }}
          ></div>
          <div
            className="absolute w-[90px] h-[90px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://kalbela.ideahubbd.com/3.jpg)`,
              transform: "rotateY(180deg) translateZ(45px)",
            }}
          ></div>
          <div
            className="absolute w-[90px] h-[90px] bg-cover bg-center"
            style={{
              backgroundImage: `url(https://kalbela.ideahubbd.com/2.jpg)`,
              transform: "rotateY(-90deg) translateZ(45px)",
            }}
          ></div>
          <div
            className="absolute w-[90px] h-[90px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${img2.src})`,
              transform: "rotateX(90deg) translateZ(45px)",
            }}
          ></div>
          <div
            className="absolute w-[90px] h-[90px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${img3.src})`,
              transform: "rotateX(-90deg) translateZ(45px)",
            }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
