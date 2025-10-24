"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Contact() {
  const { theme, language } = useMyContext(); // <- récupération de la langue depuis le context
  const isLight = theme === "light";

  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`/locales/${language}/Contact.json`)
      .then(res => res.json())
      .then(data => { if (isMounted) setContactData(data); })
      .catch(err => console.error("Erreur chargement Contact :", err));

    return () => { isMounted = false; };
  }, [language]);

  if (!contactData) {
    return (
      <section className={`py-24 px-10 text-center transition-colors duration-300 ${isLight ? "bg-white text-black" : "bg-[#111] text-white"}`}>
        <p>{language === "fr" ? "Chargement..." : "Loading..."}</p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className={`py-24 px-10 text-center transition-colors duration-300 ${
        isLight ? "bg-white text-black" : "bg-[#111] text-white"
      }`}
    >
      <h2 className="text-3xl font-bold text-cyan-400">{contactData.title}</h2>

      <p className={`mt-4 text-lg ${isLight ? "text-gray-600" : "text-gray-300"}`}>
        {contactData.subtitle}
      </p>

      <a
        href="mailto:israelnsimbi28@gmail.com"
        className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 font-medium hover:scale-105 transition-transform"
      >
        {contactData.button}
      </a>

      <div className="flex justify-center gap-10 mt-10 text-3xl">
        <FaLinkedin className="hover:text-cyan-400 transition-transform hover:scale-110" />
        <FaGithub className="hover:text-cyan-400 transition-transform hover:scale-110" />
      </div>
    </section>
  );
}
