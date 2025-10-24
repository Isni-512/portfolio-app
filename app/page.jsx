import Header from "@/components/Header";
import Accueil from "@/components/Accueil";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Accueil />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}