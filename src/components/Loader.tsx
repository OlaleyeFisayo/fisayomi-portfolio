import InfiniteScroller from "./InfiniteScroller";

export default function Loader() {
  const scrollerArray = new Array(16).fill(" ");
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="loader"
      className="h-screen w-screen bg-black text-offWhite absolute z-30 shutter"
    >
      <div className="fixed h-screen w-[550vw] md:w-[200vw] flex-nowrap flex-col rotate-[315deg] top-[-100%] left-[-250%] z-30 md:top-[-25%] md:left-[-80%]">
        {scrollerArray.map((items, index) => {
          return (
            <InfiniteScroller
              key={index}
              direction={`${index % 2 === 0 ? "right" : "left"}`}
            />
          );
        })}
      </div>

      <div className=" w-screen h-screen flex justify-center items-center px-1 py-1">
        <h1 className="text-center text-4xl z-40" id="title-1">
          OlaleyeFisayo <span className="font-extrabold">@{currentYear}</span>{" "}
          <br />
          <p className="text-center text-4xl z-40" id="title-2">
            Demofolio
          </p>
        </h1>
      </div>
    </section>
  );
}
