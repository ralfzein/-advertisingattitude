import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 rounded-full bg-primary pointer-events-none z-90"
      animate={{ x: position.x - 24, y: position.y - 24, scale: 1 }}
      whileHover={{ scale: 1.5 }} // 👈 animate scale on hover
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
}

export default CustomCursor;
