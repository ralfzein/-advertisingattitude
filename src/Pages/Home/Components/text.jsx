import { motion, useAnimation, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const words = ["Disrupt", "Leave", "Echoes"];
const finalText = [
  "When you speak your voice clearly,",
  " people don’t just",
  "hear — they remember.",
];

const TextIntro = () => {
  const controls = useAnimation(); // not needed now, you can remove if not using
  const [phase, setPhase] = useState("scrolling");

  // 🧭 Setup scroll trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 }); // triggers when 60% is visible

  // ⏱️ Loop through the phases only once in view
  useEffect(() => {
    if (!isInView) return; // doesn't start unless visible

    const duration = phase === "scrolling" ? 7000 : 4000;

    const timer = setTimeout(() => {
      setPhase((prev) => (prev === "scrolling" ? "final" : "scrolling"));
    }, duration);

    return () => clearTimeout(timer);
  }, [phase, isInView]);

  // ✅ Your existing row animation (unchanged)
  const rowVariant = (direction) => {
  const isSmallScreen = window.innerWidth < 768; // < 768px = mobile/small
  
  const initialX = direction === "left" 
    ? "100%" 
    : isSmallScreen 
      ? "-180%" 
      : "-154%";

  const animateX = direction === "left" 
    ? isSmallScreen 
      ? "-180%" 
      : "-154%" 
    : "100%";

  return {
    initial: { x: initialX },
    animate: {
      x: animateX,
      transition: { duration: 9, ease: "linear" }, // 10 sec scroll
    },
  };
};


  // 🍃 Final text enter/exit animation (unchanged)
  const finalContainer = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const lineVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="w-full py-10 h-[20vh] md:h-[60vh] bg-bur flex flex-col justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {/* Phase 1 — Scrolling Words */}
        {phase === "scrolling" && isInView && (
          <motion.div
            key="scrolling"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="space-y-2 md:space-y-6"
          >
            {words.map((word, i) => (
              <motion.div
                key={i}
                variants={rowVariant(i === 1 ? "right" : "left")}
                initial="initial"
                animate="animate"
                className="flex whitespace-nowrap"
              >
                {[...Array(7)].map((_, index) => (
                  <p
                    key={index}
                    className={`text-[1.9rem] leading-[2rem] md:text-[6rem] md:leading-[6.2rem] font-R_regular mx-2 md:mx-5 ${
                      i === 1
                        ? index === 4
                          ? "text-white"
                          : "text-stroke"
                        : index === 2
                        ? "text-white"
                        : "text-stroke"
                    }`}
                  >
                    {word}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Phase 2 — Final Text */}
        {phase === "final" && isInView && (
          <motion.div
            key="final"
            variants={finalContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center text-[1.5rem] leading-[2rem] md:text-[5rem] font-R_regular text-white md:leading-tight"
          >
            {finalText.map((line, i) => (
              <motion.p key={i} variants={lineVariant} className="overflow-hidden">
                {line}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextIntro;
