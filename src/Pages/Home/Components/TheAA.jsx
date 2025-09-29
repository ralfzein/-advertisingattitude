import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Nav from "../../../components/Nav/Nav"
import { Button } from "../../../components/ui/button"

const slides = [
  {
    img: '/Images/TheAA/aa.webp',
    img2: '/Images/TheAA/ab.webp',
    title: "Stop Branding \n Blindly",
    subtitle:
      "Many brands don’t fail in marketing because  of weak visuals — they fail because they skip  strategy. But with AI, it’s no longer out of  reach — it’s a revolution. Will you harness it, or \n fall behind?",
  },
  {
    img: '/Images/TheAA/ab.webp',
    img2: '/Images/TheAA/ac.webp',
    title: "The New Marketing   Playbook",
    subtitle:
      "One marketer can’t do it all. An agency brings  the full arsenal — strategy, design, content, execution — all under one roof. Buy back your   time, cut the overhead, and focus on what  actually grows your business.",
  },
  {
    img: '/Images/TheAA/ac.webp',
    img2: '/Images/TheAA/ad.webp',
    title: "The Burnout   Whisperer",
    subtitle:
      "You love the craft. The chase. The next big   idea. But when every brief whispers “do more, be more,  ” burnout starts to speak louder than   creativity. This one’s for the marketers,  designers, and dreamers who feel the pressure    but keep showing up.",
  },
  {
    img: '/Images/TheAA/ad.webp',
    img2: '/Images/TheAA/ae.webp',
    title: "The SwirlBold  Mentality",
    subtitle:
      "Welcome to SwirlBold Thinking. Let’s stop   blending in. SwirlBold isn’t a style. It’s   a   mindset. It’s marketing that spins out of the   obvious and lands where impact lives. You   don’t think in straight lines. You think in   loops, angles, and questions others are too   scared to ask. Because bold ideas don’t follow   the rules. They bend them, break them, and   redraw the map.",
  },
  {
    img: '/Images/TheAA/ae.webp',
    img2: '/Images/TheAA/aa.webp',
    title: "Every Agency   Is An Award   Winner",
    subtitle:
      "Some win for real. Some win for reach. Either   way — congrats, truly. As for us? We’re not in it    (yet). We’re just keeping our heads down,    building loud ideas quietly. Because the best   kind of recognition? Comes after the work is   done.",
  },
]

function TheAA() {
  const [current, setCurrent] = useState(0)
 


  const handleDragEnd = (event, info) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset < -100 || velocity < -500) {
      setCurrent((prev) => (prev + 1) % slides.length)
    } else if (offset > 100 || velocity > 500) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }
 const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15, // fast text stagger
      },
    },
  };

  const childVariants = {
    hidden: {  opacity: 0 },
    show: {
     
      opacity: 1,
      transition: {  duration: 1, ease: "easeOut" }, // fast for text
    },
  };
  return (
    <motion.div
      variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative h-screen w-full
         overflow-hidden cursor-grab active:cursor-grabbing snap-start"
         >
      {/* Background */}
      <motion.div variants={childVariants}>

              <Nav title={'THE AA PERSPECTIVE'} tracking={'tracking-[.8rem]'} />
        {/* <Nav title={"THINK BOLDLY"} tracking={"tracking-[1.9rem]"} /> */}

      </motion.div>

      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover "
        style={{ backgroundImage: `url(${'/Images/bg.svg'})` }}
      >
        <div className="absolute inset-0 bg-[#202A43] -z-1" />
      </div>

      {/* Draggable container */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        variants={childVariants}
        className="absolute inset-0 w-full h-screen   flex flex-col md:flex-row items-center justify-center px-[4rem] "
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 ,y:-20}}
            animate={{ opacity: 1,y:0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex w-full gap-20 items-center justify-center  h-[30rem]   mt-20"
          >
            {/* Text content */}
            <div className="flex-1 flex flex-col items-start justify-between bg-  h-full ">
            <div className=" flex flex-col items-start gap-5 ">
              <h3 className="text-secondary font-R_regular text-[4.8rem] leading-[4.5rem] tracking-[0.1em] whitespace-pre-line">
                {slides[current].title}
              </h3>
              <p className="text-lg text-primary leading-[1.3rem] font-M_regular
               tracking-[0.1em] whitespace-pre-line">
                {slides[current].subtitle}
              </p>
              </div>
              {/* <div className="font-R_regular mt-6 font-normal text-[1.5rem] tracking-[0.12em] leading-[4rem] flex items-center 
              justify-center w-[20rem] h-[5rem] rounded-full text-primary bg-secondary">
                See the Take
              </div> */}
                  <Button className=" font-R_regular  text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0
          flex items-center justify-center w-[20rem] h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary  " variant="default" size="default">SEE THE TAKE</Button>
            </div>

            {/* Images */}
            <div className="relative flex-1 w-full flex items-start justify-center h-full">
              <img
                src={slides[current].img}
                alt="work1" loading='lazy'
                className="z-10 h-[30rem] pointer-events-none"
              />
              <img
                src={slides[current].img2}
                alt="work2" loading='lazy'
                className="absolute z-0 h-[20rem] right-0 top-[20%] opacity-[25%] pointer-events-none"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Dots */}
   <div className="absolute  bottom-10 left-1/2 -translate-x-1/2 flex gap-5 z-30   cursor-pointer" >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i > current ? 1 : -1)
              setCurrent(i)
            }}
            className={`w-5 h-5 rounded-full border transition cursor-pointer ${
              i === current ? "bg-primary  border-transparent " : "bg-transparent boder  border-primary"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default TheAA
