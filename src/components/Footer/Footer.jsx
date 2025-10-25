import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {  BookUserIcon, FacebookIcon, FactoryIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';



const Footer = () => {

    const containerVariants = {
    hidden: { opacity: 1 },
    show: {

      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };



 const childVariants = {
    hidden: { opacity: 0 , y:50 },
  show: {
    opacity: 1,
  y:0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    },
  },
  };
  const navigate = useNavigate()

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"

      whileInView="show"
       className='relative  h-screen flex flex-col   bg-background   'id="footer"
       style={{ backgroundImage: `url('/Images/bg.svg')` }}>
      <div className='flex flex-col px-4 md:px-[4rem] justify-around ween h-full mb-5 '>
        <motion.p  variants={childVariants} className=' mt-5
          font-M_bold  text-primary tracking-[.1em] text-xs md:text-[1rem]
           leading-[1rem]  md:leading-[1.3rem] text-justify
          '>Advertising Attitude is a leading creative agency built for brands that 
            refuse to blend in. We don’t just craft campaigns — we train ideas to fight harder,
             lastlonger, and leave echoes. Rooted in clarity, rebellion, and bold thinking, 
             we work with creators, leaders, and brands to reshape narratives, break  patterns, 
             andpunch through the noise. With a SwirlBold™ mindset at our core, we fuse creative 
             chaos with strategic intent — making work that’s  unignorable, unforgettable,and unapologetically sharp.
             </motion.p>
               <div className="hidden md:block" />

        <motion.div  variants={childVariants}  className='  flex'>
            <img src={'/Images/logo2.svg'} alt="Hero" loading='lazy'  decoding="sync" className="w-full h-auto object-cover " />
        </motion.div>
        <div className='flex flex-col md:flex-row justify-between md:mt-5 gap-4 '>
            
 <div className='flex flex-row flex-wrap sm:flex-col md:flex-row  md:items-center gap-4 md:gap-10  '>
                {[{label:'Linkedin',link:"https://www.linkedin.com/company/advertisingattitude"},
                {label: 'Instagram',link:"https://www.instagram.com/advertisingattitude"},
                {label: 'Facebook',link:"https://www.facebook.com/advertisingattitude"},     
                ].map((item, index) => (
                    
                <span key={index} className='text-sm font-M_bold text-primary tracking-[.1em] cursor-pointer hover:text-secondary'
                onClick={() => window.open(`${item.link}`, '_blank')}>{item.label}</span>
                ))}
                <span  className='text-sm font-M_bold text-primary tracking-[.1em] cursor-pointer hover:text-secondary'
                                    onClick={() => navigate('/contact')}>NewsLetter</span>
            </div>

            <div className='flex flex-wrap items-center  justify-between  md:items-center gap-2 md:gap-10 '> 
                <span className=' text-xs md:text-sm font-M_bold text-primary tracking-[.1em] cursor-pointer hover:text-secondary'
                   onClick={() => window.open(``, '_blank')}>Privacy policy</span>
                <span className='text-xs md:text-sm font-M_bold text-primary tracking-[.1em] cursor-pointer hover:text-secondary'>@2025 Advertising Attitude</span>
            </div> 

          
        </div>
        </div>
        <motion.div variants={childVariants} className=' py-2 w-full bg-bur flex items-center  '>
            <div className='flex flex-col md:flex-row  gap-1 justify-between  items-center w-full  px-4 md:px-[4rem] '>
                <div className='flex  w-full md:w-auto items-center justify-start  '>
                    <span className='text-[10px] md:text-sm  font-M_medium text-primary tracking-[.1em]'>Beirut  —  Beirut Digital District BDD 1499</span>
                </div>
                <div className='  flex flex-col items-start gap-0 md:mr-[6.8rem] w-full md:w-auto mt-1 sm:mt-0 '>
                    <span className='text-[10px] md:text-sm  font-M_medium text-primary tracking-[.1em]'>business@advertisingattitude.com
                      </span>
                    <span className='text-[10px] md:text-sm  font-M_medium text-primary tracking-[.1em]'>talent@advertisingattitude</span>
                </div> 
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer
