import { Skeleton } from '../../../components/ui/skeleton';
import { motion } from 'framer-motion';
import React, { useState } from 'react'

const RedSection2 = () => {


   const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };
//   const childVariants = {
//   hidden: { opacity: 0, scale: 0.5 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "tween",
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <motion.section  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.5 }}  className='relative  w-full flex flex-col justify-center items-center  bg-cover bg-center  '
              //  style={{ backgroundImage: `url(${'/Images/bg.svg'})` }}
     >
      {/* <motion.h1     variants={childVariants} className= 'text-primary   font-R_regular text-[2rem] md:text-[4rem] leading-[2.2rem] md:leading-[4.5rem] tracking-[.1rem]  md:tracking-[.4rem]    font-normal text-justify md:text-center     '>
            When you speak your voice <br className='hidden md:block'/>
            clearly, people don’t just  <br className='hidden md:block'/>
            hear they remember.
        </motion.h1> */}
          {!isLoaded && (
        <Skeleton className={`absolute h-full md:h-[40rem] inset-0 w-full bg-secondary/20`} />
      )}
      <video
        
          className={`w-full hidden md:block object-cover transition-opacity duration-500  ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={"/Images/RedSection/des.mp4"}  />
          Your browser does not support the video tag.
        </video>

           <video
        
          className={`w-full md:hidden object-cover transition-opacity duration-500  ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={"/Images/RedSection/des.mp4"}  />
          Your browser does not support the video tag.
        </video>
    </motion.section>
  )
}   

export default RedSection2
