"use client";
import { motion } from "framer-motion";

export default function Accueil() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-radial from-[#1a1a1a] to-black text-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Bonjour, je suis <span className="text-cyan-400">Claude</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-xl text-gray-300"
        >
          Développeur créatif & designer passionné
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ y: -3, boxShadow: "0px 5px 15px rgba(0, 188, 212, 0.4)" }}
          className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 font-medium"
        >
          Voir mes projets
        </motion.a>
      </div>
    </section>
  );
}
