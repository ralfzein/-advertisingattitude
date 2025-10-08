import React, { useState } from 'react'
import { motion } from "framer-motion"; 
import Nav from "../../components/Nav/Nav";
import CampaignsData from '../../../public/Images/data';
import { Grid } from 'lucide-react';
import Grids from './Components/Grid';
import Footer from '../../components/Footer/Footer';

const Campaigns = () => {
      const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const childVariantsnav = {
    hidden: { opacity: 1 ,y:-20 },
    show: {
      opacity: 1,
      y :0,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" },
    },
  };

    
const [data, setData] =useState(CampaignsData);



  return (
    <div className=' '>

    

     <motion.section
      variants={containerVariants}
      initial="hidden"
     
  viewport={{ once: false, amount: 0.2 }} 

      whileInView="show"
      className="relative  w-full snap-start bg-[#F2EDD9] pb-[10rem] bg-contain"
      style={{backgroundImage: `url('/Images/Work/workBg.svg')`}}
    >
      {/* Hero Background */}
      {/* <div className="absolute inset-0 -z-1 ">
        <img
          src={'/Images/Work/workBg.svg'}
          alt="Hero"
          loading='lazy'  decoding="sync"
          className="w-full h-full  object-cover "
        />
       
      </div> */}


      {/* Navigation */}
      <motion.div
        variants={childVariantsnav}
        className="relative z-40 w-full"
      >
        <Nav title={["CAMPAIGN MADE BY AA"]} tracking={"tracking-[0.6rem]"} color="text-black" />
      </motion.div>



      <motion.div variants={childVariantsnav} className='z-50 pt-40 px-[4rem]' >
        

        <h3  className=' 
          font-M_bold  text-secondary text-[4rem] tracking-[0.5rem]
             leading-[4rem] text-justify'>THE SWIRL SPEAKS LOUDER <br/>
THAN WORDS</h3>
<p className='font-M_bold text-black text-[1.8rem] tracking-[0.2rem]  mt-8'>
    From airports to icons, our campaigns aren’t just seen, <br/> they’re remembered.
</p>


<div className=' '>
    <Grids data={CampaignsData}/>
</div>
      </motion.div>
{/* <motion.img
            key="slogo"
            src="/Images/Work/Logo.svg"
            alt="logo"
            loading="lazy"
            decoding="sync"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute bottom-40 right-[4rem] w-32 z-90 cursor-pointer "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          /> */}
    </motion.section>
   </div>
  )
}

export default Campaigns
