import { motion } from 'motion/react';
import { personalInfo, stats } from '../data/portofolioData';
import { useLang } from '../context/LangContext';

const ease = [0.16, 1, 0.3, 1] as const;

function StatRow() {
  const { lang } = useLang();
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease }}
    >
      {stats.map((stat) => (
        <div key={stat.label.en} className="bg-page p-6 text-center md:text-left">
          <p className="font-heading text-3xl font-bold text-heading">{stat.value[lang]}</p>
          <p className="font-body text-xs tracking-wider uppercase text-muted mt-1">{stat.label[lang]}</p>
        </div>
      ))}
    </motion.div>
  );
}

function TechCloud() {
  const { t, lang } = useLang();
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2, ease }}
    >
      <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-heading mb-4">
        {t('about.techTitle')}
      </h3>
      <hr className="hr-mono mb-5" />
      <div className="space-y-5">
        {personalInfo.technologies.map((cat) => (
          <div key={cat.category.en}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
              {cat.category[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { t, lang } = useLang();
  return (
    <section id="about" role="region" aria-label="About me" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('about.title')}
          </h2>
          <div className="w-12 h-px bg-heading mt-4" />
        </motion.div>
        <div className="max-w-3xl space-y-5">
          <motion.p
            className="text-body text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
          >
            {personalInfo.about[0][lang]}
          </motion.p>
          <motion.p
            className="text-body text-base leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {personalInfo.about[1][lang]}
          </motion.p>
        </div>
        <TechCloud />
        <StatRow />
      </div>
    </section>
  );
}
