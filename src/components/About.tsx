import { motion } from 'motion/react';
import { personalInfo } from '../data/portofolioData';
import { useLang } from '../context/LangContext';
import {
  headingVariants,
  headingViewport,
  fadeVariants,
  bodyViewport,
} from '../lib/motionVariants';

function TechCloud() {
  const { t, lang } = useLang();
  return (
    <div className="mt-12">
      <h3 className="font-heading text-sm font-bold tracking-wider uppercase text-heading mb-4">
        {t('about.techTitle')}
      </h3>
      <hr className="hr-mono mb-6" />
      <div className="space-y-6">
        {personalInfo.technologies.map((cat) => (
          <div key={cat.category.en}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2.5">
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
    </div>
  );
}

export default function About() {
  const { t, lang } = useLang();

  const stats = [
    {
      value: '3.78',
      label: { en: 'GPA / 4.00 Scale', id: 'IPK / Skala 4.00' },
    },
    {
      value: '2 Years',
      label: { en: 'Dev Experience', id: 'Pengalaman Web' },
    },
    {
      value: 'PUB',
      label: { en: 'Accelerated Scholar', id: 'Beasiswa Akselerasi' },
    },
    {
      value: '3x',
      label: { en: 'Training Mentor', id: 'Mentor Pelatihan' },
    },
  ];

  return (
    <section id="about" role="region" aria-label="About me" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-10"
          variants={headingVariants}
          initial="initial"
          whileInView="inView"
          viewport={headingViewport}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('about.title')}
          </h2>
        </motion.div>

        {/* Highlights Strip */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-4xl"
          variants={fadeVariants}
          initial="initial"
          whileInView="inView"
          viewport={bodyViewport}
        >
          {stats.map((st) => (
            <div key={st.label.en} className="p-4 bg-card border border-border">
              <p className="font-heading text-2xl font-bold text-heading">{st.value}</p>
              <p className="font-mono text-[10px] uppercase text-muted tracking-wider mt-1">
                {st.label[lang]}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="max-w-3xl space-y-5">
          {personalInfo.about.map((paragraph, idx) => (
            <motion.p
              key={idx}
              className="text-body text-base leading-relaxed"
              variants={fadeVariants}
              initial="initial"
              whileInView="inView"
              viewport={bodyViewport}
            >
              {paragraph[lang]}
            </motion.p>
          ))}
        </div>

        <TechCloud />
      </div>
    </section>
  );
}
