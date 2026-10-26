import { site } from '../content';
import logo from '../assets/logo-arvrao.png';

export default function Footer() {
  const { company, contact } = site;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src={logo} alt={company.name} width="120" height="24" loading="lazy" />
        <p>
          {company.tagline} · {company.city}
          <br />
          {company.cnpj ? `CNPJ ${company.cnpj}` : 'CNPJ a confirmar'} · © {new Date().getFullYear()}
        </p>
        <a href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noopener noreferrer">
          Instagram @{contact.instagram}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </footer>
  );
}
