"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { useState, useEffect } from "react";

export default function Projects() {
  const { theme, language } = useMyContext();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const filePath = `/locales/${language}/Projects.json`;

    let isMounted = true;
    fetch(filePath)
      .then(res => res.json())
      .then(data => { if (isMounted) setProjects(data); })
      .catch(err => console.error("Erreur chargement projets :", err));

    return () => { isMounted = false; };
  }, [language]); // <- re-render automatique quand la langue change

  const sectionStyle = theme === "light" ? "bg-gray-100 text-black" : "bg-[#0d0d0d] text-white";
  const textStyle = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <section 
      id="projects"
      className={`py-24 px-6 md:px-10 text-center transition-colors duration-300 ${sectionStyle}`}>
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">
        {language === "fr" ? "Mes Projets" : "My Projects"}
      </h2>

      {projects.length === 0 ? (
        <p className={textStyle}>
          {language === "fr" ? "Chargement des projets..." : "Loading projects..."}
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className={`group relative rounded-2xl overflow-hidden transition-transform hover:scale-105 ${
                theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
              }`}
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 transition"></div>
              <div className={`relative p-6 ${theme === "light" ? "text-black" : "text-white"}`}>
                <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                <p className={textStyle}>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
