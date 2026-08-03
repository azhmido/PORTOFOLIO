import { useState } from 'react';
import { motion } from 'motion/react';
import { EnvelopeSimple, Check } from '@phosphor-icons/react';
import { personalInfo } from '../data/portofolioData';
import { useLang } from '../context/LangContext';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <section id="contact" role="region" aria-label="Contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('contact.title')}
          </h2>
          <div className="w-12 h-px bg-heading mt-4" />
        </motion.div>

        <motion.p
          className="text-body text-base leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-heading text-page text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-heading/85 active:scale-[0.98]"
          >
            <EnvelopeSimple className="w-4 h-4" weight="bold" />
            {t('contact.cta')}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-heading transition-colors"
            aria-label={`Copy email ${personalInfo.contact.email}`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" weight="bold" />
                {t('contact.copied')}
              </>
            ) : (
              <span>{personalInfo.contact.email}</span>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
