import { useRef } from "react";
import Loader from "../components/Loader";
import Welcome from "../components/secitons/Welcome";
import About from "../components/secitons/About";
import { useGsapAnimation } from "../hook/useGsapAnimation";

export default function Home() {
  const sections = useRef(null);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  useGsapAnimation(sections);

  return (
    <div className="font-Grotesk relative transition-all" ref={sections}>
      <Loader currentYear={currentYear} />
      <Welcome currentMonth={currentMonth} currentYear={currentYear} />
      <About />
    </div>
  );
}
