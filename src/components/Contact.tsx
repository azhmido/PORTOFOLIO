import { useState } from 'react';
import { motion } from 'motion/react';
import { EnvelopeSimple, Phone, MapPin, Copy, Check } from '@phosphor-icons/react';
import { personalInfo } from '../data/portofolioData';
import { useLang } from '../context/LangContext';
import {
  headingVariants,
  headingViewport,
  fadeVariants,
  bodyViewport,
  ctaVariants,
} from '../lib/motionVariants';

export default function Contact() {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" role="region" aria-label="Contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          variants={headingVariants}
          initial="initial"
          whileInView="inView"
          viewport={headingViewport}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('contact.title')}
          </h2>
        </motion.div>

        <motion.p
          className="text-body text-base leading-relaxed mb-10"
          variants={fadeVariants}
          initial="initial"
          whileInView="inView"
          viewport={bodyViewport}
        >
          {t('contact.subtitle')}
        </motion.p>

        {/* Contact Info Cards */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4 mb-10"
          variants={fadeVariants}
          initial="initial"
          whileInView="inView"
          viewport={bodyViewport}
        >
          <div className="p-4 bg-card border border-border hover:border-heading transition-colors group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 text-muted group-hover:text-heading transition-colors mb-1">
                <div className="flex items-center gap-1.5">
                  <EnvelopeSimple className="w-4 h-4" weight="bold" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">Email</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-muted hover:text-heading transition-colors p-1"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-heading" weight="bold" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="font-body text-xs text-heading font-medium truncate block hover:underline"
              >
                {personalInfo.contact.email}
              </a>
            </div>
            {copied && (
              <span className="font-mono text-[9px] uppercase tracking-wider text-heading/80 mt-2 block">
                {lang === 'id' ? '✓ Tersalin ke clipboard' : '✓ Copied to clipboard'}
              </span>
            )}
          </div>

          <a
            href={`https://wa.me/${personalInfo.contact.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-card border border-border hover:border-heading transition-colors group block"
          >
            <div className="flex items-center gap-2 text-muted group-hover:text-heading transition-colors mb-1">
              <Phone className="w-4 h-4" weight="bold" />
              <span className="font-mono text-[10px] uppercase tracking-wider">{t('contact.phone')}</span>
            </div>
            <p className="font-body text-xs text-heading font-medium">
              {personalInfo.contact.phone}
            </p>
          </a>

          <div className="p-4 bg-card border border-border block">
            <div className="flex items-center gap-2 text-muted mb-1">
              <MapPin className="w-4 h-4" weight="bold" />
              <span className="font-mono text-[10px] uppercase tracking-wider">{t('contact.location')}</span>
            </div>
            <p className="font-body text-xs text-heading font-medium">
              {t('contact.locationVal')}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={ctaVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.4 }}
        >
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-heading text-page text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-heading/85 active:scale-[0.98]"
          >
            <EnvelopeSimple className="w-4 h-4" weight="bold" />
            {t('contact.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}