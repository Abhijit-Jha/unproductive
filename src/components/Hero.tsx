"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
      {/* Left Content */}
      <div className="flex-1 z-10 pt-32 md:pt-0 pr-0 md:pr-12 md:pl-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold tracking-tighter leading-[0.85] pb-4 mb-8 mt-12 md:mt-0 font-sans">
            <span className="text-white block">Stop</span>
            <span className="text-white block">solving</span>
            <span className="text-white block">problems.</span>
            <span className="text-[#52525b] block">Start</span>
            <span className="text-[#52525b] block">chilling.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-[42ch] leading-relaxed mb-12 font-medium">
            A brutally sarcastic Chrome extension that forcefully blocks you
            from visiting productive websites, studying, or watching tutorials
            when you're supposed to be relaxing.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="/unproductive-mode.zip"
              download="unproductive-mode.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316] text-white font-semibold rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] transition-shadow duration-300"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Install Extension
              </span>
            </motion.a>

            <a
              href="#features"
              className="group inline-flex items-center gap-2 px-2 py-4 text-zinc-400 hover:text-white transition-colors duration-200 font-medium"
            >
              See what it ruins
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Asset (Animated Mockup) */}
      <div className="flex-1 w-full md:h-full relative flex items-center justify-center mt-16 md:mt-0 pb-20 md:pb-0 perspective-[1000px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full max-w-[34rem] group"
        >
          {/* Exact Mockup Card from Screenshot */}
          <div className="w-full bg-[#050505] rounded-[2rem] border border-[#27272a]/50 shadow-2xl overflow-hidden relative mx-auto aspect-[4/5] flex flex-col p-8 lg:p-10">
            {/* Constant Orange Grid Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="card-grid"
                    width="48"
                    height="48"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 48 0 L 0 0 0 48"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="1"
                      strokeOpacity="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#card-grid)" />
              </svg>
            </div>

            {/* Header */}
            <div className="flex items-start gap-4 pb-6 border-b border-[#27272a] relative z-10 w-full">
              <div className="w-12 h-12 rounded-[14px] bg-[#1a0505] border border-red-500/20 flex items-center justify-center relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              </div>
              <div className="mt-1">
                <h3 className="text-white text-[17px] font-bold mb-0.5 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Whoa There, Nerd!
                </h3>
                <p className="text-zinc-500 text-[14px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-medium">
                  Blocked by Unproductive Mode
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col items-center justify-center text-center mt-6 mb-6 relative z-10 w-full">
              <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-6 tracking-tighter drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] px-4 py-1">
                Productivity Detected
              </h2>
              <p className="text-zinc-300 text-[16px] max-w-[320px] leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] px-4 py-3 font-medium">
                "Bro, take a chill pill 💊 Life isn't a hackathon. You're not
                getting a trophy for burnout."
              </p>
            </div>

            {/* Action Button */}
            <div className="w-full relative z-10 mt-auto">
              <button className="w-full h-14 rounded-2xl bg-[#0a0a0a] border border-[#f97316] hover:bg-[#111] flex items-center justify-center text-[#f97316] font-semibold text-[16px] cursor-pointer transition-colors shadow-[0_4px_20px_rgba(249,115,22,0.1)]">
                Fine, Let Me In (10s only) 🙄
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
