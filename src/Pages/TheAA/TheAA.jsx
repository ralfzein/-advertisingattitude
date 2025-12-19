import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Cards from "./Cards/Cards";
import { Skeleton } from "../../components/ui/skeleton";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import theAA from '../../../public/theAAdata';
import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import { encodeId } from "../../lib/idEncoder";


const TheAA = () => {

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };


 const [visibleCount, setVisibleCount] = useState(7); 
const [data,setData]=useState(theAA);


useEffect(() => {
  const savedVisibleCount = sessionStorage.getItem('visibleCount');
  const savedScrollPos = sessionStorage.getItem('scrollPos');

  if (savedVisibleCount) {
    setVisibleCount(parseInt(savedVisibleCount));
  }

  if (savedScrollPos) {
    setTimeout(() => {
      window.scrollTo(0, parseInt(savedScrollPos));
    }, 100);
  }
}, []);

const handleNavigate = (id) => {
  sessionStorage.setItem('scrollPos', window.scrollY);
  sessionStorage.setItem('visibleCount', visibleCount);
  const encodedId = encodeId(id);
  navigate(`/theAA/${encodedId}`);
};



  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  const navigate = useNavigate();
 const location = useLocation();








    const [isLoaded1, setIsLoaded1] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollPosition / pageHeight) * 100;

    const newsletter = document.getElementById("newsletter");
    const footer = document.getElementById("footer");

    const isInView = (el) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const isNewsletterVisible = isInView(newsletter);
    const isFooterVisible = isInView(footer);

    setShowLogo(scrollPercent >= 20 && !isNewsletterVisible && !isFooterVisible);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const sectionRef = useRef(null);
useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (!element) return;

    const handleScrollTo = () => {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;

      const y =
        rect.top +
        scrollTop -
        parseFloat(getComputedStyle(element).marginTop || 0);

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(handleScrollTo);
    }, 800); 
    return () => clearTimeout(timer);
  }
}, [location]);




  return (
    <div   ref={sectionRef} >
      <div className="relative">
  <motion.img
          key="slogo"
          src="/Images/Work/Logo.svg"
          alt="logo"
          loading="lazy"
          decoding="sync"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
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
        className=" w-full  bg-[#F2EDD9]  bg-cover pb-[4rem] md:pb-[10rem]"
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')`}}
      >
        <motion.div  className=" relative z-50 w-full hidden md:block " >
          <Nav title={["THE AA PERSPECTIVE"]}
           tracking={"tracking-[0.6rem]"} color="text-black"
             sectionRef={sectionRef}
            />
        </motion.div>


         <motion.div  className=" relative z-50 w-full md:hidden" >
          <Nav title={["AA’S PERSPECTIVE"]}
           tracking={"tracking-[0.15rem]"} color="text-black" 
             sectionRef={sectionRef}/>
        </motion.div>

        <div className=" z-50 pt-[3.2rem] md:pt-30 px-4 md:px-[4rem]">
           <Tabs
                            tabs={[
                              { name: "Home", href: "/" },
                              { name: "The AA Perspective", href:"" },
                            ]}
                            color="text-secondary"
                          />
          <div className=" space-y-4 md:space-y-8">
            <h3 className="font-R_regular  text-secondary text-[1.3rem] md:text-[3rem] 
            tracking-[0.1rem] md:tracking-[0.3rem] leading-[1.6rem]  md:leading-[3.2rem] ">
              WE’RE BIASED. TOWARD IDEAS THAT FIGHT HARDER, MOVE FASTER, AND HIT
              DEEPER.
            </h3>
            <h4 className="font-M_bold text-background text-[0.8rem] 
              md:text-[2rem] tracking-[0.1rem] leading-[1rem] md:leading-[2rem] ">
              The way we see it, marketing, advertising, and attitude.{" "}
            </h4>

            <div className=" relative w-full  h-[10rem] md:h-auto md:min-h-[25rem] " >
        {!isLoaded1 && <Skeleton className="absolute inset-0 w-full h-[10rem]  md:h-[25rem] bg-secondary/30" />}

              <a 
                href={`/theAA/${encodeId(data?.[0]?.id)}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/theAA/${encodeId(data[0].id)}`);
                }}
              >
                <img src={data?.[0]?.img1} 
                  onLoad={() => setIsLoaded1(true)}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                  style={{ pointerEvents: 'none' }}
                  className={`transition-opacity duration-500 cursor-pointer ${
                    isLoaded1 ? 'opacity-100' : 'opacity-0'
                  } w-full h-full object-cover md:object-contain`}
                />
              </a>
              
            </div>

            <div className="flex items-center justify-center gap-2 flex-col w-full">
              <div className="font-R_regular text-secondary text-[1.1rem] text-center md:text-left  md:text-[2rem]  leading-[1.5rem] md:leading-[2rem]  uppercase">
              {data?.[0]?.title}
              </div>
              <div className="font-M_medium text-background text-[0.8rem]
               md:text-[1rem]  leading-[1.2rem]  md:leading-[1.2rem]">
                The Attitude behind Advertising Attitude.
              </div>
            </div>

            <div className="mt-6 md:mt-0 space-y-2 md:space-y-5">
              <h3 className="font-R_regular text-secondary text-[1.5rem] md:text-[3rem]
               tracking-[0.3rem] leading-[1rem]  md:leading-[3.2rem] ">
                SWIRL OFF SCRIPT
              </h3>
              <h4 className="font-M_bold text-background text-[0.8rem] 
              tracking-[0.05rem] md:text-[2rem] md:tracking-[0.1rem] leading-[1rem] md:leading-[2rem] ">
                AA’s unfiltered take on marketing, creativity, and the battles
                shaping the industry.{" "}
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 md:gap-x-10  gap-y-10 md:gap-y-15 mt-10 md:mt-25">
            {data.slice(1, visibleCount).map((item) => (
  <Cards key={item.id} data={item} onClick={handleNavigate} />
))}
          </div>
          {visibleCount < data.length && (
     

      <div className="flex justify-center  mt-10">
          <button
            onClick={handleShowMore}
          className=" mx-10 md:mx-0  font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0 
          flex items-center justify-center w-full md:w-[25rem] h-[3rem] md:h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary  uppercase"          >
            See More Takes
          </button>
        </div>
    )}
        </div>
      </motion.section>

</div>
       <div id="newsletter">
  <NewsLetter />
</div>

<div id="footer">
  <Footer />
</div>
    </div>
  );
};

export default TheAA;
