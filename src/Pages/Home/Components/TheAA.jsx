import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./carousel.css";

import Nav from "../../../components/Nav/Nav";
import { Button } from "../../../components/ui/button";

const slides = [
  {
    img: "/Images/TheAA/aa.webp",
    img2: "/Images/TheAA/ab.webp",
    title: "Stop Branding \n Blindly",
    subtitle:
      "Many brands don’t fail in marketing because  of weak visuals — they fail because they skip  strategy. But with AI, it’s no longer out of  reach — it’s a revolution. Will you harness it, or \n fall behind?",
  },
  {
    img: "/Images/TheAA/ab.webp",
    img2: "/Images/TheAA/ac.webp",
    title: "The New Marketing   Playbook",
    subtitle:
      "One marketer can’t do it all. An agency brings  the full arsenal — strategy, design, content, execution — all under one roof. Buy back your   time, cut the overhead, and focus on what  actually grows your business.",
  },
  {
    img: "/Images/TheAA/ac.webp",
    img2: "/Images/TheAA/ad.webp",
    title: "The Burnout   Whisperer",
    subtitle:
      "You love the craft. The chase. The next big   idea. But when every brief whispers “do more, be more,  ” burnout starts to speak louder than   creativity. This one’s for the marketers,  designers, and dreamers who feel the pressure    but keep showing up.",
  },
  {
    img: "/Images/TheAA/ad.webp",
    img2: "/Images/TheAA/ae.webp",
    title: "The SwirlBold  Mentality",
    subtitle:
      "Welcome to SwirlBold Thinking. Let’s stop   blending in. SwirlBold isn’t a style. It’s   a   mindset. It’s marketing that spins out of the   obvious and lands where impact lives. You   don’t think in straight lines. You think in   loops, angles, and questions others are too   scared to ask. Because bold ideas don’t follow   the rules. They bend them, break them, and   redraw the map.",
  },
  {
    img: "/Images/TheAA/ae.webp",
    img2: "/Images/TheAA/aa.webp",
    title: "Every Agency   Is An Award   Winner",
    subtitle:
      "Some win for real. Some win for reach. Either   way — congrats, truly. As for us? We’re not in it    (yet). We’re just keeping our heads down,    building loud ideas quietly. Because the best   kind of recognition? Comes after the work is   done.",
  },
];

function TheAA() {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };

  const childVariantsnav = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" },
    },
  };

   const childVariantsScale = {
    hidden: { opacity: 0, scale: 0.5 },
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

  const childVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1.5,
      transition: {
        type: "tween",
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handlePointerDown = (e) => {
    startX.current = e.clientX || e.touches[0].clientX;
  };

  const handlePointerUp = (e) => {
    if (startX.current === null) return;
    const endX = e.clientX || e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    if (diff > 10) {
      prevSlide();
    } else if (diff < -10) {
      nextSlide();
    }

    startX.current = null;
  };

  const getSlideClass = (i) => {
    const relativeIndex = (i - index + slides.length) % slides.length;
    if (relativeIndex === 0) return "slide front-left";
    if (relativeIndex === 1) return "slide front-right";
    return "slide back";
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      whileInView="show"
      className="relative h-screen w-full overflow-hidden snap-start"
    >
      <motion.div className="relative z-50 w-full" variants={childVariantsnav}>
        <Nav title={"THE AA PERSPECTIVE"} tracking={"tracking-[.8rem]"} />
        {/* <Nav title={"THINK BOLDLY"} tracking={"tracking-[1.9rem]"} /> */}
      </motion.div>

      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover "
        style={{ backgroundImage: `url(${"/Images/bg.svg"})` }}
      >
        <div className="absolute inset-0 bg-[#202A43] -z-1" />
      </div>
    <motion.div
      variants={childVariantsScale}
   >
      <div className="flex w-full gap-20 items-center justify-between  h-[30rem]   mt-40 px-[4rem] ">
        {/* Text content */}
        <motion.div
          key={index} // force remount when index changes
          variants={childVariants}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col items-start justify-between bg-  h-full "
        >
          <div className=" flex flex-col items-start gap-5 ">
            <h3 className="text-secondary font-R_regular text-[4.8rem] leading-[4.5rem] tracking-[0.1em] whitespace-pre-line">
              {slides[index].title}
            </h3>
            <p
              className="text-lg text-primary leading-[1.3rem] font-M_regular
               tracking-[0.1em] whitespace-pre-line"
            >
              {slides[index].subtitle}
            </p>
          </div>

          <Button
            className=" font-R_regular  text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0
          flex items-center justify-center w-[20rem] h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary  "
            variant="default"
            size="default"
          >
            SEE THE TAKE
          </Button>
        </motion.div>

        <div className="relative flex-1 w-full flex items-center justify-center h-[30rem]">
          <div className="absolute right-12">
            <div
              className="carousel-container cursor-grab "
              onMouseDown={handlePointerDown}
              onMouseUp={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchEnd={handlePointerUp}
            >
              {slides.map((item, i) => (
                <div key={i} className={getSlideClass(i)}>
                  <img
                    src={item.img}
                    alt="Hero"
                    loading="lazy"
                    className="w-full h-auto object-cover  pointer-events-none  select-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Images */}
        {/* <div className="relative flex-1 w-full flex items-start justify-center h-full">
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
            </div> */}
      </div>


    </motion.div>
      {/* Dots */}
      <div className="absolute  bottom-10 left-1/2 -translate-x-1/2 flex gap-5 z-30   cursor-pointer">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-5 h-5 rounded-full border transition cursor-pointer ${
              i === index
                ? "bg-primary  border-transparent "
                : "bg-transparent boder  border-primary"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default TheAA;
