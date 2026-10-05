import React, { useState, useEffect } from "react";
import styles from "../style";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe, resumeLink } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  FiArrowRight,
  FiFileText,
  FiSend,
  FiCode,
  FiLayers,
  FiAward,
  FiTerminal,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useResume } from "../context/ResumeContext";

const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const roles = [
  "Full Stack Developer",
  "FastAPI & Python Specialist",
  "React & Next.js Engineer",
  "Mobile App Developer (Flutter)",
  "DevOps & Cloud Enthusiast",
];

const Hero = () => {
  const { openResume } = useResume();
  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          // Pause before deleting
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="flex md:flex-row flex-col items-center justify-between py-10 md:py-16 relative"
    >
      {/* Left text column */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 flex flex-col items-start z-10"
      >
        {/* Metric Badges with Multi-Color Tints & Pulsing Radars */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <FiCode className="text-xs text-indigo-500 ml-0.5" />
            <span>Full Stack Developer</span>
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-sm"
          >
            <FiAward className="text-xs text-emerald-500" />
            <span>3+ Years Experience</span>
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 shadow-sm"
          >
            <FiLayers className="text-xs text-sky-500" />
            <span>14 Completed Projects</span>
          </motion.span>
        </div>

        {/* Animated Greeting & Name Headline */}
        <h1 className="font-poppins font-extrabold text-slate-900 dark:text-white text-[38px] sm:text-[54px] lg:text-[62px] leading-[1.12] tracking-tight">
          Hi there! I am <br />
          <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 dark:from-indigo-300 dark:via-sky-300 dark:to-emerald-300 bg-clip-text text-transparent animate-gradient-flow">
            {aboutMe.name}
          </span>
        </h1>

        {/* Animated Dynamic Typewriter Role */}
        <div className="flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800 shadow-inner">
          <FiTerminal className="text-indigo-600 dark:text-sky-400 text-sm flex-shrink-0" />
          <span className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            role:
          </span>
          <span className="font-mono text-sm sm:text-base font-bold text-indigo-600 dark:text-sky-400 min-h-[24px]">
            {text}
          </span>
          <span className="w-2 h-4 bg-indigo-600 dark:bg-sky-400 inline-block animate-cursor-blink ml-0.5" />
        </div>

        {/* Introduction Paragraph */}
        <p className="font-poppins text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-[580px] mt-6">
          {aboutMe.intro}
        </p>

        {/* Multi-Color CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mt-8">
          {/* Primary Action */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("contactMe")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/25"
          >
            <span>Let's Connect</span>
            <FiSend className="text-sm" />
          </motion.button>

          {/* Secondary Action */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-400 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm"
          >
            <span>View 14 Projects</span>
            <FiArrowRight className="text-sm text-sky-500" />
          </motion.button>

          {/* Resume Action */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={openResume}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all shadow-sm cursor-pointer"
            title="Open In-App Resume Preview"
          >
            <FiFileText className="text-sm text-emerald-600 dark:text-emerald-400" />
            <span>Preview Resume</span>
          </motion.button>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-1">
            <motion.a
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/NaveenJsDevops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:border-purple-500 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 transition-all text-xl shadow-sm"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/naveen-js-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 hover:border-sky-500 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-all text-xl shadow-sm"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Right animation column with Multi-Hue Levitation Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center items-center relative mt-10 md:mt-0 w-full max-w-[500px]"
      >
        {/* Animated Floating Glow Mesh */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-6 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-6 w-56 h-56 rounded-full bg-sky-500/20 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 left-1/3 w-56 h-56 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
        />

        {/* Levitation Card Wrapper */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full aspect-square max-w-[460px] glass-card rounded-3xl p-6 border border-slate-200/90 dark:border-slate-700/60 shadow-xl flex items-center justify-center hover:border-indigo-400/50 transition-colors"
        >
          <Lottie {...defaultOptions} className="w-full h-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
