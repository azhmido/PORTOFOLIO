import { lazy, Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Medal, Calendar, MagnifyingGlassPlus, Star, CaretRight, SealCheck } from '@phosphor-icons/react';
import { certificates } from '../data/portofolioData';
import type { Certificate, CertificateCategory } from '../types';
import { useLang } from '../context/LangContext';
import {
  headingVariants,
  headingViewport,
  cardContainerVariants,
  cardItemVariants,
} from '../lib/motionVariants';

const CertificateModal = lazy(() => import('./CertificateModal'));

const ease = [0.16, 1, 0.3, 1] as const;

function CertificateCard({
  cert,
  onSelect,
}: {
  cert: Certificate;
  onSelect: () => void;
}) {
  const { t, lang } = useLang();
  const isTopGrade = parseFloat(cert.grade) >= 90;

  return (
    <motion.div
      layout
      variants={cardItemVariants}
      initial="hidden"
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease }}
      className={`group relative border bg-card transition-all duration-300 hover:border-heading cursor-pointer flex flex-col justify-between overflow-hidden ${
        isTopGrade ? 'border-border hover:shadow-lg hover:shadow-black/20' : 'border-border'
      }`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${cert.title[lang]} - ${t('certificates.clickHint')}`}
    >
      <div>
        {/* Certificate Image Frame */}
        <div className="relative h-48 sm:h-52 bg-black/40 overflow-hidden border-b border-border">
          <img
            src={cert.image}
            alt={cert.title[lang]}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/90 to-transparent pointer-events-none" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 bg-page/90 backdrop-blur-sm border border-border text-muted font-mono text-[10px] uppercase tracking-wider rounded">
              {cert.sessions[lang].split('·')[0].trim()}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex items-center">
            <div
              className={`inline-flex items-center gap-1 px-2.5 py-1 backdrop-blur-sm border font-mono text-xs font-bold rounded-full ${
                isTopGrade
                  ? 'bg-heading text-page border-heading shadow-md'
                  : 'bg-page/90 text-heading border-border'
              }`}
            >
              {isTopGrade ? (
                <Star className="w-3 h-3 text-page fill-current" weight="fill" />
              ) : (
                <Medal className="w-3.5 h-3.5 text-heading" weight="bold" />
              )}
              <span>{cert.grade}</span>
            </div>
          </div>

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-page/90 backdrop-blur-sm border border-heading text-heading text-xs font-mono tracking-wider uppercase rounded shadow">
              <MagnifyingGlassPlus className="w-4 h-4" />
              {t('certificates.clickHint')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-mono text-muted">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>{cert.date[lang]}</span>
          </div>

          <h3 className="font-heading text-base sm:text-lg font-bold text-heading group-hover:text-heading transition-colors line-clamp-2 leading-snug">
            {cert.title[lang]}
          </h3>

          <p className="font-body text-xs text-muted tracking-wide line-clamp-1">
            {cert.issuer[lang]}
          </p>

          <p className="font-body text-xs text-body line-clamp-2 leading-relaxed pt-1">
            {cert.description[lang]}
          </p>
        </div>
      </div>

      {/* Footer Skills & Action */}
      <div className="p-5 sm:p-6 pt-0 space-y-4">
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
          {cert.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="tag text-[10px] px-2 py-0.5">
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="font-mono text-[10px] text-muted self-center">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-1 text-xs font-mono text-muted group-hover:text-heading transition-colors">
          <span className="uppercase tracking-wider text-[11px] font-medium">
            {t('certificates.viewImage')}
          </span>
          <CaretRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" weight="bold" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const { t } = useLang();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('all');

  const categories: { key: CertificateCategory; labelKey: string }[] = [
    { key: 'all', labelKey: 'certificates.all' },
    { key: 'fullstack', labelKey: 'certificates.fullstack' },
    { key: 'frontend', labelKey: 'certificates.frontend' },
    { key: 'core', labelKey: 'certificates.core' },
    { key: 'database', labelKey: 'certificates.database' },
    { key: 'tools', labelKey: 'certificates.tools' },
  ];

  const filteredCerts =
    activeCategory === 'all'
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section
      id="certificates"
      role="region"
      aria-label="Certificates"
      className="py-24 md:py-32 bg-page-alt border-y border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            variants={headingVariants}
            initial="initial"
            whileInView="inView"
            viewport={headingViewport}
            className="max-w-2xl space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-card border border-border text-muted font-mono text-xs uppercase tracking-wider rounded-full">
              <SealCheck className="w-3.5 h-3.5 text-heading" weight="bold" />
              <span>{certificates.length} {t('certificates.credentialCount')}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading tracking-tight">
              {t('certificates.title')}
            </h2>
            <p className="font-body text-sm sm:text-base text-body leading-relaxed">
              {t('certificates.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count =
              cat.key === 'all'
                ? certificates.length
                : certificates.filter((c) => c.category === cat.key).length;
            if (count === 0) return null;

            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border flex items-center gap-1.5 ${
                  activeCategory === cat.key
                    ? 'bg-heading text-page border-heading font-medium'
                    : 'text-muted border-border hover:border-heading hover:text-heading bg-card'
                }`}
              >
                <span>{t(cat.labelKey)}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.key
                      ? 'bg-page/20 text-page'
                      : 'bg-elevated text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onSelect={() => setSelectedCert(cert)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Suspense fallback={null}>
        <CertificateModal
          certificate={selectedCert}
          certificates={filteredCerts}
          onClose={() => setSelectedCert(null)}
          onSelectCertificate={(cert) => setSelectedCert(cert)}
        />
      </Suspense>
    </section>
  );
}

