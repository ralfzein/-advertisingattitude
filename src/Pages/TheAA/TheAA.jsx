import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Cards from "./Cards/Cards";
import { Skeleton } from "../../components/ui/skeleton";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import theAA from '../../../public/theAAdata';
import { useNavigate } from "react-router-dom";


const TheAA = () => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "AI Won’t Save  Bad Branding",
  //     subTitle:
  //       "But it’s rewriting the rules for those who   lead with strategy — not vibes.",
  //     img: "/Images/TheAAP/img/aa.svg",
  //     rounded:"rounded-tr-full rounded-tl-full  rounded-bl-0 rounded-br-full"
  //   },
  //   {
  //     id: 2,
  //     title: "Every Agency Is an\n  Award Winner",
  //     subTitle: "We may not be in the puzzle. Yet.",
  //     img: "/Images/TheAAP/img/ee.svg",
  //     rounded:" rounded-tl-full rounded-tr-0 rounded-bl-full rounded-br-full"

  //   },
  //   {
  //     id: 3,
  //     title: "Disrupt.\n  Leave Echoes.",
  //     subTitle:
  //       "Ideas start small. The loudest impact comes  from the ones that were once whispered.",
  //     img: "/Images/TheAAP/img/33.svg",
  //               rounded:"rounded-tr-full rounded-tl-full  rounded-bl-0 rounded-br-full"



  //   },
  //   {
  //     id: 4,
  //     title: "You Can’t Discount\n  Mastery",
  //     subTitle: "When you pay for cheap, you pay twice.",
  //     img: "/Images/TheAAP/img/44.svg",
  //           rounded:" rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-0"


  //   },
  //   {
  //     id: 5,
  //     title: "Even the Lion \n Needs a Roar",
  //     subTitle:
  //       "Ads are that roar — amplifying your strength and making sure you’re heard.",
  //     img: "/Images/TheAAP/img/55.svg",
  //           rounded:" rounded-tl-0 rounded-tr-full rounded-bl-full rounded-br-full"


  //   },
  //   {
  //     id: 6,
  //     title: "What Kind of \n Marketer Are You?",
  //     subTitle:
  //       "Whether you lead, craft, or analyze — the key is knowing your edge and owning it.",
  //     img: "/Images/TheAAP/img/66.svg",
  //                      rounded:" rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-0"



  //   },
  //   {
  //     id: 7,
  //     title: "Marketing Teams Burn Hours. Agencies Build\n  Outcomes",
  //     subTitle:
  //       "CEOs don’t need babysitting — they need bandwidth. We deliver both.",
  //     img: "/Images/TheAAP/img/77.svg",
  //     rounded:"rounded-tr-full rounded-tl-full  rounded-bl-0 rounded-br-full"


  //   },
  //   {
  //     id: 8,
  //     title: "Where Madness \n  Meets Mastery",
  //     subTitle:
  //       "Creativity isn’t born clean — it’s carved from chaos, grit, and the refusal to quit.",
  //     img: "/Images/TheAAP/img/88.svg",
  //           rounded:" rounded-tl-full rounded-tr-0 rounded-bl-full rounded-br-full"


  //   },
  //   {
  //     id: 9,
  //     title: "Safe Agencies Cost \n  More in Silence",
  //     subTitle:
  //       "If you’re doing the thinking and lifting — you’re not hiring an agency, you’re  sponsoring one.",
  //     img: "/Images/TheAAP/img/99.svg",
  //     rounded:"rounded-tr-full rounded-tl-full  rounded-bl-0 rounded-br-full"


  //   },
  //   {
  //     id: 10,
  //     title: "Ideas Don’t Age Well\n  in Drafts",
  //     subTitle:
  //       "You’re not polishing brilliance — you’re delaying momentum. Launch ugly, learn  fast, evolve loud.",
  //     img: "/Images/TheAAP/img/100.svg",
  //           rounded:" rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-0"


  //   },
  //   {
  //     id: 11,
  //     title: " The Art of Losing  Without Knowing It",
  //     subTitle:
  //       "Subtle. Polite. Marketing approved by  everyone — and forgotten by everyone.",
  //     img: "/Images/TheAAP/img/111.svg",
  //           rounded:" rounded-tl-0 rounded-tr-full rounded-bl-full rounded-br-full"
  //   },
  // ];
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
 const [visibleCount, setVisibleCount] = useState(7); 
const [data,setData]=useState(theAA)
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  const navigate = useNavigate();

    const [isLoaded1, setIsLoaded1] = useState(false);
  
  return (
    <div className="">

     <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className=" w-full  bg-[#F2EDD9] pb-[10rem] bg-contain"
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
      >
        <motion.div variants={childVariantsnav} className=" relative z-50 w-full " >
          <Nav title={["THE AA PERSPECTIVE"]} tracking={"tracking-[0.6rem]"} color="text-black" />
        </motion.div>
        <div className=" z-50 pt-40 px-4 md:px-[4rem]">
          <div className="space-y-8">
            <h3 className="font-R_regular text-center md:text-left text-secondary text-[1.5rem] md:text-[3rem] tracking-[0.3rem] leading-[1.8rem]  md:leading-[3.2rem] ">
              WE’RE BIASED. TOWARD IDEAS THAT FIGHT HARDER, MOVE FASTER, AND HIT
              DEEPER.
            </h3>
            <h4 className="font-M_bold text-background text-[1.3rem]   md:text-[2rem] tracking-[0.1rem] leading-[1.5rem] md:leading-[2rem] ">
              The way we see it, marketing, advertising, and attitude.{" "}
            </h4>

            <div className=" relative w-full min-h-[20rem] " >
        {!isLoaded1 && <Skeleton className="absolute inset-0 w-full h-[25rem] bg-secondary/30" />}

              <img src={data?.[0]?.img1} 
              onLoad={() => setIsLoaded1(true)}
           className={`transition-opacity duration-500 cursor-pointer ${
            isLoaded1 ? 'opacity-100' : 'opacity-0'
          } w-full h-full object-contain`}
    onClick={() => navigate(`/theAA/${data[0].id}`)}

          />
              
            </div>

            <div className="flex items-center justify-center gap-2 flex-col w-full">
              <div className="font-R_regular text-secondary text-[1.3rem]   md:text-[2rem]  leading-[1.5rem] md:leading-[2rem]  uppercase">
              {data?.[0]?.title}
              </div>
              <div className="font-M_medium text-background text-[0.8rem] md:text-[1rem]  leading-[1.2rem]  md:leading-[1.2rem]">
                The Attitude behind Advertising Attitude.
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-R_regular text-secondary text-[1.5rem] md:text-[3rem] tracking-[0.3rem] leading-[2rem]  md:leading-[3.2rem] ">
                SWIRL OFF SCRIPT
              </h3>
              <h4 className="font-M_bold text-background text-[1.3rem]   md:text-[2rem] tracking-[0.1rem] leading-[1.5rem] md:leading-[2rem] ">
                AA’s unfiltered take on marketing, creativity, and the battles
                shaping the industry.{" "}
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-15 mt-25">
              {data.slice(1, visibleCount).map((item) => (
            <Cards data={item} />
            ))}
          </div>
          {visibleCount < data.length && (
     

      <div className="flex justify-center  mt-10">
          <button
                   onClick={handleShowMore}

      className="  font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0 
          flex items-center justify-center w-full md:w-[25rem] h-[3rem] md:h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary  uppercase"          >
            See More Takes
          </button>
        </div>
    )}
        </div>
      <NewsLetter/>
      </motion.section>

      <Footer />
    </div>
  );
};

export default TheAA;
