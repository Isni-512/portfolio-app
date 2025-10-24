import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-10 bg-[#111] text-center text-white"
    >
      <h2 className="text-3xl font-bold text-cyan-400">Contact</h2>
      <p className="mt-4 text-lg text-gray-300">
        Envie de collaborer ? Envoyez-moi un message ou retrouvez-moi sur mes
        réseaux 👇
      </p>

      {/* Bouton principal */}
      <a
        href="mailto:israelnsimbi28@gmail.com"
        className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 font-medium hover:scale-105 transition-transform"
      >
        Me contacter
      </a>

      {/* Réseaux */}
      <div className="flex justify-center gap-10 mt-10 text-3xl">
        <a
          href="https://www.linkedin.com/in/israel-claude-nsimbi-b905552a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Isni-512"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
