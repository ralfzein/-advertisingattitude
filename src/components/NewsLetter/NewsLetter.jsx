import { ArrowRight, MoveRight } from 'lucide-react'
import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

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
  useEffect(() => {
    if (isInView && next === 1) {
      const timer = setTimeout(() => setNext(2), 1000) 
      return () => clearTimeout(timer)
    }
  }, [isInView, next])

  return (
    <motion.div ref={ref}
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  id="hero-section"
  className='mt-30'>
      <div className='px-[4rem] py-[2rem] bg-secondary mt-10 min-h-[82vh]'>
        
        <motion.h1 
          variants={childVariants} className='font-R_regular text-primary text-[5.5rem] leading-[5.7rem]'>
          Command the Noise <br />Stay Bold, Stay Sharp
        </motion.h1>

        <motion.p 
        variants={childVariants}  className='text-primary font-M_regular text-[1.6rem] leading-[1.8rem] mt-4'>
          Get our latest takes — fresh ideas, cutting strategies, and stories <br />
          built to stand out from the pack. Subscribe to the Newsletter.
        </motion.p>

        <div className='flex flex-row items-start justify-end gap-2 mt-4'>
          <div className='relative flex items-start gap-2'>
            {(next !== 4 && next !== 1) && (
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
                className='font-M_regular text-[0.9rem] text-primary absolute -bottom-4 leading-[1rem]'>
                Advertising Attitude needs the contact information you provide to connect with You <br />
                about our services, insights, and updates. You can unsubscribe at any time.<br />
                For details on how we handle your data and protect your privacy, please review our <br />
                <a href='' className='underline'>Privacy Policy.</a>
              </motion.p>
            )}

            <div className='flex flex-col items-end justify-center gap-3 w-[30rem] overflow-hidden'>
              <AnimatePresence mode='wait'>
                {next === 2 ? (
                 <motion.input
  key="name"
  placeholder="Name"
  initial={{ opacity: 0, y: 20 }}
  animate={{
    opacity: 1,
    y: 0,
    transition: {
      delay: 1, // delay only on entrance
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1],
    },
  }}
  exit={{
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5, // no delay on exit
      ease: [0.45, 0, 0.55, 1],
    },
  }}
  className="w-[30rem] h-16 mt-14 p-6 font-M_regular
             placeholder:text-[#909090] placeholder:text-[1.5rem]
             rounded-l-full rounded-tr-full bg-primary border-0"
/>

                ) : next === 3 ? (
                  <motion.input
                    key='email'
                    placeholder='E-mail'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                    className='w-[30rem] h-16 mt-14 p-6 font-M_regular
                               placeholder:text-[#909090] placeholder:text-[1.5rem]
                               rounded-l-full rounded-tr-full bg-primary border-0'
                  />
                ) : next === 4 ? (
                  <motion.div
                    key='thankyou'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay:0.4,duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                    className='rounded-l-full h-16 -translate-x-10 mt-14 rounded-tr-full bg-primary text-secondary font-R_regular text-[2rem]
                    px-6 flex items-center justify-center'
                    onClick={() => setNext(1)}
                  >
                    Thank You!
                  </motion.div>
                ) : (
                  ''
                )}
              </AnimatePresence>

              {next !== 4 && next !== 1 && (
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
                }}className='flex gap-1 w-full items-center justify-center'>
                  <div
                    className={`w-5 h-5 bg-primary rounded-t-full rounded-bl-full cursor-pointer ${next === 2 ? 'opacity-100' : 'opacity-50'}`}
                    onClick={() => setNext(2)}
                  ></div>
                  <div
                    className={`w-5 h-5 bg-primary rounded-t-full rounded-br-full cursor-pointer ${next === 3 ? 'opacity-100' : 'opacity-50'}`}
                    onClick={() => setNext(3)}
                  ></div>
                </motion.div>
              )}
            </div>

            <div className='flex items-start justify-center'>
              {next !== 4 && next !== 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{delay:1, duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                  className='w-20 h-[3.75rem] mt-14 text-secondary z-10 flex items-center justify-center bg-primary rounded-tl-[50%] cursor-pointer'
                  onClick={() => setNext((prev) => prev + 1)}
                > 
                  <MoveRight size={50} strokeWidth={1} className='cursor-pointer' />
                </motion.div>
              )}

              <AnimatePresence mode='wait'>
                {next !== 4 && next !== 1 ? (
                  <motion.img
                    key='news1'
                    src='/Images/TheAAP/news1.svg'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                    className='w-[13rem] z-50 -translate-x-10'
                  />
                ) : (
                  <motion.img
                    key='news2'
                    src='/Images/TheAAP/news2.svg'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{  opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                    className='w-[13rem] z-50 -translate-x-10'
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
