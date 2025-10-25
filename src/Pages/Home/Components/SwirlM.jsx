import React, { useState } from "react";
import Nav from "../../../components/Nav/Nav";
import { motion, useAnimation } from "framer-motion";

const SwirlM = () => {
  const controls = useAnimation();
  const [logoSrc, setLogoSrc] = useState("/Images/sLogo.svg");


  const containerVariants = {
    hidden: {},
    // show: { transition: { staggerChildren: 1 } },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const mainTextVariants = (direction = "down") => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: direction === "down" ? 0 : -0,
      transition: { duration: 1, ease: "easeInOut", delay: 2.5 },
    },
  });

  const hiddenTextVariants2 = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 60,
      transition: { duration: 0.8, ease: "easeOut", delay: 2.5 },
    },
  };

  const hiddenTextVariants = {
    hidden: { opacity: 0, y: -0 },
    show: {
      opacity: 1,
      y: -50,
      transition: { duration: 0.8, ease: "easeOut", delay: 2.5 },
    },
  };
 
const logoVariants = {
  hidden: { width: "8rem", opacity: 0 },
  show: {
    width: "15rem",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 2.5 }
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
           viewport={{ once: true,amount:0.4}}

      className="relative  h-screen  w-full overflow-hidden "
    >
    
      <motion.div className="relative z-50 w-full md:hidden" variants={navVariants}>
        <Nav title={["DISRUPTIVE","CREATIVITY"]}
        
        tracking="text-[1.5rem] tracking-[0.5rem]" />
      </motion.div>

      <motion.div className="relative z-50 w-full hidden md:block" variants={navVariants}>
        <Nav title={["DISRUPTIVE CREATIVITY","DISCIPLINED EXECUTION"]}
        
        tracking="!text-[1.5rem] tracking-[0.2rem]" />
      </motion.div>

      <div className="relative flex h-screen  ">
   
        <video
          src="/Images/swirl.mp4" 
          autoPlay
          muted
          loop
          playsInline
          className="absolute   h-full w-full left-0   object-cover "
        />
            <div className="flex flex-col items-center justify-center w-full   pt-[5rem]  ">
        <motion.div

          className="relative z-10 flex flex-col w-full items-center justify-between     px-4  "
        >
            
               <motion.div className="relative flex flex-col items-start justify-center  w-full  ">
            <motion.div
              variants={hiddenTextVariants}
              className="absolute top-3 font-R_regular text-[2rem] w-full  uppercase tracking-[.2rem] text-primary"
            >
              MEET THE
            </motion.div> 

            <motion.div
              variants={mainTextVariants("down")}
              className="font-R_regular uppercase text-[4rem] text-left   leading-[4rem] tracking-[.7rem]  text-primary">
              Swirl
            </motion.div>
          </motion.div>
            <div className="   flex w-full  items-center justify-center h-[15rem]">
               <div
  className="relative flex w-full  items-center justify-center ">
  <motion.img
    src="/Images/sLogo.svg"
    loading="lazy"
    alt="logo"
    className="absolute"
    initial={{ width: "14rem", opacity: 1 }}
    whileInView={{ width: "7rem", opacity: 1 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.8, ease: "easeInOut", delay: 2 }}
  />
<motion.img
  src="/Images/contactLogo.png"
  loading="lazy"
  alt="logo"
  className="absolute "
  variants={logoVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.8 }}

/>

</div>
</div>
          {/* Left column */}
       

          <motion.div className="relative flex flex-col  items-end justify-center   w-full mt-10 ">
          <motion.div className=" flex flex-col  items-start justify-center  ">
            <motion.div
              variants={hiddenTextVariants2}
              className="absolute bottom-5      font-R_regular text-[2rem] uppercase tracking-[.2rem] text-primary"
            >
              MENTALITY
            </motion.div>

            <motion.div
              variants={mainTextVariants("up")}
              className="font-R_regular ] uppercase text-[4rem]  leading-[4rem] tracking-[.7rem] text-primary relative"
            >
              <span className="flex items-start justify-start">
                Bold
               {/* <sub className=" text-[1.5rem] font-R_regular text-primary  -translate-x-6   tracking-normal">tm</sub> */}
              </span>
            </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
       
        </div>
      </div>
    </motion.section>
  );
};

export default SwirlM;
