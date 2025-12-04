import React from "react";
import { motion } from "framer-motion";

const titleText = "Tuning the Quantum Vacuum:";
const subtitleText = "Casimir Forces, Patch Potentials, and Bayesian Inference";

export default function SlideIntro() {
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-space-800/80 via-space-900 to-black">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left: title */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Typewriter text={titleText} />
              <span className="block mt-2 text-xl md:text-2xl text-accent.blue/80">
                {subtitleText}
              </span>
            </motion.h1>

            <motion.div
              className="absolute -inset-4 rounded-3xl border border-accent.blue/20"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            />
          </motion.div>

          <motion.div
            className="mt-6 md:mt-8 text-sm md:text-base text-slate-300 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p>
              A 7-minute tour of how quantum fluctuations, microscopic surface
              patches, and modern Bayesian modeling all collide in one
              deceptively simple experiment: measuring forces between two
              metal plates separated by hundreds of nanometers.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center gap-4 text-xs text-slate-400"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent.blue shadow-glow" />
              <span>Blake Bird — Modern Physics Research</span>
            </div>
            <span className="hidden sm:inline text-slate-500">High Point University</span>
          </motion.div>
        </div>

        {/* Right: abstract “vacuum field” visualization */}
        <motion.div
          className="flex-1 relative overflow-hidden"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-accent.purple/30 via-transparent to-accent.blue/30 opacity-60" />
          <div className="absolute inset-0">
            <VacuumField />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Typewriter({ text, speed = 40 }) {
  const [shown, setShown] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return (
    <span className="relative">
      {shown}
      <span className="inline-block w-[2px] h-[1.1em] bg-accent.blue ml-0.5 animate-pulse align-middle" />
    </span>
  );
}

function VacuumField() {
  const points = Array.from({ length: 80 }, (_, i) => i);
  return (
    <div className="w-full h-full flex items-center justify-center bg-space-900/60">
      <div className="relative w-[85%] h-[75%] rounded-3xl border border-slate-700/80 bg-slate-900/60 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          {points.map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent.blue/60"
              initial={{
                x: Math.random() * 700 - 100,
                y: Math.random() * 380 - 60,
                scale: 0.4 + Math.random() * 0.8,
                opacity: 0.2 + Math.random() * 0.6,
              }}
              animate={{
                y: ["0%", "-8%", "6%", "-4%", "0%"],
                x: ["0%", "6%", "-5%", "4%", "0%"],
                opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-16 inset-y-14 border border-slate-700/80 rounded-xl">
          <div className="absolute inset-y-6 left-1/2 w-px bg-slate-700/80" />
          <div className="absolute inset-x-10 top-1/2 h-px bg-slate-700/60" />
          <div className="absolute left-10 top-1/2 -translate-y-1/2 h-10 w-[3px] bg-slate-200 rounded-full" />
          <div className="absolute right-10 top-1/2 -translate-y-1/2 h-10 w-[3px] bg-slate-200 rounded-full" />
        </div>
        <div className="absolute bottom-4 left-5 text-[10px] text-slate-400 font-mono">
          “Vacuum” filled with zero-point fluctuations
        </div>
      </div>
    </div>
  );
}
