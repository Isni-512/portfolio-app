"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMyContext } from "@/provider/MyContextProvider";

export default function Navbar({ isOpen, setIsOpen }) {
  const { theme } = useMyContext();

  const menuClasses = theme === "light"
    ? "text-black"
    : "text-white";

  const mobileMenuClasses = theme === "light"
    ? "bg-white/90 text-black border-gray-300"
    : "bg-black/90 text-white border-white/20";

  return (
    <>
      {/* Menu desktop */}
      <nav className="hidden md:block">
        <ul className={`flex gap-8 text-lg ${menuClasses}`}>
          <li><Link href="#about" className="hover:text-cyan-400 transition">À propos</Link></li>
          <li><Link href="#projects" className="hover:text-cyan-400 transition">Projets</Link></li>
          <li><Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link></li>
        </ul>
      </nav>

      {/* Burger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden text-3xl focus:outline-none ${menuClasses}`}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 w-full ${mobileMenuClasses} backdrop-blur-md border-t py-6 md:hidden`}
          >
            <ul className="flex flex-col items-center gap-6 text-lg">
              <li><Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">À propos</Link></li>
              <li><Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Projets</Link></li>
              <li><Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Contact</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
