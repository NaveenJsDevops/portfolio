import React, { useState } from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink, FiFolder, FiCode } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Custom category pill colors & glowing borders
const categoryBadges = {
  "Full Stack & Web": {
    badge: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    gradient: "from-sky-600 to-blue-600",
    borderHover: "hover:border-sky-400/60 hover:shadow-sky-500/10",
  },
  "Mobile Apps": {
    badge: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
    gradient: "from-rose-600 to-pink-600",
    borderHover: "hover:border-rose-400/60 hover:shadow-rose-500/10",
  },
  "Python & Backend": {
    badge: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    gradient: "from-emerald-600 to-teal-600",
    borderHover: "hover:border-emerald-400/60 hover:shadow-emerald-500/10",
  },
  All: {
    gradient: "from-indigo-600 to-purple-600",
  },
};

const ProjectCard = ({
  id,
  title,
  category,
  image,
  content,
  stack,
  github,
  link,
  index,
}) => {
  const catTheme = categoryBadges[category] || categoryBadges["Full Stack & Web"];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 ${catTheme.borderHover} transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-2xl relative overflow-hidden`}
    >
      {/* Subtle Top Gradient Line on Card */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${catTheme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-13 h-13 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 p-2 flex items-center justify-center flex-shrink-0 shadow-sm"
            >
              <img
                src={image}
                alt={title}
                className="w-10 h-10 object-contain rounded-md"
              />
            </motion.div>
            <div>
              <h3 className="font-poppins font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-1">
                {title}
              </h3>
              {category && (
                <span
                  className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${catTheme.badge}`}
                >
                  {category}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <p className="font-poppins text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 min-h-[52px]">
          {content}
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <motion.span
                key={tech.id}
                whileHover={{ scale: 1.07 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 text-xs font-medium cursor-default"
              >
                <span className="text-indigo-600 dark:text-sky-400 text-xs">
                  {React.createElement(tech.icon)}
                </span>
                <span>{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2.5 pt-4 border-t border-slate-200 dark:border-slate-800/80">
        {github && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white text-xs font-semibold transition-all shadow-sm"
          >
            <AiFillGithub className="text-sm" />
            <span>GitHub</span>
          </motion.a>
        )}
        {link && link !== github && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-sky-500/20"
          >
            <FiExternalLink className="text-xs" />
            <span>Live Demo</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Full Stack & Web",
    "Mobile Apps",
    "Python & Backend",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-16"
    >
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs tracking-wider uppercase font-semibold">
            Engineered Works ({projects.length} Total Projects)
          </span>
          <h2 className="font-poppins font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1 flex items-center gap-3">
            <span>Featured Projects</span>
            <FiFolder className="text-sky-500 text-3xl md:text-4xl inline" />
          </h2>
        </div>

        {/* Multi-Color Category Filter Tabs with Gliding Animated Pill */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm relative">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 z-10 ${
                  isSelected
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600 shadow-md shadow-indigo-500/25 -z-10"
                  />
                )}
                <span>{cat}</span>
                <span className="ml-1.5 opacity-80 font-mono text-xs">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with Staggered Transitions */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
