import { motion } from "framer-motion";
import Nav from "../../components/Nav/Nav";
import CampaignsData from "../../../public/Images/data";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RenderMedia from "./MediaItem";
import ExpandableText from "./ExpandText";
import Footer from "../../components/Footer/Footer";
import { ChevronRight } from "lucide-react";
import Tabs from "../../components/Tabs/Tabs";

const CaseStudy = () => {
  const { id } = useParams();
  const [caseS, setCaseS] = useState(null);
  const [nextCampaigns, setNextCampaigns] = useState([]);
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

 
  useEffect(() => {
    const current = CampaignsData.find(
      (item) => String(item.id) === String(id)
    );
    setCaseS(current);

    const currentIndex = CampaignsData.findIndex(
      (item) => String(item.id) === String(id)
    );

    if (currentIndex === -1) return;

    const doubledData = [...CampaignsData, ...CampaignsData];

    const nextThree = doubledData.slice(currentIndex + 1, currentIndex + 4);

    setNextCampaigns(nextThree);
  }, [id]);

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPosition / pageHeight) * 100;

      // Check footer visibility
      const footer = document.getElementById("footer");
      const footerTop = footer?.getBoundingClientRect().top ?? 0;

      const isFooterVisible = footerTop <= window.innerHeight && footerTop > 0;
      setShowLogo(scrollPercent >= 20 && !isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll);
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
           className="relative w-full  bg-[#F2EDD9]  pb-[5rem] md:pb-[10rem] bg-contain"
           style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
         >

      <motion.div className="relative z-50 w-full hidden md:block">
        <Nav
          title={["CAMPAIGN MADE BY AA"]}
          tracking={"tracking-[0.6rem]"}
          color="text-black"
          sectionRef={sectionRef} />
      </motion.div>
    <motion.div className="relative z-50 w-full md:hidden">
        <Nav
          title={["AA’S CAMPAIGNS"]}
          tracking={"tracking-[0.2rem]"}
          color="text-black"
                  sectionRef={sectionRef} />

      </motion.div>
      <div className="z-50 pt-[3.2rem] md:pt-30 px-4 md:px-[4rem] pb-30">
        <Tabs
          tabs={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: caseS?.title, href: "" },
          ]}
          color="text-secondary"
        />
        <h2 className="font-R_regular text-[2rem] leading-[2.3rem] md:text-[5rem] md:leading-[5.4rem] tracking-[0.1rem] text-secondary uppercase">
          {caseS?.cTitle}
        </h2>

        <div className="my-6 md:my-10">
          <div className="flex items-center  gap-1 md:gap-2">
            <span className="font-M_extrabold text-secondary text-[0.9rem]  md:text-[1.8rem] tracking-[0.1rem]">
              Client:{" "}
            </span>
            <span className="font-M_semibold text-background text-[0.9rem]  md:text-[1.5rem] leading-[1rem] tracking-[0.1rem] md:mt-1 ">
              {" "}
              {caseS?.client}
            </span>
          </div>

          <div className="flex items-center gap-1 md:gap-2 ">
            <span className="font-M_extrabold text-secondary text-[0.9rem]  md:text-[1.8rem] tracking-[0.1rem]">
              Sector:{" "}
            </span>
            <span className="font-M_semibold text-background text-[0.9rem]  md:text-[1.5rem] leading-[1rem] tracking-[0.1rem] md:mt-1">
              {" "}
              {caseS?.Sector}
            </span>
          </div>

          <div className="flex flex-wrap gap-0 -translate-y-1 md:translate-y-0">
            <span className="font-M_extrabold text-secondary text-[0.9rem]  md:text-[1.8rem] tracking-[0.1rem] leading-[1.5rem] translate-y-1 md:translate-y-0 md:leading-[2rem]  whitespace-nowrap mr-2">
              Disciplines:
            </span>
            {caseS?.Disciplines?.map((item, index) => (
              <span
                key={index}
                className="font-M_semibold  text-background text-[0.9rem] leading-[1rem] md:text-[1.5rem] md:leading-[1.5rem] mt-[8px] md:mt-[7px]  tracking-[0.1rem] "
              >
                {item}
                {index < caseS.Disciplines.length - 1 && ","}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-M_extrabold text-secondary text-[0.9rem]  md:text-[1.8rem] tracking-[0.1rem]">
              Year:{" "}
            </span>
            <span className="font-M_semibold text-background text-[0.9rem]  md:text-[1.5rem] leading-[1rem] tracking-[0.1rem]">
              {" "}
              {caseS?.date}
            </span>
          </div>
        </div>
        {caseS?.id == 9 ? (
          <div className="flex items-center justify-center gap-5 px-4 md:px-[5rem] ">
            <div className="flex-1 md:flex-0">
              <RenderMedia
                src={caseS?.section1?.[0]}
                className="!w-full md:!w-[28rem] md:h-auto !object-cover "
              />
            </div>

            <div className="flex-1  md:flex-0">
              <RenderMedia
                src={caseS?.section1?.[1]}
                className="!w-full    md:!w-[28rem] !object-cover"
              />
            </div>
          </div>
        ) : (
          <div>
            <RenderMedia src={caseS?.section1?.[0]} className="md:min-h-[30rem] " />
          </div>
        )}

        
        <ExpandableText html={caseS?.description} />

        {/* Testimonial Section */}
        <div className="my-10 md:my-20">
          <h3 className="font-R_regular text-left md:text-left text-[1rem] leading-[1.1rem] md:text-[3.6rem] md:leading-[4.2rem] text-secondary tracking-[0.1rem]">
            “{caseS?.testimonial?.[0]}”
          </h3>
          <div className="w-full items-end justify-center  md:items-end md:justify-end flex flex-col mt-5">
            <div className="items-start justify-start flex flex-col ">
              <div className="font-R_regular text-black text-[1rem] md:text-[2rem] leading-[1.2rem] md:leading-[2.2rem]  tracking-[0.1rem] text-left md:text-left ">
                - {caseS?.testimonial?.[1]}
              </div>
              <div className="font-R_regular text-black text-xs md:text-sm ml-4 md:ml-7 tracking-[0.1rem]  ">
                {" "}
                {caseS?.testimonial?.[2]}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        {caseS?.section2.length > 0 && (
          <div className="w-full ">
            <div className="w-full grid grid-cols-4 gap-2 md:gap-5 ">
              {caseS?.section2?.map((src, index) => (
                <div
                  key={index}
                  className={`
              ${
                caseS?.id === 3
                  ? index === 1
                    ? "col-span-2"
                    : "col-span-1"
                  : index === 0
                  ? "col-span-2"
                  : "col-span-1"
              }`}
                >
                  <RenderMedia
                    src={src}
                    // className="!object-cover h-[42rem]"
                      className={` h-[12rem] md:h-[40rem]  
                        ${caseS.id === 2 ?  "md:h-[45rem]" : "md:h-[40rem]"}
                        ${caseS.id === 6 &&  "md:!h-[38rem]"}
                        `} 
                        //  ${caseS.id === 2 ? index === 1 && "!object-cover" : ""}
                        //  ${caseS.id === 6 &&  " !h-[10rem] md:!h-[40rem] "}
                    />
                </div>
              ))}
            </div>
          </div>
        )}
        {caseS?.testimonial2?.[0] && (
          <div className="my-10 md:my-20">
            <h3 className="font-R_regular text-left md:text-left text-[1rem] leading-[1.1rem] md:text-[3.6rem] md:leading-[4.2rem] text-secondary tracking-[0.1rem]">
              “{caseS?.testimonial2?.[0]}”
            </h3>
            <div className="w-full items-end justify-center  md:items-end md:justify-end flex flex-col mt-5">
              <div className="items-start justify-start flex flex-col ">
                <div className="font-R_regular text-black text-[1rem] md:text-[2rem] leading-[1.2rem] tracking-[0.1rem] text-left md:text-left ">
                  - {caseS?.testimonial2?.[1]}
                </div>
                <div className="font-R_regular text-black text-xs md:text-sm ml-4 md:ml-7 tracking-[0.1rem]   ">
                  {" "}
                  {caseS?.testimonial2?.[2]}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 3 */}
        {caseS?.id == 4 ? (
          <div className="w-full">
            <div
              className={`w-full flex items-center justify-center gap-2 md:gap-10 ${
                caseS?.id == 4 ? "  " : ""
              }`}
            >
              {caseS?.section3?.map((src, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center`}
                >
                  <RenderMedia
                    src={src}
                    className={`${
                      caseS?.id == 4
                        ? "md:!w-[30rem]  object-cover h-auto "
                        : "md:h-[40rem]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="w-full grid grid-cols-2 gap-2 md:gap-10 ">
              {caseS?.section3?.map((src, index) => (
                <div
                  key={index}
                  className={`col-span-1 ${index === 2 ? "col-span-2" : ""}`}
                >
                  <RenderMedia
                    src={src}
                    className={`${index === 2 ? "" : "h-[10rem] md:h-[40rem] "}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="my-10 md:my-20">
          <h3 className="font-R_regular text-left md:text-left text-[1rem] leading-[1.1rem] md:text-[3.6rem] md:leading-[4.2rem] text-secondary tracking-[0.1rem]">
            “{caseS?.testimonial3?.[0]}”
          </h3>
          <div className="w-full items-end justify-center  md:items-end md:justify-end flex flex-col mt-5">
            <div className="items-start justify-start flex flex-col ">
              <div className="font-R_regular text-black text-[1rem] md:text-[2rem] leading-[1.2rem] tracking-[0.1rem] text-left md:text-left ">
                - {caseS?.testimonial3?.[1]}
              </div>
              <div className="font-R_regular text-black text-xs md:text-sm ml-4 md:ml-7 tracking-[0.1rem]" >
                {" "}
                {caseS?.testimonial3?.[2]}
              </div>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        {caseS?.section4.length > 0 && (
          <div className="w-full ">
            <div className="w-full grid grid-cols-4 gap-2 md:gap-10 ">
              {caseS?.section4?.map((src, index) => (
                <div key={index} className="col-span-1">
                  <RenderMedia
                    src={src}
                    className={`${
                      caseS?.id == 3
                        ? index === 0
                          ? " h-[13rem] md:h-[40rem] md:!object-contain"
                          : " h-[13rem] md:h-[40rem]"
                        : "h-[11rem] md:h-[40rem]"

                        
                        } 
                       ${ caseS?.id == 1 && "!object-cover !h-auto" }
                       ${ caseS?.id ==3 && "bg-[#d7c4b2]" }
                        `}
                    // className=""
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-15 md:mt-30 space-y-10">
          <h1 className="font-R_regular text-[2rem]  leading-[2rem] md:text-[5rem] md:leading-[5rem] tracking-[0.1rem] md:tracking-[0.3rem] text-background ">
            More Bold Moves
            
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-6 ">
            {nextCampaigns.map((item, idx) => (
              <div
                key={item.id || idx}
                className="relative h-[28rem] md:h-[35rem]  overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/work/casestudy/${item.id}`)}
              >
                <img
                  src={item.cover ? item.cover : item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0    transition duration-300  flex items-end p-4 pb-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 5%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <div className="flex flex-col gap-1 md:gap-3 ">
                    <h3 className="text-secondary font-R_regular  text-[1.5rem] leading-[1.8rem] md:text-[2.5rem] md:leading-[2.6rem] line-clamp-1">
                      {item.title}
                    </h3>
                    <h3 className="text-primary font-M_medium text-[1rem]  md:text-[1.3rem]  line-clamp-2">
                      {item.cTitle}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      </div>
      </motion.section>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudy;
