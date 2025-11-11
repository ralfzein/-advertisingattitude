import { ArrowRight, MoveRight } from 'lucide-react'
import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { toast } from 'sonner'

const NewsLetter = () => {
  const [next, setNext] = useState(1)
  const ref = useRef(null)

  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };
  const childVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
 

const [name, setName] = useState("");
const [email, setEmail] = useState("");

  return (
    <motion.div ref={ref}
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  id="hero-section"
  className=''>
      <div className='px-4 md:px-[4rem] bg-secondary h-screen flex flex-col items-start justify-center gap-10 md:gap-0'>
        
        <motion.h1 
          variants={childVariants} className='font-R_regular text-primary text-[2.6rem] md:text-[5.5rem] leading-[2.8rem] md:leading-[5.7rem]'>
          Command the Noise <br className='hidden md:block' />Stay Bold, Stay Sharp
        </motion.h1>

        <motion.p 
        variants={childVariants}  className='text-primary font-M_regular text-[1.1rem] leading-[1.4rem] md:text-[1.6rem] md:leading-[1.8rem] mt-4'>
          Get our latest takes — fresh ideas, cutting strategies, and stories <br className='hidden md:block'  />
          built to stand out from the pack. Subscribe to the Newsletter.
        </motion.p>

        <div className='flex flex-row items-start w-full justify-between   md:justify-end gap-2 mt-4'>
          <div className='relative flex items-start justify-between gap-2  w-full md:w-auto'>
            {(next !== 3 ) && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                 
                  transition: {
                    delay: 1.2, 
                    duration: 0.8,
                    ease: [0.45, 0, 0.55, 1],
                  },
                }}
                exit={{
                  opacity: 0,
               
                  transition: {
                    duration: 0.5, 
                    ease: [0.45, 0, 0.55, 1],
                  },
                }}
                className='font-M_regular text-[0.6rem] md:text-[0.9rem] text-primary absolute -bottom-4 leading-[1rem]'>
                Advertising Attitude needs the contact information you provide to connect with You <br className='hidden md:block' />
                about our services, insights, and updates. You can unsubscribe at any time.<br className='hidden md:block' />
                For details on how we handle your data and protect your privacy, please review our <br className='hidden md:block' />
                <a href='' className='underline'>Privacy Policy.</a>
              </motion.p>
            )}

            <div className='flex flex-col md:items-end justify-center gap-3   md:w-[30rem] overflow-hidden '>
              <AnimatePresence mode='wait'>
                {next === 1 ? (
                 <motion.input
  key="name"
  placeholder="Name"
   value={name}
    onChange={(e) => setName(e.target.value)}
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
   
    transition: {
 
      duration: 0.4,
      ease: [0.45, 0, 0.55, 1],
    },
  }}
  exit={{
    opacity: 0,
   
    transition: {
      duration: 0.4, // no delay on exit
      ease: [0.45, 0, 0.55, 1],
    },
  }}
  className="w-full  md:w-[30rem] h-10 md:h-16 mt-9 md:mt-14 p-4 md:p-6 font-M_regular focus:outline-none caret-secondary
             placeholder:-[#909090] placeholder:text-[1rem] md:placeholder:text-[1.5rem]
             rounded-l-full rounded-tr-full bg-primary border-0 bg"
/>
                ) : next === 2 ? (
                  <motion.input
                    key='email'
                    placeholder='E-mail'
                     value={email}
    onChange={(e) => setEmail(e.target.value)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: [0.45, 0, 0.55, 1] }}
                    className='w-full md:w-[30rem] h-10 md:h-16 mt-9 md:mt-14  p-4 d:p-6 font-M_regular 
                               placeholder:text-[#909090] placeholder:text-[1rem] md:placeholder:text-[1.5rem]  focus:outline-none 
                               rounded-l-full rounded-tr-full bg-primary border-0'
                  />
                ) : next === 3 ? (
                  <motion.div
                    key='thankyou'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                    className='rounded-l-full w-[12rem] md:w-auto h-10  md:h-16   md:-translate-x-10 mt-9 md:mt-14 rounded-tr-full cursor-pointer
                     bg-primary text-secondary font-R_regular text-[1.5rem] md:text-[2rem]
                   px-4 md:px-6 flex items-center justify-center'
                    // onClick={() => setNext(1)}
                  >
                    Thank You!
                  </motion.div>
                ) : (
                  ''
                )}
              </AnimatePresence>

              {next !== 3  && (
                <motion.div 
                 initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                 
                  transition: {
                    delay: 1.2, 
                    duration: 0.8,
                    ease: [0.45, 0, 0.55, 1],
                  },
                }}
                exit={{
                  opacity: 0,
               
                  transition: {
                    duration: 0.5, 
                    ease: [0.45, 0, 0.55, 1],
                  },
                }} className='flex gap-1 w-full items-center justify-center'>
                  <div
                    className={`w-5 h-5 bg-primary rounded-t-full rounded-bl-full cursor-pointer ${next === 1 ? 'opacity-100' : 'opacity-50'}`}
                    onClick={() => setNext(1)}
                  ></div>
                  <div
                    className={`w-5 h-5 bg-primary rounded-t-full rounded-br-full cursor-pointer ${next === 2 ? 'opacity-100' : 'opacity-50'}`}
                    onClick={() => setNext(2)}
                  ></div>
                </motion.div>
              )}
            </div>

            <div className='flex items-start justify-center h-[223px]  -translate-x-4 md:-translate-x-0  '>
              {next !== 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{delay:1, duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                  className='w-18 h-11 md:h-[3.75rem] mt-8 md:mt-14 translate-x-5 md:translate-x-0 text-secondary
                   z-10 flex items-center justify-center bg-primary rounded-tl-[50%] cursor-pointer'
          onClick={async () => {
  if (next === 2) {
    // ✅ Validation – Name and Email must be filled
    if (!name.trim() || !email.trim()) {
      toast.error("Please complete all fields.");
      return setNext(2); // take user back to name input if anything missing
    }

    // ✅ Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return setNext(3); // stay on email input
    }

    // ✅ Submit to backend if valid 
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await resp.json();

      if (resp.ok && data.success) {
        toast.success("Thanks! You’ve been subscribed.");
        setNext(4); // go to Thank You screen only after success
      } else {
        toast.error(data.message || "Subscription failed. Try again later.");
      }
    } catch (err) {
      console.error("❌ Network/Error:", err);
      toast.error("Network error — please try again.");
    }

    return; // stop advancing automatically
  }

  // Default behavior for next step
  setNext((prev) => prev + 1);
}}



                > 
                  <MoveRight size={50} strokeWidth={1} className='cursor-pointer hidden md:block' />
                  <MoveRight size={40} strokeWidth={1} className='cursor-pointer block md:hidden' />
                </motion.div>
              )}

              <AnimatePresence mode='wait'>
                {next !== 3 ? (
                  <motion.img
                    key='news1'
                    src='/Images/TheAAP/news1.svg'
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.45, 0, 0.55, 1] }}
                    className=' w-[8rem] md:w-[13rem] z-50 md:-translate-x-10'
                  />
                ) : (
                  <motion.img
                    key='news2'
                    src='/Images/TheAAP/news2.svg'
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{  opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                    className='w-[8rem] md:w-[13rem] z-50 md:-translate-x-10'
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NewsLetter
