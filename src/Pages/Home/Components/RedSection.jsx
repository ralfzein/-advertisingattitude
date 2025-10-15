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
   <motion.section
  className="bg-bur bg-cover bg-center snap-start w-full"
  variants={containerVariants}
  initial="hidden"
  whileInView="show" 
  viewport={{ once: false, amount: 0.2 }} 
  style={{ backgroundImage: `url('/Images/bg.svg')` }}
>

    <div className='relative flex flex-wrap py-[3.5rem] w-full  px-4 md:px-[4rem]' >

       <motion.h1     variants={childVariants} className= 'md:hidden text-primary text-center md:text-left inline-block tracking-[.1rem]  md:tracking-[.4rem] font-R_regular text-[2rem] md:text-[5rem] leading-[2.2rem] md:leading-[6.5rem]  -ml-[5px] pl-0  font-normal     uppercase'
      >we don't just build brands. <br/> we train them to fight,<br/> evolve, and lead. 
      </motion.h1>



      <motion.h1     variants={childVariants} className= 'hidden text-primary text-center md:text-left md:inline-block tracking-[.2rem]  md:tracking-[.4rem] font-R_regular text-[2rem] md:text-[5rem] leading-[2.2rem] md:leading-[6.5rem]  -ml-[5px] pl-0  font-normal     uppercase'
      >we don't just build brands. <br/> 
      </motion.h1>
      <motion.h1     variants={childVariants} className= 'hidden text-primary text-center md:text-left md:inline-block tracking-[.2rem]  md:tracking-[.4rem] font-R_regular text-[2rem] md:text-[5rem] leading-[2.2rem] md:leading-[6.5rem]  -ml-[5px] pl-0  font-normal     uppercase'
     > we train them to fight, </motion.h1>

      <motion.h1     variants={childVariants} className= 'hidden text-primary text-center md:text-left md:inline-block tracking-[.2rem]  md:tracking-[.4rem] font-R_regular text-[2rem] md:text-[5rem] leading-[2.2rem] md:leading-[6.5rem]  -ml-[5px] pl-0  font-normal     uppercase'
     > evolve, and lead.
        </motion.h1>
    </div>
    </motion.section>
  )
}   

export default RedSection
