import { personalInfo } from '../data/portofolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useLang } from '../context/LangContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="footer-safe bg-inverse-bg text-inverse-text py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-inverse-text/70 tracking-wide">
          &copy; {year} {personalInfo.nickname}. {t('footer.rights')}
        </p>
        <div className="flex items-center justify-center sm:justify-end flex-wrap gap-4 sm:gap-6">
          <span className="font-body text-xs text-inverse-text/70 tracking-wide">
            {t('footer.built')}
          </span>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-inverse-text/70 hover:text-inverse-text transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-inverse-text/70 hover:text-inverse-text transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
