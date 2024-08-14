import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { formatMonth } from "../../functions";
import { welcomeSectionProps } from "../../types";
import gsap from "gsap";
import Links from "../Links";

export default function Welcome({
  currentYear,
  currentMonth,
}: welcomeSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const moveLogo = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      gsap.to(containerRef.current, {
        duration: 0.4,
        x: offsetX - rect.width / 2,
        y: offsetY - rect.height / 2,
        ease: "power1.inOut",
        overwrite: "auto",
      });
    }
  };

  const mouseOut = () => {
    gsap.to(containerRef.current, {
      duration: 0.4,
      x: 0,
      y: 0,
      ease: "power1.inOut",
    });
  };
  const navsList = ["#services", "#work", "#about", "/contact"];

  return (
    <div
      id="home"
      className="relative shutter bg-neutral-300 w-full px-9 h-[100dvh]"
    >
      <nav
        className="flex justify-between items-center py-4 gap-2"
        id="welcome-nav"
      >
        <Link
          to="/"
          className="max-w-[70px] h-full relative"
          onMouseOut={mouseOut}
          onMouseMove={moveLogo}
        >
          <div ref={containerRef} id="image-container">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full"
              id="image"
              onMouseOut={mouseOut}
            />
          </div>
        </Link>
        <div>
          <h1 className="select-none font-normal text-neutral-500 text-xl uppercase">
            web developer
          </h1>
        </div>
        {/* <div>
          <h1 className="select-none font-extrabold text-neutral-400">
            Available for work {formatMonth(currentMonth)} '
            {currentYear.slice(2, 4)}
          </h1>
        </div> */}
        <div className="flex gap-4">
          {navsList.map((nav) => (
            <Links
              key={nav}
              className="nav-slide uppercase text-neutral-500 tracking-wide"
              link={nav}
            />
          ))}
        </div>
      </nav>
      <section className="w-full home-height relative flex justify-center items-center py-8"></section>
    </div>
  );
}
