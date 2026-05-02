import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#111111]">
      {/* Animated Orb 1 */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[#78cc6d] rounded-full mix-blend-screen filter blur-[150px] opacity-20"
      />
      
      {/* Animated Orb 2 */}
      <motion.div
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 150, -150, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-[#2a5c22] rounded-full mix-blend-screen filter blur-[150px] opacity-20"
      />

      {/* Animated Orb 3 */}
      <motion.div
        animate={{
          x: [0, 100, -150, 0],
          y: [0, 200, -100, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] bg-[#4a8a41] rounded-full mix-blend-screen filter blur-[150px] opacity-20"
      />
      
      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9IkQwIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] opacity-[0.05]"></div>
    </div>
  );
};

export default Background;
