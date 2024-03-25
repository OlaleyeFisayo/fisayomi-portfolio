import InfiniteScroller from "./InfiniteScroller";

export default function Loader() {
  const scrollerArray = new Array(18).fill("");
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="loader"
      className="h-screen w-screen bg-loader text-offWhite absolute z-30"
    >
      <div className="fixed h-screen w-[550vw] md:w-[150vw] flex-nowrap overflow-hidden flex-col rotate-[315deg] top-[-100%] left-[-200%] z-30 md:top-[-25%] md:left-[-80%]">
        {scrollerArray.map((items, index) => {
          return (
            <InfiniteScroller
              key={index}
              delay={`${index}00ms`}
              direction={`${index % 2 === 0 ? "right" : "left"}`}
            />
          );
        })}
      </div>

      <div className=" w-screen h-screen flex justify-center items-center px-1 py-1">
        <h1 className="text-center text-4xl z-40">
          OlaleyeFisayo <span className="font-extrabold">@{currentYear}</span>{" "}
          <br />
          <p className="text-center text-4xl z-40">Demofolio</p>
        </h1>
      </div>
    </section>
  );
}
