import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import CustomCursor from "./CustomCursor"

const Nav = ({ title, tracking ,color }) => {
   const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  // 👉 for title cycling
  const [currentIndex, setCurrentIndex] = useState(0)
  const titles = Array.isArray(title) ? title : [title]

  useEffect(() => {
    if (titles.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      }, 4000) // every 3s
      return () => clearInterval(interval)
    }
  }, [titles])

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
  }

const containerVariants = { open: { transition: { staggerChildren: 0.15, delayChildren: 0.3, }, }, closed: {}, }
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } }, }
  const navigation=[
    {
      name:"work",
      href:"/work"
    },
    {
      name:"swirlbold",
      href:"/"
    },
    {
      name:" The AA Perspective",
      href:"/"
    },
    {
      name:"About",
      href:"/"
    },
    {
      name:"Let’s Talk",
      href:"/contact"
    }
  ]
const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (isHovered) {
      window.addEventListener("mousemove", handleMove);
    } else {
      window.removeEventListener("mousemove", handleMove);
    }
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isHovered]);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-between px-4 md:px-[4rem] mt-3 z-50 ">
        <div className={`flex items-center justify-between w-full border-b-[2px] md:border-b-[0.5rem]  0 uppercase ${color ? (menuOpen ? 'border-primary' : "border-background") : "border-primary"}`}>
          {/* Title */}
         <AnimatePresence mode="wait">
              <motion.h1
                key={titles[currentIndex]}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`font-R_regular font-bold ${color ? (menuOpen ? 'text-[#f2edd9]' : "text-background") : "text-primary"}
                uppercase text-xl md:text-header md:leading-[1.1] tracking-[0.2rem] ${tracking} 
                        lg:text-header`} 
          >
           {titles[currentIndex]}
          </motion.h1>
            </AnimatePresence>

          {/* Burger */}
     <div className="relative">
      {/* The button */}
      <button
  onClick={() => setMenuOpen(!menuOpen)}

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-white flex flex-col gap-[2.5px] md:gap-[0.5rem] -translate-y-3 md:-translate-y-2 mt-7 cursor-none"
      >
        <div className={` w-6 md:w-24 h-[2px] md:h-[0.5rem]  ${color ? (menuOpen ? 'bg-primary' : "bg-background") : "bg-primary"}`}></div>
        <div className={` !w-6 md:w-24 !h-[2px] md:h-[0.5rem]  ${color ? (menuOpen ? 'bg-primary' : "bg-background") : "bg-primary"}`}></div>
        <div className={` w-6 md:w-24 h-[2px] md:h-[0.5rem]  ${color ? (menuOpen ? 'bg-primary' : "bg-background") : "bg-primary"}`}></div>
      </button>

      {/* Fake cursor icon */}
   
<AnimatePresence>
  {isHovered && (
    <motion.img
      key="cursor"
      src="/Images/swirl.svg"
      alt="cursor icon"
      className="fixed w-12 h-12 pointer-events-none"
      style={{
        left: mousePos.x - 24 + "px",
        top: mousePos.y - 24 + "px",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  )}
</AnimatePresence>
    </div>

        </div>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { opacity: { duration: 0.8, ease: "easeInOut" }, y: { duration: 0.4, ease: "easeOut" } },
            }}
            exit={{
              opacity: 0,
              y: "-100%",
              transition: { opacity: { duration: 0.6, ease: "easeInOut" }, y: { duration: 0.3, ease: "easeIn" } },
            }}
            className="absolute top-0 inset-0 flex flex-col bg-[#202A43] h-screen items-start justify-center text-white bg-cover bg-center z-40"
               style={{ backgroundImage: `url(${'/Images/bg.svg'})` }}
          >
            {/* Animated content */}
            <motion.div
              className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 flex items-start flex-col px-[4rem] justify-between h-screen"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              {/* Links */}
              <motion.div
                className="mt-4 flex flex-col text-primary font-R_regular font-normal
                           text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.8rem]
                           leading-tight sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[5.5rem]
                           tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em]"
                variants={containerVariants}
              >
                {navigation.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="cursor-pointer hover:text-secondary w-fit capitalize"
                    onClick={() => navigate(item.href)}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <div className="flex justify-between w-full items-center">
                <motion.div className="my-5 font-M_medium text-primary text-[1.3rem] tracking-[.1em]" variants={itemVariants}>
                  <a href="mailto:business@advertisingattitude.com" className="hover:opacity-75">
                    business@advertisingattitude.com
                  </a>
                  <br />
                  Beirut — Beirut Digital District BDD 1499
                </motion.div>

                <motion.img variants={itemVariants} src={'/Images/logo.svg'} loading='lazy'  decoding="sync" alt="Hero" className="w-[20%] h-auto object-contain" />
              </div>

              {/* Social Links */}
              <motion.div className="flex items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 mb-6" variants={itemVariants}>
                {["LinkedIn", "Instagram", "Facebook", "Newsletter"].map((item, i) => (
                  <div
                    key={i}
                    className="cursor-pointer capitalize font-M_bold text-primary
                     tracking-[.1em] hover:text-secondary text-[clamp(0.9rem,1.5vw,1.3rem)]"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav
