import { site } from '../content';
import { asset } from '../assets';
import Credit from './Credit';

export default function Proof() {
  const { proof, contact } = site;
  return (
    <section id="estrutura" className="section" aria-labelledby="estrutura-titulo">
      <div className="container">
        <div className="section__head">
          <h2 id="estrutura-titulo">{proof.title}</h2>
        </div>
        <dl className="facts">
          {proof.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="gallery">
          {proof.photos.map((p) => (
            <figure key={p.file} className="photo">
              <img src={asset(p.file)} alt={p.alt} width="900" height="675" loading="lazy" />
              <figcaption>
                {p.caption}
                <Credit author={p.credit} license={p.license} source={p.source} />
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="gallery__more">
          Mais fotos no Instagram:{' '}
          <a href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noopener noreferrer">
            @{contact.instagram}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </section>
  );
}
