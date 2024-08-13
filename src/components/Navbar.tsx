import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="relative">
      <div
        className={`flex flex-col gap-2 fixed top-8 z-10 right-4 px-3 py-7 h-auto cursor-pointer rounded-full bg-slate-50 shutter opacity-0 hover:scale-90 transition-all `}
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
        className={`${showMenu ? "translate-x-0" : "translate-x-[100%]"} fixed top-0 left-0 w-full h-[100dvh] transition-transform duration-500 flex`}
      >
        {/* The black right section start */}
        <div
          className={`w-2/4 bg-black ${showMenu ? "opacity-25" : "opacity-0"}`}
          onClick={toggleMenu}
          id="navbar-content"
        ></div>
        {/* The black right section end */}
        <div className="w-2/4 shutter bg-slate-50 h-screen rounded-lg px-6 pb-6 pt-28">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} transition-all duration-1000 text-6xl font-extrabold nav-slide uppercase tracking-wider`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={toggleMenu}
                className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} transition-all duration-1000 text-6xl font-extrabold nav-slide uppercase tracking-wider`}
              >
                services
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={toggleMenu}
                className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} transition-all duration-1000 text-6xl font-extrabold nav-slide uppercase tracking-wider`}
              >
                work
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} transition-all duration-1000 text-6xl font-extrabold nav-slide uppercase tracking-wider`}
              >
                about
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`${showMenu ? "translate-y-[0] opacity-100" : "translate-y-[-100%] opacity-0"} transition-all duration-1000 text-6xl font-extrabold nav-slide uppercase tracking-wider`}
              >
                contact
              </Link>
            </li>
          </ul>
          <footer className="absolute bottom-6">
            <div>
              <h1 className="uppercase">Email Address:</h1>
              <a href="mailto:festusolaleyef@gmail.com" className="nav-slide">
                festusolaleyef@gmail.com
              </a>
            </div>
            <div className="mt-2 flex gap-4">
              <a
                className="button-animation"
                href="https://www.linkedin.com/in/fisayo-festus-olaleye-67a778227/"
                data-text="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                className="button-animation"
                href="https://github.com/OlaleyeFisayo"
                data-text="GitHub"
              >
                GitHub
              </a>
              {/* <a>GitHub</a> */}
            </div>
          </footer>
        </div>
      </nav>
    </div>
  );
}
