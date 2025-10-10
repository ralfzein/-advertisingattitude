import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Nav from "../../components/Nav/Nav";
import CampaignsData from '../../../public/Images/data';
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

  const [data, setData] = useState(CampaignsData);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPosition / pageHeight) * 100;

      // Show the logo only after 30% scroll
      setShowLogo(scrollPercent >= 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="relative w-full snap-start bg-[#F2EDD9] pb-[10rem] bg-contain"
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
      >
        <motion.div variants={childVariantsnav} className="relative z-40 w-full">
          <Nav title={["CAMPAIGN MADE BY AA"]} tracking={"tracking-[0.6rem]"} color="text-black" />
        </motion.div>

        <motion.div variants={childVariantsnav} className='z-50 pt-40 px-[4rem]'>
          <h3 className='font-M_bold text-secondary text-[4rem] tracking-[0.5rem] leading-[4rem] text-justify'>
            THE SWIRL SPEAKS LOUDER <br/> THAN WORDS
          </h3>
          <p className='font-M_bold text-black text-[1.8rem] tracking-[0.2rem] mt-8'>
            From airports to icons, our campaigns aren’t just seen, <br/> they’re remembered.
          </p>

          <div>
            <Grids data={CampaignsData}/>
          </div>
        </motion.div>

        {/** ✅ Scroll-Triggered Floating Logo */}
        <motion.img
          key="slogo"
          src="/Images/Work/Logo.svg"
          alt="logo"
          loading="lazy"
          decoding="sync"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-[4rem] w-32 z-50 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showLogo ? 1 : 0, y: showLogo ? 0 : 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.section>

      <Footer />
    </div>
  )
}

export default Campaigns
