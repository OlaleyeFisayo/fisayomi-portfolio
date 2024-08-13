import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const anchorNavs = ["home", "services", "work", "about"];
  const linkNavs = ["contact"];
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
        className={`hidden flex-col gap-2 fixed top-8 right-4 px-3 py-7 h-auto cursor-pointer rounded-full bg-neutral-500 shutter opacity-0 hover:scale-90 transition-all z-20`}
        onClick={toggleMenu}
        id="hamburger"
      >
        <div
          className={`w-12 h-1 bg-black rounded-full transition-all ${showMenu && "rotate-45 relative translate-y-2"}`}
        ></div>
        <div
          className={`w-12 h-1 bg-black rounded-full transition-all ${showMenu && "-rotate-45 relative -translate-y-2"}`}
        ></div>
      </div>
      <nav
        id="navbar"
        className={`${showMenu ? "translate-x-0" : "translate-x-[100%]"} fixed top-0 left-0 w-full h-[100dvh] transition-transform duration-500 z-[1] flex`}
      >
        {/* The black right section start */}
        <div
          className={`w-2/4 bg-black ${showMenu ? "opacity-5" : "opacity-0"}`}
          onClick={toggleMenu}
          id="navbar-content"
        ></div>
        {/* The black right section end */}
        <div className="w-2/4 shutter bg-neutral-500 h-screen rounded-lg px-6 pb-6 pt-28">
          <ul className="flex flex-col gap-1">
            {anchorNavs.map((nav) => (
              <li key={nav}>
                <a
                  href={`#${nav}`}
                  onClick={toggleMenu}
                  className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} text-neutral-300 transition-all duration-1000 text-6xl font-extrabold nav-slide uppercase tracking-wider`}
                >
                  {nav}
                </a>
              </li>
            ))}
            {linkNavs.map((nav) => (
              <li key={nav}>
                <Link
                  to={`/${nav}`}
                  onClick={toggleMenu}
                  className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} text-neutral-300 transition-all duration-1000 text-6xl font-extrabold nav-slide uppercase tracking-wider`}
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
          <footer className="absolute bottom-6">
            <div>
              <h1 className="text-xl uppercase text-neutral-700 tracking-widest font-extrabold">
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
