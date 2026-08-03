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