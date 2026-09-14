import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experiences } from '../data/portofolioData';
import { useLang } from '../context/LangContext';
import { headingVariants, headingViewport } from '../lib/motionVariants';

const ease = [0.16, 1, 0.3, 1] as const;

type FilterType = 'all' | 'experience' | 'education' | 'training';

function TimelineItem({
  item,
  index,
  total,
}: {
  item: typeof experiences[0];
  index: number;
  total: number;
}) {
  const { t, lang } = useLang();
  const isEducation = item.type === 'education';
  const isExperience = item.type === 'experience';

  return (
    <motion.div
      layout
      className="relative flex gap-6 sm:gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.08, ease }}
    >
      <div className="hidden sm:block w-28 shrink-0 pt-0.5">
        <p className="font-mono text-xs text-muted tracking-tight">{item.period[lang]}</p>
      </div>

      <div className="relative flex flex-col items-center shrink-0">
        <div
          className={`w-2.5 h-2.5 rounded-full ring-2 ring-page ${
            isEducation
              ? 'bg-heading'
              : isExperience
              ? 'bg-heading ring-heading/30'
              : 'bg-page border-2 border-heading/60'
          }`}
        />
        {index < total - 1 && (
          <div className="w-px flex-1 bg-border mt-1" />
        )}
      </div>

      <div className="pb-10 sm:pb-12 pt-0.5">
        <span className="sm:hidden font-mono text-[10px] uppercase tracking-wider text-muted block mb-1">
          {item.period[lang]}
        </span>
        <span
          className={`inline-block font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 mb-2 border ${
            isEducation
              ? 'border-heading text-heading'
              : isExperience
              ? 'border-heading text-heading bg-heading/10'
              : 'border-border text-muted'
          }`}
        >
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
  const [filter, setFilter] = useState<FilterType>('all');

  const filterOptions: FilterType[] = ['all', 'experience', 'education', 'training'];

  const filteredItems = filter === 'all'
    ? experiences
    : experiences.filter((item) => item.type === filter);

  return (
    <section id="experience" role="region" aria-label="Experience & Education" className="py-24 md:py-32 bg-page-alt">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-8 ml-0 sm:ml-[8.5rem]"
          variants={headingVariants}
          initial="initial"
          whileInView="inView"
          viewport={headingViewport}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('timeline.title')}
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="ml-0 sm:ml-[8.5rem] mb-10 flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setFilter(opt)}
              className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border ${
                filter === opt
                  ? 'bg-heading text-page border-heading font-medium'
                  : 'text-muted border-border hover:border-heading hover:text-heading bg-card'
              }`}
            >
              {t(`timeline.${opt}`)}
            </button>
          ))}
        </div>

        <div className="ml-0 sm:ml-[8.5rem]">
          <AnimatePresence mode="wait">
            <motion.div key={filter}>
              {filteredItems.map((item, index) => (
                <TimelineItem
                  key={`${item.period.en}-${item.title.en}`}
                  item={item}
                  index={index}
                  total={filteredItems.length}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}