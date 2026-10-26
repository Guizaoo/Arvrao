import { site } from '../content';

export default function About() {
  const { about } = site;
  return (
    <section id="sobre" className="section section--paper" aria-labelledby="sobre-titulo">
      <div className="container about">
        <h2 id="sobre-titulo">{about.title}</h2>
        <div>
          <p className="about__lead">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
