import { useEffect } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { LangProvider } from './context/LangContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.slice(1);
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <ErrorBoundary>
        <LangProvider>
          <div className="min-h-screen bg-page text-body antialiased font-body">
            <a href="#main-content" className="skip-link">Skip to content</a>
            <ScrollProgress />
            <Navbar />
            <motion.main
              id="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Hero />
              <About />
              <Timeline />
              <Projects />
              <Contact />
            </motion.main>
            <Footer />
          </div>
        </LangProvider>
      </ErrorBoundary>
    </MotionConfig>
  );
}