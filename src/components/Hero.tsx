import { site } from '../content';
import truck from '../assets/caminhao-arvrao.jpg';
import WhatsAppButton from './WhatsAppButton';

export default function Hero() {
  const { hero, contact } = site;
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="kicker">{hero.kicker}</p>
          <h1 id="hero-titulo">{hero.title}</h1>
          <p className="lead">{hero.text}</p>
          <div className="hero__actions">
            <WhatsAppButton>{hero.cta}</WhatsAppButton>
            <a className="hero__phone" href={`tel:+55${contact.phone.replace(/\D/g, '')}`}>
              ou ligue {contact.phone}
            </a>
          </div>
        </div>
        <figure className="hero__media">
          <img src={truck} alt={hero.imageAlt} width="770" height="520" fetchPriority="high" />
        </figure>
      </div>
    </section>
  );
}
