import { useEffect, useState } from "react";
import Links from "./Links";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (showMenu) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [showMenu]);

  const navsList = ["#home", "#services", "#work", "#about", "/contact"];
  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/fisayo-festus-olaleye-67a778227/",
    },
    {
      name: "GitHub",
      link: "https://github.com/OlaleyeFisayo",
    },
  ];

  return (
    <div className="relative">
      <div
        className={`shutter fixed right-4 top-8 z-20 hidden h-auto cursor-pointer flex-col gap-2 rounded-full bg-neutral-500 px-3 py-7 opacity-0 transition-all hover:scale-90`}
        onClick={toggleMenu}
        id="hamburger"
      >
        <div
          className={`h-[3px] w-12 rounded-full bg-neutral-300 transition-all ${showMenu && "relative translate-y-2 rotate-45"}`}
        ></div>
        <div
          className={`h-[3px] w-12 rounded-full bg-neutral-300 transition-all ${showMenu && "relative -translate-y-2 -rotate-45"}`}
        ></div>
      </div>
      <nav
        id="navbar"
        className={`${showMenu ? "translate-x-0" : "translate-x-[100%]"} fixed left-0 top-0 z-[1] flex h-[100dvh] w-full transition-transform duration-500`}
      >
        {/* The black right section start */}
        <div
          className={`w-3/4 bg-black ${showMenu ? "opacity-5" : "opacity-0"}`}
          onClick={toggleMenu}
          id="navbar-content"
        ></div>
        {/* The black right section end */}
        <div className="shutter h-screen w-2/4 rounded-lg bg-neutral-500 px-6 pb-6 pt-28">
          <div className="flex flex-col gap-1">
            {navsList.map((nav) => (
              <Links
                key={nav}
                className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} nav-slide text-6xl font-extrabold uppercase tracking-wider text-neutral-300 transition-all duration-1000`}
                link={nav}
                onClick={toggleMenu}
              />
            ))}
          </div>
          <footer className="absolute bottom-6">
            <div>
              <h1 className="text-xl font-extrabold uppercase tracking-widest text-neutral-700">
                Email Address:
              </h1>
              <a
                href="mailto:festusolaleyef@gmail.com"
                className="nav-slide text-neutral-300"
              >
                festusolaleyef@gmail.com
              </a>
            </div>
            <div className="mt-2 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  className="button-animation text-neutral-300"
                  href={link.link}
                  data-text={link.name}
                  key={link.name}
                  target="_blank"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </nav>
    </div>
  );
}
