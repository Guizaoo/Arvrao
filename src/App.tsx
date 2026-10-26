import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Proof from './components/Proof';
import Quote from './components/Quote';
import News from './components/News';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoNotice from './components/DemoNotice';
import StudyBanner from './components/StudyBanner';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <StudyBanner />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Proof />
        <Quote />
        <News />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <DemoNotice />
    </>
  );
}
