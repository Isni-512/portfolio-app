"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { theme } = useMyContext();

  return (
    <section
      id="contact"
      className={`py-24 px-10 text-center transition-colors duration-300 ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-[#111] text-white"
      }`}
    >
      <h2 className="text-3xl font-bold text-cyan-400">Contact</h2>

      <p className={`mt-4 text-lg ${
        theme === "light" ? "text-gray-600" : "text-gray-300"
      }`}>
        Envie de collaborer ? Envoie-moi un message...
      </p>

      <a
        href="mailto:israelnsimbi28@gmail.com"
        className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 font-medium hover:scale-105 transition-transform"
      >
        Me contacter
      </a>

      <div className="flex justify-center gap-10 mt-10 text-3xl">
        <FaLinkedin className="hover:text-cyan-400 transition-transform hover:scale-110" />
        <FaGithub className="hover:text-cyan-400 transition-transform hover:scale-110" />
      </div>
    </section>
  );
}
