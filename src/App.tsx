import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Proof from './components/Proof';
import Steps from './components/Steps';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoNotice from './components/DemoNotice';
import StudyBanner from './components/StudyBanner';

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
        <Steps />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
      <DemoNotice />
    </>
  );
}
