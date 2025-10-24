"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Création du context
const MyContext = createContext();

// Hook personnalisé
export const useMyContext = () => useContext(MyContext);

// Provider
export default function MyContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("fr");

  // Lecture du thème et de la langue depuis localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme2");
    const savedLang = localStorage.getItem("lang") || "fr";

    if (savedTheme) setTheme(savedTheme);
    setLanguage(savedLang);
  }, []);

  // Toggle thème
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme2", newTheme);
  };

  // Changer langue
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <MyContext.Provider value={{ theme, toggleTheme, language, changeLanguage }}>
      {children}
    </MyContext.Provider>
  );
}
