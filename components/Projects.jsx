"use client";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/json/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Erreur lors du chargement du JSON :", err));
  }, []);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 bg-[#0d0d0d] text-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">Mes Projets</h2>

      {projects.length === 0 ? (
        <p className="text-gray-400">Chargement des projets...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 transition"></div>
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-1 text-white">{p.title}</h3>
                <p className="text-gray-300 text-sm">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
