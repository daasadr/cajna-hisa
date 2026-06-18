import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import TeaMenu from '@/components/TeaMenu';
import Gallery from '@/components/Gallery';
import Workshops from '@/components/Workshops';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <TeaMenu />
        <Gallery />
        <Workshops />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
