import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useGsap(sectionRef: React.MutableRefObject<null>) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
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
          display: "none",
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

      // about section navbar
      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 20%",
          toggleActions: "restart none none reverse",
        },
      });
      t2.to(["#home", "#about"], {
        backgroundColor: "black",
        ease: "back.in",
      })
        .to("#hamburger", {
          opacity: 1,
          backgroundColor: "rgba(248 250 252, 0.85)",
        })
        .to(["#ellipse", "#name-container"], {
          opacity: 0,
        });
    }, sectionRef);

    return () => ctx.revert();
  });
}
