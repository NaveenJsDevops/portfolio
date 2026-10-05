import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-500 flex items-center shadow-inner border select-none ${
        isDark
          ? "bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-indigo-900/60 shadow-indigo-950/50"
          : "bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 border-sky-300/80 shadow-sky-500/20"
      }`}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Background Celestial Details */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-full">
        {/* Day Clouds (Shown in Light Mode) */}
        {!isDark && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.3 }}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-white/90"
          >
            {/* Cloud shape 1 */}
            <div className="w-2.5 h-2.5 bg-white/90 rounded-full" />
            <div className="w-3.5 h-3.5 bg-white/95 rounded-full -ml-1" />
            <div className="w-2 h-2 bg-white/80 rounded-full -ml-0.5" />
          </motion.div>
        )}

        {/* Night Stars (Shown in Dark Mode) */}
        {isDark && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-sky-200"
          >
            {/* Star 1 */}
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[9px] font-bold text-amber-200 leading-none"
            >
              ✦
            </motion.span>
            {/* Star 2 */}
            <motion.span
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-[7px] text-sky-300 leading-none -mt-1.5"
            >
              ★
            </motion.span>
            {/* Star 3 dot */}
            <span className="w-1 h-1 rounded-full bg-indigo-300 opacity-70 mt-2" />
          </motion.div>
        )}
      </div>

      {/* Sliding Celestial Thumb (Sun or Moon) */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 32,
        }}
        animate={{
          x: isDark ? 32 : 0,
        }}
        className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
          isDark
            ? "bg-slate-100 text-slate-800 shadow-[0_0_10px_rgba(224,242,254,0.6)]"
            : "bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-900 shadow-[0_0_12px_rgba(245,158,11,0.7)]"
        }`}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -60, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 60, scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center"
            >
              <FiMoon className="text-xs text-indigo-900" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 60, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -60, scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center"
            >
              <FiSun className="text-xs text-amber-950" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
