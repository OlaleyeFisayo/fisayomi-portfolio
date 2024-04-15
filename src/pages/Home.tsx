import { useLayoutEffect, useRef } from "react";
import Loader from "../components/Loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Welcome from "../components/secitons/Welcome";
import About from "../components/secitons/About";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sections = useRef(null);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 30%",
          toggleActions: "restart none none reverse",
        },
      });
      t1.from("#title-1", {
        opacity: 0,
        y: "-=30",
        duration: 1,
      })
        .from("#title-2", {
          opacity: 0,
          duration: 0.7,
          y: "-=30",
          stagger: 1,
        })
        .to("#title-2", {
          duration: 0.7,
        })
        .to("#loader", {
          stagger: 1,
          ease: "power1.out",
          yPercent: -100,
          duration: 1,
          borderRadius: "50%",
        })
        .from("#ellipse", {
          width: 0,
          height: 0,
        })
        .from(["#name-title-1", "#name-title-2", "#name-title-3"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
        });

      t2.to(["#home", "#about"], {
        backgroundColor: "black",
        duration: 0.5,
      })
      .to(["#ellipse", "#name-container"], {
        opacity: 0,
        duration: 0.3,
      });
    }, sections);

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-Grotesk relative transition-all" ref={sections}>
      <Loader currentYear={currentYear} />
      <Welcome currentMonth={currentMonth} currentYear={currentYear} />
      <About />
    </div>
  );
}
