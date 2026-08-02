import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 z-[60] w-full h-[1px] pointer-events-none">
      <motion.div
        className="h-full bg-heading origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
