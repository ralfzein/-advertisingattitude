import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import theAA from "../../../public/theAAdata";
import { motion } from "framer-motion";
import Nav from "../../components/Nav/Nav";
import { Skeleton } from "../../components/ui/skeleton";
import { ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import Tabs from "../../components/Tabs/Tabs";
import { toast } from "sonner";

const SingleAA = () => {
  const { id } = useParams();
  const [caseS, setCaseS] = useState(null);
  const [isLoaded1, setIsLoaded1] = useState(false);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const navigate = useNavigate();

  // ✅ Load the background image first
  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = "/Images/TheAAP/sBg.svg";
    bgImage.onload = () => setIsBgLoaded(true);
  }, []);

  // ✅ Get data for the selected case
  useEffect(() => {
    const current = theAA.find((item) => String(item.id) === String(id));
    setCaseS(current);
  }, [id]);

  // ✅ Motion variants
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };




    const [showLogo, setShowLogo] = useState(false);
    
useEffect(() => {
  const handleScroll = () => {
    const shareSection = document.getElementById("share");
    const footer = document.getElementById("footer");

    if (!shareSection || !footer) return;

    const shareTop = shareSection.getBoundingClientRect().top;
    const footerTop = footer.getBoundingClientRect().top;

    const viewportHeight = window.innerHeight;

    const hideAtShare = shareTop < viewportHeight * 1.2; 
    const hideAtFooter = footerTop < viewportHeight;

    setShowLogo(!(hideAtShare || hideAtFooter));
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


 const handleShare = async () => {

    try {
      await navigator.share({
        title: 'Test Share',
        text: 'Check out this link!',
        url: window.location.href,
      });
      console.log('Shared successfully');
    } catch (err) {
      console.log('Share canceled or failed', err);
    }
  };
   const handleCopy = async () => {
const plainText = caseS?.paragraph1?.replace(/<[^>]*>/g, '');

    try {
      await navigator.clipboard.writeText(plainText);
      toast.success("Copied!", {
        description: " copied to clipboard.",
        duration: 2000,
      });
    } catch (err) {
      toast.error("Error", {
        description: "Failed to copy .",
      });
    }
  };
  const sectionRef = useRef(null);
  
  return (
    <div className="relative" ref={sectionRef}>

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
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full bg-[#F2EDD9] bg-contain"
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
      >
        {/* ✅ Navigation */}
        <motion.div
          
          className="relative z-50 w-full md:hidden"
        >
         <Nav title={["AA’S PERSPECTIVE"]}
           tracking={"tracking-[0.15rem]"} color="text-black" 
             sectionRef={sectionRef}/>
        </motion.div>

          <motion.div
          
          className="relative z-50 w-full hidden md:block"
        >
          <Nav
            title={["THE AA PERSPECTIVE"]}
            tracking={"tracking-[0.6rem]"}
            color="text-black"
             sectionRef={sectionRef}/>
          
        </motion.div>

        {/* ✅ Breadcrumbs */}
        <div className="z-50 pt-[3.2rem] md:pt-30 px-4 md:px-[4rem]">
            <Tabs
                            tabs={[
                              { name: "Home", href: "/" },
                              { name: "The AA Perspective", href:"/theAA" },
                              { name:caseS?.title, href:"" },
                            ]}
                            color="text-secondary"
                          />
          {/* <div className="mb-5 text-secondary font-R_regular capitalize flex items-center gap-1 md:gap-0 text-xs md:text-md">
            <p
              className="cursor-pointer hover:opacity-80 "
              onClick={() => navigate(`/theAA`)}
            >
              The AA Perspective
            </p>
            <ChevronRight className="opacity-70" size={10} />
            <p className="opacity-70">{caseS?.title}</p>
          </div> */}

          {/* ✅ Section with background + skeleton */}
          <div className="relative w-full flex items-center justify-center flex-col gap-5  md:h-[80vh]">
            {/* Skeleton while background loads */}
            {!isBgLoaded && (
              <Skeleton   className="absolute inset-0 bg-secondary/30  animate-pulse z-0" />
            )}

            {/* Actual content section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isBgLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 py-6 md:py-15 flex items-center justify-center flex-col gap-2 md:gap-5  w-full md:h-[80vh]"
              style={{ backgroundImage: `url("/Images/TheAAP/sBg.svg")` }}
            >
              {/* Inner Image with Skeleton */}
              <div className="relative  flex !items-center !justify-center w-full  h-[15rem] md:h-[25rem]">
                {!isLoaded1 && (
                  <Skeleton className="absolute inset-0 w-[45%] mx-auto    h-[15rem] md:w-[20rem] md:h-[25rem] bg-background/30" />
                )}
                <img
                  src={caseS?.img}
                  alt={caseS?.title || "AA image"}
                  className={`transition-opacity duration-500 ${
                    isLoaded1 ? "opacity-100" : "opacity-0"
                  }  h-[15rem]  md:w-[20rem] md:h-[25rem] object-cover`}
                  onLoad={() => setIsLoaded1(true)}
                />
              </div>

              {/* Title + Subtitle */}
              <h3 className="font-R_regular text-primary text-center md:text-left text-[1.2rem] leading-[1.4rem] md:text-[2rem] md:leading-[2rem] uppercase">
                {caseS?.title}
              </h3>
              <p className="font-M_regular text-primary text-center md:text-left text-[0.8rem] md:text-[1.2rem] leading-[1.2rem] px-2 ms:px-0">
                {caseS?.subTitle}
              </p>
            </motion.div>
          </div>

          {/* ✅ Content Text */}
          <div className="space-y-3 mt-5 md:mt-10">
            <p className="font-M_bold text-background  text-[0.8rem] md:text-md leading-[1rem]  ">{caseS?.time}</p>
            <div className="flex gap-2 flex-wrap">
              {caseS?.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-background text-white text-[0.7rem] md:text-xs font-M_bold px-2 md:px-4 py-1 rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>

            <h1 className="font-R_regular text-secondary text-[1.5rem] md:text-[3rem] leading-[1.7rem] md:leading-[3.2rem] uppercase mt-6">
              Think boldly, Feel deeply, Act smartly <br className="hidden md:block" />
              that’s Advertising Attitude.
            </h1>

            <p className="font-M_medium text-[0.8rem] leading-[1rem] md:text-[1rem] md:leading-[1.2rem] text-background">
              Founded in 2022, Advertising Attitude is a Beirut-based leading
              creative agency built on bold creativity, strategic clarity, and
              emotional depth. We shape ideas into extraordinary campaigns that
              engage, connect, and inspire.
              <br />
              <br />
              From travel retail to brand activations, we’ve made measurable
              impact — partnering with and building brands like Beirut Duty
              Free, Abu Dhabi Duty Free, and Muscat Duty Free grow in
              visibility, credibility, and influence.
            </p>

            <p
              className="text-[22px] text-background space-y-4 md:space-y-8 mt-6 md:mt-14"
              dangerouslySetInnerHTML={{ __html: caseS?.paragraph1 }}
            />
          </div>

          {/* ✅ Share Section */}
        </div>

       <div className="px-4 md:px-[4rem]" id="share">
        {/* <NewsLetter /> */}
          <div className="flex items-center justify-end gap-2 mt-5 md:mt-10 " >
            <div className="rounded-full font-M_semibold text-background text-[1rem] md:text-[1.3rem] cursor-pointer  hover:opacity-80"   onClick={handleShare}>
              Share
            </div>


            <div className="w-12 h-12 rounded-full flex items-center justify-center ml-3 cursor-pointer hover:opacity-80" onClick={handleCopy}>
              <img src={"/Images/copy.svg"} alt="Copy link" />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center  cursor-pointer hover:opacity-80"
                         onClick={() => window.open(`https://www.linkedin.com/company/advertisingattitude`, '_blank')}
>
              <img src={"/Images/linkedin.svg"} alt="LinkedIn" />
            </div>
          </div>

          {/* ✅ Navigation (Previous / Next) */}
          <div className="flex items-center justify-between mt-18 pb-15">
            {caseS && caseS.id > 1 && (
              <div
                className="flex items-center  gap-2 md:gap-5 text-secondary font-R_regular text-[1rem] md:text-[2rem] uppercase cursor-pointer hover:opacity-80"
                onClick={() => navigate(`/theAA/${caseS.id - 1}`)}
              >
                                <MoveLeft  className="hidden md:block" size={50} strokeWidth={1.5} />
                <MoveLeft  className="block md:hidden" size={25} strokeWidth={1.5} />
                
                 Previous <br className="md:hidden" /> Perspective
              </div>
            )}

            <div className="flex-1" />

            {caseS && caseS.id < theAA.length-1 && (
              <div
                className="flex items-center gap-2 md:gap-5 text-secondary font-R_regular text-[1rem] md:text-[2rem] uppercase cursor-pointer hover:opacity-80"
                onClick={() => navigate(`/theAA/${caseS.id + 1}`)}
              >
             <span className="text-right md:text-left">   Next <br className="md:hidden" />Perspective </span>
                <MoveRight  className="hidden md:block" size={50} strokeWidth={1.5} />
                <MoveRight  className="block md:hidden" size={25} strokeWidth={1.5} />
              </div>
            )}
          </div>
          </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default SingleAA;
