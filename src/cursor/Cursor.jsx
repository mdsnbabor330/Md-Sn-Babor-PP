import { useEffect, useRef, useState, memo } from "react";

// Only rendered on desktop (hidden via CSS on mobile)
const Cursor = memo(() => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const rafRef = useRef(null);
  const pendingPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e) => {
      pendingPos.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ ...pendingPos.current });
          rafRef.current = null;
        });
      }
    };

    const handleMouseOver = (e) => {
      const el = e.target;
      const cursor = window.getComputedStyle(el).cursor;
      setIsPointer(
        cursor === "pointer" ||
          el.tagName === "A" ||
          el.tagName === "BUTTON" ||
          el.closest("a") !== null ||
          el.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-[#78cc6d] rounded-full pointer-events-none z-[99999] transition-transform duration-150 ease-out hidden lg:block mix-blend-difference"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.6 : 1})`,
          willChange: "transform",
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#78cc6d] rounded-full pointer-events-none z-[99999] hidden lg:block mix-blend-difference"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          willChange: "transform",
          transition: "transform 60ms linear",
        }}
      />
    </>
  );
});

Cursor.displayName = "Cursor";
export default Cursor;
