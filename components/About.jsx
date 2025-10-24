"use client";
import { useMyContext } from "@/provider/MyContextProvider";

export default function About() {
  const { theme } = useMyContext();

  // 💡 Définition des classes selon le thème
  const sectionStyle =
    theme === "light"
      ? "bg-white text-black"
      : "bg-[#111] text-white";

  const paragraphStyle =
    theme === "light"
      ? "text-gray-700"
      : "text-gray-300";

  return (
    <section
      id="about"
      className={`py-24 px-10 text-center transition-colors duration-300 ${sectionStyle}`}
    >
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">À propos</h2>

<p className={`max-w-2xl mx-auto leading-relaxed mb-4 ${paragraphStyle}`}>
  Je m'appelle <span className="text-cyan-400 font-medium">Israel-Claude Nsimbi</span>, 
  développeur en formation passionné par le développement logiciel et les technologies réseau. 
  J’aime concevoir des applications et des sites modernes en combinant créativité, rigueur et innovation.
</p>

<p className={`max-w-2xl mx-auto leading-relaxed mb-4 ${paragraphStyle}`}>
  Curieux et motivé, je cherche constamment à apprendre et à perfectionner mes compétences 
  en <span className="font-medium text-cyan-400">C#</span>, 
  <span className="font-medium text-cyan-400">.NET</span>, 
  <span className="font-medium text-cyan-400">Java</span> et 
  <span className="font-medium text-cyan-400">React.js</span>. 
  Je m'intéresse particulièrement aux bonnes pratiques de développement et à l’optimisation des performances des applications.
</p>

<p className={`max-w-2xl mx-auto leading-relaxed ${paragraphStyle}`}>
  Collaboratif et attentif aux détails, je prends plaisir à travailler en équipe 
  pour créer des solutions efficaces et durables. 
  Mon objectif est de contribuer à des projets stimulants tout en continuant à grandir en tant que développeur.
</p>

    </section>
  );
}
