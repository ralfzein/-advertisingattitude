import React, { useState } from "react";
import Nav from "../../../components/Nav/Nav";
import { motion, useAnimation } from "framer-motion";

const Swirl = () => {
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
    hidden: { opacity: 1, fontSize: "10rem", lineHeight: "9rem", y: 0 },
    show: {
      opacity: 1,
      fontSize: "8rem",
      lineHeight: "8rem",
      y: direction === "down" ? 40 : -40,
      transition: { duration: 0.8, ease: "easeInOut", delay: 1 },
    },
  });

  const hiddenTextVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 1 },
    },
  };

  const hiddenTextVariants2 = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 1 },
    },
  };
const logoVariants = {
  hidden: { width: "15rem", opacity: 0 },
  show: {
    width: "30rem",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.8 }
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

      className="relative  h-screen w-full overflow-hidden snap-start"
    >
      {/* Navbar */}
      <motion.div className="relative z-50 w-full" variants={navVariants}>
        <Nav title="DISRUPTIVE CREATIVITY" tracking="tracking-[.7rem]" />
      </motion.div>

      <div className="relative flex h-screen flex-col items-center justify-center">
        {/* Background Video */}
        <video
          src="/Images/swirl.mp4" 
          autoPlay
          muted
          loop
          playsInline
          className="absolute   h-full w-full left-0   object-cover "
        />
{/* <img 
          src="/Images/Swirl/swirl.webp"
          loading="lazy"
          alt="swirl background"
          className="absolute h-full w-full object-cover"
        /> */}
        {/* Foreground */}
        <motion.div
  //       variants={betweenVariants}
  //        initial="hidden"
  // animate="show"

          className="relative z-10 flex w-full items-center justify-center  gap-5 px-[4rem]"
        >
          {/* Left column */}
          <motion.div className="relative flex flex-col items-start">
            <motion.div
              variants={hiddenTextVariants}
              className="absolute -top-3 font-R_regular text-[2.5rem] uppercase tracking-[.7rem] text-primary"
            >
              MEET THE
            </motion.div>

            <motion.div
              variants={mainTextVariants("down")}
              className="font-R_regular text-[10rem] uppercase tracking-[.7rem] text-primary"
            >
              Swirl
            </motion.div>
          </motion.div>

          {/* Middle logo section */}
          <motion.div
  className="relative flex h-[25rem] items-center justify-center"
  initial={{ width: "12rem" }}
  whileInView={{ width: "28rem" }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
>
  <motion.img
    src="/Images/sLogo.svg"
    loading="lazy"
    alt="logo"
    className="absolute"
    initial={{ width: "12rem", opacity: 1 }}
    whileInView={{ width: "15rem", opacity: 1 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
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

</motion.div>

          {/* Right column */}
          <motion.div className="relative flex flex-col items-start translate-x-10">
            <motion.div
              variants={hiddenTextVariants2}
              className="absolute -bottom-3 font-R_regular text-[2.5rem] uppercase tracking-[.7rem] text-primary"
            >
              MENTALITY
            </motion.div>

            <motion.div
              variants={mainTextVariants("up")}
              className="font-R_regular text-[10rem] uppercase tracking-[.7rem] text-primary relative  "
            >
              <span className="flex items-start justify-start">
                Bold

               <sub className=" text-[2.5rem] font-R_regular text-primary  -translate-x-6   tracking-normal">tm</sub>

              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom text */}
        <div className="absolute bottom-10 z-10 flex items-center justify-center">
          <motion.div
            variants={hiddenTextVariants}
            className="font-R_regular text-[2.5rem] uppercase tracking-[.3rem] text-primary"
          >
            WHERE SAFE IDEAS DON’T SURVIVE
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Swirl;
