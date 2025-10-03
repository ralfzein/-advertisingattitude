import { motion } from "framer-motion"; 
import Nav from "../../../components/Nav/Nav";

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
  return (
    <motion.section
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
          className="w-full h-full  object-cover "
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
        <Nav title={["think boldly", "feel deeply", "act smartly"]} tracking={"tracking-[1.6rem]"} />
      </motion.div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full relative z-10 px-4">
        <motion.div variants={childVariants} className=" flex flex-col items-center gap-6 md:gap-10 ">
        <img
          
          src={'/Images/logo.svg'}
          alt="Hero"
          loading='lazy'  decoding="sync"
          className="w-full md:w-[50rem] max-w-full  object-contain md:mt-25"
        />

          
        <h1   className="font-R_regular text-[2rem] sm:text-[3rem] text-secondary
         md:pt-14 sm:pt-8 tracking-[0.5rem] leading-[1.2] md:leading-[1.1] text-center ">
          LEADING <br className="md:hidden" /> CREATIVE <br className="md:hidden"/> AGENCY
        </h1>
      </motion.div></div>
    </motion.section>
  );
}

export default Hero;
