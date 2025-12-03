import React from "react";
import { motion } from "framer-motion";

export default function SlideResultsCasimir() {
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-space-900 via-space-800 to-space-900">
      <div className="flex items-start justify-between px-8 md:px-12 pt-7">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Posterior Casimir Force vs Separation
        </motion.h2>
        <motion.div
          className="text-[11px] text-slate-400 font-mono"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          F<sub>c</sub>(z) mean ± 95% credible intervals
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row px-6 md:px-10 pb-8 gap-6">
        {/* Left: graph placeholder */}
        <motion.div
          className="flex-1 card-glass rounded-2xl p-4 flex items-center justify-center"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CasimirGraph />
        </motion.div>

        {/* Right: interpretation bullets */}
        <motion.div
          className="w-full md:w-80 flex flex-col justify-center gap-3 text-xs md:text-sm text-slate-200"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Here you will show the actual figure exported from Python (the one
            we generated as <span className="font-mono">force_vs_z_casimir.png</span>).
          </p>
          <ul className="space-y-2">
            <li>
              • Both models agree strongly on the overall 1/z³-like trend of the
              Casimir force.
            </li>
            <li>
              • The with-patch model has slightly wider credible bands, because
              it allocates some residual variation to patch contributions.
            </li>
            <li>
              • This suggests the Casimir core is well constrained by the data,
              and patch effects are a subtle correction rather than a dominant
              signal in this dataset.
            </li>
          </ul>
          <p className="text-slate-400 mt-1">
            On this slide, you focus entirely on the physical interpretation:
            the Casimir part behaves as expected, which is already a strong
            validation of the experiment.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function CasimirGraph() {
  return (
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-space-800 via-space-900 to-space-900 border border-slate-700/80 px-6 py-4 relative">
      {/* Axes */}
      <div className="absolute left-12 top-6 bottom-16 w-px bg-slate-600/80" />
      <div className="absolute left-12 right-6 bottom-16 h-px bg-slate-600/80" />
      <div className="absolute left-6 bottom-20 text-[10px] text-slate-400 rotate-[-90deg] origin-left">
        Casimir force (arb.)
      </div>
      <div className="absolute right-10 bottom-10 text-[10px] text-slate-400">
        z (nm)
      </div>

      {/* Credible bands (two models) */}
      <svg className="w-full h-full">
        {/* no_patch band */}
        <defs>
          <linearGradient id="casimirNoPatch" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="casimirWithPatch" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Simplified curves / bands */}
        <path
          d="M80,210 C160,160 220,140 320,120 C380,110 440,105 520,102"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        <path
          d="M80,230 C160,175 220,155 320,135 C380,123 440,118 520,115"
          fill="none"
          stroke="url(#casimirNoPatch)"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M80,220 C160,165 220,145 320,125 C380,115 440,110 520,108"
          fill="none"
          stroke="url(#casimirWithPatch)"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M80,214 C160,162 220,142 320,122 C380,112 440,107 520,104"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute top-6 right-6 text-[10px] text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-4 h-[2px] bg-accent.blue/90" />
          <span>no_patch mean</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-4 h-[2px] bg-accent.purple/90" />
          <span>with_patch mean</span>
        </div>
      </div>
    </div>
  );
}
