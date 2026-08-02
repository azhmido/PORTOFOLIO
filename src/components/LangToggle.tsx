import { useLang } from '../context/LangContext';

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="font-mono text-[11px] tracking-wider text-muted hover:text-heading transition-colors duration-200 px-3 py-1.5 border border-border rounded-full hover:border-heading"
      aria-label={`Switch language to ${lang === 'id' ? 'English' : 'Indonesian'}`}
    >
      {lang === 'id' ? 'EN' : 'ID'}
    </button>
  );
}
