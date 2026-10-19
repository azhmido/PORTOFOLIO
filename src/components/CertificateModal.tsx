import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, ArrowRight, ArrowSquareOut, Certificate as CertIcon, Calendar, Clock, Medal } from '@phosphor-icons/react';
import type { Certificate } from '../types';
import { useLang } from '../context/LangContext';

const ease = [0.16, 1, 0.3, 1] as const;

interface Props {
  certificate: Certificate | null;
  certificates: Certificate[];
  onClose: () => void;
  onSelectCertificate: (cert: Certificate) => void;
}

export default function CertificateModal({
  certificate,
  certificates,
  onClose,
  onSelectCertificate,
}: Props) {
  const { t, lang } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const currentIndex = certificate
    ? certificates.findIndex((c) => c.id === certificate.id)
    : -1;

  const prevCert = currentIndex > 0 ? certificates[currentIndex - 1] : null;
  const nextCert =
    currentIndex >= 0 && currentIndex < certificates.length - 1
      ? certificates[currentIndex + 1]
      : null;

  useEffect(() => {
    if (!certificate) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'ArrowLeft' && prevCert) {
        onSelectCertificate(prevCert);
        return;
      }
      if (e.key === 'ArrowRight' && nextCert) {
        onSelectCertificate(nextCert);
        return;
      }

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
  }, [certificate, onClose, onSelectCertificate, prevCert, nextCert]);

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-page border border-border shadow-2xl z-10 flex flex-col"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-page/95 backdrop-blur-md border-b border-border">
              <div className="flex items-center gap-2">
                <CertIcon className="w-5 h-5 text-heading" weight="bold" />
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {currentIndex + 1} / {certificates.length} · {t('certificates.credentialCount')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-muted hover:text-heading border border-border hover:border-heading rounded transition-colors"
                  title={t('certificates.openOriginal')}
                >
                  <ArrowSquareOut className="w-3.5 h-3.5" weight="bold" />
                  {t('certificates.openOriginal')}
                </a>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center bg-card border border-border text-muted hover:text-heading hover:border-heading transition-all duration-200 rounded"
                  aria-label={t('certificates.close')}
                >
                  <X className="w-4 h-4" weight="bold" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 md:p-8 space-y-6">
              {/* Image Preview Container */}
              <div className="relative group bg-black/40 border border-border rounded overflow-hidden flex items-center justify-center min-h-[240px] max-h-[55vh]">
                <img
                  src={certificate.image}
                  alt={certificate.title[lang]}
                  className="w-full h-auto max-h-[55vh] object-contain mx-auto transition-transform duration-300"
                  loading="eager"
                />

                {/* Quick Grade Badge Overlaid */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-page/95 backdrop-blur-md border border-heading/40 shadow-lg rounded-full">
                    <Medal className="w-4 h-4 text-heading" weight="fill" />
                    <span className="font-mono text-xs font-bold text-heading">
                      {t('certificates.grade')}: {certificate.grade}
                    </span>
                  </div>
                </div>

                {/* Direct image link pill */}
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 sm:hidden px-2.5 py-1 text-[11px] font-mono bg-page/90 border border-border text-heading rounded flex items-center gap-1"
                >
                  <ArrowSquareOut className="w-3 h-3" />
                  {t('certificates.openOriginal')}
                </a>
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <div>
                  <h2
                    id="cert-modal-title"
                    className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-heading"
                  >
                    {certificate.title[lang]}
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-muted uppercase tracking-wider mt-1.5">
                    {certificate.issuer[lang]}
                  </p>
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-card border border-border rounded">
                    <Calendar className="w-3.5 h-3.5 text-heading" />
                    {certificate.date[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-card border border-border rounded">
                    <Clock className="w-3.5 h-3.5 text-heading" />
                    {certificate.sessions[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-heading/10 border border-heading/30 text-heading rounded font-semibold">
                    {t('certificates.grade')}: {certificate.grade} / 100
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-body leading-relaxed pt-1">
                  {certificate.description[lang]}
                </p>

                {/* Validated Skills */}
                <div className="pt-3 border-t border-border">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-2">
                    Verified Competencies & Topics:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span key={skill} className="tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Navigation Footer */}
            <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-page/95 backdrop-blur-md border-t border-border mt-auto">
              <button
                type="button"
                onClick={() => prevCert && onSelectCertificate(prevCert)}
                disabled={!prevCert}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border border-border text-xs sm:text-sm font-medium tracking-wide rounded transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:border-heading hover:enabled:text-heading"
                aria-label={t('certificates.prev')}
              >
                <ArrowLeft className="w-4 h-4" weight="bold" />
                <span className="hidden sm:inline">{t('certificates.prev')}</span>
              </button>

              <span className="font-mono text-xs text-muted">
                {currentIndex + 1} / {certificates.length}
              </span>

              <button
                type="button"
                onClick={() => nextCert && onSelectCertificate(nextCert)}
                disabled={!nextCert}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border border-border text-xs sm:text-sm font-medium tracking-wide rounded transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:border-heading hover:enabled:text-heading"
                aria-label={t('certificates.next')}
              >
                <span className="hidden sm:inline">{t('certificates.next')}</span>
                <ArrowRight className="w-4 h-4" weight="bold" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

