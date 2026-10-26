import { useState, type FormEvent } from 'react';
import { site, whatsappUrl } from '../content';
import { DEMO_EVENT } from './WhatsAppButton';

/**
 * Pedido de orçamento. Não há backend: ao enviar, os dados viram a mensagem do WhatsApp.
 * Sem número configurado, só mostra o aviso de demonstração. Nada é enviado nem simulado.
 */
export default function Quote() {
  const { steps, services } = site;
  const [error, setError] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    if (!get('nome') || !get('telefone') || !get('servico')) {
      setError('Preencha nome, telefone e o serviço desejado.');
      return;
    }
    setError('');
    const message = [
      'Olá! Vim pelo site da Arvrão e gostaria de um orçamento.',
      `Nome: ${get('nome')}`,
      `Telefone: ${get('telefone')}`,
      get('email') && `E-mail: ${get('email')}`,
      `Serviço: ${get('servico')}`,
      get('detalhes') && `Detalhes: ${get('detalhes')}`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = whatsappUrl(message);
    if (url) window.open(url, '_blank', 'noopener');
    else window.dispatchEvent(new Event(DEMO_EVENT));
  }

  return (
    <section id="orcamento" className="section quote" aria-labelledby="orcamento-titulo">
      <div className="container quote__grid">
        <div>
          <h2 id="orcamento-titulo">{steps.title}</h2>
          <p className="quote__text">{steps.text}</p>
          <ol className="steps">
            {steps.items.map((s) => (
              <li key={s.title} className="step">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <form className="quote__form" onSubmit={onSubmit} noValidate>
          <p className="quote__form-title">{steps.formTitle}</p>
          <label>
            Nome
            <input name="nome" autoComplete="name" required />
          </label>
          <label>
            Telefone
            <input name="telefone" type="tel" autoComplete="tel" inputMode="tel" required />
          </label>
          <label>
            <span>
              E-mail <span className="optional">(opcional)</span>
            </span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Serviço
            <select name="servico" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              {services.segments.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
              <option>Outro</option>
            </select>
          </label>
          <label>
            <span>
              Detalhes <span className="optional">(opcional)</span>
            </span>
            <textarea name="detalhes" rows={4} placeholder="Tipo de resíduo, quantidade aproximada, endereço…" />
          </label>
          <p className="quote__error" role="alert">
            {error}
          </p>
          <button type="submit" className="btn btn--primary">
            {steps.submit}
          </button>
          <p className="quote__note">Ao enviar, abrimos o WhatsApp com a sua mensagem pronta. Você revisa antes de mandar.</p>
        </form>
      </div>
    </section>
  );
}
