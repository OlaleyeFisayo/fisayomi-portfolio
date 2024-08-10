import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="relative">
      <div
        className={`grid place-content-center gap-2 fixed top-8 z-10 right-4 px-3 py-6 h-auto cursor-pointer rounded-full bg-neutral-700 opacity-0`}
        onClick={toggleMenu}
        id="hamburger"
      >
        <div
          className={`w-12 h-2 bg-black rounded-full ${showMenu && ""}`}
        ></div>
        <div
          className={`w-12 h-2 bg-black rounded-full ${showMenu && ""}`}
        ></div>
      </div>
      <div
        id="navbar"
        className={`${showMenu ? "showNav" : "hideNav"} fixed top-0 left-0 w-full h-[100dvh] transition-transform duration-500 flex`}
      >
        <div
          className={`w-2/4 bg-black ${showMenu ? "opacity-25" : "opacity-0"}`}
          onClick={toggleMenu}
        ></div>
        <div className="w-2/4 shutter bg-slate-50 h-screen rounded-lg"></div>
      </div>
    </div>
  );
}
