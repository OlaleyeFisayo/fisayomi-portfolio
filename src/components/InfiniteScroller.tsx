import { infiniteScrollerProps } from "../types";

export default function InfiniteScroller({
  direction,
  text,
}: infiniteScrollerProps) {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden gap-5 z-30 items-center">
      <div
        className={`flex gap-5 items-center justify-center ${direction} z-30 select-none`}
      >
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
      </div>
      <div
        className={`flex gap-5 items-center justify-center ${direction} z-30 select-none`}
      >
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          {text}
        </p>
      </div>
    </div>
  );
}
