import { site } from '../content';

/** Faixa que identifica a versão de estudo. Some quando `studyMode` for false. */
export default function StudyBanner() {
  if (!site.studyMode) return null;
  return (
    <p className="study-banner">
      Versão de estudo. Textos e contatos vêm do site anterior (cópia de abril de 2025) e ainda precisam ser
      confirmados.
    </p>
  );
}
