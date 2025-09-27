import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../../public/Images/logo.svg"

const Nav = ({ title, tracking }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Variants for container (staggered children)
  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
    closed: {},
  }

  // Variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
  }

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-between px-[4rem] mt-3 z-50">
        <div className="flex items-center justify-between w-full border-b-[0.5rem] border-primary">
          {/* Title */}
          <h1
            className={`font-R_regular font-bold text-primary text-header leading-[1.1] ${tracking} 
                        lg:text-header`} 
          >
            {title}
          </h1>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white flex flex-col gap-[0.5rem] -translate-y-2 mt-7 cursor-pointer"
          >
            <div className="w-24 h-[0.5rem] bg-primary"></div>
            <div className="w-24 h-[0.5rem] bg-primary"></div>
            <div className="w-24 h-[0.5rem] bg-primary"></div>
          </button>
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
                           leading-tight sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[5rem]
                           tracking-[0.05em] sm:tracking-[0.08em] md:tracking-[0.1em]"
                variants={containerVariants}
              >
                {["work", "swirlbold", "The AA Perspective", "About", "Let’s Talk"].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="cursor-pointer hover:text-secondary w-fit capitalize"
                  >
                    {item}
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

                <motion.img variants={itemVariants} src={logo} alt="Hero" className="w-[20%] h-auto object-contain" />
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
