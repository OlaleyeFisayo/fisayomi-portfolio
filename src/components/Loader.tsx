import { useGSAP } from "@gsap/react";
import { loaderProps } from "../types";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Loader({ currentYear }: loaderProps) {
  const [loading, setLoading] = useState(0);
  const [step] = useState(Math.ceil(Math.random() * 10));
  const timeInterval = useRef<any>(null);

  useGSAP(() => {
    gsap.from(["#title-1", "#title-2"], {
      opacity: 0,
      y: "-=30",
      duration: 1,
      stagger: 0.5,
    });
  });

  useEffect(() => {
    timeInterval.current = setInterval(() => {
      setLoading((prev) => prev + step);
    }, 150);
    return () => {
      clearInterval(timeInterval.current);
    };
  }, []);

  useEffect(() => {
    if (loading >= 100) {
      gsap.to("#loader", {
        stagger: 1,
        ease: "power1.out",
        yPercent: -100,
        duration: 1,
        borderRadius: "50%",
        display: "none",
      });
      clearInterval(timeInterval.current);
      setLoading(0);
    }
  }, [loading]);

  return (
    <section
      id="loader"
      className="h-screen w-screen bg-black text-neutral-400 fixed z-30 shutter overflow-hidden"
    >
      <div className=" w-screen h-screen flex justify-center items-center px-1 py-1 flex-col relative">
        <h1 className="text-center text-4xl z-40" id="title-1">
          OlaleyeFisayo
        </h1>
        <p className="text-center text-4xl z-40 block" id="title-2">
          <span className="font-extrabold">@{currentYear}</span> Demofolio
        </p>
        <div className="absolute bottom-4 right-9">
          <h1 className="font-bold uppercase text-lg">Loading: {loading}%</h1>
        </div>
      </div>
    </section>
  );
}
