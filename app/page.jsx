import Navbar from "@/components/Navbar";
import Accueil from "@/components/Accueil";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Accueil />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}