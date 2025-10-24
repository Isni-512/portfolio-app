"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: false,
        ns: ["common", "About", "Accueil", "Body", "Contact", "Footer", "Header", "Navbar", "Projects"],
        preload: ["en", "fr"],
        interpolation: {
            escapeValue: false, // React already does escaping
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        react: { useSuspense: false }, // Disable suspense for SSR compatibility
    });

export default i18n;
