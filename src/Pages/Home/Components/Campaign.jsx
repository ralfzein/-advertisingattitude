"use client"

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"
import Nav from "../../../components/Nav/Nav"

import adf from "../../../assets/Images/Campaign/adf.webp"
import mdf from "../../../assets/Images/Campaign/mdf.webp"
import bdf from "../../../assets/Images/Campaign/bdf.webp"
import ka from "../../../assets/Images/Campaign/ka.webp"
import aa from "../../../assets/Images/Campaign/aa.webp"

const slides = [
  {
    img: adf,
    title: "ABU DHABI DUTY FREE",
    subtitle:
      "The Red Thread — vibrant, no-miss \n digital campaign to turn heads fast",
  },
  {
    img: mdf,
    title: "MUSCAT DUTY FREE",
    subtitle:
      "Chocoflight Time — playful concept \n turning the chocolate section into the \n most irresistible stop",
  },
  {
    img: bdf,
    title: "BEIRUT DUTY FREE",
    subtitle:
      "Click & Collect — a campaign built on \n consistency, clear and direct messaging",
  },
  {
    img: ka,
    title: "K&A MACHMOUCHI",
    subtitle:
      "The FastLane Screen — digital branding \n that turns screens into bold statement",
  },
  {
    img: aa,
    title: "ADVERTISING ATTITUDE",
    subtitle:
      "Ignore This Ad — positioning a bold \n agency in a world of noise",
  },
]

export default function Cam() {
  const [current, setCurrent] = useState(0)
  const [api, setApi] = useState(null)

  // ✅ listen to carousel events when api is available
  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap()) // set initial
    const onSelect = () => setCurrent(api.selectedScrollSnap())

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Nav title="CAMPAIGN MADE BY AA" tracking="tracking-[.8rem]" />

      <Carousel opts={{ loop: true }} className="h-screen w-screen" setApi={setApi}>
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="h-screen w-full relative flex items-center justify-center"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#202A43] opacity-80" />

              {/* Content */}
           <div className="relative   z-10 flex flex-col items-center justify-center  h-full  text-center px-6">
          <div className="relative z-10 flex flex-col items-center justify-start  gap-0  text-center mt-30 min-h-[15.5rem]  ">
            <h1 className="font-R_regular tracking-[0.2rem]  text-[4.6rem] leading-[5.4rem]  text-primary ">
              {slides[current].title}
            </h1>
            <p className="font-M_medium  text-[2rem]  
            leading-[2.4rem]   whitespace-pre-line  text-primary">
              {slides[current].subtitle}
            </p>
          </div>
          <div className=" font-R_regular  text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0
          flex items-center justify-center w-[25rem] h-[4rem]
           rounded-full   text-primary bg-secondary ">SEE THE CAMPAIGN</div>
          </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-4 h-4 rounded-full transition ${
                i === current ? "bg-primary" : "bg-transparent border border-white"
              }`}
              onClick={() => api && api.scrollTo(i)}
            />
          ))}
        </div>

      </Carousel>
    </div>
  )
}
