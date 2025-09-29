import { Shell } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ThirdTab = () => {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);

  // Variants for fade-in + slide-up
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
   const handleChange = (e) => {
    const lines = e.target.value.split('\n');

    // Limit to 3 lines
    if (lines.length <= 3) {
      setText(e.target.value);
    } else {
      // Keep only first 3 lines
      setText(lines.slice(0, 3).join('\n'));
    }
  };
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-15">
      <div className="font-R_regular text-primary text-[1.5rem] leading-[2rem] mt-8 tracking-[0.15rem] ">
       Talk is cheap. Sales aren’t. Got the network and the hustle? <br/> Let’s talk big commission.
      </div>
      <div className="flex flex-col justify-center items-center gap-8 mt-10 ">
        {/* Email */}
        <div className="flex items-center justify-start w-full gap-10">
          <span className="font-M_medium text-[1.5rem] text-primary">
            Email
          </span>
          <input
            type="text"
            className="border-b border-primary focus:outline-none font-M_medium w-full text-primary text-[1.4rem]"
          />
        </div>

        {/* Name */}
        <div className="flex items-center justify-start w-full gap-10">
          <span className="font-M_medium text-[1.5rem] text-primary">Name</span>
          <input className="border-b border-primary focus:outline-none font-M_medium w-full text-primary text-[1.4rem]" />
        </div>

        {/* Country */}
        <div className="flex items-center justify-start w-full gap-10">
          <span className="font-M_medium text-[1.5rem] text-primary">
            Country
          </span>
          <input className="border-b border-primary focus:outline-none font-M_medium w-full text-primary text-[1.4rem]" />
        </div>

        {/* Challenge textarea */}
        <div className="h-auto flex items-start justify-start w-full gap-8 ">
          <div className="font-M_medium text-[1.5rem] text-primary whitespace-nowrap mt-2">
            Write us your challenge
          </div>
          <div className="w-full relative  ">
            <div className="absolute inset-0 pointer-events-none flex flex-col mt-10 gap-9 w-full">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border-b border-primary w-full"></div>
              ))}
            </div>
            {/* <motion.textarea
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={160}
              className="relative w-full bg-transparent resize-none text-lg overflow-hidden p-2 focus:outline-none text-white text-[1.4rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            /> */}
             <textarea
      rows={3} // always 3 visible rows
      value={text}
      onChange={handleChange}
      maxLength={160} // optional character limit
      className="relative w-full bg-transparent resize-none text-lg overflow-hidden p-2 focus:outline-none text-white text-[1.4rem]"
    />
          </div>
        </div>
      </div>

     <div className='flex w-full h-[19rem] items-start justify-between   mt-5'>
<div className='flex flex-col   items-center justify-between '>
  <div className='flex items-center justify-start w-full  gap-10 '>
                <span className='font-M_medium text-[1.5rem]  text-primary '>Upload</span>
                <span className='font-M_regular text-xs  text-primary  tracking-[.12em]'>(deck, moodboard, or supporting brief (PDF, JPG, PNG – max 25MB) <br/>
Need more space? Include a link in your message or email us at business@advertisingattitude.com</span>
        </div>
 <div className='flex items-center justify-start w-full  gap-5  mt-10 '>
                   <div
  className={`font-M_medium text-[1.5rem] border w-14 h-14 flex items-center justify-center cursor-pointer
              transition-colors duration-300 border-primary relative`}
  onClick={() => setActive(!active)}
>
  <img
    src="/Images/swirl.svg"
    alt="logo"
    className={` transition-scale transition-rotate duration-600 absolute top-0 left-0 w-full h-full
      ${active ? 'opacity-100 scale-90 rotate-0' : ' scale-0 opacity-0 rotate-120'}`}
  />
</div>

                <span className='font-M_regular text-xs  text-primary  tracking-[.12em]'>
                 I agree to the use of my data as outlined in the Privacy Policy. <br/>
                  By submitting this form, you agree to be contacted by Advertising Attitude regarding your inquiry. <br/>
                  All information shared will be treated confidentially and used solely to assess your project needs. <br/>
                  This does not constitute a binding agreement. 

                </span>
        </div>

<div className='flex items-start justify-start  w-full mt-20 '>
         <Button className=" font-R_regular  text-[1.4rem] tracking-[0.12em] leading-[4rem]  
          flex items-center justify-center w-[28rem] h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary  " variant="default" size="default">BRING THE CLIENTS</Button>
      </div>
      </div>
      
      <div className=' '>
        <img src={'/Images/contactLogo.png'} className='h-[22rem]  -translate-y-12 ' alt="" />
      </div>
      
      </div>
    </motion.div>
  );
};

export default ThirdTab;
