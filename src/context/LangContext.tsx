import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations } from '../i18n/translations';

type Lang = 'en' | 'id';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (path: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

function getInitialLang(): Lang {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'en' || stored === 'id') return stored;
  }
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(prev => (prev === 'id' ? 'en' : 'id'));

  const t = (path: string): string => {
    const keys = path.split('.');
    let result: unknown = translations[lang];
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = (result as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }
    return typeof result === 'string' ? result : path;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within a LangProvider');
  return context;
}
