import React from "react";
import { motion } from "framer-motion";

export default function SlidePatchConcept() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-gradient-to-br from-space-800 via-space-900 to-black">
      {/* Left: explanation */}
      <div className="flex-1 px-8 md:px-12 py-8 flex flex-col justify-center gap-5">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Real Surfaces Are Dirty: Patch Potentials
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-slate-200"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Even when you ground a metal plate, microscopic work-function
          variations, contamination, and grain boundaries can leave behind
          islands of slightly higher or lower surface voltage. These are{" "}
          <span className="font-semibold text-accent.blue">patch potentials</span>.
        </motion.p>

        <motion.ul
          className="text-xs md:text-sm text-slate-300 space-y-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <li>• They produce long-range electrostatic forces that fall slowly with distance.</li>
          <li>• Those forces can be as large as, or larger than, the true Casimir signal.</li>
          <li>• If you don’t model them, you can “discover” the wrong physics.</li>
        </motion.ul>

        <motion.div
          className="mt-2 text-xs text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Here you can emphasize: controlling or modeling patches is the price
          you pay to do precision vacuum physics.
        </motion.div>
      </div>

      {/* Right: tiled surface visualization */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-10">
        <motion.div
          className="w-full max-w-md h-[70%] card-glass rounded-2xl p-4 relative"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-slate-300 mb-2 font-mono">
            Cartoon of patch potentials on a metallic surface
          </p>
          <PatchGrid />
        </motion.div>
      </div>
    </div>
  );
}

function PatchGrid() {
  const tiles = Array.from({ length: 8 * 6 }, (_, i) => i);
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-space-900">
      <div className="grid grid-cols-8 grid-rows-6 w-full h-full">
        {tiles.map((i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          const base = 0.3 + (row + col) * 0.02;
          return (
            <motion.div
              key={i}
              className="border border-slate-800/70"
              style={{
                background: `linear-gradient(135deg, rgba(56, 189, 248, ${
                  base * 0.4
                }), rgba(168, 85, 247, ${base * 0.2}))`,
              }}
              animate={{
                opacity: [0.6, 1, 0.7, 1],
              }}
              transition={{
                duration: 6 + (row + col) * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
      <div className="absolute inset-x-4 bottom-3 flex justify-between text-[10px] text-slate-300">
        <span>Local work-function / voltage patches</span>
        <span className="font-mono">V(x, y)</span>
      </div>
    </div>
  );
}
