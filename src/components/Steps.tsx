import { site } from '../content';
import WhatsAppButton from './WhatsAppButton';

export default function Steps() {
  const { steps } = site;
  return (
    <section id="como-funciona" className="section section--brand" aria-labelledby="passos-titulo">
      <div className="container">
        <div className="section__head">
          <h2 id="passos-titulo">{steps.title}</h2>
        </div>
        <ol className="steps">
          {steps.items.map((s) => (
            <li key={s.title} className="step">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
        <WhatsAppButton variant="light">{site.hero.cta}</WhatsAppButton>
      </div>
    </section>
  );
}
