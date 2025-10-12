import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Hero from "./Components/Hero";
import RedSection from "./Components/RedSection";
import Campaign from "./Components/Campaign";
import Swirl from "./Components/Swirl";
import TheAA from "./Components/TheAA";
import RedSection2 from "./Components/RedSection2";
import Footer from "../../components/Footer/Footer";


function Home() {
  const [showLogo, setShowLogo] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => t, // linear easing
      smooth: true,
      direction: "vertical",
    });
    lenisRef.current = lenis;

    // Snap to nearest section after scroll stops
    const snapToSection = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = lenis.scroll;
      let closestSection = sections[0];
      let minDistance = Math.abs(scrollY - sections[0].offsetTop);

      sections.forEach((sec) => {
        const distance = Math.abs(scrollY - sec.offsetTop);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = sec;
        }
      });

      lenis.scrollTo(closestSection.offsetTop, { duration: 0.8, easing: (t) => t });
    };

    let snapTimeout;
    lenis.on("scroll", () => {
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(snapToSection, 100);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    // Show logo only between hero & footer
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero-section")?.offsetHeight || 0;
      const footerTop = document.getElementById("footer-section")?.offsetTop || Infinity;
      const scrollY = window.scrollY;

      if (scrollY > heroHeight && scrollY + window.innerHeight < footerTop) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence>
        {showLogo && (
          <motion.img
            key="slogo"
            src="/Images/sLogo.svg"
            alt="logo"
            loading="lazy"
            decoding="sync"
            onClick={() => lenisRef.current?.scrollTo(0)} // scroll to top
            className="fixed bottom-10 right-4 md:right-[4rem] w-18 md:w-32 z-40 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Sections */}
      <section id="hero-section" className="h-screen"><Hero /></section>
      <section className="flex items-center justify-center bg-background"><RedSection /></section>
      <section className="h-screen"><Campaign /></section>
      <section className="h-screen"><Swirl /></section>
      <section className="h-screen"><TheAA /></section>
      <section><RedSection2 /></section>
      <section id="footer-section"  className="h-screen"><Footer /></section>

    </div>
  );
}

export default Home;
