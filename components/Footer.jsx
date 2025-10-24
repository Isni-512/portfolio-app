"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme, language } = useMyContext();
  const isLight = theme === "light";

  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`/locales/${language}/Footer.json`)
      .then(res => res.json())
      .then(data => { if (isMounted) setFooterData(data); })
      .catch(err => console.error("Erreur chargement Footer :", err));

    return () => { isMounted = false; };
  }, [language]);

  if (!footerData) {
    return (
      <footer className={`text-center py-6 transition-colors duration-300 ${isLight ? "bg-gray-200 text-gray-700" : "bg-black text-gray-400"}`}>
        <p>{language === "fr" ? "Chargement..." : "Loading..."}</p>
      </footer>
    );
  }

  return (
    <footer
      className={`text-center py-6 transition-colors duration-300 ${
        isLight ? "bg-gray-200 text-gray-700" : "bg-black text-gray-400"
      }`}
    >
      {footerData.copyright}
    </footer>
  );
}
