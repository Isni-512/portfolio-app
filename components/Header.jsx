"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useMyContext } from "@/provider/MyContextProvider";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, changeLanguage } = useMyContext();
  const isLight = theme === "light";

  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`/locales/${language}/Header.json`)
      .then(res => res.json())
      .then(data => { if (isMounted) setHeaderData(data); })
      .catch(err => console.error("Erreur chargement Header :", err));

    return () => { isMounted = false; };
  }, [language]);

  if (!headerData) return null;

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-6 backdrop-blur-md z-50 transition-all ${isLight
          ? "bg-white/80 text-black border-b border-gray-300"
          : "bg-black/30 text-white border-b border-white/20"
        }`}
    >
      {/* Logo */}
      {/* Logo fixe */}
      <div className="text-2xl font-bold">
        ICN<span className="text-cyan-400">Dev</span>
      </div>


      <div className="flex items-center gap-6">
        {/* Navbar séparé */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Toggle thème */}
        <button
          onClick={toggleTheme}
          className="text-2xl cursor-pointer p-2 rounded-full transition-transform hover:scale-110"
          aria-label={isLight ? headerData.toggleDark : headerData.toggleLight}
          title={isLight ? headerData.toggleDark : headerData.toggleLight}
        >
          {isLight ? <FaMoon className="text-yellow-500" /> : <IoIosSunny className="text-yellow-200" />}
        </button>

        {/* Sélecteur de langue */}
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={language}
          className={`p-2 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${isLight
              ? "bg-white text-black border-gray-300"
              : "bg-[#111] text-white border-gray-600"
            }`}
          title={headerData.languageSelect}
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
      </div>
    </header>
  );
}
