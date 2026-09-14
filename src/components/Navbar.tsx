import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { personalInfo } from '../data/portofolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useLang } from '../context/LangContext';
import LangToggle from './LangToggle';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const { t } = useLang();
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', () => {
    if (typeof window !== 'undefined') {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }
    }
    for (const id of navLinks.map(l => l.href.slice(1)).reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 200) {
        setActiveSection(id);
        return;
      }
    }
    setActiveSection('');
  });

  return (
    <nav
      aria-label="Main navigation"
      className="nav-safe fixed top-0 z-50 w-full bg-page border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-heading text-lg font-bold text-heading tracking-tight">
            AZHMido
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-xs tracking-wider uppercase transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-heading font-semibold'
                    : 'text-muted hover:text-heading'
                }`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-heading transition-colors p-2 hidden sm:flex"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-heading transition-colors p-2 hidden sm:flex"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <div className="hidden sm:flex">
              <LangToggle />
            </div>
            <MobileMenu
              isOpen={mobileOpen}
              onToggle={() => setMobileOpen((prev) => !prev)}
              onLinkClick={() => setMobileOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
