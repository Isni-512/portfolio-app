"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
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

      {/* Desktop menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-lg">
          <li><Link href="#about" className="hover:text-cyan-400 transition">À propos</Link></li>
          <li><Link href="#projects" className="hover:text-cyan-400 transition">Projets</Link></li>
          <li><Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link></li>
        </ul>
      </nav>

      {/* Hamburger button (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md border-t border-white/20 md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg">
              <li>
                <Link
                  href="#about"
                  className="hover:text-cyan-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-cyan-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-cyan-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
