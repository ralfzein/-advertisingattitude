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
    id:6,
    img: "/Images/Campaign/adf.webp",
    title: "ABU DHABI DUTY FREE",
    subtitle:
      "The Red Thread — vibrant, no-miss \n digital campaign to turn heads fast",
  },
  {
    id:5,
    img: "/Images/Campaign/mdf.webp",
    title: "MUSCAT DUTY FREE",
    subtitle:
      "Chocoflight Time — playful concept \n turning the chocolate section into the \n most irresistible stop",
  },
  {
    id:2,
    img: "/Images/Campaign/bdf.webp",
    title: "BEIRUT DUTY FREE",
    subtitle:
      "Click & Collect — a campaign built on \n consistency, clear and direct messaging",
  },
  {
    id:9,
    img: "/Images/Campaign/ka.webp",
    title: "K&A MACHMOUCHI",
    subtitle:
      "The FastLane Screen — digital branding \n that turns screens into bold statement",
  },
  {
    id:7,
    img: "/Images/Campaign/aa.webp",
    title: "ADVERTISING ATTITUDE",
    subtitle:
      "Ignore This Ad — positioning a bold \n agency in a world of noise",
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
export default function Cam() {
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
    }, 10000);

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
        <Nav title="CAMPAIGN MADE BY AA" tracking="tracking-[.8rem]" />
      </motion.div>
      <Carousel
        opts={{ loop: true }}
        className="h-screen w-screen "
        setApi={setApi}
      >
        <CarouselContent className="h-screen ">
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
                className="relative   z-10 flex flex-col items-center justify-center  h-full  text-center md:px-6  "
              >
                <div className="relative z-10 flex flex-col items-center justify-start  gap-5 md:gap-3  text-center md:mt-30 md:min-h-[15.5rem]  px-4 ">
                  <h1 className="font-R_regular tracking-[0.2rem]  text-[1.8rem] leading-[2rem] md:text-[4.6rem] md:leading-[5.4rem]  text-primary ">
                    {slides[current].title}
                  </h1>
                  <p  
                    className="font-M_medium  text-[1rem]  md:text-[2rem]   
          leading-[1.2rem]   md:leading-[2.4rem]   md:whitespace-pre-line  text-primary"
                  >
                    {slides[current].subtitle}
                  </p>
                </div>
             <div className="h-[5rem]" />
              </motion.div>
            </CarouselItem>
          ))}
        
        </CarouselContent>
        <div className=" absolute bottom-35 left-0 flex items-center justify-center w-full px-4 ">
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
