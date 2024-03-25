type prop = {
  delay: string;
};

export default function InfiniteScroller({ delay }: prop) {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden gap-5 mb-3 z-30">
      <div
        className={`flex gap-5 items-center justify-center animate-infinite-scroll delay-[${delay}] z-30`}
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
      </div>
      <div
        className={`flex gap-5 items-center justify-center animate-infinite-scroll delay-[${delay}] z-30`}
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
      </div>
    </div>
  );
}
