import { loaderProps } from "../types";

export default function Loader({ currentYear }: loaderProps) {
  return (
    <section
      id="loader"
      className="h-screen w-screen bg-black text-neutral-400 fixed z-30 shutter overflow-hidden"
    >
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
