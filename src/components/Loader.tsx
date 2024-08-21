import { useGSAP } from "@gsap/react";
import { loaderProps } from "../types";
import gsap from "gsap";
import { LoaderHook } from "../hook/LoaderHook";

export default function Loader({ currentYear }: loaderProps) {
  const { loading } = LoaderHook();

  useGSAP(() => {
    gsap.from(["#title-1", "#title-2"], {
      opacity: 0,
      y: "-=30",
      duration: 0.5,
      stagger: 0.5,
    });
  });

  return (
    <section
      id="loader"
      className="shutter fixed z-50 h-screen w-screen overflow-hidden bg-black text-neutral-400"
    >
      <div className="relative flex h-screen w-screen flex-col items-center justify-center px-1 py-1">
        <h1 className="z-40 text-center text-4xl" id="title-1">
          OlaleyeFisayo
        </h1>
        <p className="z-40 block text-center text-4xl" id="title-2">
          @Portfolio
          <span className="font-extrabold">
            {" "}
            '{currentYear.slice(2, 4)}
          </span>{" "}
        </p>
        <div className="absolute bottom-4 right-9">
          <h1 className="text-lg font-bold uppercase">Loading: {loading}%</h1>
        </div>
      </div>
    </section>
  );
}
