import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Components/Hero";
import RedSection from "./Components/RedSection";
import Campaign from "./Components/Campaign";
import Swirl from "./Components/Swirl";
import TheAA from "./Components/TheAA";
import RedSection2 from "./Components/RedSection2";
import Footer from "../../components/Footer/Footer";
import SwirlM from "./Components/SwirlM";
import TextIntro from "./Components/text";

function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const lenisRef = useRef(null);

 useEffect(() => {
  const bg = new Image();
  const bg2 = new Image();
  const bg3 = new Image();
  bg.src = "/Images/bg.svg";
  bg2.src = "/Images/TheAAP/news1.svg";
  bg3.src = "/Images/TheAAP/news2.svg";
}, []);
useEffect(() => {
  const handleScroll = () => {
    const hero = document.getElementById("hero-section");
    const footer = document.getElementById("footer-section");
    const swirl = document.getElementById("mobile-swirl");
    const logo = document.getElementById("fixed-logo");
    const scrollY = window.scrollY;

    const heroHeight = hero?.offsetHeight || 0;
    const footerTop = footer?.offsetTop || Infinity;

    let hideLogo = false;

    if (swirl && logo) {
      const swirlRect = swirl.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();

      // Hide logo if it overlaps the swirl section
      hideLogo =
        logoRect.bottom > swirlRect.top && logoRect.top < swirlRect.bottom;
    }

    // Show logo if past hero, not overlapping swirl, and before footer
    const isVisible = scrollY > heroHeight && !hideLogo && scrollY + window.innerHeight < footerTop;

    setShowLogo(isVisible);
  };

  handleScroll(); // run on mount in case page loaded mid-scroll
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);




const sectionRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <AnimatePresence>
        {showLogo && (
          <motion.img
            key="slogo"
              id="fixed-logo"
            src="/Images/sLogo.svg"
            alt="logo"
            onClick={() =>
              lenisRef.current
                ? lenisRef.current.scrollTo(0, { duration: 1 })
                : window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className=" fixed bottom-10 right-4 md:right-[4rem] w-18 md:w-32 z-40 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      {/* Sections */}
      <section id="hero-section" className="h-screen"  >

        <Hero />
      </section>
      <section className="flex items-center justify-center bg-background">
        <RedSection />

      </section>
      <section className="h-screen">
        
        <Campaign />
      </section>
             
         
          <section className="h-screen hidden md:block ">

        <Swirl />
      </section>
      <section id="mobile-swirl" className="h-screen md:hidden">

        <SwirlM />
      </section>  
      <section className="h-screen ">
        <TheAA />
      </section>
     
      <section>
        {/* <RedSection2 /> */}
          <TextIntro />

      </section>
      <section id="footer-section" className="h-screen">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
