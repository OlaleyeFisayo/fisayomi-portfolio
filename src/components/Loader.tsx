import InfiniteScroller from "./InfiniteScroller";

export default function Loader() {
  const scrollerArray = new Array(12).fill("");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <section
      id="loader"
      className="h-screen w-screen bg-loader text-offWhite absolute z-30"
    >
      <div className="fixed h-screen w-[150vw] flex-nowrap overflow-hidden flex-col rotate-[315deg] top-[-40%] left-[-70%] z-30">
        {scrollerArray.map((items, index) => {
          return <InfiniteScroller key={index} delay={`${index}00ms`} />;
        })}
      </div>

      <div className="z-40 w-screen h-screen flex justify-center items-center">
        <h1 className="text-center text-4xl">
          OlaleyeFisayo <span className="font-extrabold">@{currentYear}</span> <br />
          <p className="text-center text-4xl">Demofolio</p>
        </h1>
      </div>
    </section>
  );
}
