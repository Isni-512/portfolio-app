"use client";
import { useMyContext } from "@/provider/MyContextProvider";

export default function Footer() {
  const { theme } = useMyContext();

  return (
    <footer
      className={`text-center py-6 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-200 text-gray-700"
          : "bg-black text-gray-400"
      }`}
    >
      © 2025 ICNDev. Tous droits réservés.
    </footer>
  );
}
