import React from 'react'
import { motion, AnimatePresence } from "framer-motion";



const Footer = () => {

    const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };


  const childVariantsScale = {
    hidden: { opacity: 0, scale: 0.8 },
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
 const childVariants = {
    hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
    },
  },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      whileInView="show"
       className='relative snap-start h-screen flex flex-col   bg-background   'id="footer"
       style={{ backgroundImage: `url('/Images/bg.svg')` }}>
      <div className='flex flex-col px-[4rem] justify-around ween h-full mb-5 '>
        <motion.p  variants={childVariants} className=' mt-5
          font-M_bold  text-primary
             leading-[1.3rem] text-justify
          '>Advertising Attitude is a leading creative agency built for brands that 
            refuse to blend in. We don’t just craft campaigns—we train ideas to fight harder,
             lastlonger, and leave echoes. Rooted in clarity, rebellion, and bold thinking, 
             we work with creators, leaders, and brands to reshape narratives, break   patterns, 
             andpunch through the noise. With a SwirlBold™ mindset at our core, we fuse creative 
             chaos with strategic intent—making work that’s  unignorable, unforgettable,and unapologetically sharp.
             </motion.p>
               <div className="" />

        <motion.div  variants={childVariantsScale}  className='  flex'>
            <img src={'/Images/logo2.svg'} alt="Hero" loading='lazy' className="w-full h-auto object-cover " />
        </motion.div>
        <div className='flex justify-between mt-5 '>
            <div className='flex items-center gap-10  '>
                {['LinkedIn', 'Instagram', 'Facebook', 'Newsletter', 'Careers' ].map((item, index) => (
                    
                <span className='text-sm font-M_bold text-primary tracking-[.1em] cursor-pointer hover:text-bur'>{item}</span>
                ))}
                
            </div>


            <div className='flex items-center gap-10  '>
                <span className='text-sm font-M_bold text-primary tracking-[.1em]'>Privacy policy</span>
                <span className='text-sm font-M_bold text-primary tracking-[.1em]'>@2025 Advertising Attitude</span>
            </div> 
        </div>
        </div>
        <motion.div variants={childVariants} className=' py-2 w-full bg-bur flex items-center  '>
            

              <div className='flex justify-between  items-center w-full  px-[4rem] '>
            <div className='flex items-center justify-start  '>
                <span className='text-sm font-M_medium text-primary tracking-[.1em]'>Beirut — Beirut Digital District BDD 1499</span>
            </div>


            <div className='  flex flex-col items-start gap-0 mr-[6.8rem] '>
                <span className='text-sm font-M_medium text-primary tracking-[.1em]'>business@advertisingattitude.com
                  </span>
                <span className='text-sm font-M_medium text-primary tracking-[.1em]'>talent@advertisingattitude</span>
            </div> 
        </div>
        </motion.div>
    </motion.div>
  )
}

export default Footer
