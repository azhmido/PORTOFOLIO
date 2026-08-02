import { motion } from 'motion/react';
import { experiences } from '../data/portofolioData';
import { useLang } from '../context/LangContext';

const ease = [0.16, 1, 0.3, 1] as const;

function TimelineItem({ item, index }: { item: typeof experiences[0]; index: number }) {
  const { t, lang } = useLang();
  return (
    <motion.div
      className="relative flex gap-6 sm:gap-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease }}
    >
      <div className="hidden sm:block w-24 shrink-0 pt-0.5">
        <p className="font-mono text-xs text-muted tracking-tight">{item.period[lang]}</p>
      </div>

      <div className="relative flex flex-col items-center shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-heading ring-2 ring-page" />
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 bg-border mt-1" />
        )}
      </div>

      <div className="pb-12 sm:pb-14 pt-0.5">
        <span className="sm:hidden font-mono text-[10px] uppercase tracking-wider text-muted block mb-1">
          {item.period[lang]}
        </span>
        <span className={`inline-block font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 mb-2 border ${
          item.type === 'education'
            ? 'border-border text-muted'
            : 'border-border text-muted'
        }`}>
          {t('timeline.' + item.type)}
        </span>
        <h3 className="font-heading text-base sm:text-lg font-bold text-heading">
          {item.title[lang]}
        </h3>
        <p className="font-body text-xs text-muted tracking-wide uppercase mt-0.5 mb-2">
          {item.org[lang]}
        </p>
        <p className="font-body text-sm text-body leading-relaxed max-w-lg">
          {item.description[lang]}
        </p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const { t } = useLang();
  return (
    <section id="experience" role="region" aria-label="Experience" className="py-24 md:py-32 bg-page-alt">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
          className="mb-12 ml-0 sm:ml-[7.5rem]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('timeline.title')}
          </h2>
          <div className="w-12 h-px bg-heading mt-4" />
        </motion.div>
<div className="ml-0 sm:ml-[7.5rem]">
          {experiences.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}