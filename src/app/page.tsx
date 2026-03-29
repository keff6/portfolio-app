import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Main page component that renders all portfolio sections.
 * Combines Navbar, Hero, About, Skills, Journey, Projects, and Footer.
 * 
 * @returns The Home page JSX element
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
