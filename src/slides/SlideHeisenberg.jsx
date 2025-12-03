import React from "react";
import { motion } from "framer-motion";

export default function SlideHeisenberg() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-gradient-to-br from-space-800 via-space-900 to-space-900">
      {/* Left: Heisenberg + equation */}
      <div className="flex-1 px-8 md:px-12 py-8 flex flex-col justify-center gap-5">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Heisenberg Uncertainty ⇒ Vacuum Cannot Sit Still
        </motion.h2>

        <motion.div
          className="card-glass rounded-2xl p-4 md:p-5 border border-accent.blue/30"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <p className="text-sm md:text-base text-slate-200 mb-3">
                If a field mode has a perfectly known position and momentum of
                “zero”, it would violate:
              </p>
              <p className="font-mono text-accent.blue text-lg md:text-xl">
                Δx · Δp ≥ ħ / 2
              </p>
              <p className="mt-3 text-xs md:text-sm text-slate-300">
                As we squeeze the field into a more precise position{" "}
                <span className="font-mono">Δx</span>, the spread in momentum{" "}
                <span className="font-mono">Δp</span> must grow. That forced
                jitter means the ground state still has energy.
              </p>
            </div>
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <UncertaintyBlob />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-3 text-xs md:text-sm text-slate-400 max-w-xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          You can explain here on the whiteboard how forcing{" "}
          <span className="font-mono">Δx → 0</span> would make{" "}
          <span className="font-mono">Δp → ∞</span>, which is unphysical – so
          the field must retain a minimal “zero-point” motion.
        </motion.div>
      </div>

      {/* Right: oscillator ladder */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-10 pb-8 md:pb-0">
        <motion.div
          className="relative w-full max-w-sm h-[80%] card-glass rounded-2xl p-5"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-xs text-slate-300 mb-2 font-mono">
            Quantum harmonic oscillator
          </p>
          <div className="absolute left-10 right-24 top-10 bottom-10 flex flex-col justify-between">
            {Array.from({ length: 5 }).map((_, idx) => {
              const n = 4 - idx;
              const label = n === 0 ? "n = 0" : `n = ${n}`;
              const energy = n + 0.5;
              const highlight = n === 0;
              return (
                <motion.div
                  key={n}
                  className="relative flex items-center gap-3"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + 0.07 * idx }}
                >
                  <div
                    className={`h-px flex-1 ${
                      highlight ? "bg-accent.blue" : "bg-slate-600"
                    }`}
                  />
                  <div className="w-24 flex justify-between text-[11px] text-slate-300">
                    <span>{label}</span>
                    <span className={highlight ? "text-accent.blue" : ""}>
                      {(energy / 2).toFixed(1)} ħω
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="absolute top-10 right-8 text-xs text-slate-300 font-mono">
            E<sub>0</sub> = ½ ħω
          </div>
          <motion.div
            className="absolute bottom-6 left-5 text-[10px] text-slate-400 max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Even the ground state (n = 0) sits at{" "}
            <span className="font-mono">½ ħω</span>, not zero. Copy this on the
            board and connect it to vacuum fluctuations.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function UncertaintyBlob() {
  return (
    <div className="relative w-36 h-36">
      <motion.div
        className="absolute inset-0 rounded-full bg-accent.blue/30 blur-xl"
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-3 rounded-full border border-accent.blue/70"
        animate={{
          rotate: [0, 12, -8, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-7 rounded-full border border-accent.purple/60 border-dashed" />
      <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-100 font-mono">
        Δx · Δp ≥ ħ/2
      </div>
    </div>
  );
}
