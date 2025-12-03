import React from "react";
import { motion } from "framer-motion";

export default function SlideModeling() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-gradient-to-br from-space-900 via-space-800 to-black">
      {/* Left: modeling overview */}
      <div className="flex-1 px-8 md:px-12 py-8 flex flex-col justify-center gap-4">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Two Competing Models: Casimir vs Casimir + Patch
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-200"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ModelCard
            title="Model 1: Casimir-only"
            bullets={[
              "Parameters: R_um, ω_p, γ, δ, σ",
              "Assumes surfaces are perfectly clean",
              "Any mismatch is blamed on noise",
            ]}
          />
          <ModelCard
            title="Model 2: Casimir + patch"
            bullets={[
              "Same Casimir core params + kc, A_psd, p, mixture params",
              "Adds α(z), vmin(z) describing patch spectrum vs z",
              "Explicitly tries to fit long-range electrostatic contamination",
            ]}
          />
        </motion.div>

        <motion.p
          className="mt-2 text-xs md:text-sm text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Here you can say: “I used Stan to draw ~20k samples from each posterior,
          then compared them using WAIC / LOO-style criteria to see which model
          explains the data better.”
        </motion.p>
      </div>

      {/* Right: WAIC / LOO comparison summary */}
      <div className="flex-1 px-6 md:px-10 flex items-center justify-center">
        <motion.div
          className="w-full max-w-md card-glass rounded-2xl p-5"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-slate-300 font-mono mb-2">
            Model comparison snapshot (logZ placeholder → focus on WAIC / LOO)
          </p>
          <table className="w-full text-[11px] md:text-xs border-collapse">
            <thead>
              <tr className="text-slate-300">
                <th className="border-b border-slate-700/80 py-1 text-left">
                  Model
                </th>
                <th className="border-b border-slate-700/80 py-1 text-right">
                  WAIC
                </th>
                <th className="border-b border-slate-700/80 py-1 text-right">
                  elpd_loo
                </th>
                <th className="border-b border-slate-700/80 py-1 text-right">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-slate-200">
                <td className="py-1">Casimir-only</td>
                <td className="py-1 text-right">~1.1 × 10¹⁷</td>
                <td className="py-1 text-right">-3.7 × 10¹⁰</td>
                <td className="py-1 text-right font-semibold text-accent.blue">
                  1
                </td>
              </tr>
              <tr className="text-slate-300">
                <td className="py-1">Casimir + patch</td>
                <td className="py-1 text-right">larger (placeholder scale)</td>
                <td className="py-1 text-right">more negative</td>
                <td className="py-1 text-right">2</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-[11px] text-slate-400">
            The exact numeric scales here are dominated by how log-likelihood
            is defined, but the rank column tells you which model is preferred.
            In this run, the simple Casimir-only model slightly outperforms the
            flexible patch model.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ModelCard({ title, bullets }) {
  return (
    <div className="card-glass rounded-xl p-4 border border-slate-700/80">
      <div className="text-[11px] text-accent.blue mb-1 font-mono">{title}</div>
      <ul className="text-xs text-slate-200 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}
