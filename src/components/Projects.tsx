import { lazy, Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { projects } from '../data/portofolioData';
import { GithubIcon } from './Icons';
import { useLang } from '../context/LangContext';
const ProjectModal = lazy(() => import('./ProjectModal'));

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { t, lang } = useLang();
  return (
    <motion.div
      className="group border border-border bg-card transition-all duration-500 hover:border-heading cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
    >
      <div className="relative h-52 overflow-hidden border-b border-border">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading={index < 2 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full bg-elevated flex items-center justify-center">
            <span className="font-heading text-6xl font-bold text-border">M</span>
          </div>
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
        <p className="font-body text-sm text-body leading-relaxed line-clamp-2">
          {project.description[lang]}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading">
            {t('projects.title')}
          </h2>
          <div className="w-12 h-px bg-heading mt-4" />
        </motion.div>
<div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelected(project)}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={null}>
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </Suspense>
    </section>
  );
}