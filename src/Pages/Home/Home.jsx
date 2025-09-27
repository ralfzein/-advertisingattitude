import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Components/Hero";
import RedSection from "./Components/RedSection";
import Campaign from "./Components/Campaign";
import Swirl from "./Components/Swirl";
import TheAA from "./Components/TheAA";
import RedSection2 from "./Components/RedSection2";
import Footer from "../../components/Footer/Footer";
import slogo from "../../assets/Images/sLogo.svg";

function Home() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero-section")?.offsetHeight && document.getElementById("footer")?.offsetHeight;
if (window.scrollY > heroHeight) {
  setShowLogo(true);
} else {
  setShowLogo(false);
}

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero />

      <AnimatePresence>
        {showLogo && (
          <motion.img
            key="slogo"
            src={slogo}
            alt="logo"
            className="fixed bottom-10 right-[4rem] w-32 z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <RedSection />
      <Campaign />
      <Swirl />
      <TheAA />
      <RedSection2 />
      <Footer  />
    </div>
  );
}

export default Home;
