import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { useEffect } from "react";
import Campaigns from "./Pages/Campaigns/Campaigns";
import Footer from "./components/Footer/Footer";
import CaseStudy from "./Pages/CaseStudy/CaseStudy";
import ScrollToTop from "./Pages/ScrollToTop";
import TheAA from "./Pages/TheAA/TheAA";


function AppRoutes() {
    const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });

}, [pathname]);


  return (
    <>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Campaigns />} />
      <Route path="/case-study/:id" element={<CaseStudy />} />
      <Route path="/theAA" element={<TheAA />} />
    </Routes>
{/* <Footer/> */}
    </>
  );
}

export default AppRoutes;
