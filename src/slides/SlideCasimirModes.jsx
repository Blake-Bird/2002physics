import React from "react";
import { motion } from "framer-motion";

export default function SlideCasimirModes() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row bg-gradient-to-br from-space-900 via-space-800 to-space-900">
      {/* Left: picture of plates + modes */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-10 py-6">
        <motion.div
          className="w-full max-w-md card-glass rounded-2xl p-5 relative overflow-hidden"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-slate-300 font-mono mb-2">
            Mode suppression picture of the Casimir effect
          </p>
          <PlatesModes />
        </motion.div>
      </div>

      {/* Right: explanation text */}
      <div className="flex-1 px-8 md:px-12 py-8 flex flex-col justify-center gap-5">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-slate-50"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Fewer Vacuum Modes Between the Plates ⇒ Net Force Inward
        </motion.h2>

        <motion.ol
          className="list-decimal list-inside text-sm md:text-base text-slate-200 space-y-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <li>
            Outside the plates, the electromagnetic field supports a continuum
            of wavelengths.
          </li>
          <li>
            Inside, only standing waves that fit an integer number of
            half-wavelengths survive.
          </li>
          <li>
            That means fewer modes inside → lower zero-point energy between the
            plates.
          </li>
          <li>
            The higher vacuum energy outside pushes the plates together: this is
            the Casimir force.
          </li>
        </motion.ol>

        <motion.div
          className="mt-2 text-xs md:text-sm text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Here you can quickly sketch the same mode picture on the whiteboard,
          using the drawing to connect back to Heisenberg and the zero-point
          oscillator energy.
        </motion.div>
      </div>
    </div>
  );
}

function PlatesModes() {
  return (
    <div className="relative w-full h-56 md:h-64">
      {/* Plates */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 h-40 w-2 bg-slate-200 rounded" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 h-40 w-2 bg-slate-200 rounded" />

      {/* Inside modes (few) */}
      {Array.from({ length: 3 }).map((_, i) => {
        const n = i + 1;
        return (
          <motion.div
            key={n}
            className="absolute left-[3rem] right-[3rem]"
            style={{
              top: `${28 + i * 16}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="h-8 overflow-hidden">
              <motion.div
                className="h-full w-full bg-gradient-to-r from-accent.blue/70 via-accent.purple/70 to-accent.blue/70 opacity-80"
                style={{
                  borderRadius: "9999px",
                  clipPath: "path('M0,16 Q50,0 100,16 T200,16 T300,16')",
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Outside modes (many) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${10 + i * 12}%`,
            left: i % 2 === 0 ? "4%" : "72%",
            width: "22%",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4 + i * 0.05 }}
        >
          <div className="h-6 overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-accent.pink/70 to-accent.blue/70 opacity-80"
              animate={{
                x: [0, 6, -4, 4, 0],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-2 left-3 text-[10px] text-slate-400 font-mono">
        Fewer allowed modes inside → lower zero-point energy → inward force
      </div>
    </div>
  );
}
