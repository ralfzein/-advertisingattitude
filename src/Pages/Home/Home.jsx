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
      easing: (t) => t,
      smooth: true,
    });
    lenisRef.current = lenis;

    // Attach RAF
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Snap to nearest section
    const snapToSection = () => {
      const sections = document.querySelectorAll("section");
      if (!sections.length) return;

      const scrollY = lenis.scroll;
      let closest = sections[0];
      let min = Math.abs(scrollY - sections[0].offsetTop);
      sections.forEach((s) => {
        const dist = Math.abs(scrollY - s.offsetTop);
        if (dist < min) {
          min = dist;
          closest = s;
        }
      });

      lenis.scrollTo(closest.offsetTop, { duration: 0.8 });
    };

    let snapTimeout;
    lenis.on("scroll", () => {
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(snapToSection, 150);
    });

    // ✅ Cleanup on unmount
    return () => {
      clearTimeout(snapTimeout);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    // Toggle floating logo visibility
    const handleScroll = () => {
      const hero = document.getElementById("hero-section")?.offsetHeight || 0;
      const footer = document.getElementById("footer-section")?.offsetTop || Infinity;
      const y = window.scrollY;

      setShowLogo(y > hero && y + window.innerHeight < footer);
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
            onClick={() =>
              lenisRef.current
                ? lenisRef.current.scrollTo(0, { duration: 1 })
                : window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="fixed bottom-10 right-4 md:right-[4rem] w-18 md:w-32 z-40 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      {/* Sections */}
      <section id="hero-section" className="h-screen">
        <Hero />
      </section>
      <section className="flex items-center justify-center bg-background">
        <RedSection />
      </section>
      <section className="h-screen">
        <Campaign />
      </section>
      <section className="h-screen">
        <Swirl />
      </section>
      <section className="h-screen">
        <TheAA />
      </section>
      <section>
        <RedSection2 />
      </section>
      <section id="footer-section" className="h-screen">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
