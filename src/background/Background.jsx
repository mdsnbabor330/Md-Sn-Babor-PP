import { memo } from "react";
import { motion } from "framer-motion";

// Memoized so it never re-renders on route changes
const Background = memo(() => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#111111]" aria-hidden="true">
      {/* Animated Orb 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[8%] left-[8%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-[#78cc6d] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-20"
      />

      {/* Animated Orb 2 */}
      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 120, -120, 0],
          scale: [1, 1.4, 0.9, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] right-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#2a5c22] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-20"
      />

      {/* Animated Orb 3 */}
      <motion.div
        animate={{
          x: [0, 80, -120, 0],
          y: [0, 160, -80, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-8%] left-[25%] w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] bg-[#4a8a41] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-20"
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
});

Background.displayName = "Background";
export default Background;
