import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Loader from "./components/Loader";

function App() {
  const sections = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1"], {
        opacity: 0,
        y: "-=30",
        duration: 1.5,
      })
        .from(["#title-2"], {
          opacity: 0,
          duration: 1.5,
          y: "-=30",
          stagger: 0.5,
        })
        .to("#loader", {
          stagger: 0.5,
          ease: "power1.inOut",
          yPercent: -100,
          duration: 1.5,
          borderRadius: "50%",
        });
    }, sections);

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-Montserrat relative" ref={sections}>
      <Loader />
    </div>
  );
}

export default App;
