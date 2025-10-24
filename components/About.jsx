"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { useState, useEffect } from "react";

export default function About() {
  const { theme, language } = useMyContext(); // <- récupérer la langue depuis le contexte
  const isLight = theme === "light";

  const sectionStyle = isLight
    ? "bg-white text-black"
    : "bg-[#111] text-white";

  const paragraphStyle = isLight
    ? "text-gray-700"
    : "text-gray-300";

  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // Charge le JSON correspondant à la langue
    fetch(`/locales/${language}/About.json`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setAboutData(data);
      })
      .catch((err) => console.error("Erreur chargement About :", err));

    return () => {
      isMounted = false;
    };
  }, [language]); // <- le fetch se relance automatiquement si la langue change

  if (!aboutData) {
    return (
      <section
        className={`py-24 px-10 text-center transition-colors duration-300 ${sectionStyle}`}
      >
        <p className={paragraphStyle}>
          {language === "fr" ? "Chargement..." : "Loading..."}
        </p>
      </section>
    );
  }

  const skills = Array.isArray(aboutData.skills)
    ? aboutData.skills
    : aboutData.skills.split(",").map((s) => s.trim());

  return (
    <section
      id="about"
      className={`py-24 px-10 text-center transition-colors duration-300 ${sectionStyle}`}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        {aboutData.title}
      </h2>

      {/* Paragraph 1 */}
      <p className={`max-w-2xl mx-auto leading-relaxed mb-4 ${paragraphStyle}`}>
        {aboutData.hello}{" "}
        <span className="text-cyan-400 font-medium">{aboutData.name}</span>,{" "}
        {aboutData.devDesc}
      </p>

      {/* Paragraph 2 with dynamic skills */}
      <p className={`max-w-2xl mx-auto leading-relaxed mb-4 ${paragraphStyle}`}>
        {aboutData.skillsIntro}{" "}
        {skills.map((skill, index) => (
          <span key={index} className="font-medium text-cyan-400">
            {skill}
            {index < skills.length - 1 ? ", " : ""}
          </span>
        ))}{" "}
        {aboutData.interests}
      </p>

      {/* Paragraph 3 */}
      <p className={`max-w-2xl mx-auto leading-relaxed ${paragraphStyle}`}>
        {aboutData.teamwork}
      </p>
    </section>
  );
}
