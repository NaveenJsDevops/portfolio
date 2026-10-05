import React, { useState } from "react";
import { socialMedia, aboutMe, resumeLink, repoLink } from "../constants";
import { profilePic } from "../assets";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import {
  FiSend,
  FiStar,
  FiFileText,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { useResume } from "../context/ResumeContext";

const Footer = () => {
  const { openResume } = useResume();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address." });
      return;
    }
    if (!description.trim()) {
      setStatus({ type: "error", message: "Please write a message or comment before sending." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // 1. Web3Forms Delivery (Instant, reliable, no OAuth token expiration)
      if (web3formsKey && web3formsKey.trim() !== "") {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: name || "Portfolio Visitor",
            email: email,
            message: description,
            from_name: "Portfolio Contact Form",
            subject: `New Portfolio Message from ${name || email}`,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus({
            type: "success",
            message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
          });
          setName("");
          setEmail("");
          setDescription("");
          setIsSubmitting(false);
          return;
        } else {
          throw new Error(data.message || "Web3Forms submission failed");
        }
      }

      // 2. Formspree Delivery (Alternative REST endpoint)
      if (formspreeId && formspreeId.trim() !== "") {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name || "Portfolio Visitor",
            email: email,
            message: description,
          }),
        });

        if (response.ok) {
          setStatus({
            type: "success",
            message: "Thank you! Your message has been sent successfully via Formspree.",
          });
          setName("");
          setEmail("");
          setDescription("");
          setIsSubmitting(false);
          return;
        } else {
          throw new Error("Formspree service returned an error");
        }
      }

      // 3. EmailJS Delivery (Fallback with comprehensive param names)
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        const templateParams = {
          name: name || email.split("@")[0],
          from_name: name || email.split("@")[0],
          email: email,
          from_email: email,
          reply_to: email,
          message: description,
          description: description,
          to_name: aboutMe.name,
        };

        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          templateParams,
          emailjsPublicKey
        );

        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully via EmailJS.",
        });
        setName("");
        setEmail("");
        setDescription("");
        setIsSubmitting(false);
        return;
      }

      // 4. Default: Direct Mail Client Fallback
      const mailtoUrl = `mailto:${aboutMe.email}?subject=${encodeURIComponent(
        `Portfolio Message from ${name || email}`
      )}&body=${encodeURIComponent(
        `Name: ${name || "N/A"}\nEmail: ${email}\n\nMessage:\n${description}`
      )}`;
      window.location.href = mailtoUrl;

      setStatus({
        type: "success",
        message: "Opening your default email app to send your message directly!",
      });
      setIsSubmitting(false);
    } catch (err) {
      console.error("Email submission error:", err);
      setStatus({
        type: "error",
        message:
          "Automatic submission encountered an issue. You can click below to send directly via email client.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer
      id="contactMe"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-8 mt-16 relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Contact details & quick links (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs tracking-wider uppercase font-semibold">
                Get In Touch & Contact
              </span>
              <h2 className="font-poppins font-extrabold text-slate-900 dark:text-white text-3xl sm:text-4xl tracking-tight mt-1">
                Let's Build Something Great Together
              </h2>
              <p className="font-poppins text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-[540px]">
                I'm always open to discussing new engineering challenges, full-stack architectural opportunities, or creative product partnerships.
              </p>
            </div>

            {/* Direct Contact Info with Multi-Color Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.a
                whileHover={{ y: -4, scale: 1.01 }}
                href={`mailto:${aboutMe.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl glass-card hover:border-emerald-400/50 transition-all text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 shadow-sm group"
              >
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xl group-hover:scale-110 transition-transform">
                  <AiFillMail />
                </div>
                <div className="truncate">
                  <p className="text-xs text-slate-400 font-medium">Direct Email</p>
                  <p className="text-sm font-semibold truncate">{aboutMe.email}</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.01 }}
                href={`tel:${aboutMe.phone}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl glass-card hover:border-sky-400/50 transition-all text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-300 shadow-sm group"
              >
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xl group-hover:scale-110 transition-transform">
                  <AiFillPhone />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold">{aboutMe.phone}</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-card text-slate-800 dark:text-slate-200 sm:col-span-2 shadow-sm">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0">
                  <HiLocationMarker />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Primary Location</p>
                  <p className="text-sm font-semibold">{aboutMe.tagLine}</p>
                </div>
              </div>
            </div>

            {/* Social Media & Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center space-x-2">
                {socialMedia.map((social, index) => {
                  const brandHoverColors = [
                    "hover:text-blue-600 hover:border-blue-400", // LinkedIn
                    "hover:text-purple-600 hover:border-purple-400", // GitHub
                    "hover:text-rose-600 hover:border-rose-400", // Email
                    "hover:text-sky-500 hover:border-sky-400", // Twitter
                    "hover:text-pink-600 hover:border-pink-400", // Instagram
                  ];
                  const hoverClass = brandHoverColors[index % brandHoverColors.length];

                  return (
                    <motion.a
                      key={social.id}
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 ${hoverClass} text-slate-700 dark:text-slate-300 transition-all text-lg shadow-sm`}
                    >
                      {React.createElement(social.icon)}
                    </motion.a>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-500/20 cursor-pointer"
                  title="Open In-App Resume Preview"
                >
                  <FiFileText className="text-sm" />
                  <span>Resume Preview</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all shadow-sm"
                >
                  <FiStar className="text-amber-500 text-sm" />
                  <span>Star Repo</span>
                </motion.a>
              </div>
            </div>

            {/* Interactive Contact & Message Form */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 mt-4 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-3.5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-lg shadow-sm">
                  <FiMessageSquare />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                    Send a Message / Leave a Comment
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Have an inquiry, project proposal, or feedback? Drop a message below!
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors shadow-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors shadow-sm"
                    required
                  />
                </div>

                <textarea
                  placeholder="Share your message, project idea, or comments here..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-colors resize-none shadow-sm"
                />

                {/* Inline Status Message */}
                <AnimatePresence>
                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className={`p-3 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                        status.type === "success"
                          ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800"
                          : "bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-800"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {status.type === "success" ? (
                          <FiCheckCircle className="text-base text-emerald-500 flex-shrink-0" />
                        ) : (
                          <FiAlertCircle className="text-base text-rose-500 flex-shrink-0" />
                        )}
                        <span>{status.message}</span>
                      </div>

                      {status.type === "error" && (
                        <a
                          href={`mailto:${aboutMe.email}?subject=${encodeURIComponent(
                            `Portfolio Message from ${name || email}`
                          )}&body=${encodeURIComponent(
                            `Name: ${name || "N/A"}\nEmail: ${email}\n\nMessage:\n${description}`
                          )}`}
                          className="inline-flex items-center gap-1 font-semibold underline hover:text-rose-900 dark:hover:text-white flex-shrink-0"
                        >
                          <FiMail /> Send via Mail App
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {isSubmitting ? (
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <FiSend className="text-xs" />
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Profile Avatar with Multi-Hue Gradient Aura (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            <div className="relative group">
              {/* Animated Floating Gradient Mesh Aura */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.08, 1],
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 opacity-45 blur-3xl group-hover:opacity-85 transition duration-500"
              />

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] rounded-full p-3.5 bg-white dark:bg-slate-900 border-4 border-indigo-400/40 shadow-2xl overflow-hidden flex items-center justify-center"
              >
                <img
                  src={profilePic}
                  alt={aboutMe.name}
                  className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Status pill on avatar with active indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 border border-indigo-400/40 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold shadow-xl backdrop-blur-md whitespace-nowrap flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>{aboutMe.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800/60 font-poppins text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} {aboutMe.name}. Crafted with precision, modern web technologies & multi-hue design.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
