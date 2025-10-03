import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { useEffect } from "react";


function AppRoutes() {
    const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, [pathname]);


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
