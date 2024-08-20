import { useRef } from "react";
import Loader from "../components/Loader";
import Welcome from "../components/secitons/Welcome";
import About from "../components/secitons/About";
import Navbar from "../components/Navbar";
import Services from "../components/secitons/Services";

export default function Home() {
  const sections = useRef(null);
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = new Date().getMonth();

  return (
    <div
      className="relative bg-neutral-300 font-Grotesk transition-all"
      ref={sections}
    >
      <Navbar />
      <Loader currentYear={currentYear} />
      <Welcome currentMonth={currentMonth} currentYear={currentYear} />
      <div
        id="black-section"
        className="shutter mx-5 min-h-[100dvh] overflow-hidden rounded-[2rem] bg-black"
      >
        <Services />
        <About />
      </div>
    </div>
  );
}
