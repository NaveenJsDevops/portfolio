import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeLink } from "../constants";
import {
  FiDownload,
  FiExternalLink,
  FiX,
  FiFileText,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

const ResumeModal = ({ isOpen, onClose }) => {
  // Close on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-[#0c1220] rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800/90 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-sm">
                  <FiFileText className="text-lg" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                    <span>Naveen_Kumar_J_Resume.pdf</span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <FiCheckCircle className="text-xs" />
                      <span>Verified Resume</span>
                    </span>
                  </h3>
                  <p className="font-poppins text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                    Full Stack Developer • 3+ Years Experience • In-App Document Preview
                  </p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2">
                {/* Download PDF Button */}
                <a
                  href={resumeLink}
                  download="Naveen_Kumar_J_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs font-semibold shadow-sm transition-all hover:scale-105"
                  title="Download Resume PDF"
                >
                  <FiDownload className="text-xs" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                {/* Open in New Tab Button */}
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                  title="Open in New Tab"
                >
                  <FiExternalLink className="text-xs" />
                  <span className="hidden sm:inline">Open Tab</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-rose-950/50 text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                  aria-label="Close Resume Preview"
                  title="Close (Esc)"
                >
                  <FiX className="text-base" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Container */}
            <div className="flex-1 w-full h-full relative bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
              <iframe
                src={`${resumeLink}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Naveen Kumar J Resume Preview"
                className="w-full h-full border-0 rounded-b-2xl bg-white"
              />

              {/* Mobile Fallback Helper */}
              <div className="sm:hidden absolute bottom-3 left-4 right-4 p-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-lg text-center backdrop-blur-md">
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-1">
                  On mobile devices, PDF rendering depends on your browser.
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href={resumeLink}
                    download="Naveen_Kumar_J_Resume.pdf"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600 text-white text-[11px] font-semibold"
                  >
                    <FiDownload /> Download
                  </a>
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-[11px] font-semibold"
                  >
                    <FiExternalLink /> Open
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
