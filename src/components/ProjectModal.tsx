import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowSquareOut } from '@phosphor-icons/react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';
import { useLang } from '../context/LangContext';

const ease = [0.16, 1, 0.3, 1] as const;

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const { t, lang } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            onClick={onClose}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-page border border-border"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease }}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-page border border-border text-muted hover:text-heading hover:border-heading transition-all duration-200"
              aria-label={t('projects.close')}
            >
              <X className="w-4 h-4" weight="bold" />
            </button>

            {project.image && (
              <div className="relative h-56 sm:h-72 overflow-hidden border-b border-border">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-8">
              <div>
                <h2 id="project-modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-heading">
                  {project.title}
                </h2>
                <p className="font-body text-sm text-body leading-relaxed mt-3">
                  {project.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-heading mb-2">
                    {t('projects.problem')}
                  </h3>
                  <div className="w-8 h-px bg-heading mb-3" />
                  <p className="font-body text-sm text-body leading-relaxed">
                    {project.problem[lang]}
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-heading mb-2">
                    {t('projects.approach')}
                  </h3>
                  <div className="w-8 h-px bg-heading mb-3" />
                  <p className="font-body text-sm text-body leading-relaxed">
                    {project.approach[lang]}
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-heading mb-2">
                    {t('projects.results')}
                  </h3>
                  <div className="w-8 h-px bg-heading mb-3" />
                  <p className="font-body text-sm text-body leading-relaxed">
                    {project.results[lang]}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-block px-3 py-1 font-mono text-[10px] uppercase tracking-wider bg-elevated text-muted border border-border"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-heading text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:border-heading hover:text-heading active:scale-[0.98]"
                >
                  <GithubIcon className="w-4 h-4" />
                  {t('projects.sourceCode')}
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-heading text-page text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-heading/85 active:scale-[0.98]"
                  >
                    <ArrowSquareOut className="w-4 h-4" weight="bold" />
                    {t('projects.liveDemo')}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
