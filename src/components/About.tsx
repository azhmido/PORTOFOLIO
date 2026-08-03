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
    <div className="mt-10">
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
    </div>
  );
}

export default function About() {
  const { t, lang } = useLang();
  return (
    <section id="about" role="region" aria-label="About me" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          variants={headingVariants}
          initial="initial"
          whileInView="inView"
          viewport={headingViewport}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('about.title')}
          </h2>
        </motion.div>
        <div className="max-w-3xl space-y-5">
          <motion.p
            className="text-body text-base leading-relaxed"
            variants={fadeVariants}
            initial="initial"
            whileInView="inView"
            viewport={bodyViewport}
          >
            {personalInfo.about[0][lang]}
          </motion.p>
          <motion.p
            className="text-body text-base leading-relaxed"
            variants={fadeVariants}
            initial="initial"
            whileInView="inView"
            viewport={bodyViewport}
          >
            {personalInfo.about[1][lang]}
          </motion.p>
        </div>
        <TechCloud />
      </div>
    </section>
  );
}
