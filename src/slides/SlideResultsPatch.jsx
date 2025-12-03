import React from "react";
import { motion } from "framer-motion";

export default function SlideResultsPatch() {
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-space-900 via-space-900 to-space-800">
      <div className="px-8 md:px-12 pt-7">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Posterior Patch Force vs Separation
        </motion.h2>
        <motion.p
          className="text-xs md:text-sm text-slate-300 mt-1"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          How much of the measured force can be explained by surface patches alone?
        </motion.p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row px-6 md:px-10 pb-8 gap-6">
        <motion.div
          className="flex-1 card-glass rounded-2xl p-4 flex items-center justify-center"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PatchForceGraph />
        </motion.div>

        <motion.div
          className="w-full md:w-80 flex flex-col justify-center gap-3 text-xs md:text-sm text-slate-200"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-2">
            <li>
              • The patch contribution is largest at the smallest separations,
              where the plates “see” more correlated surface structure.
            </li>
            <li>
              • As z grows, the patch force decays faster than the Casimir
              contribution, so it mostly perturbs the closest points.
            </li>
            <li>
              • That pattern is exactly what you would expect from long-range but
              non-fundamental contaminants.
            </li>
          </ul>
          <p className="text-slate-400 mt-1">
            This is where you emphasize that modeling patches doesn’t erase the
            Casimir signal – it simply cleans up the interpretation near the
            most sensitive data points.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function PatchForceGraph() {
  return (
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-space-800 via-space-900 to-space-900 border border-slate-700/80 px-6 py-4 relative">
      {/* Axes */}
      <div className="absolute left-12 top-6 bottom-16 w-px bg-slate-600/80" />
      <div className="absolute left-12 right-6 bottom-16 h-px bg-slate-600/80" />
      <div className="absolute left-6 bottom-20 text-[10px] text-slate-400 rotate-[-90deg] origin-left">
        Patch force (arb.)
      </div>
      <div className="absolute right-10 bottom-10 text-[10px] text-slate-400">
        z (nm)
      </div>
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="patchBand" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {/* Credible band */}
        <path
          d="M80,200 C120,170 180,150 240,140 C320,130 420,128 520,126"
          fill="none"
          stroke="url(#patchBand)"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M80,195 C120,165 180,145 240,135 C320,125 420,123 520,121"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute top-6 right-6 text-[10px] text-slate-300">
        patch mean ± 95% CI
      </div>
    </div>
  );
}
