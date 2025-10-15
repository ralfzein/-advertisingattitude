import { motion } from 'framer-motion';
import React from 'react'

const RedSection2 = () => {


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
    <motion.section  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.5 }}  className='relative px-4 md:px-[4rem]  bg-bur py-[3.5rem] w-full flex flex-col justify-center items-center  bg-cover bg-center  '
              //  style={{ backgroundImage: `url(${'/Images/bg.svg'})` }}
     >
      <motion.h1     variants={childVariants} className= 'text-primary   font-R_regular text-[2rem] md:text-[4rem] leading-[2.2rem] md:leading-[4.5rem] tracking-[.1rem]  md:tracking-[.4rem]    font-normal text-justify md:text-center     '>
            When you speak your voice <br className='hidden md:block'/>
            clearly, people don’t just  <br className='hidden md:block'/>
            hear they remember.
        </motion.h1>
    </motion.section>
  )
}   

export default RedSection2
