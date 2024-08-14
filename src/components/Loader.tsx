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
      duration: 1,
      stagger: 0.5,
    });
  });

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
          <span className="font-extrabold">@'{currentYear.slice(2, 4)}</span>{" "}
          Demofolio
        </p>
        <div className="absolute bottom-4 right-9">
          <h1 className="font-bold uppercase text-lg">Loading: {loading}%</h1>
        </div>
      </div>
    </section>
  );
}
