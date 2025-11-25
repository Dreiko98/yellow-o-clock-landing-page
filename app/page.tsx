import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Demo from '../components/Demo';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import AboutCreator from '../components/AboutCreator';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main><section id="hero">
          <Hero />
        </section>
        
        {/* Transición muy suave del Hero - sin bordes duros */}
        <div className="h-8 bg-gradient-to-b from-white/40 via-white/70 to-white"></div>
        
        <section id="demo">
          <Demo />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="creator">
          <AboutCreator />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <Footer />
      </main>
    </>
  );
}
