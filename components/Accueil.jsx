"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Accueil() {
  const { theme, language } = useMyContext(); // <- récupération de la langue
  const isLight = theme === "light";

  const [accueilData, setAccueilData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`/locales/${language}/Accueil.json`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setAccueilData(data);
      })
      .catch(err => console.error("Erreur chargement Accueil :", err));

    return () => { isMounted = false; };
  }, [language]);

  if (!accueilData) {
    return (
      <section className={`h-screen flex items-center justify-center text-center transition-colors duration-500 ${isLight ? "bg-gradient-to-br from-white to-gray-200 text-black" : "bg-gradient-to-br from-gray-900 to-black text-white"}`}>
        <p>{language === "fr" ? "Chargement..." : "Loading..."}</p>
      </section>
    );
  }

  const bgClasses = isLight
    ? "bg-gradient-to-br from-white to-gray-200 text-black"
    : "bg-gradient-to-br from-gray-900 to-black text-white";

  const titleColor = isLight ? "text-black" : "text-white";
  const subtitleColor = isLight ? "text-gray-800" : "text-gray-300";
  const nameColor = isLight ? "text-cyan-600" : "text-cyan-300";

  return (
    <section
      id="home"
      className={`h-screen flex items-center justify-center text-center transition-colors duration-500 ${bgClasses}`}
    >
      <div>
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-5xl font-bold transition-colors ${titleColor}`}
        >
          {accueilData.title}{" "}
          <span className={`font-medium transition-colors ${nameColor}`}>
            {accueilData.name}
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`mt-4 text-xl transition-colors ${subtitleColor}`}
        >
          {accueilData.subtitle}
        </motion.p>

        {/* Bouton */}
        <motion.a
          href="#projects"
          whileHover={{
            y: -3,
            boxShadow: "0px 5px 15px rgba(0, 188, 212, 0.4)"
          }}
          className="inline-block mt-8 px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
        >
          {accueilData.button}
        </motion.a>
      </div>
    </section>
  );
}
