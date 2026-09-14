import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { List, X } from '@phosphor-icons/react';
import { personalInfo } from '../data/portofolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useLang } from '../context/LangContext';
import LangToggle from './LangToggle';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}

export default function MobileMenu({ isOpen, onToggle, onLinkClick }: Props) {
  const { t } = useLang();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onToggle();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onToggle]);

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden flex items-center justify-center w-8 h-8 text-muted hover:text-heading transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" weight="bold" /> : <List className="w-5 h-5" weight="bold" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onLinkClick}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              className="fixed top-0 right-0 z-50 h-full w-72 bg-page border-l border-border md:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <span className="font-heading text-lg font-bold text-heading tracking-tight">
                  AZHMido
                </span>
                <button
                  onClick={onToggle}
                  className="flex items-center justify-center w-8 h-8 text-muted hover:text-heading transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" weight="bold" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-6 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onLinkClick}
                    className="font-heading text-2xl font-bold text-heading hover:text-muted transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="px-6 pb-8 border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-heading transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-heading transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  </div>
                  <LangToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}