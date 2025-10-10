import { motion } from "framer-motion"; 
import Nav from "../../components/Nav/Nav";
import CampaignsData from '../../../public/Images/data';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RenderMedia from "./MediaItem";
import ExpandableText from "./ExpandText";

const CaseStudy = () => {
  const { id } = useParams();         
  const [caseS, setCaseS] = useState(null);
 const [nextCampaigns, setNextCampaigns] = useState([]);
const navigate =useNavigate();

  useEffect(() => {
    // find the selected campaign
    const current = CampaignsData.find(item => String(item.id) === String(id));
    setCaseS(current);

    // get the index of the current one
    const currentIndex = CampaignsData.findIndex(item => String(item.id) === String(id));

    // get the next 3 campaigns after it
    const nextThree = CampaignsData.slice(currentIndex + 1, currentIndex + 4);
    setNextCampaigns(nextThree);
  }, [id]);

  return (
    <div className='relative w-full snap-start bg-[#F2EDD9] pb-[10rem]
    bg-contain'
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
      >
      

      <motion.div className="relative z-50 w-full">
        <Nav title={["CAMPAIGN MADE BY AA"]} tracking={"tracking-[0.6rem]"} color="text-black" />
      </motion.div>

      <div className="z-50 pt-40 px-[4rem]">
        <h2 className="font-R_regular text-[5rem] leading-[5.4rem] tracking-[0.1rem] text-secondary uppercase">{caseS?.cTitle}</h2>

        <div className="my-10">
          <div className="flex items-center  gap-2">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem]">Client : </span>
            <span className="font-M_semibold text-background text-[1.5rem] leading-[1rem] tracking-[0.1rem] mt-1 ">{' '}{caseS?.client}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem]">Sector : </span>
            <span className="font-M_semibold text-background text-[1.5rem] leading-[1rem] tracking-[0.1rem] mt-1">{' '}{caseS?.Sector}</span>
          </div>

          <div className="flex flex-wrap gap-0 ">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem] leading-[2rem] whitespace-nowrap mr-2">
              Disciplines :
            </span>
            {caseS?.Disciplines?.map((item, index) => (
              <span
                key={index}
                className="font-M_semibold  text-background text-[1.5rem] leading-[1.5rem] mt-[7px]  tracking-[0.1rem] "
              >
                {item}
                {index < caseS.Disciplines.length - 1 && ','}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem]">Year : </span>
            <span className="font-M_semibold text-background text-[1.5rem] leading-[1rem] tracking-[0.1rem]">{' '}{caseS?.date}</span>
          </div>
        </div>

        <div>
          <RenderMedia src={caseS?.section1?.[0]} className="min-h-[30rem]" />
        </div>

      
        <ExpandableText html={caseS?.description} />
 
        {/* Testimonial Section */}
        <div className="my-20">
          <h3 className="font-R_regular text-[3.6rem] leading-[4.2rem] text-secondary tracking-[0.1rem]">
           “{caseS?.testimonial?.[0]}”
          </h3>
          <div className="w-full items-end justify-end flex flex-col mt-5">
            <div className="items-start justify-start flex flex-col">
              <div className="font-R_regular text-black text-[2rem] leading-[2rem] tracking-[0.1rem]">-            {caseS?.testimonial?.[1]}
</div>
              <div className="font-R_regular text-black text-sm ml-5 tracking-[0.1rem]">            {caseS?.testimonial?.[2]}
</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full">
          <div className="w-full grid grid-cols-4 gap-5">
            {caseS?.section2?.map((src, index) => (
              <div key={index} className={`
              ${caseS?.id===3 ? 
              (index === 1 ? "col-span-2" : "col-span-1")
               :  index === 0 ? "col-span-2" : "col-span-1"
               
               
               }`}>
                <RenderMedia src={src} className={` h-[40rem] 
                  ${caseS.id === 2 ? (index===1 && "!object-contain") : ""
                  } `}  />
              </div>
            ))}
          </div>
        </div>
     <div className="my-20">
          <h3 className="font-R_regular text-[3.6rem] leading-[4.2rem] text-secondary tracking-[0.1rem]">
            “{caseS?.testimonial2?.[0]}”
          </h3>
          <div className="w-full items-end justify-end flex flex-col mt-5">
            <div className="items-start justify-start flex flex-col">
              <div className="font-R_regular text-black text-[2rem] leading-[2rem] tracking-[0.1rem]">-            {caseS?.testimonial2?.[1]}
</div>
              <div className="font-R_regular text-black text-sm ml-5 tracking-[0.1rem]">            {caseS?.testimonial2?.[2]}
</div>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        {caseS?.id==4 ? 
        <div className="w-full">
          <div className={`w-full flex items-center justify-center gap-10 ${caseS?.id==4 ? "  " : ""}`}>
            {caseS?.section3?.map((src, index) => (
              <div key={index} className={`   flex items-center justify-center`}>
                <RenderMedia src={src} className={`${caseS?.id==4 ? "!w-[30rem]  object-cover h-auto " : "h-[40rem]"}`} />
              </div>
            ))}
          </div>
        </div>
        :

          <div className="w-full">
          <div className="w-full grid grid-cols-2 gap-10">
            {caseS?.section3?.map((src, index) => (
              <div key={index} className={`col-span-1 ${  index === 2 ? "col-span-2" : ""}`}>
                <RenderMedia src={src} className={`${index === 2 ? "" : "h-[40rem]"}`} />
              </div>
            ))}
          </div>
        </div>
    }


   <div className="my-20">
          <h3 className="font-R_regular text-[3.6rem] leading-[4.2rem] text-secondary tracking-[0.1rem]">
            “{caseS?.testimonial3?.[0]}”
          </h3>
          <div className="w-full items-end justify-end flex flex-col mt-5">
            <div className="items-start justify-start flex flex-col">
              <div className="font-R_regular text-black text-[2rem] leading-[2rem] tracking-[0.1rem]">-            {caseS?.testimonial3?.[1]}
</div>
              <div className="font-R_regular text-black text-sm ml-5 tracking-[0.1rem]">            {caseS?.testimonial3?.[2]}
</div>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        {caseS?.section4.length > 0 &&
        (
        <div className="w-full">
          <div className="w-full grid grid-cols-4 gap-10">
            {caseS?.section4?.map((src, index) => (
              <div key={index} className="col-span-1">
                <RenderMedia src={src} className={`${ caseS?.id==3 ? (index === 0 ? " h-[40rem] !object-contain" : " h-[40rem]"): " h-[40rem]"}  `} />
              </div>
            ))}
          </div>
        </div>

        )
}

<div className="mt-30 space-y-10">
      <h1 className="font-R_regular text-[5rem] leading-[5rem] tracking-[0.3rem] text-background ">More Bold Moves</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
        {nextCampaigns.map((item, idx) => (
          <div
            key={item.id || idx}
            className="relative h-[35rem]  overflow-hidden group cursor-pointer"
    onClick={() => navigate(`/case-study/${item.id}`)}

          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0    transition duration-300  flex items-end p-4 pb-6"
             style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8) 5%, rgba(0,0,0,0) 100%)",
              }}>
              <div className="flex flex-col gap-3 ">
              <h3 className="text-secondary font-R_regular text-[2.5rem] leading-[2.6rem] line-clamp-1">{item.title}</h3>
              <h3 className="text-primary font-M_medium text-[1rem]  line-clamp-2">{item.subTitle}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default CaseStudy;
