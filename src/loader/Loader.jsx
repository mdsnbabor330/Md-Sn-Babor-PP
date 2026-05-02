import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const interval = setInterval(() => {
      setPercent(prev => (prev >= 100 ? 100 : prev + 1));
    }, 20);
    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.5,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: "circIn" }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#78cc6d 1px, transparent 1px), linear-gradient(90deg, #78cc6d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Orbiting Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full border border-dashed border-[#78cc6d]/20"
            style={{ width: `${100 - i * 20}%`, height: `${100 - i * 20}%` }}
          >
            {/* Orbiting Point */}
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#78cc6d] rounded-full shadow-[0_0_10px_#78cc6d]"
            />
          </motion.div>
        ))}

        {/* The Core */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(120, 204, 109, 0.2)",
                "0 0 50px rgba(120, 204, 109, 0.4)",
                "0 0 20px rgba(120, 204, 109, 0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-[#78cc6d] rounded-full"
          />

          <div className="text-center z-10">
            <motion.span
              key={percent}
              initial={{ opacity: 0.4, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#78cc6d] font-mono text-4xl font-black block drop-shadow-[0_0_15px_rgba(120,204,109,0.6)]"
            >
              {percent}%
            </motion.span>
            <span className="text-white/30 text-[8px] tracking-[0.3em] uppercase">System Sync</span>
          </div>
        </div>

        {/* Scanning Soundwave (Circular) */}
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-32 h-32 border border-[#78cc6d] rounded-full"
        />
      </div>


      {/* Edge Details */}
      <div className="absolute top-0 left-0 p-8 flex flex-col space-y-1">
        <div className="w-12 h-[1px] bg-[#78cc6d]/40" />
        <div className="w-8 h-[1px] bg-[#78cc6d]/20" />
      </div>
      <div className="absolute bottom-0 right-0 p-8 flex flex-col items-end space-y-1">
        <div className="w-8 h-[1px] bg-[#78cc6d]/20" />
        <div className="w-12 h-[1px] bg-[#78cc6d]/40" />
      </div>
    </motion.div>
  );
};

export default Loader;
