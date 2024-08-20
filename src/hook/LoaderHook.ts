import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function LoaderHook() {
  const stepArray = [11, 15, 10, 9];
  const [loading, setLoading] = useState(0);
  const [step] = useState(
    stepArray[Math.floor(Math.random() * stepArray.length)],
  );
  const timeInterval = useRef<any>(null);

  useEffect(() => {
    timeInterval.current = setInterval(() => {
      setLoading((prev) => prev + step);
    }, 200);
    return () => {
      clearInterval(timeInterval.current);
    };
  });

  useEffect(() => {
    if (loading >= 100) {
      gsap.to("#loader", {
        stagger: 1,
        ease: "power1.out",
        yPercent: -100,
        duration: 1,
        borderRadius: "50%",
        display: "none",
      });
      clearInterval(timeInterval.current);
      setLoading(0);
    }
  }, [loading]);

  return { loading };
}
