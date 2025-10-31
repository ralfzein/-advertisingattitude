import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { useEffect } from "react";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Footer from "./components/Footer/Footer";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import TheAA from "./Pages/TheAA/TheAA";
import SingleAA from "./Pages/SingleAA/SingleAA";
import Nav from "./components/Nav/Nav";


function AppRoutes() {

 const { pathname, hash ,} = useLocation();

  useEffect(() => {
    // If there's a hash (like #newsletter), scroll to that section instead
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise, default scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

useEffect(() => {
    const path = location.pathname;

    // ✅ If user leaves /theAA or /theAA/:id
    if (!path.startsWith("/theAA")) {
      sessionStorage.removeItem("scrollPos");
      sessionStorage.removeItem("visibleCount");
    }

     if (!path.startsWith("/work")) {
      sessionStorage.removeItem("campaignVisibleChunks");
      sessionStorage.removeItem("campaignScroll");
    }
  }, [pathname]);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Campaigns />} />
      <Route path="/work/casestudy/:id" element={<CaseStudy />} />
      <Route path="/theAA" element={<TheAA />} />
      <Route path="/theAA/:id" element={<SingleAA/>} />
    </Routes>
{/* <Footer/> */}
    </>
  );
}

export default AppRoutes;
