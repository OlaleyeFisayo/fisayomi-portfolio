import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div
      className="grid place-content-center gap-2 fixed top-8 z-10 right-4 px-3 py-6 h-auto cursor-pointer rounded-full bg-neutral-700 opacity-0"
      onClick={toggleMenu}
      id="hamburger"
    >
      <div className="w-12 h-2 bg-black rounded-full"></div>
      <div className="w-12 h-2 bg-black rounded-full"></div>
    </div>
  );
}
