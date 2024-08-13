import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { formatMonth } from "../../functions";
import { welcomeSectionProps } from "../../types";
import gsap from "gsap";

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
        duration: 0.3,
        x: offsetX - rect.width / 2,
        y: offsetY - rect.height / 2,
        ease: "power1.inOut",
        overwrite: "auto",
      });
    }
  };

  const mouseOut = () => {
    gsap.to(containerRef.current, {
      duration: 0.3,
      x: 0,
      y: 0,
      ease: "power1.inOut",
    });
  };
  const nameArray = new Array(3).fill("HEY, I'M FISAYO.");

  return (
    <div
      id="home"
      className="relative shutter bg-slate-50 w-full  px-4 h-[100dvh]"
    >
      <nav
        className="flex justify-between items-center py-2 gap-2"
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
          <h1 className="select-none font-extrabold text-neutral-400">
            Available for work {formatMonth(currentMonth)} {currentYear}
          </h1>
        </div>
      </nav>
      <section className="w-full home-height relative flex justify-center items-center py-8">
        <div id="ellipse" className="absolute bg-neutral-800 ellipse"></div>
        <div id="name-container" className="relative flex flex-col gap-9">
          {nameArray.map((name, index) => {
            return (
              <h1
                id={`name-title-${index + 1}`}
                className={`font-extrabold ${
                  index % 2 === 0 ? "text-neutral-400" : "text-black textStroke"
                } lg:text-8xl md:text-7xl sm:text-6xl text-4xl text-center block select-none w-full`}
                key={index}
              >
                {name}
              </h1>
            );
          })}
        </div>
      </section>
    </div>
  );
}
