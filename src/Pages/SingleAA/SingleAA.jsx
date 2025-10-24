import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import theAA from '../../../public/theAAdata';
import { motion, useScroll } from "framer-motion";
import Nav from "../../components/Nav/Nav";
import { Skeleton } from "../../components/ui/skeleton";
import { Copy, Linkedin, MoveLeft, MoveRight } from 'lucide-react';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';

const SingleAA = () => {

     const { id } = useParams();         
  const [caseS, setCaseS] = useState(null);
const navigate =useNavigate();


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


    const [isLoaded1, setIsLoaded1] = useState(false);

useEffect(() => {
  const current = theAA.find(item => String(item.id) === String(id));
  setCaseS(current);


}, [id]);


  return (
    <div>
        <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className=" w-full  bg-[#F2EDD9]  bg-contain"
        style={{ backgroundImage: `url('/Images/Work/workBg.svg')` }}
      >
        <motion.div variants={childVariantsnav} className=" relative z-50 w-full " >
          <Nav title={["THE AA PERSPECTIVE"]} tracking={"tracking-[0.6rem]"} color="text-black" />
        </motion.div>
      <div className=' z-50 pt-[7.3rem]  px-4 md:px-[4rem]'>
             <div
    className='py-15 flex items-center justify-center flex-col  gap-5 bg-cover'
   style={{ backgroundImage: `url("/Images/TheAAP/sBg.svg")` }}

  >


<div className=" relative    ">
        {!isLoaded1 && <Skeleton className="absolute inset-0 w-[25rem] h-[24rem] bg-background/30" />}

              
              
                    <img src={caseS?.img} className={`transition-opacity duration-500  ${
                    isLoaded1 ? 'opacity-100' : 'opacity-0'
                } w-[18rem] h-[22rem] object-cover`}
                            onLoad={() => setIsLoaded1(true)}/>
                    </div>
              
                    <h3 className='font-R_regular text-primary text-[2rem] leading-[2rem] uppercase'>{caseS?.title}</h3>
                    <p className='font-M_regular text-primary text-[1.2rem] leading-[1.2rem]'>{caseS?.subTitle}</p>
            </div>


            <div className='space-y-5 mt-10'>
                <p className='font-M_bold text-background'>{caseS?.time}</p>
                <div className='flex gap-2'>
                    {caseS?.tags.map((tag, index) => (
                        <div className='bg-background text-white text-xs font-M_bold px-4 py-1 rounded-full'>{tag}</div>
                    ))}
                </div>
                <h1 className='font-R_regular text-secondary text-[3rem] leading-[3.2rem] uppercase'>
                    Think boldly, Feel deeply, Act smartly <br/>
                        that’s Advertising Attitude.

                </h1>
                <p className='font-M_medium text-[1rem]  leading-[1.2rem] text-background'>Founded in 2022, Advertising Attitude is a Beirut-based leading creative agency built on bold creativity, strategic clarity, and emotional depth. We shape ideas into extraordinary campaigns that engage, connect, and inspire.
                <br/>
                <br/>
                    From travel retail to brand activations, we’ve made measurable impact — partnering with and building brands like Beirut Duty Free, Abu Dhabi Duty Free, and Muscat Duty Free grow in visibility, credibility, and influence.</p>
                <p  className='text-[22px]  text-background space-y-8 mt-14 ' dangerouslySetInnerHTML={{ __html: caseS?.paragraph1 }} />

            </div>

            <div className='flex items-center justify-end gap-2 mt-10'>
                <div className=' rounded-full font-M_semibold text-background text-[1.3rem]'>Share</div>
                <div className='w-12 h-12 rounded-full  flex items-center justify-center ml-3'><img src={"/Images/copy.svg"} /></div>
                <div className='w-12 h-12 rounded-full  flex items-center justify-center'><img src={"/Images/linkedin.svg"}/> </div>
               
            </div>
    <div className='flex items-center justify-between mt-18'>

  {/* Previous Button (only if previous item exists) */}
  {caseS && caseS.id > 1 && (
    <div
      className='flex items-center gap-5 text-secondary font-R_regular text-[2rem] uppercase cursor-pointer hover:opacity-80'
      onClick={() => navigate(`/theAA/${caseS.id - 1}`)}
    >
      <MoveLeft size={50} strokeWidth={1.5} /> Previous Perspective
    </div>
  )}

  {/* Spacer for layout balance */}
  <div className='flex-1'></div>

  {/* Next Button (only if next item exists) */}
  {caseS && caseS.id < theAA.length && (
    <div
      className='flex items-center gap-5 text-secondary font-R_regular text-[2rem] uppercase cursor-pointer hover:opacity-80'
      onClick={() => navigate(`/theAA/${caseS.id + 1}`)}
    >
      Next Perspective <MoveRight size={50} strokeWidth={1.5} />
    </div>
  )}

</div>

      </div>


<NewsLetter />



      </motion.section>
     
     <Footer />
    </div>
  )
}

export default SingleAA
