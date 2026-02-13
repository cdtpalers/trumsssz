import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOVE_NOTES } from '../constants';
import { X, Sparkles, RefreshCcw } from 'lucide-react';

import emailjs from '@emailjs/browser';

const LoveJar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [shaking, setShaking] = useState(false);

  const [isWriteOpen, setIsWriteOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSend = async () => {
    if (!message.trim()) return;

    setIsSending(true);

    try {
      const serviceId = 'service_pjyt3at';
      const templateId = 'template_3qjh8uc';
      const publicKey = 'vZSk4w2_GHmr60P6J';

      const templateParams = {
        message: message,
        to_name: 'Partner',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSending(false);
      setIsWriteOpen(false);
      setMessage('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSending(false);

      let errorMessage = "Failed to send note. Please try again.";
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      } else if (typeof error === 'object' && error !== null && 'text' in error) {
        // EmailJS often returns an object like { status: 400, text: "..." }
        errorMessage = `Error: ${(error as any).text}`;
      }

      alert(errorMessage);
    }
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

          {/* WRITE NOTE MODAL */}
          {isWriteOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="absolute z-50 inset-0 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm rounded-3xl"
              onClick={() => setIsWriteOpen(false)}
            >
              <div
                className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl border border-teal-100"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                  <Sparkles size={18} /> Write a Note
                </h3>
                <textarea
                  className="w-full h-32 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none mb-4 text-gray-700 bg-gray-50"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setIsWriteOpen(false)}
                    className="px-4 py-2 text-gray-500 hover:text-gray-700"
                    disabled={isSending}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSend}
                    disabled={!message.trim() || isSending}
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSending ? (
                      <RefreshCcw size={16} className="animate-spin" />
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* SUCCESS POPUP */}
          {showSuccess && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="absolute z-[60] bottom-10 bg-emerald-50 text-emerald-800 px-6 py-4 rounded-xl shadow-lg border border-emerald-200 flex items-center gap-3"
            >
              <div className="bg-emerald-100 p-2 rounded-full">
                <Sparkles size={16} className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-sm">Sent Successfully!</p>
                <p className="text-xs opacity-80">The note was sent to the website creator.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BUTTON TO OPEN WRITE MODAL */}
      {!isOpen && !isWriteOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsWriteOpen(true)}
          className="mt-8 px-6 py-2 bg-white/80 backdrop-blur-sm border border-white/50 text-teal-700 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all text-sm font-semibold flex items-center gap-2 group"
        >
          <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
          Write a Note
        </motion.button>
      )}

      {/* Decorative Floor Shadow */}
      <div className="w-48 h-4 bg-black/10 rounded-[100%] blur-md -mt-4 z-0" />

    </div>
  );
};

export default LoveJar;
