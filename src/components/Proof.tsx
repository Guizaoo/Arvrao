import { site } from '../content';
import ImagePlaceholder from './ImagePlaceholder';

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
          {proof.photos.map((label) => (
            <ImagePlaceholder key={label} label={label} />
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
