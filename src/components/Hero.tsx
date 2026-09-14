import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, CaretDown } from '@phosphor-icons/react';
import { personalInfo } from '../data/portofolioData';
import { useLang } from '../context/LangContext';

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const resumeOptions = [
  {
    key: 'resumeFullstack',
    href: '/Ahmad-Zaki-Hossam-Mido_Full-Stack-Developer_CV.pdf',
  },
  {
    key: 'resumeBackend',
    href: '/Ahmad-Zaki-Hossam-Mido_Backend-Developer_CV.pdf',
  },
] as const;

export default function Hero() {
  const { t, lang } = useLang();
  const [loaded, setLoaded] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!resumeOpen) return;
    function handleClick(e: MouseEvent) {
      if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setResumeOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [resumeOpen]);
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-inverse-bg text-inverse-text">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.9] tracking-tight text-inverse-text"
              variants={itemVariants}
            >
              {personalInfo.name.split(' ').map((word, i) => (
                <span key={`${word}-${i}`}>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease }}
                  >
                    {word}
                  </motion.span>
                  {i < personalInfo.name.split(' ').length - 1 && ' '}
                </span>
              ))}
            </motion.h1>

            <motion.div className="space-y-2" variants={itemVariants}>
              <p className="font-heading text-lg sm:text-xl text-inverse-text/70 font-medium tracking-wide uppercase">
                {personalInfo.role[lang]}
              </p>
            </motion.div>

            <motion.p
              className="text-inverse-text/80 text-base leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              {personalInfo.tagline[lang]}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 pt-2"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-inverse-text text-inverse-bg text-sm font-medium tracking-wide rounded-full transition-all duration-300 active:scale-[0.98] hover:bg-inverse-text/80"
              >
                {t('hero.viewProjects')}
                <ArrowRight
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  weight="bold"
                />
              </a>

              <div className="relative" ref={resumeRef}>
                <button
                  type="button"
                  onClick={() => setResumeOpen(prev => !prev)}
                  aria-haspopup="menu"
                  aria-expanded={resumeOpen}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-inverse-text/40 text-inverse-text text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:border-inverse-text active:scale-[0.98]"
                >
                  <FileText className="w-3.5 h-3.5" weight="bold" />
                  {t('hero.resume')}
                  <CaretDown
                    className={`w-3.5 h-3.5 transition-transform ${resumeOpen ? 'rotate-180' : ''}`}
                    weight="bold"
                  />
                </button>

                {resumeOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 mt-3 w-64 bg-inverse-text text-inverse-bg rounded-xl shadow-2xl overflow-hidden z-20 divide-y divide-inverse-bg/10"
                  >
                    {resumeOptions.map(option => (
                      <a
                        key={option.key}
                        href={option.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setResumeOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-inverse-bg/10"
                      >
                        <FileText className="w-4 h-4 shrink-0" weight="bold" />
                        {t(`hero.${option.key}`)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            <div
              className={`relative transition-opacity duration-700 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 border-2 border-inverse-text bg-inverse-text/10">
                <img
                  ref={imgRef}
                  src="/images/profile.jpg"
                  alt="Portrait of Ahmad Zaki Hossam Mido - full-stack developer"
                  loading="eager"
                  onLoad={() => setLoaded(true)}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    setLoaded(true);
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}