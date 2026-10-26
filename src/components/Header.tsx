import { useEffect, useState } from 'react';
import { site } from '../content';
import logo from '../assets/logo-arvrao.png';
import WhatsAppButton from './WhatsAppButton';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { contact } = site;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <a href={`tel:+55${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a>
          <a href={`mailto:${contact.emails[0]}`} className="topbar__extra">
            {contact.emails[0]}
          </a>
          <span className="topbar__extra">{site.company.city}</span>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="#inicio">
            <img src={logo} alt={site.company.name} width="160" height="32" />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle__bars" aria-hidden="true" />
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>

          <nav id="menu-principal" className={`nav${open ? ' is-open' : ''}`} aria-label="Principal">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <WhatsAppButton variant="small">Solicitar orçamento</WhatsAppButton>
          </nav>
        </div>
      </header>
    </>
  );
}
