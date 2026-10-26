import { site } from '../content';
import WhatsAppButton from './WhatsAppButton';

const PENDING = 'A confirmar';

export default function Contact() {
  const { contact, contactSection } = site;
  const rows: [string, React.ReactNode][] = [
    ['WhatsApp', contact.whatsappDisplay || PENDING],
    ['Telefone', contact.phone ? <a href={`tel:+55${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a> : PENDING],
    [
      'E-mail',
      contact.emails.length
        ? contact.emails.map((e) => (
            <a key={e} href={`mailto:${e}`}>
              {e}
            </a>
          ))
        : PENDING,
    ],
    ['Endereço', contact.address ? `${contact.address} · CEP ${contact.cep} · ${site.company.city}` : PENDING],
    ['Horário', contact.hours || PENDING],
  ];

  return (
    <section id="contato" className="section contact" aria-labelledby="contato-titulo">
      <div className="container contact__grid">
        <div>
          <h2 id="contato-titulo">{contactSection.title}</h2>
          <p className="lead">{contactSection.text}</p>
          <WhatsAppButton>{site.hero.cta}</WhatsAppButton>
        </div>
        <dl className="contact__list">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd className={value === PENDING ? 'is-pending' : undefined}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      {contact.mapQuery && (
        <div className="container contact__map">
          <iframe
            title={`Localização da ${site.company.name} no mapa`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`} target="_blank" rel="noopener noreferrer">
            Abrir no Google Maps
          </a>
        </div>
      )}
    </section>
  );
}
