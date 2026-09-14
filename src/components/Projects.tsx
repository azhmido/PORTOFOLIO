import { lazy, Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowSquareOut, Star } from '@phosphor-icons/react';
import { projects } from '../data/portofolioData';
import { GithubIcon } from './Icons';
import { useLang } from '../context/LangContext';
import {
  headingVariants,
  headingViewport,
  cardContainerVariants,
  cardItemVariants,
  cardImageVariants,
} from '../lib/motionVariants';

const ProjectModal = lazy(() => import('./ProjectModal'));

function ProjectCard({
  project,
  index,
  isFeatured = false,
}: {
  project: typeof projects[0];
  index: number;
  isFeatured?: boolean;
}) {
  const { t, lang } = useLang();

  if (isFeatured) {
    return (
      <motion.div
        className="group border border-border bg-card transition-all duration-500 hover:border-heading cursor-pointer overflow-hidden"
        variants={cardItemVariants}
      >
        <div className="grid md:grid-cols-12">
          {/* Image Column */}
          <div className="md:col-span-6 relative h-64 sm:h-80 md:h-full min-h-[260px] overflow-hidden border-b md:border-b-0 md:border-r border-border">
            {project.image ? (
              <motion.img
                src={project.image}
                alt={`${project.title} project screenshot`}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                variants={cardImageVariants}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full bg-elevated" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

            {/* Top Badge & Links */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-page/90 backdrop-blur-sm border border-border text-heading text-[10px] font-mono uppercase tracking-wider rounded-full">
                <Star className="w-3 h-3 text-heading" weight="fill" />
                {t('projects.featured')}
              </span>
            </div>

            <div className="absolute top-3 right-3 flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center bg-page/90 backdrop-blur-sm border border-border text-muted hover:text-heading hover:border-heading transition-all duration-200"
                aria-label={`${project.title} source code on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 flex items-center justify-center bg-page/90 backdrop-blur-sm border border-border text-muted hover:text-heading hover:border-heading transition-all duration-200"
                  aria-label={`${project.title} live demo`}
                >
                  <ArrowSquareOut className="w-3.5 h-3.5" weight="bold" />
                </a>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-0 pb-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-body text-[10px] uppercase tracking-wider text-white/90 bg-page/80 px-2 py-1 rounded">
                {t('projects.clickHint')}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-heading">
                  {project.title}
                </h3>
              </div>

              <p className="font-body text-sm text-body leading-relaxed">
                {project.description[lang]}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-block px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider bg-elevated text-heading/90 border border-border"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="group border border-border bg-card transition-all duration-500 hover:border-heading cursor-pointer h-full flex flex-col justify-between"
      variants={cardItemVariants}
    >
      <div>
        <div className="relative h-52 overflow-hidden border-b border-border">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={`${project.title} project screenshot`}
              loading={index < 2 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              variants={cardImageVariants}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full bg-elevated" />
          )}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <div className="absolute top-3 right-3 flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center bg-page border border-border text-muted hover:text-heading hover:border-heading transition-all duration-200"
              aria-label={`${project.title} source code on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 flex items-center justify-center bg-page border border-border text-muted hover:text-heading hover:border-heading transition-all duration-200"
                aria-label={`${project.title} live demo`}
              >
                <ArrowSquareOut className="w-3.5 h-3.5" weight="bold" />
              </a>
            )}
          </div>
          <div className="absolute inset-x-0 bottom-0 pb-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-body text-[10px] uppercase tracking-wider text-white/80">
              {t('projects.clickHint')}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="font-heading text-lg font-bold text-heading">
            {project.title}
          </h3>
          <p className="font-body text-sm text-body leading-relaxed line-clamp-3">
            {project.description[lang]}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" role="region" aria-label="Projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          variants={headingVariants}
          initial="initial"
          whileInView="inView"
          viewport={headingViewport}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('projects.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={index === 0 ? "md:col-span-2" : "flex"}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${project.title} - ${t('projects.clickHint')}`}
            >
              <ProjectCard
                project={project}
                index={index}
                isFeatured={index === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <Suspense fallback={null}>
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </Suspense>
    </section>
  );
}