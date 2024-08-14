import { useRef } from "react";
import Loader from "../components/Loader";
import Welcome from "../components/secitons/Welcome";
import About from "../components/secitons/About";
import Navbar from "../components/Navbar";

export default function Home() {
  const sections = useRef(null);
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = new Date().getMonth();

  return (
    <div className="font-Grotesk relative transition-all" ref={sections}>
      <Navbar />
      <Loader currentYear={currentYear} />
      <Welcome currentMonth={currentMonth} currentYear={currentYear} />
      <About />
    </div>
  );
}
