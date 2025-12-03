import React from "react";
import { motion } from "framer-motion";

export default function SlidePatchParams() {
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-space-900 via-space-800 to-space-900">
      <div className="px-8 md:px-12 pt-7">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Patch Spectrum vs Separation: α(z) and v<sub>min</sub>(z)
        </motion.h2>
        <motion.p
          className="text-xs md:text-sm text-slate-300 mt-1"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          What does the posterior say about how “rough” or long-range the patch
          spectrum is as we vary z?
        </motion.p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row px-6 md:px-10 pb-8 gap-6">
        <motion.div
          className="flex-1 card-glass rounded-2xl p-4"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AlphaGraph />
        </motion.div>
        <motion.div
          className="flex-1 card-glass rounded-2xl p-4"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <VminGraph />
        </motion.div>
      </div>
    </div>
  );
}

function AlphaGraph() {
  return (
    <div className="w-full h-full relative">
      <p className="text-[11px] text-slate-300 mb-2 font-mono">
        α(z): effective spectral slope of patch power
      </p>
      <div className="relative w-full h-[80%] rounded-xl bg-space-900 border border-slate-700/80 overflow-hidden px-6 py-4">
        <div className="absolute left-10 top-6 bottom-16 w-px bg-slate-600/80" />
        <div className="absolute left-10 right-6 bottom-16 h-px bg-slate-600/80" />
        <div className="absolute left-4 bottom-20 text-[10px] text-slate-400 rotate-[-90deg] origin-left">
          α(z) (steepness)
        </div>
        <div className="absolute right-10 bottom-10 text-[10px] text-slate-400">
          z (nm)
        </div>
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="alphaBand" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path
            d="M80,210 C160,190 220,180 320,172 C380,168 440,166 520,165"
            fill="none"
            stroke="url(#alphaBand)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M80,205 C160,187 220,177 320,169 C380,165 440,163 520,162"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
          />
        </svg>
      </div>
      <p className="mt-2 text-[11px] text-slate-400">
        You can say: “α(z) stays within a fairly narrow band, meaning the patch
        spectral slope doesn’t dramatically change with separation.” That is
        consistent with a stable, but not dominant, contaminant.
      </p>
    </div>
  );
}

function VminGraph() {
  return (
    <div className="w-full h-full relative">
      <p className="text-[11px] text-slate-300 mb-2 font-mono">
        v<sub>min</sub>(z): smallest contributing spatial frequency
      </p>
      <div className="relative w-full h-[80%] rounded-xl bg-space-900 border border-slate-700/80 overflow-hidden px-6 py-4">
        <div className="absolute left-10 top-6 bottom-16 w-px bg-slate-600/80" />
        <div className="absolute left-10 right-6 bottom-16 h-px bg-slate-600/80" />
        <div className="absolute left-4 bottom-20 text-[10px] text-slate-400 rotate-[-90deg] origin-left">
          v<sub>min</sub>(z) (1/patch size)
        </div>
        <div className="absolute right-10 bottom-10 text-[10px] text-slate-400">
          z (nm)
        </div>
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="vminBand" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path
            d="M80,150 C160,165 220,180 320,195 C380,205 440,210 520,215"
            fill="none"
            stroke="url(#vminBand)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M80,145 C160,160 220,175 320,190 C380,200 440,205 520,210"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
          />
        </svg>
      </div>
      <p className="mt-2 text-[11px] text-slate-400">
        You can say: “As z increases, v<sub>min</sub> drifts toward smaller
        spatial frequencies, meaning only the longer-range patch structure
        matters at large separations.”
      </p>
    </div>
  );
}
