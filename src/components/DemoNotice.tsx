import { useEffect, useState } from 'react';
import { DEMO_EVENT } from './WhatsAppButton';

/** Aviso exibido quando um botão de WhatsApp é acionado sem número configurado. */
export default function DemoNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const show = () => {
      setVisible(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setVisible(false), 6000);
    };
    window.addEventListener(DEMO_EVENT, show);
    return () => {
      window.removeEventListener(DEMO_EVENT, show);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`demo-notice${visible ? ' is-visible' : ''}`} role="status" aria-live="polite">
      {visible && (
        <>
          <p>
            <strong>Modo demonstração.</strong> O número de WhatsApp ainda não foi confirmado, então nenhuma
            mensagem foi enviada.
          </p>
          <button type="button" className="demo-notice__close" onClick={() => setVisible(false)}>
            Fechar
          </button>
        </>
      )}
    </div>
  );
}
