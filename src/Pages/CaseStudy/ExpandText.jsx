import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandableText = ({ html = "" }) => {
  const [expanded, setExpanded] = useState(false);

  // 🧠 Extract the <h1> and <p> parts separately
  const headingMatch = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/i);
  const paragraphMatch = html.match(/<p[^>]*>[\s\S]*?<\/p>/i);

  const heading = headingMatch ? headingMatch[0] : "";
  const paragraph = paragraphMatch ? paragraphMatch[0] : "";


  
  return (
    <div className="relative  overflow-hidden">
      <AnimatePresence mode="wait">
        {!expanded ? (
          // 🔹 Collapsed view
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* ✅ Heading (full opacity) */}
            {heading && (
              <div
                dangerouslySetInnerHTML={{ __html: heading }}
                className="mb-6 "
              />
            )}

            {/* ✅ Paragraph (only first two lines visible with fading opacity) */}
            {paragraph && (
              <div
                className="font-M_semibold text-[1rem] md:text-[1.3rem] leading-[1.6rem] tracking-[0.05rem] line-clamp-2 overflow-hidden mb-8"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "black",
                }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            )}

            {/* ✅ Expand button */}
            {paragraph && (
        <div className="w-full flex items-center justify-center translate-y-[-4rem] ">

              <motion.button
                onClick={() => setExpanded(true)}
                className="  font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0 
          flex items-center justify-center w-full md:w-[25rem] h-[3rem] md:h-[5rem] hover:bg-secondary shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer
           rounded-full   text-primary bg-secondary "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                See What We Did
              </motion.button>
              </div>
            )}
          </motion.div>
        ) : (
          // 🔹 Expanded view
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Show full HTML description */}
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        <div className="w-full flex items-center justify-center ">
            <motion.button
              onClick={() => setExpanded(false)}
              className="mt-4 font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] 
          flex items-center justify-center w-full md:w-[25rem] h-[3rem] md:h-[5rem] hover:bg-secondary shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer
           rounded-full   text-primary bg-secondary "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Show Less
            </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableText;
