import { motion } from "framer-motion"; 
import Nav from "../../components/Nav/Nav";
import CampaignsData from '../../../public/Images/data';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RenderMedia from "./MediaItem";

const CaseStudy = () => {
  const { id } = useParams();         
  const [caseS, setCaseS] = useState(null);

  useEffect(() => {
    const data = CampaignsData.find(item => String(item.id) === String(id));
    setCaseS(data);
    console.log("Found:", data);
  }, [id]);

  return (
    <div className='relative w-full snap-start bg-[#F2EDD9] pb-[10rem]'>
      <div className="absolute inset-0 z-0">
        <img
          src={'/Images/Work/workBg.svg'}
          alt="Hero"
          loading='lazy'
          decoding="sync"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div className="relative z-50 w-full">
        <Nav title={["CAMPAIGN MADE BY AA"]} tracking={"tracking-[0.6rem]"} color="text-black" />
      </motion.div>

      <div className="z-50 pt-40 px-[4rem]">
        <h2 className="font-R_regular text-[5rem] leading-[5.4rem] tracking-[0.1rem] text-secondary uppercase">{caseS?.cTitle}</h2>

        <div className="my-10">
          <div className="flex items-center gap-2">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem]">Client : </span>
            <span className="font-M_semibold text-background text-[1.5rem] leading-[1rem] tracking-[0.1rem]">{' '}{caseS?.client}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem]">Sector : </span>
            <span className="font-M_semibold text-background text-[1.5rem] leading-[1rem] tracking-[0.1rem]">{' '}{caseS?.Sector}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem] leading-[2rem] whitespace-nowrap">
              Services :
            </span>
            {caseS?.Services?.map((item, index) => (
              <span
                key={index}
                className="font-M_semibold text-background text-[1.5rem] leading-[2rem] tracking-[0.1rem] mt-1"
              >
                {item}
                {index < caseS.Services.length - 1 && ','}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-M_extrabold text-secondary text-[1.8rem] tracking-[0.1rem]">Year : </span>
            <span className="font-M_semibold text-background text-[1.5rem] leading-[1rem] tracking-[0.1rem]">{' '}{caseS?.date}</span>
          </div>
        </div>

        {/* Section 1 */}
        <div>
          <RenderMedia src={caseS?.section1?.[0]} className="min-h-[30rem]" />
        </div>

        <div
          className="prose max-w-none text-background "
          dangerouslySetInnerHTML={{ __html: caseS?.description }}
        />

        {/* Testimonial Section */}
        <div className="my-20">
          <h3 className="font-R_regular text-[3.6rem] leading-[4.2rem] text-secondary tracking-[0.1rem]">
           “ {caseS?.testimonial?.[0]}”
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
              <div key={index} className={`${caseS?.id===3 ? (index === 1 ? "col-span-2" : "col-span-1") :  index === 0 ? "col-span-2" : "col-span-1"}`}>
                <RenderMedia src={src} className="h-[40rem]" />
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
                <RenderMedia src={src} className=" h-[40rem] " />
              </div>
            ))}
          </div>
        </div>

        )
}

      </div>
    </div>
  );
};

export default CaseStudy;
