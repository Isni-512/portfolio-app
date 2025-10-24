"use client";
import { createContext, useState, useContext, useEffect } from "react";

// Création du context
const MyContext = createContext();

//Creation le hook personnalisé pour utiliser le context
export const useMyContext = () => {
    return useContext(MyContext);
};

// Création du provider
export default function MyContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        setTheme(localStorage.getItem("theme2") || "light");
    });

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("theme2", theme === "light" ? "dark" : "light");
    };

    return (
        <MyContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </MyContext.Provider>
    );
}
