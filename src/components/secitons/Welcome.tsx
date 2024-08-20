import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { formatMonth } from "../../functions/formatMonth";
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
      className="shutter relative h-[100dvh] w-full bg-neutral-300 px-9"
    >
      <nav
        className="section-max-width flex items-center justify-between gap-2 py-4"
        id="welcome-nav"
      >
        <Link
          to="/"
          className="relative h-full max-w-[70px]"
          onMouseOut={mouseOut}
          onMouseMove={moveLogo}
        >
          <div ref={containerRef} id="image-container">
            <img
              src={logo}
              alt="logo"
              className="h-full w-full"
              id="image"
              onMouseOut={mouseOut}
            />
          </div>
        </Link>
        <div>
          <h1 className="select-none text-lg font-normal uppercase text-neutral-500 sm:text-xl">
            web developer
          </h1>
        </div>
        {/* <div>
          <h1 className="select-none font-extrabold text-neutral-400">
            Available for work {formatMonth(currentMonth)} '
            {currentYear.slice(2, 4)}
          </h1>
        </div> */}
        <div className="flex flex-col sm:flex-row sm:gap-4">
          {navsList.map((nav) => (
            <Links
              key={nav}
              className="nav-slide uppercase tracking-wide text-neutral-500"
              link={nav}
            />
          ))}
        </div>
      </nav>
      <section className="section-max-width relative h-[calc(100dvh-103px)] w-full py-8">
        {/* <h1 className="text-black xl:text-[10rem] lg:text-9xl md:text-5xl text-4xl font-bold uppercase m-auto flex justify-center items-center">Olaleye Fisayo</h1> */}
      </section>
    </div>
  );
}
