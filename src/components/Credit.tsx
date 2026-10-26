type Props = { author: string; license: string; source: string };

/** Crédito exigido pela licença das fotos ilustrativas do Wikimedia Commons. */
export default function Credit({ author, license, source }: Props) {
  return (
    <small className="credit">
      Foto ilustrativa ·{' '}
      <a href={source} target="_blank" rel="noopener noreferrer">
        {author}, {license}
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    </small>
  );
}
