import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { formatMonth } from "../../functions/formatMonth";
import { welcomeSectionProps } from "../../types";
import gsap from "gsap";
import Links from "../Links";
import { useGSAP } from "@gsap/react";

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

  useGSAP(() => {
    gsap.from(["#name-title", "#work-title", "#brief-info"], {
      opacity: 0,
      y: "-=50",
      delay: 1.65,
      duration: 1,
    });

    gsap.to("#welcome-nav", {
      scrollTrigger: {
        trigger: "#black-section",
        start: "top bottom",
        pin: "#home",
        scrub: true,
      },
      yPercent: -100,
      duration: 0.5,
    });
  });

  return (
    <div
      id="home"
      className="shutter relative h-[100dvh] w-full bg-neutral-300 px-5"
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
      <section className="section-max-width relative grid h-[calc(100dvh-157px)] w-full items-end py-8 sm:h-[calc(100dvh-103px)]">
        <h1
          className="welcome-header to flex items-center justify-center text-clip font-bold uppercase text-neutral-900"
          id="name-title"
        >
          Hey, I'm Fisayo
        </h1>
        <div className="grid grid-cols-2 justify-between gap-4">
          <h2 className="w-[400px] max-w-full text-neutral-900" id="brief-info">
            Frustrated with websites that don't reflect your brand or drive
            growth? I craft premium web experiences that captivate and help you
            focus on growing your business.
          </h2>
          <div>
            <h1
              className="select-none text-right text-xl font-extrabold text-neutral-600"
              id="work-title"
            >
              Available for work:
              <span className="block text-6xl text-neutral-600">
                {formatMonth(currentMonth).slice(0, 3)} '
                {currentYear.slice(2, 4)}
              </span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
