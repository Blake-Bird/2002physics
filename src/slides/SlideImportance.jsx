import React from "react";
import { motion } from "framer-motion";

export default function SlideImportance() {
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-space-900 via-space-800 to-black">
      <div className="px-8 md:px-12 pt-7">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Why Tuning the Vacuum Matters
        </motion.h2>
      </div>

      <div className="flex-1 flex flex-col md:flex-row px-6 md:px-10 pb-8 gap-6">
        {/* Left: energy / finance-style visualization */}
        <motion.div
          className="flex-1 card-glass rounded-2xl p-5 flex flex-col gap-3"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs md:text-sm text-slate-200">
            The vacuum’s zero-point energy density is{" "}
            <span className="font-semibold text-accent.blue">
              absurdly large
            </span>{" "}
            on paper. Even if we never tap it directly, learning to manipulate
            tiny pieces of it can drive:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <ImpactCard
              title="Precision sensors"
              body="Casimir & patch forces set the noise floor for nanoscale accelerometers and force probes."
            />
            <ImpactCard
              title="Nano-machines"
              body="Engineers already design MEMS devices whose behavior is influenced by Casimir-like forces."
            />
            <ImpactCard
              title="Quantum tech"
              body="Controlling vacuum fluctuations is part of the same playbook as controlling decoherence and noise in quantum systems."
            />
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            You can also mention: if anyone ever found a stable way to tap even
            a tiny fraction of vacuum energy, the economic value would be
            astronomical – which is why a few companies are carefully exploring
            Casimir-based concepts.
          </p>
        </motion.div>

        {/* Right: companies & your future work */}
        <motion.div
          className="w-full md:w-80 card-glass rounded-2xl p-5 flex flex-col gap-3"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs md:text-sm text-slate-200">
            There are already groups and companies treating Casimir and
            vacuum-control as more than a curiosity:
          </p>
          <ul className="text-xs text-slate-300 space-y-2">
            <li>• Research labs refining Casimir measurements for metrology.</li>
            <li>• Startups in Texas and elsewhere exploring Casimir-based devices.</li>
            <li>• NASA / ESA studies on Casimir-like constraints for microdevices.</li>
          </ul>
          <div className="mt-3 border-t border-slate-700/70 pt-3 text-xs text-slate-200">
            <p className="font-semibold mb-1">Where you come in:</p>
            <p>
              You can say here: “This project is my first pass at that frontier:
              taking a real experiment, modeling contamination, and using modern
              inference tools to separate true quantum vacuum physics from the
              mess of reality. Next step: collaborating with a Casimir-focused
              company or lab to push this much further.”
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ImpactCard({ title, body }) {
  return (
    <div className="card-glass rounded-xl p-3 border border-slate-700/80">
      <div className="text-[11px] font-semibold text-accent.blue mb-1">
        {title}
      </div>
      <div className="text-[11px] md:text-[12px] text-slate-200">{body}</div>
    </div>
  );
}
