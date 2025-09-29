import React from 'react'
import Nav from '../../../components/Nav/Nav'
import { motion } from "framer-motion"

const Swirl = () => {
    const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" },
    },
  };
  return (
     <motion.div
     variants={containerVariants}
      initial="hidden"
      whileInView="show"
    className='  h-screen  relative overflow-hidden snap-start'>
         <motion.div variants={childVariants}>

              <Nav title={'DISRUPTIVE CREATIVITY'} tracking={'tracking-[.7rem]'} />
      </motion.div>
    <div className='  h-screen   relative flex items-center justify-center'>

      <img src={'/Images/Swirl/swirl.webp'} loading='lazy' alt="swirl background" className=' absolute w-full h-full object-cover'/>

        <div className=' z-10 flex items-center justify-center gap-5 '>
            <lable className='text-[10rem] tracking-[.7rem] font-R_regular text-primary uppercase'>SWIRL</lable>
                  <img src={'/Images/sLogo.svg'} loading='lazy' alt="logo" className=' w-50 ' />
<div class="inline-flex items-start">
  <span class="text-[10rem] tracking-[.7rem] font-R_regular leading-[9rem] py-0 h-fit text-primary uppercase ">Bold</span>
  <sup class="text-[3rem] text-primary mt-[3.3rem] font-M_regular -translate-x-4 ">TM</sup>
</div>
          

        </div>
        </div>

      </motion.div>
 
  )
}

export default Swirl
