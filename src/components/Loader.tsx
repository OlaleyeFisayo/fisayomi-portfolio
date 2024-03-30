import { loaderProps } from "../types";
import InfiniteScroller from "./InfiniteScroller";

export default function Loader({ currentYear }: loaderProps) {
  const scrollerArray = new Array(16).fill(" ");

  return (
    <section
      id="loader"
      className="h-screen w-screen bg-black text-offWhite fixed z-30 shutter overflow-hidden"
    >
      <div
        id="infinite"
        className="fixed h-screen w-[550vw] md:w-[200vw] flex-nowrap flex-col rotate-[315deg] top-[-100%] left-[-250%] z-30 md:top-[-25%] md:left-[-80%]"
      >
        {scrollerArray.map((items, index) => {
          return (
            <InfiniteScroller
              key={index + items}
              direction={`${
                index % 2 === 0
                  ? "animate-infinite-scroll-right"
                  : "animate-infinite-scroll-left"
              }`}
              text="SOFTWARE ENGINEER"
            />
          );
        })}
      </div>

      <div className=" w-screen h-screen flex justify-center items-center px-1 py-1 flex-col">
        <h1 className="text-center text-4xl z-40" id="title-1">
          OlaleyeFisayo
        </h1>
        <p className="text-center text-4xl z-40 block" id="title-2">
          <span className="font-extrabold">@{currentYear}</span> Demofolio
        </p>
      </div>
    </section>
  );
}
