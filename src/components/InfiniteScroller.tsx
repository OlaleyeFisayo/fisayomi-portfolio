type prop = {
  direction: string;
};

export default function InfiniteScroller({ direction }: prop) {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden gap-5 mb-3 z-30">
      <div
        className={`flex gap-5 items-center justify-center ${direction} z-30 select-none`}
      >
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
      </div>
      <div
        className={`flex gap-5 items-center justify-center ${direction} z-30 select-none`}
      >
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
        <p className="text-5xl text-charcoal font-extrabold block text-nowrap">
          SOFTWARE ENGINEER
        </p>
      </div>
    </div>
  );
}
