import React from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  // Create an array of hearts to render
  const hearts = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-200 opacity-30"
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
            scale: Math.random() * 0.5 + 0.5,
            rotate: 0,
          }}
          animate={{
            y: "-10vh",
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            fontSize: `${Math.random() * 30 + 20}px`
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
