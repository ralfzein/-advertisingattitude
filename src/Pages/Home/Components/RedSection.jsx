import React from 'react'
import { motion } from "framer-motion";

const RedSection = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };
  const childVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
  return (
   <motion.div
  className="bg-bur bg-cover bg-center snap-start"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }} 
  style={{ backgroundImage: `url('/Images/bg.svg')` }}
>

    <div className='relative  py-[3.5rem] w-full  px-[4rem] '>
      <motion.h1     variants={childVariants} className= 'text-primary inline-block  tracking-[.4rem] font-R_regular text-[5rem] leading-[6.5rem]  -ml-[5px] pl-0  font-normal     uppercase'
      >we don't just build brands. <br/> 
      we train them to fight, <br/>
      evolve, and lead.
        </motion.h1>
    </div>
    </motion.div>
  )
}   

export default RedSection
