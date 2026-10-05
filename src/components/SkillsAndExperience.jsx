import React, { useState } from "react";
import { experiences, skills } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { BsBriefcase, BsCodeSlash, BsCheckCircleFill, BsLink45Deg } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

// Color palettes per skill category to provide a rich multi-color design
const categoryThemes = {
  "Programming Languages": {
    dot: "bg-indigo-500 shadow-indigo-500",
    border: "hover:border-indigo-400/60",
    icon: "text-indigo-600 dark:text-indigo-400",
    badgeBorder: "hover:border-indigo-400/50",
    badgeBg: "group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-950/20",
    title: "from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300",
  },
  "Frontend & Mobile": {
    dot: "bg-sky-500 shadow-sky-500",
    border: "hover:border-sky-400/60",
    icon: "text-sky-600 dark:text-sky-400",
    badgeBorder: "hover:border-sky-400/50",
    badgeBg: "group-hover:bg-sky-50/50 dark:group-hover:bg-sky-950/20",
    title: "from-sky-600 to-cyan-600 dark:from-sky-300 dark:to-cyan-300",
  },
  "Backend Frameworks & APIs": {
    dot: "bg-emerald-500 shadow-emerald-500",
    border: "hover:border-emerald-400/60",
    icon: "text-emerald-600 dark:text-emerald-400",
    badgeBorder: "hover:border-emerald-400/50",
    badgeBg: "group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-950/20",
    title: "from-emerald-600 to-teal-600 dark:from-emerald-300 dark:to-teal-300",
  },
  "Database Management & Cloud": {
    dot: "bg-amber-500 shadow-amber-500",
    border: "hover:border-amber-400/60",
    icon: "text-amber-600 dark:text-amber-400",
    badgeBorder: "hover:border-amber-400/50",
    badgeBg: "group-hover:bg-amber-50/50 dark:group-hover:bg-amber-950/20",
    title: "from-amber-600 to-orange-600 dark:from-amber-300 dark:to-orange-300",
  },
  "DevOps, Tools & IDEs": {
    dot: "bg-rose-500 shadow-rose-500",
    border: "hover:border-rose-400/60",
    icon: "text-rose-600 dark:text-rose-400",
    badgeBorder: "hover:border-rose-400/50",
    badgeBg: "group-hover:bg-rose-50/50 dark:group-hover:bg-rose-950/20",
    title: "from-rose-600 to-pink-600 dark:from-rose-300 dark:to-pink-300",
  },
};

const SkillBadge = ({ icon, name, theme }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07, y: -2 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900/80 dark:hover:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/60 ${theme.badgeBorder} transition-colors duration-200 group shadow-sm cursor-default`}
    >
      <span className={`text-xl ${theme.icon} group-hover:scale-110 transition-transform`}>
        {React.createElement(icon)}
      </span>
      <span className="font-poppins text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
        {name}
      </span>
    </motion.div>
  );
};

const SkillCategoryCard = ({ title, items, index }) => {
  const theme = categoryThemes[title] || categoryThemes["Programming Languages"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 ${theme.border} transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl`}
    >
      <div>
        <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.dot}`} />
            <span className={`relative inline-flex rounded-full h-3 w-3 ${theme.dot}`} />
          </span>
          <h3
            className={`font-poppins font-bold text-lg bg-gradient-to-r ${theme.title} bg-clip-text text-transparent`}
          >
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {items.map((item) => (
            <SkillBadge key={item.id} {...item} theme={theme} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Unique color accents for companies
const companyThemes = [
  {
    pillBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    roleColor: "text-indigo-600 dark:text-indigo-400",
    checkColor: "text-indigo-500",
    cardBorder: "hover:border-indigo-400/60",
    topAccent: "from-indigo-600 to-blue-600",
  },
  {
    pillBg: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    roleColor: "text-sky-600 dark:text-sky-400",
    checkColor: "text-sky-500",
    cardBorder: "hover:border-sky-400/60",
    topAccent: "from-sky-600 to-cyan-600",
  },
  {
    pillBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    roleColor: "text-amber-600 dark:text-amber-400",
    checkColor: "text-amber-500",
    cardBorder: "hover:border-amber-400/60",
    topAccent: "from-amber-600 to-orange-600",
  },
];

const ExperienceCard = ({ organisation, logo, link, positions, index }) => {
  const theme = companyThemes[index % companyThemes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 ${theme.cardBorder} transition-all duration-300 mb-6 shadow-sm hover:shadow-xl relative overflow-hidden`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.topAccent} opacity-0 hover:opacity-100 transition-opacity`} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.05 }}
            className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 p-2 flex items-center justify-center flex-shrink-0 shadow-sm"
          >
            <img
              src={logo}
              alt={organisation}
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
          <div>
            <h3 className="font-poppins font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
              {organisation}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Visit company website"
                >
                  <HiOutlineExternalLink className="text-base" />
                </a>
              )}
            </h3>
            <p className={`font-semibold text-sm ${theme.roleColor}`}>
              {positions[0]?.title}
            </p>
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono self-start sm:self-auto font-medium ${theme.pillBg}`}
        >
          {positions[0]?.duration}
        </div>
      </div>

      {/* Positions / Content */}
      <div className="space-y-6">
        {positions.map((pos, pIdx) => (
          <div key={pIdx} className="space-y-3">
            {positions.length > 1 && (
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
                  {pos.title}
                </h4>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {pos.duration}
                </span>
              </div>
            )}
            <ul className="space-y-2.5">
              {pos.content.map((item, cIdx) => (
                <li key={cIdx} className="flex items-start gap-3">
                  <BsCheckCircleFill className={`${theme.checkColor} text-sm mt-1 flex-shrink-0`} />
                  <span className="font-poppins text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                    {item.text}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-1.5 text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        <BsLink45Deg className="inline" /> Link
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsAndExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Work Experience", icon: BsBriefcase },
    { id: "skills", label: "Technical Skills", icon: BsCodeSlash },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-16"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs tracking-wider uppercase font-semibold">
            Track Record & Technical Stack
          </span>
          <h2 className="font-poppins font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1">
            Skills & Experience
          </h2>
        </div>

        {/* Tab Switcher with Gliding Animated Pill */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 self-start md:self-auto shadow-sm relative">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 z-10 ${
                  isSelected
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 shadow-md shadow-indigo-500/25 -z-10"
                  />
                )}
                {tab.icon && React.createElement(tab.icon, { className: "text-xs" })}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Rendering based on Tab */}
      <AnimatePresence mode="wait">
        {activeTab === "experience" && (
          <motion.div
            key="experience-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} index={index} {...exp} />
            ))}
          </motion.div>
        )}

        {activeTab === "skills" && (
          <motion.div
            key="skills-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skillGroup, index) => (
              <SkillCategoryCard
                key={index}
                index={index}
                title={skillGroup.title}
                items={skillGroup.items}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default SkillsAndExperience;
