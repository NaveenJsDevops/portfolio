import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  Footer,
  Projects,
  Loading,
  Achievements,
  BackgroundAnimation,
} from "./components";
import { FiArrowUp } from "react-icons/fi";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 900);

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 350);
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-primary text-slate-800 dark:text-slate-100 transition-colors duration-300 w-full overflow-x-clip relative min-h-screen selection:bg-indigo-500/25 selection:text-indigo-700 dark:selection:text-indigo-200">
      {/* Top Fixed Gradient Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* Dynamic Animated Background (Floating Mesh Glows & Particle Constellation) */}
      <BackgroundAnimation />

      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Sticky Modern Navbar with Glass Effect */}
            <header
              className={`sticky top-0 z-50 w-full px-6 sm:px-16 flex justify-center transition-all duration-300 ${
                isScrolled
                  ? "bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md shadow-md border-b border-slate-200/90 dark:border-slate-800/90 py-0.5"
                  : "bg-white/80 dark:bg-[#090d16]/85 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60"
              }`}
            >
              <div className={styles.boxWidth}>
                <Navbar />
              </div>
            </header>

            {/* Main Content Sections */}
            <main className="flex-1 flex flex-col space-y-6">
              {/* Hero Section */}
              <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={styles.boxWidth}>
                  <Hero />
                </div>
              </div>

              {/* Skills and Experience Section */}
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={styles.boxWidth}>
                  <SkillsAndExperience />
                </div>
              </div>

              {/* Education Section */}
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={styles.boxWidth}>
                  <Education />
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div className={`${styles.flexCenter} w-full`}>
                <div className="w-full">
                  <Achievements />
                </div>
              </div>

              {/* Featured Projects */}
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={styles.boxWidth}>
                  <Projects />
                </div>
              </div>
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Back to Top Button with Animated Entrance */}
            <AnimatePresence>
              {showTopBtn && (
                <motion.button
                  key="back-to-top"
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-white dark:bg-slate-900 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-sky-600 border border-slate-300 dark:border-slate-700/80 text-indigo-600 dark:text-sky-400 hover:text-white dark:hover:text-white shadow-xl backdrop-blur-md transition-colors flex items-center justify-center group"
                  aria-label="Back to Top"
                  title="Back to Top"
                >
                  <FiArrowUp className="text-xl group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
