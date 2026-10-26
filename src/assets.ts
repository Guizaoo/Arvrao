// Resolve os nomes de arquivo usados em content.ts para as URLs geradas pelo Vite.
const files = import.meta.glob<string>('./assets/*.{jpg,png,webp}', { eager: true, import: 'default' });

export function asset(name: string): string {
  const url = files[`./assets/${name}`];
  if (!url) throw new Error(`Imagem não encontrada em src/assets: ${name}`);
  return url;
}
