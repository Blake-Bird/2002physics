import React from "react";
import { motion } from "framer-motion";

export default function SlideExperiment() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-gradient-to-br from-space-900 via-space-900 to-space-800">
      {/* Left: experiment summary */}
      <div className="flex-1 px-8 md:px-12 py-8 flex flex-col justify-center gap-4">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The Experiment: Measuring Force vs Separation
        </motion.h2>

        <motion.ul
          className="text-sm md:text-base text-slate-200 space-y-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <li>• Two metallic surfaces separated by z = 200–1000 nm (cartoon level).</li>
          <li>• We sweep z and record force-like signals F(z) at each point.</li>
          <li>• We then feed those data into two competing models: Casimir-only vs Casimir+patch.</li>
        </motion.ul>

        <motion.div
          className="mt-2 text-xs md:text-sm text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Here you can mention briefly how big the CSVs were, how many parameters
          Stan sampled (thousands), and the fact that you handled all of that
          using Python and Rust tooling.
        </motion.div>
      </div>

      {/* Right: cards for data volume / files */}
      <div className="flex-1 px-6 md:px-10 pb-7 flex flex-col justify-center gap-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <InfoCard
            label="Stan draws (per model)"
            value="20,000 × ~2,000 params"
            sub="Millions of samples across two models"
          />
          <InfoCard
            label="CSV size (order-of-magnitude)"
            value="10–100 MB"
            sub="Full posterior + per-z forces"
          />
          <InfoCard
            label="Languages / tools"
            value="Rust + Python + Stan"
            sub="You can name the specific crates / libs out loud"
          />
          <InfoCard
            label="Design points z"
            value="24 positions"
            sub="Each with its own Casimir + patch contributions"
          />
        </motion.div>
      </div>
    </div>
  );
}

function InfoCard({ label, value, sub }) {
  return (
    <motion.div
      className="card-glass rounded-xl p-4 border border-slate-700/80"
      whileHover={{ scale: 1.03, borderColor: "rgba(56,189,248,0.8)" }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
        {label}
      </div>
      <div className="text-sm md:text-base text-slate-50 font-semibold">
        {value}
      </div>
      <div className="text-[11px] text-slate-400 mt-1">{sub}</div>
    </motion.div>
  );
}
