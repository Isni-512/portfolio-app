"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { useMyContext } from "@/provider/MyContextProvider";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useMyContext();

  return (
    <header
      className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-6 backdrop-blur-md z-50 transition-all ${
        theme === "light"
          ? "bg-white/80 text-black border-b border-gray-300"
          : "bg-black/20 text-white border-b border-white/20"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        ICN<span className="text-cyan-400">Dev</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Bouton toggle thème */}
        <button
          onClick={toggleTheme}
          className="text-2xl cursor-pointer p-2 rounded-full transition-transform hover:scale-110"
          aria-label={
            theme === "light"
              ? "Activer le mode sombre"
              : "Activer le mode clair"
          }
          title={
            theme === "light"
              ? "Activer le mode sombre"
              : "Activer le mode clair"
          }
        >
          {theme === "light" ? (
            <FaMoon className="text-yellow-500" />
          ) : (
            <IoIosSunny className="text-yellow-200" />
          )}
        </button>
      </div>
    </header>
  );
}
