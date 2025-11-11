import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Nav from "../../components/Nav/Nav";
import CampaignsData from '../../../public/Images/data';
import Grids from './Components/Grid';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';
import GridsM from './Components/GridM';

const Campaigns = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const navigate =useNavigate();  
  const [data, setData] = useState(CampaignsData);
  const [showLogo, setShowLogo] = useState(false);
  const handleNavigate = (id) => {
    sessionStorage.setItem('campaignScroll', window.scrollY);
    navigate(`/work/casestudy/${id}`);
  };

  // 🧭 Restore scroll when coming back
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('campaignScroll');
    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScroll));
      }, 100);
    }
  }, []);
 useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollPosition / pageHeight) * 100;

    const footer = document.getElementById("footer");
    if (!footer) return;

    const footerRect = footer.getBoundingClientRect();

    // Hide if any part of footer is visible on screen
    const isFooterVisible =
      footerRect.top < window.innerHeight && footerRect.bottom > 0;

    // Show logo only after 20% scroll and when footer is NOT visible
    setShowLogo(scrollPercent >= 20 && !isFooterVisible);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on mount
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef}>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full  bg-[#F2EDD9] pb-[4rem] md:pb-[10rem] bg-contain "
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
      >
        <motion.div  className="z-50 w-full relative hidden md:block ">
          <Nav title={["CAMPAIGN MADE BY AA"]} 
          tracking={"tracking-[0.6rem]"}
           color="text-black" 
           sectionRef={sectionRef}/>
        </motion.div>
<motion.div className="relative z-50 w-full md:hidden">
        <Nav title={["AA’S CAMPAIGNS"]}
         tracking={"tracking-[0.2rem]"}
          color="text-black"
          sectionRef={sectionRef} />
      </motion.div>
        <motion.div  className='z-50 pt-[3.2rem] md:pt-30 px-4 md:px-[4rem]'>
          
           <Tabs
                            tabs={[
                              { name: "Home", href: "/" },
                              { name: "Work", href: "" },
                            ]}
                            color="text-secondary"
                          />
          <h3 className='font-R_regular text-secondary text-left text-[1.55rem] leading-[2rem]  tracking-[0.1rem]
           sm:text-[4rem] sm:tracking-[0.5rem] sm:leading-[4rem] sm:text-justify'>
            THE SWIRL SPEAKS LOUDER <br className='hidden md:block'/> THAN WORDS
          </h3>
          <p className='font-M_bold text-black text-[0.8rem] leading-[1rem] sm:text-[1.8rem] sm:leading-[2rem] tracking-[0.08rem]  md:tracking-[0.2rem] mt-4 md:mt-8'>
            From airports to icons, our campaigns aren’t just seen, <br className='hidden md:block'/> they’re remembered.
          </p>

          <div className='hidden sm:block'>
            <Grids data={CampaignsData} onCardClick={handleNavigate}/>
          </div>
           <div className='block sm:hidden'>
            <GridsM data={CampaignsData} onCardClick={handleNavigate}/>
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
          className="fixed  bottom-10 right-4 md:right-[4rem] w-18 md:w-32 z-60 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showLogo ? 1 : 0, y: showLogo ? 0 : 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.section>
<div id="footer">
      <Footer />
      </div>
    </div>
  )
}

export default Campaigns
