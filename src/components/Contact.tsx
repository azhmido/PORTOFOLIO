import { motion } from 'motion/react';
import { EnvelopeSimple } from '@phosphor-icons/react';
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
  const { t } = useLang();
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