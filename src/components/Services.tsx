import { site } from '../content';

export default function Services() {
  const { services } = site;
  return (
    <section id="servicos" className="section" aria-labelledby="servicos-titulo">
      <div className="container">
        <div className="section__head">
          <h2 id="servicos-titulo">{services.title}</h2>
          <p>{services.intro}</p>
        </div>
        <ol className="services">
          {services.items.slice(0, 4).map((s, i) => (
            <li key={s.title} className="service">
              <span className="service__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="service__segment">{s.segment}</p>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
