import { site } from '../content';

export default function FaqSection() {
  const { faq } = site;
  return (
    <section id="duvidas" className="section" aria-labelledby="duvidas-titulo">
      <div className="container faq-layout">
        <h2 id="duvidas-titulo">{faq.title}</h2>
        <div className="faq">
          {faq.items.map((item) => (
            <details key={item.question} className="faq__item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
