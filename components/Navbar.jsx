"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-10 py-6 backdrop-blur-md z-50">
      <div className="text-2xl font-bold">
        Israel-Claude<span className="text-cyan-400">Dev</span>
      </div>
      <nav>
        <ul className="flex gap-8 text-lg">
          <li><Link href="#about" className="hover:text-cyan-400 transition">À propos</Link></li>
          <li><Link href="#projects" className="hover:text-cyan-400 transition">Projets</Link></li>
          <li><Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
