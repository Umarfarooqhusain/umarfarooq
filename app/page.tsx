import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import Hero from '@/app/components/sections/Hero';
import Trust from '@/app/components/sections/Trust';
import About from '@/app/components/sections/About';
import Skills from '@/app/components/sections/Skills';
import Projects from '@/app/components/sections/Projects';
import Journey from '@/app/components/sections/Journey';
import Contact from '@/app/components/sections/Contact';
import Cursor from './components/ui/Cursor';

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
