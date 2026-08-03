import { GlobeSimple } from '@phosphor-icons/react';
import { useLang } from '../context/LangContext';

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-muted hover:text-heading transition-colors duration-200 px-3 py-1.5 border border-border rounded-full hover:border-heading"
      aria-label={`Switch language to ${lang === 'id' ? 'English' : 'Indonesian'}`}
    >
      <GlobeSimple className="w-3.5 h-3.5" weight="bold" />
      {lang === 'id' ? 'EN' : 'ID'}
    </button>
  );
}
