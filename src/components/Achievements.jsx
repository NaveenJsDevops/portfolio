import React from "react";
import { achievements } from "../constants";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import styles from "../style";

// Varied color accents for the 8 certifications
const certColors = [
  {
    borderHover: "hover:border-amber-400/60 hover:shadow-amber-500/10",
    badge: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    btnHover: "hover:bg-amber-500/10 hover:border-amber-400/50 text-amber-700 dark:text-amber-300",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    borderHover: "hover:border-sky-400/60 hover:shadow-sky-500/10",
    badge: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    btnHover: "hover:bg-sky-500/10 hover:border-sky-400/50 text-sky-700 dark:text-sky-300",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    borderHover: "hover:border-purple-400/60 hover:shadow-purple-500/10",
    badge: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    btnHover: "hover:bg-purple-500/10 hover:border-purple-400/50 text-purple-700 dark:text-purple-300",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    borderHover: "hover:border-emerald-400/60 hover:shadow-emerald-500/10",
    badge: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    btnHover: "hover:bg-emerald-500/10 hover:border-emerald-400/50 text-emerald-700 dark:text-emerald-300",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    borderHover: "hover:border-indigo-400/60 hover:shadow-indigo-500/10",
    badge: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    btnHover: "hover:bg-indigo-500/10 hover:border-indigo-400/50 text-indigo-700 dark:text-indigo-300",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    borderHover: "hover:border-blue-400/60 hover:shadow-blue-500/10",
    badge: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    btnHover: "hover:bg-blue-500/10 hover:border-blue-400/50 text-blue-700 dark:text-blue-300",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    borderHover: "hover:border-teal-400/60 hover:shadow-teal-500/10",
    badge: "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    btnHover: "hover:bg-teal-500/10 hover:border-teal-400/50 text-teal-700 dark:text-teal-300",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    borderHover: "hover:border-rose-400/60 hover:shadow-rose-500/10",
    badge: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    btnHover: "hover:bg-rose-500/10 hover:border-rose-400/50 text-rose-700 dark:text-rose-300",
    gradient: "from-rose-500 to-pink-500",
  },
];

const AchievementCard = ({ icon, event, position, content1, project, index }) => {
  const scheme = certColors[index % certColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 ${scheme.borderHover} transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-2xl relative overflow-hidden`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${scheme.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

      <div>
        {/* Card Header with Icon & Multi-Color Status Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 p-2 flex items-center justify-center flex-shrink-0 shadow-sm"
          >
            <img src={icon} alt={event} className="w-full h-full object-contain" />
          </motion.div>
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-semibold ${scheme.badge}`}
          >
            <FiCheckCircle className="text-xs" />
            <span>{position}</span>
          </span>
        </div>

        {/* Title & Organization */}
        <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-2 mb-2">
          {event}
        </h3>
        <p className="font-poppins text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">
          {content1}
        </p>
      </div>

      {/* Action Button */}
      {project && (
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={project}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 ${scheme.btnHover} text-xs font-semibold transition-all group/btn mt-2 shadow-sm`}
        >
          <span>View Credential</span>
          <FiExternalLink className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </motion.a>
      )}
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-16"
    >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          {/* Header */}
          <div className="mb-10">
            <span className="text-purple-600 dark:text-purple-400 font-mono text-xs tracking-wider uppercase font-semibold">
              Verified Professional Credentials
            </span>
            <h2 className="font-poppins font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1 flex items-center gap-3">
              <span>Achievements & Certifications</span>
              <FiAward className="text-purple-500 text-3xl md:text-4xl inline" />
            </h2>
          </div>

          {/* Grid of Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((item, index) => (
              <AchievementCard key={item.id} index={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
