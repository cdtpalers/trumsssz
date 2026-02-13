import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOVE_NOTES } from '../constants';
import { RefreshCcw, Heart } from 'lucide-react';

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [showNote, setShowNote] = useState(false);

  // Cycle through notes randomly or sequentially
  const pullNextNote = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Delay showing the actual note content slightly for the envelope animation
      setTimeout(() => setShowNote(true), 600);
    } else {
      // If already open, close the note first, then swap
      setShowNote(false);
      setTimeout(() => {
        setCurrentNoteIndex((prev) => (prev + 1) % LOVE_NOTES.length);
        setShowNote(true);
      }, 500);
    }
  };

  const resetEnvelope = () => {
    setShowNote(false);
    setTimeout(() => setIsOpen(false), 500);
  };

  const note = LOVE_NOTES[currentNoteIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full px-4">
      
      {/* Instructions */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 text-blue-800 font-serif italic text-lg text-center"
      >
        {isOpen ? "Here is a note for you..." : "Tap the envelope to open"}
      </motion.p>

      {/* Envelope Container */}
      <div className="relative w-72 h-48 cursor-pointer" onClick={isOpen ? undefined : pullNextNote}>
        
        {/* The Note Card (Behind the front flap, usually) */}
        <AnimatePresence>
          {showNote && (
            <motion.div
              initial={{ y: 0, opacity: 0, scale: 0.8 }}
              animate={{ 
                y: -180, // Move up out of envelope
                opacity: 1, 
                scale: 1,
                rotate: Math.random() * 4 - 2 // Slight random rotation for realism
              }}
              exit={{ y: 0, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className={`absolute left-0 right-0 mx-auto w-64 ${note.color} p-6 rounded-lg shadow-xl border border-blue-200 z-10 flex flex-col items-center justify-center text-center`}
              style={{ bottom: '10px' }} // Start position inside
            >
              <Heart className="w-6 h-6 text-teal-400 mb-2 fill-current" />
              <p className="text-gray-800 font-handwriting text-lg leading-relaxed font-medium">
                "{note.content}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Envelope Back */}
        <div className="absolute bottom-0 w-full h-full bg-blue-700 rounded-lg shadow-lg" />

        {/* Envelope Top Flap - The one that opens */}
        <motion.div 
          className="absolute top-0 w-full h-1/2 bg-blue-600 origin-top z-20 rounded-t-lg"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0, zIndex: isOpen ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          style={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)', // Triangle shape
            backfaceVisibility: 'hidden'
          }}
        />
        {/* Inner Flap Color (visible when open) */}
        <motion.div 
          className="absolute top-0 w-full h-1/2 bg-blue-800 origin-top z-0 rounded-t-lg"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)', 
          }}
        />

        {/* Envelope Body (Front Flaps) */}
        <div className="absolute bottom-0 w-full h-full z-20 pointer-events-none">
           {/* Left Flap */}
           <div 
             className="absolute left-0 bottom-0 w-full h-full bg-blue-500 rounded-bl-lg"
             style={{ clipPath: 'polygon(0% 100%, 0% 0%, 50% 50%)' }} 
           />
           {/* Right Flap */}
           <div 
             className="absolute right-0 bottom-0 w-full h-full bg-blue-500 rounded-br-lg"
             style={{ clipPath: 'polygon(100% 100%, 100% 0%, 50% 50%)' }} 
           />
           {/* Bottom Flap */}
           <div 
             className="absolute bottom-0 w-full h-full bg-blue-600 rounded-b-lg shadow-inner"
             style={{ clipPath: 'polygon(0% 100%, 100% 100%, 50% 50%)' }} 
           />
        </div>

      </div>

      {/* Controls */}
      <div className="mt-32 flex gap-4 z-30">
        {isOpen && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); pullNextNote(); }}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <RefreshCcw size={18} />
              Another Note
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); resetEnvelope(); }}
              className="text-teal-600 font-medium hover:underline px-4 py-2"
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Envelope;
