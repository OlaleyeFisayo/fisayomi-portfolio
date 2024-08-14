import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 60%",
          toggleActions: "restart none none reverse",
        },
      })
      .to(["#home", "#about"], {
        duration: 0.1,
        backgroundColor: "black",
        ease: "back.in",
      })
      .to("#hamburger", {
        duration: 0.1,
        opacity: 1,
        display: "flex",
      });
  });

  return (
    <section
      id="about"
      className="w-full min-h-[100dvh] bg-neutral-300 shutter grid place-items-center px-9"
    >
      <div className="w-full">
        <h1 className="text-neutral-500 font-bold xl:text-8xl lg:text-7xl md:text-5xl text-4xl">
          I create elevating digital experiences that inspire and connect with
          people through development.
        </h1>
      </div>
    </section>
  );
}
