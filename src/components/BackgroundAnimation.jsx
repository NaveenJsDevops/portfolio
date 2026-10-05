import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates for interactive effect
    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Create particles
    const particleCount = Math.min(Math.floor((width * height) / 28000), 55);
    const particles = [];

    const colorsDark = [
      "rgba(99, 102, 241, 0.4)", // Indigo
      "rgba(14, 165, 233, 0.4)", // Sky
      "rgba(16, 185, 129, 0.35)", // Emerald
      "rgba(168, 85, 247, 0.35)", // Purple
    ];

    const colorsLight = [
      "rgba(79, 70, 229, 0.25)",
      "rgba(2, 132, 199, 0.25)",
      "rgba(5, 150, 105, 0.2)",
      "rgba(147, 51, 234, 0.2)",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 1,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() - 0.5) * 0.45,
        colorIndex: Math.floor(Math.random() * 4),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = theme === "dark";
      const colors = isDark ? colorsDark : colorsLight;
      const lineColor = isDark
        ? "rgba(99, 102, 241, 0.08)"
        : "rgba(99, 102, 241, 0.05)";

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        // Mouse interaction: push away gently
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            p.x -= forceDirectionX * force * 1.5;
            p.y -= forceDirectionY * force * 1.5;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = colors[p.colorIndex];
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1 - dist / 110;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Dynamic Animated Floating Mesh Orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/4 w-[480px] h-[480px] bg-indigo-500/12 dark:bg-indigo-500/18 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -45, 30, 0],
          y: [0, 40, -25, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-500/12 dark:bg-sky-500/18 rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -25, 35, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-10 w-[460px] h-[460px] bg-emerald-500/10 dark:bg-emerald-500/14 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 20, -30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-rose-500/8 dark:bg-rose-500/10 rounded-full blur-[140px]"
      />

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-60 dark:opacity-40" />

      {/* Interactive Constellation Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};

export default BackgroundAnimation;
