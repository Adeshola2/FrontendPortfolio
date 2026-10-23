import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from "../components/Expertise";
import Skills from '../components/Skills';
import WhyWorkWithMe from "../components/WhyWorkWithMe";
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-spark focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <WhyWorkWithMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
