import type { Variants } from 'motion/react';

export const EASE = [0.16, 1, 0.3, 1] as const;

export const headingViewport = { once: true, amount: 0.1, margin: '0px 0px -20px 0px' } as const;
export const bodyViewport = { once: true, amount: 0.1, margin: '0px 0px -20px 0px' } as const;

// Consistent, quiet reveal for section headings (a system, not boilerplate).
export const headingVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  inView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

// Soft cross-fade for body paragraphs; no large vertical drift.
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  inView: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

// Project card grid: staggered rise through a shared container.
export const cardContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Project image reveals like a curtain opening.
export const cardImageVariants: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  show: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.7, ease: EASE },
  },
};

// Primary CTA scales in rather than sliding.
export const ctaVariants: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  inView: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
};