import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { formatMonth } from "../functions";
import { welcomeSectionProps } from "../types";
import gsap from "gsap";

export default function WelcomeSection({
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
        duration: 0.5,
        x: offsetX - rect.width / 2,
        y: offsetY - rect.height / 2,
        ease: "power1.inOut",
        overwrite: "auto",
      });
    }
  };

  const mouseOut = () => {
    gsap.to(containerRef.current, {
      duration: 0.5,
      x: 0,
      y: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div className="shutter w-full bg-beige px-4 relative">
      <nav className="flex justify-between items-center py-3 gap-2">
        <Link
          to="/"
          className="max-w-[75px] h-full relative"
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
          <h1 className="select-none font-extrabold text-taupe opacity-55">
            Available for work {formatMonth(currentMonth)} {currentYear}
          </h1>
        </div>
      </nav>
      <section className="w-full reducedHeight relative flex justify-center items-center py-8">
        <div
          id="ellipse"
          className="absolute bg-ball ellipse"
        ></div>
        <div className="relative flex flex-col gap-9">
          <h1
            id="name-title-1"
            className="font-extrabold text-secondary lg:text-8xl md:text-7xl sm:text-6xl text-4xl text-center block select-none w-full"
          >
            HEY, I'M FISAYO.
          </h1>
          <h1
            id="name-title-2"
            className="font-extrabold lg:text-8xl md:text-7xl sm:text-6xl text-4xl text-center block select-none textStroke"
          >
            HEY, I'M FISAYO.
          </h1>
          <h1
            id="name-title-3"
            className="font-extrabold text-secondary lg:text-8xl md:text-7xl sm:text-6xl text-4xl text-center block select-none"
          >
            HEY, I'M FISAYO.
          </h1>
        </div>
      </section>
    </div>
  );
}
