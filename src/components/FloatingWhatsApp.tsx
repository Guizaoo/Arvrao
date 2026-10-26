import WhatsAppButton from './WhatsAppButton';

/** Botão fixo no canto da tela para chamar no WhatsApp. */
export default function FloatingWhatsApp() {
  return (
    <div className="floating-wa">
      <WhatsAppButton variant="floating">
        <span className="sr-only">Pedir orçamento no WhatsApp</span>
      </WhatsAppButton>
    </div>
  );
}
