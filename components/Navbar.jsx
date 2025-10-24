"use client";
import Link from "next/link";
import { useMyContext } from "@/provider/MyContextProvider";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar({ isOpen, setIsOpen }) {
  const { theme, language } = useMyContext();
  const isLight = theme === "light";

  const [navData, setNavData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`/locales/${language}/Navbar.json`)
      .then(res => res.json())
      .then(data => { if (isMounted) setNavData(data); })
      .catch(err => console.error("Erreur chargement Navbar :", err));

    return () => { isMounted = false; };
  }, [language]);

  if (!navData) return null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const linkStyle = isLight ? "text-black hover:text-cyan-500" : "text-white hover:text-cyan-300";
  const mobileStyle = isLight ? "bg-white/90 text-black" : "bg-black/90 text-white";

  return (
    <>
      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-8 items-center">
        <Link href="#home" className={`font-medium hover:scale-105 transition ${linkStyle}`}>{navData.home}</Link>
        <Link href="#about" className={`font-medium hover:scale-105 transition ${linkStyle}`}>{navData.about}</Link>
        <Link href="#projects" className={`font-medium hover:scale-105 transition ${linkStyle}`}>{navData.projects}</Link>
        <Link href="#contact" className={`font-medium hover:scale-105 transition ${linkStyle}`}>{navData.contact}</Link>
      </nav>

      {/* Bouton Burger Mobile */}
      <button
        onClick={toggleMenu}
        aria-label="Menu"
        className={`md:hidden text-3xl transition hover:scale-125 ${linkStyle}`}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Mobile déroulant */}
      {isOpen && (
        <div className={`absolute top-20 right-0 w-full py-10 flex flex-col items-center gap-6 shadow-lg transition ${mobileStyle}`}>
          <Link href="#home" onClick={toggleMenu} className={`text-xl font-medium ${linkStyle}`}>{navData.home}</Link>
          <Link href="#about" onClick={toggleMenu} className={`text-xl font-medium ${linkStyle}`}>{navData.about}</Link>
          <Link href="#projects" onClick={toggleMenu} className={`text-xl font-medium ${linkStyle}`}>{navData.projects}</Link>
          <Link href="#contact" onClick={toggleMenu} className={`text-xl font-medium ${linkStyle}`}>{navData.contact}</Link>
        </div>
      )}
    </>
  );
}
