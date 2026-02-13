import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 transition-shadow duration-300
      ${isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.15)]" : ""}`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-14">
          {["Home", "About Us", "Process", "Contact Us"].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className={`font-semibold tracking-wider ${
                  item === "Home"
                    ? "text-orange-500"
                    : "text-zinc-800 hover:text-orange-500"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-x-5">
          {/* Search (Desktop) */}
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-zinc-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-32 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-y-12
          bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10
          transition-all duration-300 md:hidden
          ${
            showMenu
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {["Home", "About Us", "Process", "Contact Us"].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                onClick={() => setShowMenu(false)}
                className={`font-semibold tracking-wider ${
                  item === "Home"
                    ? "text-orange-500"
                    : "text-zinc-800 hover:text-orange-500"
                }`}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Search (Mobile) */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-zinc-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
