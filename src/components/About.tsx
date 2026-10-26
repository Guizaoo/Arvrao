import { site } from '../content';
import { asset } from '../assets';

export default function About() {
  const { about } = site;
  return (
    <section id="sobre" className="section section--paper" aria-labelledby="sobre-titulo">
      <div className="container about">
        <figure className="about__media">
          <img src={asset(about.image)} alt={about.imageAlt} width="600" height="793" loading="lazy" />
        </figure>
        <div>
          <h2 id="sobre-titulo">{about.title}</h2>
          <p className="about__lead">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h3 className="about__more-title">{about.moreTitle}</h3>
          <div className="about__more">
            {about.more.map((m) => (
              <details key={m.title}>
                <summary>{m.title}</summary>
                <p className={m.text ? undefined : 'is-pending'}>{m.text || 'Texto a ser enviado pela empresa.'}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
