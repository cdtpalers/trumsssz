import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOVE_NOTES } from '../constants';
import { X, Sparkles, RefreshCcw } from 'lucide-react';

const LoveJar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [shaking, setShaking] = useState(false);

  // Generate random positions for the "folded notes" inside the jar
  const [foldedNotes] = useState(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      rotation: Math.random() * 180,
      x: Math.random() * 60 - 30, // Random spread inside jar
      y: Math.random() * 80 + 20, // Bottom accumulation
      color: LOVE_NOTES[i % LOVE_NOTES.length].color,
      delay: Math.random() * 2
    }))
  );

  const pullNote = () => {
    if (isOpen) return;

    setShaking(true);
    setTimeout(() => setShaking(false), 500);

    setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const closeNote = () => {
    setIsOpen(false);
    setTimeout(() => {
      // Pick next note for next time
      setCurrentNoteIndex((prev) => (prev + 1) % LOVE_NOTES.length);
    }, 500);
  };

  const note = LOVE_NOTES[currentNoteIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] w-full px-4 relative">

      {/* Title / Instructions */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <p className="text-teal-800 font-serif italic text-xl">
          {isOpen ? "A message from my heart..." : "Tap the jar to receive a message"}
        </p>
      </motion.div>

      <div className="relative h-[400px] flex items-center justify-center">

        {/* THE JAR */}
        <motion.div
          className="relative z-10 cursor-pointer group"
          animate={shaking ? { rotate: [0, -5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
          onClick={pullNote}
        >
          {/* Jar Lid */}
          <div className="w-32 h-6 bg-amber-200 mx-auto rounded-sm border border-amber-300 shadow-sm relative z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 via-transparent to-amber-900/10" />
          </div>

          {/* Jar Neck */}
          <div className="w-28 h-8 bg-blue-100/30 mx-auto border-x-2 border-blue-200 backdrop-blur-sm z-10" />

          {/* Jar Body */}
          <div className="w-48 h-64 bg-gradient-to-br from-blue-100/40 to-teal-100/40 backdrop-blur-md rounded-b-[3rem] rounded-t-lg border-2 border-blue-200 shadow-xl relative overflow-hidden">

            {/* Glass Shine */}
            <div className="absolute top-4 left-4 w-4 h-56 bg-gradient-to-b from-white/60 to-transparent rounded-full blur-[1px]" />
            <div className="absolute bottom-4 right-8 w-16 h-16 bg-white/20 rounded-full blur-xl" />

            {/* Folded Notes Inside */}
            <div className="absolute inset-0 p-4">
              {foldedNotes.map((n) => (
                <motion.div
                  key={n.id}
                  className={`absolute w-10 h-6 ${n.color} rounded shadow-sm border border-black/5 opacity-80`}
                  style={{
                    left: '50%',
                    marginLeft: n.x,
                    top: n.y + 40,
                  }}
                  animate={{
                    rotate: n.rotation,
                    y: [0, -2, 0],
                  }}
                  transition={{
                    rotate: { duration: 0 },
                    y: { duration: 3, repeat: Infinity, delay: n.delay, ease: "easeInOut" }
                  }}
                />
              ))}
            </div>

            {/* Sparkles Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute top-10 right-10 text-white/60 w-4 h-4 animate-pulse" />
              <Sparkles className="absolute bottom-20 left-10 text-white/40 w-3 h-3 animate-bounce" />
            </div>

          </div>
        </motion.div>

        {/* POPPED OUT NOTE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0, y: 100, rotate: 0 }}
              animate={{ scale: 1, y: -50, rotate: Math.random() * 4 - 2 }}
              exit={{ scale: 0, y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className={`absolute z-50 w-72 md:w-80 ${note.color} p-8 rounded-lg shadow-2xl border-2 border-white/50 flex flex-col items-center text-center`}
            >
              {/* Close Button */}
              <button
                onClick={(e) => { e.stopPropagation(); closeNote(); }}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={20} />
              </button>

              <div className="mb-4 text-teal-500/50">
                <Sparkles size={24} />
              </div>

              <p className="font-handwriting text-2xl text-gray-800 leading-relaxed mb-6">
                "{note.content}"
              </p>

              <div className="flex gap-3">
                <button
                  onClick={(e) => { e.stopPropagation(); closeNote(); }}
                  className="text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-teal-800"
                >
                  Put back
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);

                    setTimeout(() => {
                      setCurrentNoteIndex((prev) => (prev + 1) % LOVE_NOTES.length);
                      setShaking(true);
                      setTimeout(() => setShaking(false), 500);
                      setTimeout(() => setIsOpen(true), 200);
                    }, 400);
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-teal-800 flex items-center gap-1"
                >
                  <RefreshCcw size={12} /> New Note
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Floor Shadow */}
      <div className="w-48 h-4 bg-black/10 rounded-[100%] blur-md -mt-4 z-0" />

    </div>
  );
};

export default LoveJar;
