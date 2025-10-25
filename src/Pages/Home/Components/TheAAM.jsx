"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
import Nav from "../../../components/Nav/Nav";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    img: "/Images/bgaa.jpeg",
    title: "Stop Branding  Blindly",
    subtitle:
      "Many brands don’t fail in marketing because  of weak visuals  —  they fail because they skip  strategy. But with AI, it’s no longer out of  reach  —  it’s a revolution. Will you harness it, or  fall behind?",
  },
  {
    img: "/Images/bgaa.jpeg",
    img2: "/Images/TheAA/ac.webp",
    title: "The New Marketing   Playbook",
    subtitle:
      "One marketer can’t do it all. An agency brings  the full arsenal  —  strategy, design, content, execution  —  all under one roof. Buy back your   time, cut the overhead, and focus on what  actually grows your business.",
  },
  {
    img: "/Images/bgaa.jpeg",
    img2: "/Images/TheAA/ad.webp",
    title: "The Burnout   Whisperer",
    subtitle:
      "You love the craft. The chase. The next big   idea. But when every brief whispers “do more, be more,  ” burnout starts to speak louder than   creativity. This one’s for the marketers,  designers, and dreamers who feel the pressure    but keep showing up.",
  },
  {
    img: "/Images/bgaa.jpeg",
    img2: "/Images/TheAA/ae.webp",
    title: "The SwirlBold  Mentality",
    subtitle:
      "Welcome to SwirlBold Thinking. Let’s stop   blending in. SwirlBold isn’t a style. It’s   a   mindset. It’s marketing that spins out of the   obvious and lands where impact lives. You   don’t think in straight lines. You think in   loops, angles, and questions others are too   scared to ask. Because bold ideas don’t follow   the rules. They bend them, break them, and   redraw the map.",
  },
  {
    img: "/Images/bgaa.jpeg",
    img2: "/Images/TheAA/aa.webp",
    title: "Every Agency   Is An Award   Winner",
    subtitle:
      "Some win for real. Some win for reach. Either   way  —  congrats, truly. As for us? We’re not in it    (yet). We’re just keeping our heads down,    building loud ideas quietly. Because the best   kind of recognition? Comes after the work is   done.",
  },
];
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
    transition: { type: "tween", duration:1, ease: "easeOut" },
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
export default function TheAAM() {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const nextIndex = (api.selectedScrollSnap() + 1) % slides.length;
      api.scrollTo(nextIndex);
    }, 100000);

    return () => clearInterval(interval);
  }, [api]);
const navigate =useNavigate();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      viewport={{ once: true,amount:0.4}}
      whileInView="show"
      className="relative md:h-screen w-full overflow-hidden snap-start"
    >
      <motion.div variants={childVariantsnav} className="relative z-50 w-full">
        <Nav title="THE AA PERSPECTIVE" tracking="text-[1.5rem] tracking-[0.1rem] md:tracking-[.8rem]" />
      </motion.div>
      <Carousel
        opts={{ loop: true }}
        className="h-screen w-screen "
        setApi={setApi}
      >
        <CarouselContent className="md:h-screen ">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="h-screen w-full relative flex items-center justify-center    "
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#202A43] opacity-80" />

              {/* Content */}
              <motion.div
                variants={childVariants}
                className="relative   z-10 flex flex-col items-center justify-center  h-full  text-center px-4  md:px-6  "
              >
                <div className="relative  z-10 flex flex-col items-center justify-start  gap-2 md:gap-3  text-center md:mt-30 md:min-h-[15.5rem]   ">
                  <h1 className="font-R_regular tracking-[0.2rem]  text-[2.4rem] leading-[2.4rem] md:text-[4.6rem] md:leading-[5.4rem]  text-primary ">
                    {slides[current].title}
                  </h1>
                  <p  
                    className="font-M_medium  text-[1rem]  md:text-[2rem]   
          leading-[1.2rem]   md:leading-[2.4rem]   md:whitespace-pre-line  text-primary line-clamp-4"
                  >
                    {slides[current].subtitle}
                  </p>
                </div>
        
              </motion.div>
            </CarouselItem>
          ))}
        
        </CarouselContent>
        <div className=" absolute bottom-20 md:bottom-35 left-0 flex items-center justify-center w-full px-4 ">
      <Button
                  className="  font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0 
          flex items-center justify-center w-full md:w-[25rem] h-[3rem] md:h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary  "
                  variant="default"
                  size="default"
    onClick={() => navigate(`/case-study/${slides[current].id}`)}

                >
                  SEE THE CAMPAIGN
                </Button>
                </div>
        {/* Dots */}
        <div className="absolute  bottom-10 left-1/2 -translate-x-1/2 flex gap-5 z-30   cursor-pointer ">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-5 h-5 rounded-full border transition cursor-pointer ${
                i === current
                  ? "bg-primary  border-transparent "
                  : "bg-transparent boder  border-primary"
              }`}
              onClick={() => api && api.scrollTo(i)}
            />
          ))}
        </div>
      </Carousel>
    </motion.section>
  );
}
