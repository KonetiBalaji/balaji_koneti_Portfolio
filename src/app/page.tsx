import Hero from '@/components/Hero';
import About from '@/components/About'
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Timeline/>
      <Contact/>
      <Footer/>
      <NavBar />
    </main>
  );
}
