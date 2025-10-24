"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { motion } from "framer-motion";

export default function Accueil() {
  const { theme } = useMyContext();

  const isLight = theme === "light";

  const bgClasses = isLight
    ? "bg-gradient-to-br from-white to-gray-200 text-black"
    : "bg-gradient-to-br from-gray-900 to-black text-white";

  const mainText = isLight ? "text-black" : "text-white";
  const cyanText = isLight ? "text-cyan-600" : "text-cyan-300";
  const descText = isLight ? "text-gray-700" : "text-gray-300";


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
          className={`text-5xl font-bold transition-colors ${mainText}`}
        >
          Bonjour, je suis{" "}
          <span className={`font-medium transition-colors ${cyanText}`}>
            Israel-Claude
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`mt-4 text-xl transition-colors ${descText}`}
        >
          Développeur créatif & designer passionné
        </motion.p>

        {/* Bouton */}
        <motion.a
          href="#projects"
          whileHover={{
            y: -3,
            boxShadow: "0px 5px 15px rgba(0, 188, 212, 0.4)",
          }}
          className="inline-block mt-8 px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-r from-cyan-400 to-pink-500 text-white"
        >
          Voir mes projets
        </motion.a>
      </div>
    </section>
  );
}
