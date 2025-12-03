import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideIntro from "./slides/SlideIntro.jsx";
import SlideHeisenberg from "./slides/SlideHeisenberg.jsx";
import SlideCasimirModes from "./slides/SlideCasimirModes.jsx";
import SlidePatchConcept from "./slides/SlidePatchConcept.jsx";
import SlideExperiment from "./slides/SlideExperiment.jsx";
import SlideModeling from "./slides/SlideModeling.jsx";
import SlideResultsCasimir from "./slides/SlideResultsCasimir.jsx";
import SlideResultsPatch from "./slides/SlideResultsPatch.jsx";
import SlidePatchParams from "./slides/SlidePatchParams.jsx";
import SlideImportance from "./slides/SlideImportance.jsx";

const slides = [
  SlideIntro,
  SlideHeisenberg,
  SlideCasimirModes,
  SlidePatchConcept,
  SlideExperiment,
  SlideModeling,
  SlideResultsCasimir,
  SlideResultsPatch,
  SlidePatchParams,
  SlideImportance,
];

const slideNames = [
  "Title",
  "Heisenberg & Zero-Point",
  "Casimir Mode Suppression",
  "Patch Potentials",
  "Experiment & Data",
  "Bayesian Modeling",
  "Casimir vs z",
  "Patch Force vs z",
  "α(z), vmin(z)",
  "Why It Matters",
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (nextIndex) => {
      if (nextIndex < 0 || nextIndex >= slides.length) return;
      setDirection(nextIndex > index ? 1 : -1);
      setIndex(nextIndex);
    },
    [index]
  );

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const CurrentSlide = slides[index];

  return (
    <div className="h-screen w-screen slide-gradient-bg flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-4 text-xs md:text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-full bg-slate-900/70 border border-slate-700/70 font-mono text-[11px] tracking-wide">
            QUANTUM VACUUM • CASIMIR • PATCH POTENTIALS
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex text-slate-400">
            Slide {index + 1} / {slides.length}
          </span>
          <div className="flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-accent.blue shadow-glow"
                    : "w-2 bg-slate-600/60 hover:bg-slate-400/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slide area */}
      <div className="flex-1 flex items-center justify-center px-3 pb-6">
        <div className="w-full max-w-6xl aspect-[16/9] relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 card-glass rounded-3xl overflow-hidden border border-slate-700/80"
            >
              <CurrentSlide />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom hints */}
      <div className="px-8 pb-4 text-[11px] md:text-xs text-slate-400 flex justify-between items-center">
        <span>Use ← / → or Space to navigate.</span>
        <span>{slideNames[index]}</span>
      </div>
    </div>
  );
}
