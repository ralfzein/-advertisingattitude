import { motion } from "framer-motion"; 
import Nav from "../../../components/Nav/Nav";
import { useRef } from "react";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const childVariantsnav = {
    hidden: { opacity: 0 ,y:-20 },
    show: {
      opacity: 1,
      y :0,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" },
    },
  };
const childVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const sectionRef = useRef(null);
  return (
    <motion.section ref={sectionRef} 
      variants={containerVariants}
      initial="hidden"
      id="hero-section"
  viewport={{ once: false, amount: 0.2 }} 

      whileInView="show"
      className="relative h-screen w-full snap-start bg-amber-400"
    >
      {/* Hero Background */}
      <div className="absolute inset-0 ">

        <img
          src={'/Images/herro.webp'}
          alt="Hero"
          loading='lazy'  decoding="sync"
          className="hidden sm:block w-full h-full  object-cover "
        />
          <img
          src={'/Images/Homepage hero.webp'}
          alt="Hero"
          loading='lazy'  decoding="sync"
          className=" sm:hidden w-full h-full  object-cover "
        />
         {/* <img
          src={opacity}
          alt="Hero"
          className="absolute inset-0  object-cover"
        /> */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#202A43]/75"></div>

      {/* Navigation */}
      <motion.div
        variants={childVariantsnav}
        className="relative z-50 w-full"
      >
        <Nav   title={["think boldly", "feel deeply", "act smartly"]}
         tracking={"tracking-[0.5rem] md:tracking-[1.6rem]" } 
          sectionRef={sectionRef} />
      </motion.div>

      {/* Hero Content */}
      <div className="flex flex-col items-center  md:justify-center h-full relative z-10 px-4">
        <motion.div variants={childVariants} className=" mt-[33vh] flex flex-col items-center gap-6 md:gap-8 ">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center   gap-6 md:gap-4">
        <img
          
          src={'/Images/sLogo.svg'}
          alt="Hero"
          loading='lazy'  decoding="sync"
          className="w-full md:w-[16rem] max-w-full  object-contain hidden sm:block "
        />
       <div className="h-[10rem] max-w-[50%]">
         <img
          src={'/Images/sLogo.svg'}
          alt="Hero"
          loading='lazy'  decoding="sync"
          className="w-full object-contain md:mt-25 sm:hidden"
          />
          </div>

          <h1 className="font-R_regular text-[3.5rem]  sm:text-[6rem] text-primary leading-[3.4rem] md:leading-[5.2rem]  translate-y-2 md:translate-y-0
                 sm:pt-0    text-center  sm:text-left">
                Advertising <br  /> Attitude 
          </h1>
</div>
        <h1   className="font-R_regular text-[1.2rem] sm:text-[3rem] text-secondary
         md:pt-14 sm:pt-8 tracking-[0.2rem] md:tracking-[0.5rem]  leading-[1.2] md:leading-[1.1] text-center ">
          LEADING CREATIVE  AGENCY
        </h1>
      </motion.div></div>
    </motion.section>
  );
}

export default Hero;
