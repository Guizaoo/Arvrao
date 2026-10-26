import { site } from '../content';
import { asset } from '../assets';

export default function News() {
  const { news } = site;
  return (
    <section id="noticias" className="section section--paper" aria-labelledby="noticias-titulo">
      <div className="container">
        <div className="section__head">
          <h2 id="noticias-titulo">{news.title}</h2>
        </div>
        <ul className="news">
          {news.items.map((n) => (
            <li key={n.title}>
              <article className="news__card">
                <img src={asset(n.image)} alt={n.imageAlt} width="770" height="520" loading="lazy" />
                <div className="news__body">
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
