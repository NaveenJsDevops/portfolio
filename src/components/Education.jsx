import styles, { layout } from "../style";
import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const eduColorSchemes = [
  {
    borderHover: "hover:border-indigo-400/60",
    pill: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    institution: "text-indigo-600 dark:text-indigo-400",
    gradeBadge: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    leftAccent: "bg-gradient-to-b from-indigo-500 to-sky-500",
  },
  {
    borderHover: "hover:border-sky-400/60",
    pill: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    institution: "text-sky-600 dark:text-sky-400",
    gradeBadge: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    leftAccent: "bg-gradient-to-b from-sky-500 to-emerald-500",
  },
  {
    borderHover: "hover:border-amber-400/60",
    pill: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    institution: "text-amber-600 dark:text-amber-400",
    gradeBadge: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    leftAccent: "bg-gradient-to-b from-amber-500 to-rose-500",
  },
];

const EducationCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  index,
}) => {
  const scheme = eduColorSchemes[index % eduColorSchemes.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 6, scale: 1.01 }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className={`glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 ${scheme.borderHover} transition-all duration-300 mb-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm hover:shadow-xl relative overflow-hidden group`}
    >
      {/* Colored Left Accent Strip */}
      <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${scheme.leftAccent} opacity-0 group-hover:opacity-100 transition-opacity`} />

      <motion.div
        whileHover={{ rotate: 8, scale: 1.08 }}
        className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 p-2.5 flex items-center justify-center flex-shrink-0 shadow-sm"
      >
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </motion.div>

      <div className="flex-1 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
          <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
            {degree}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full border text-xs font-mono self-start sm:self-auto font-medium ${scheme.pill}`}
          >
            {duration}
          </span>
        </div>

        <p className={`font-poppins font-semibold text-sm mb-1.5 ${scheme.institution}`}>
          {title}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-300">
          <span>{content1}</span>
          {content2 && (
            <span
              className={`px-2.5 py-0.5 rounded-md font-semibold border ${scheme.gradeBadge}`}
            >
              {content2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-16"
    >
      <div className="mb-10">
        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs tracking-wider uppercase font-semibold">
          Academic Foundations
        </span>
        <h2 className="font-poppins font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1 flex items-center gap-3">
          <span>Education</span>
          <FaGraduationCap className="text-emerald-500 text-3xl md:text-4xl inline" />
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Lottie Graphic on Left with Levitation Motion */}
        <div className="w-full lg:w-5/12 flex justify-center items-center relative">
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[420px] aspect-square glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-xl flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute w-44 h-44 rounded-full bg-indigo-500/15 blur-2xl pointer-events-none -top-10 -left-10" />
            <div className="absolute w-44 h-44 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none -bottom-10 -right-10" />
            <Lottie {...defaultOptions} className="w-full h-full relative z-10" />
          </motion.div>
        </div>

        {/* Education Timeline Cards on Right */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          {educationList.map((feature, index) => (
            <EducationCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
