type Props = { label: string };

/** Espaço reservado para foto real. Substituir por <img> quando houver imagem aprovada. */
export default function ImagePlaceholder({ label }: Props) {
  return (
    <figure className="placeholder" role="img" aria-label={`Espaço para foto: ${label}`}>
      <figcaption>
        <span>Foto a enviar</span>
        {label}
      </figcaption>
    </figure>
  );
}
