import { useLayoutEffect, useRef } from "react";
import Loader from "../components/Loader";
import gsap from "gsap";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  const sections = useRef(null);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1"], {
        opacity: 0,
        y: "-=30",
        duration: 1,
      })
        .from(["#title-2"], {
          opacity: 0,
          duration: 0.8,
          y: "-=30",
          stagger: 0.5,
        })
        .to("#infinite", {
          opacity: 0,
        })
        .to("#loader", {
          stagger: 0.6,
          ease: "none",
          yPercent: -100,
          duration: 1.5,
          borderRadius: "50%",
        })
        .from("#ellipse", {
          opacity: 0,
        })
        .from(["#name-title-1", "#name-title-2", "#name-title-3"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
        });
    }, sections);

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-Grotesk relative transition-all" ref={sections}>
      <Loader currentYear={currentYear} />
      <WelcomeSection currentMonth={currentMonth} currentYear={currentYear} />
    </div>
  );
}
