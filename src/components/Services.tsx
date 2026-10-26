import { site } from '../content';
import { asset } from '../assets';
import Credit from './Credit';

export default function Services() {
  const { services } = site;
  return (
    <section id="servicos" className="section" aria-labelledby="servicos-titulo">
      <div className="container">
        <div className="section__head">
          <h2 id="servicos-titulo">{services.title}</h2>
          <p>{services.intro}</p>
        </div>
        <div className="segments">
          {services.segments.map((s) => (
            <article key={s.title} className="segment">
              <figure className="segment__media">
                <img src={asset(s.image)} alt={s.imageAlt} width="770" height="520" loading="lazy" />
                {s.credit && <Credit {...s.credit} />}
              </figure>
              <div className="segment__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="link-arrow" href="#orcamento">
                  Pedir orçamento <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
