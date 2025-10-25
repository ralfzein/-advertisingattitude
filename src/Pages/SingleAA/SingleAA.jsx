import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import theAA from "../../../public/theAAdata";
import { motion } from "framer-motion";
import Nav from "../../components/Nav/Nav";
import { Skeleton } from "../../components/ui/skeleton";
import { ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

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

  const childVariantsnav = {
    hidden: { opacity: 1, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full bg-[#F2EDD9] bg-contain"
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
      >
        {/* ✅ Navigation */}
        <motion.div
          variants={childVariantsnav}
          className="relative z-50 w-full md:hidden"
        >
          <Nav
            title={["PERSPECTIVE"]}
            tracking={"tracking-[0.5rem]"}
            color="text-black"
          />
        </motion.div>

          <motion.div
          variants={childVariantsnav}
          className="relative z-50 w-full hidden md:block"
        >
          <Nav
            title={["THE AA PERSPECTIVE"]}
            tracking={"tracking-[0.6rem]"}
            color="text-black"
          />
        </motion.div>

        {/* ✅ Breadcrumbs */}
        <div className="z-50 pt-20 md:pt-[7.3rem] px-4 md:px-[4rem]">
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
          <div className="relative w-full flex items-center justify-center flex-col gap-5 min-h-[50vh] md:min-h-[60vh]">
            {/* Skeleton while background loads */}
            {!isBgLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
            )}

            {/* Actual content section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isBgLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 py-6 md:py-15 flex items-center justify-center flex-col gap-4 md:gap-5 bg-cover bg-center w-full"
              style={{ backgroundImage: `url("/Images/TheAAP/sBg.svg")` }}
            >
              {/* Inner Image with Skeleton */}
              <div className="relative">
                {!isLoaded1 && (
                  <Skeleton className="absolute inset-0 w-[18rem] h-[22rem] bg-background/30" />
                )}
                <img
                  src={caseS?.img}
                  alt={caseS?.title || "AA image"}
                  className={`transition-opacity duration-500 ${
                    isLoaded1 ? "opacity-100" : "opacity-0"
                  } px-5 md:w-[18rem] h-[22rem] object-cover`}
                  onLoad={() => setIsLoaded1(true)}
                />
              </div>

              {/* Title + Subtitle */}
              <h3 className="font-R_regular text-primary text-center md:text-left text-[1.2rem] md:text-[2rem] leading-[2rem] uppercase">
                {caseS?.title}
              </h3>
              <p className="font-M_regular text-primary text-center md:text-left text-[0.9rem] md:text-[1.2rem] leading-[1.2rem]">
                {caseS?.subTitle}
              </p>
            </motion.div>
          </div>

          {/* ✅ Content Text */}
          <div className="space-y-3 mt-10">
            <p className="font-M_bold text-background">{caseS?.time}</p>
            <div className="flex gap-2">
              {caseS?.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-background text-white text-xs font-M_bold px-4 py-1 rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>

            <h1 className="font-R_regular text-secondary text-[1.8rem] md:text-[3rem] leading-[2.1rem] md:leading-[3.2rem] uppercase mt-6">
              Think boldly, Feel deeply, Act smartly <br className="hidden md:block" />
              that’s Advertising Attitude.
            </h1>

            <p className="font-M_medium text-[1rem] leading-[1.2rem] text-background">
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
              className="text-[22px] text-background space-y-8 mt-14"
              dangerouslySetInnerHTML={{ __html: caseS?.paragraph1 }}
            />
          </div>

          {/* ✅ Share Section */}
          <div className="flex items-center justify-end gap-2 mt-10">
            <div className="rounded-full font-M_semibold text-background text-[1rem] md:text-[1.3rem]">
              Share
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center ml-3">
              <img src={"/Images/copy.svg"} alt="Copy link" />
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={"/Images/linkedin.svg"} alt="LinkedIn" />
            </div>
          </div>

          {/* ✅ Navigation (Previous / Next) */}
          <div className="flex items-center justify-between mt-18">
            {caseS && caseS.id > 1 && (
              <div
                className="flex items-center  md:gap-5 text-secondary font-R_regular text-[1rem] md:text-[2rem] uppercase cursor-pointer hover:opacity-80"
                onClick={() => navigate(`/theAA/${caseS.id - 1}`)}
              >
                <MoveLeft  className="w-10 md:w-15" strokeWidth={1.5} /> Previous <span className="hidden md:block">Perspective</span>
              </div>
            )}

            <div className="flex-1" />

            {caseS && caseS.id < theAA.length && (
              <div
                className="flex items-center md:gap-5 text-secondary font-R_regular text-[1rem] md:text-[2rem] uppercase cursor-pointer hover:opacity-80"
                onClick={() => navigate(`/theAA/${caseS.id + 1}`)}
              >
                Next <span className="hidden md:block">Perspective</span> <MoveRight  className="w-10 md:w-15" strokeWidth={1.5} />
              </div>
            )}
          </div>
        </div>

       
        <NewsLetter />
      </motion.section>
      <Footer />
    </div>
  );
};

export default SingleAA;
