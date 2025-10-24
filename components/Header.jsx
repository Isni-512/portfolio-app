"use client";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-6
      bg-white/10 backdrop-blur-md border-b border-white/20 z-50 transition-all"
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        ICN<span className="text-cyan-400">Dev</span>
      </div>

      {/* Navbar (menu desktop + burger + menu mobile) */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
