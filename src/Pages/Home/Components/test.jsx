import React, { useState } from "react";
import Nav from "../../../components/Nav/Nav";
import { motion, useAnimation } from "framer-motion";

const Test = () => {
  const controls = useAnimation();
  const [logoSrc, setLogoSrc] = useState("/Images/sLogo.svg");

  // Variants
  const containerVariants = {
    hidden: {},
    // show: { transition: { staggerChildren: 1 } },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const mainTextVariants = (direction = "down") => ({
    hidden: { opacity: 1, fontSize: "2.5rem", lineHeight: "2rem", y: 0 },
    show: {
      opacity: 1,
      fontSize: "2.8rem",
      lineHeight: "2.8rem",
      y: direction === "down" ? 0 : -0,
      transition: { duration: 1, ease: "easeInOut", delay: 1 },
    },
  });

  const hiddenTextVariants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 30,
      transition: { duration: 0.8, ease: "easeOut", delay: 1 },
    },
  };

  const hiddenTextVariants2 = {
    hidden: { opacity: 0, y: -0 },
    show: {
      opacity: 1,
      y: -20,
      transition: { duration: 0.8, ease: "easeOut", delay: 1 },
    },
  };
const logoVariants = {
  hidden: { width: "8rem", opacity: 0 },
  show: {
    width: "20rem",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 2 }
  }
};

const betweenVariants = {
  hidden: { justifyContent: "center"},
  show: {
    justifyContent: "space-between",
    transition: { duration: 5, ease: "easeInOut", delay: 5 }
  }
};
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
           viewport={{ once: false,amount:0.4}}

      className="relative  h-screen  w-full overflow-hidden "
    >
    
      <motion.div className="relative z-50 w-full" variants={navVariants}>
        <Nav title={["DISRUPTIVE CREATIVITY","DISCIPLINED EXECUTION"]} tracking="!text-[1rem] tracking-[0.2rem]" />
      </motion.div>

      <div className="relative flex h-screen flex-col items-center justify-start ">
   
        <video
          src="/Images/swirl.mp4" 
          autoPlay
          muted
          loop
          playsInline
          className="absolute   h-full w-full left-0   object-cover "
        />

        <motion.div

          className="relative z-10 flex flex-col w-full items-start justify-start pt-[5rem]  px-4  "
        >
            
            <div className=" flex-1   flex w-full  items-start justify-start ">
               <div
  className="relative flex w-full  items-center justify-center h-[15rem] mt-10"
 
>
  <motion.img
    src="/Images/sLogo.svg"
    loading="lazy"
    alt="logo"
    className="absolute"
    initial={{ width: "7rem", opacity: 1 }}
    whileInView={{ width: "8rem", opacity: 1 }}
    viewport={{ once: false, amount: 0.8 }}
    transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
  />
<motion.img
  src="/Images/contactLogo.png"
  loading="lazy"
  alt="logo"
  className="absolute translate-x-[-1rem] "
  variants={logoVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.8 }}

/>

</div>
</div>
<div className=" flex items-center justify-center  w-full gap-5  mt-25">
          {/* Left column */}
          <motion.div className="relative flex flex-col items-start ">
            <motion.div
              variants={hiddenTextVariants}
              className="absolute top-3 font-R_regular text-[1rem] uppercase tracking-[.2rem] text-primary"
            >
              MEET THE
            </motion.div>

            <motion.div
              variants={mainTextVariants("down")}
              className="font-R_regular uppercase tracking-[.2rem]  text-primary"
            >
              Swirl
            </motion.div>
          </motion.div>

          <motion.div className="relative flex flex-col items-start ">
            <motion.div
              variants={hiddenTextVariants2}
              className="absolute bottom-5 font-R_regular text-[1rem] uppercase tracking-[.2rem] text-primary"
            >
              MENTALITY
            </motion.div>

            <motion.div
              variants={mainTextVariants("up")}
              className="font-R_regular text-[5rem] uppercase tracking-[.7rem] text-primary relative"
            >
              <span className="flex items-start justify-start">
                Bold
               {/* <sub className=" text-[1.5rem] font-R_regular text-primary  -translate-x-6   tracking-normal">tm</sub> */}
              </span>
            </motion.div>
          </motion.div>
</div>
        </motion.div>
        {/* Bottom text */}
        <div className="  mt-5 flex items-center justify-center">
          <motion.div
            variants={hiddenTextVariants}
            className="font-R_regular text-[1.3rem] text-center uppercase tracking-[.2rem] text-primary"
          >
            WHERE SAFE IDEAS DON’T SURVIVE
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Test;
