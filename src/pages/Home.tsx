import { useRef } from "react";
import Loader from "../components/Loader";
import Welcome from "../components/secitons/Welcome";
import About from "../components/secitons/About";
import Navbar from "../components/Navbar";
import Services from "../components/secitons/Services";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

export default function Home() {
  const sections = useRef(null);
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = new Date().getMonth();

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to("#services", {
      yPercent: -100,
    });

    ScrollTrigger.create({
      animation: t1,
      trigger: "#scrollContainer",
      start: "top top",
      pin: true,
      end: "bottom center",
      scrub: 1,
      pinSpacing: false,
    });
  });

  return (
    <div
      className="shutter relative w-full select-none bg-neutral-300 font-Grotesk transition-all"
      ref={sections}
      id="scrollContainer"
    >
      <Navbar />
      <Loader currentYear={currentYear} />
      <Welcome currentMonth={currentMonth} currentYear={currentYear} />
      <section
        id="services"
        className="shutter relative z-40 min-h-[100dvh] overflow-hidden rounded-3xl bg-black px-5 py-10"
      >
        <Services />
        <About />
      </section>
    </div>
  );
}
