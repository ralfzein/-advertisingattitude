import Footer from '../../components/Footer/Footer'
import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../../components/Nav/Nav'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const About = () => {
  return (
    <div className=' w-full '>
       
      {/* SECTION 1 */}
      <section className="     bg-secondary bg-center bg-cover md:bg-[url('/Images/bg.svg')] bg-[url('/Images/newbg.webp')] ">
        
          <motion.div  className="z-50 w-full relative  ">
          <Nav title={["About AA"]} 
          tracking={"tracking-[0.5rem] md:tracking-[0.6rem]"}
          />
        </motion.div>


        <div className=' pb-[2rem]  pt-[5rem]   md:pb-15  md:pt-40   px-4 md:px-[4rem] flex flex-col md:flex-row '>
          <div className='flex-[0.8] flex flex-col justify-between'>
            <div className='flex flex-col gap-0 items-end w-fit'>
              <div className='flex flex-col gap-0 items-end'>
                <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-R_regular text-[3rem] md:text-[6rem] text-primary leading-[3.2rem] md:leading-[6rem]'>Who We Are</motion.h1>
                <motion.img variants={fadeUp} src='Images/About/icon.svg' className='w-[7rem] md:w-[17rem]' alt='icon' />
              </div>
            </div>

            <div className=' relative hidden md:block '>
              <div className='absolute w-full flex  -top-25 items-center justify-center  -translate-x-38'>
                <motion.img variants={fadeUp} src='Images/About/dots.svg' className=' w-[8rem] rotate-0 ' alt='icon' />
              </div>
              <motion.img variants={fadeUp} src='Images/About/img1.svg' className='h-[17rem]   w-fit' alt='icon' />
            </div>
          </div>

          <div className='flex flex-col flex-1 gap-5 md:gap-10 mt-5 md:mt-0'>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-white text-[1rem] leading-[1.2rem] md:text-[1.8em] md:leading-[2rem] md:pr-16'>
              We believe creativity without discipline is <br className='hidden md:block'/>
              chaos and discipline without feeling is<br className='hidden md:block'/>
              dead. Every brand we build carries that <br className='hidden md:block'/> same code:
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_bold text-white text-[1rem] leading-[1.2rem] md:text-[2rem] md:leading-[2rem] uppercase tracking-[0.1rem] md:tracking-[0.2rem]'>
              Think boldly. Feel deeply. <br/> Act smartly.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_regular text-white text-[1rem] leading-[1.2rem] md:text-[1.8em] md:leading-[2rem] md:pr-16'>
              That’s not a slogan. That’s survival. Marketing never lost its roots — it just got buried under noise. Brands stopped standing for something real. We help them think like the originals: clear, bold, built to last. In a loud world, we stand beside them — refining vision, shaping story, making them felt, not just seen.
            </motion.h3>
          </div>

          <div className='flex mt-15 md:hidden mx-6 justify-between'>
            <motion.img variants={fadeUp} src='Images/About/img1.svg' className='h-[12rem] md:h-[16rem] w-fit' alt='icon' />
            <div className='flex items-start justify-center'>
              <motion.img variants={fadeUp} src='Images/About/dots.svg' className='w-[7rem] md:w-[8rem] mt-5 ml-8' alt='icon' />
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2 */}
      <section className=" px-4 md:px-[4rem] py-[2rem] md:py-15 h- bg-primary bg-center bg-cover md:bg-[url('/Images/bg.svg')] bg-[url('/Images/newbg.webp')] ">
        <div className='flex flex-col-reverse md:flex-row'>

          <div className='flex flex-col mt-5 md:mt-0 flex-1 gap-5 md:gap-6 md:pr-20 text-[1rem] md:text-[1.7rem]'>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-secondary leading-[1.2rem] md:leading-[2rem]'>
              What began as one man’s vision has become a full-fledged, remote-driven collective of thinkers, creatives, storytellers, and strategists. We believe marketing isn’t decoration — it’s discipline.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_bold text-secondary leading-[1.2rem] md:leading-[2rem]'>
              Every project is a fight in the arena: not just to make something beautiful, but to make something that works.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-secondary leading-[1.2rem] md:leading-[2rem]'>
              Our backbone was built in airport terminals — <span className='font-M_bold'>Beirut, Abu Dhabi, Muscat Duty Free</span> — where we mastered the art of retail execution.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-secondary leading-[1.2rem] md:leading-[2rem]'>
              We learned how to move people between two flights, two seconds, and two emotions. That discipline became our creative edge.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-secondary leading-[1.2rem] md:leading-[2rem]'>
              <span className='font-M_bold'>Born in Beirut</span> — a city that taught us resilience, speed, and creativity that never waits for perfect conditions.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_bold text-secondary leading-[1.2rem] md:leading-[2rem]'>
              “Advertising isn’t about making brands louder. It’s about making them felt — real, human, unforgettable.”
            </motion.h3>

            <div className='flex items-end justify-end font-M_bold text-secondary w-full pr-4 md:pr-8'>
              <div className='flex items-end justify-end flex-col w-fit md:gap-2'>
                <span className='!text-[0.8em] leading-[0.8rem] md:leading-[1rem]'>— Ralf Zein</span>
                <span className='!text-[0.8em] md:leading-[1rem]'>Founder</span>
              </div>
            </div>

            <div className='flex md:hidden'>
              <motion.img variants={fadeUp} src='Images/About/img2.svg' className='h-[12rem]' alt='icon' />
              <div className='w-full flex  items-center justify-center'>
                <motion.img variants={fadeUp} src='Images/About/dots2.svg' className='w-[8rem]  md:w-[10rem]' alt='icon' />
              </div>
            </div>
          </div>

          <div className='flex-[0.8] flex flex-col justify-between'>
            <div className='flex flex-col gap-0 items-end w-fit'>
              <div className='flex flex-col gap-0 items-start'>
                <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-R_regular text-[3rem] md:text-[6rem] leading-[3.2rem] text-secondary md:leading-[6rem]'>OUR STORY</motion.h1>
                <motion.img variants={fadeUp} src='Images/About/icon2.svg' className='w-[8rem] md:w-[15rem]' alt='icon' />
              </div>
            </div>

            <div className='hidden md:flex flex-col'>
              <div className='w-full flex  items-center justify-center -translate-x-20'>
                <motion.img variants={fadeUp} src='Images/About/dots2.svg' className='w-[10rem]' alt='icon' />
              </div>
              <motion.img variants={fadeUp} src='Images/About/img2.svg' className='w-[15rem]' alt='icon' />
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 3 */}
      <section className=" px-4 md:px-[4rem] py-[2rem] md:py-15 bg-secondary bg-center bg-cover md:bg-[url('/Images/bg.svg')] bg-[url('/Images/newbg.webp')] ">
        <div className='flex flex-col md:flex-row'>
          <div className='flex-[0.8] flex flex-col justify-between'>
            <div className='flex flex-col gap-0 items-end w-full'>
              <div className='flex flex-col gap-0 items-end w-full'>
                <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-R_regular text-[3rem] leading-[3.5rem] md:text-[5.8rem] text-primary md:leading-[6rem] w-full'>
                  How We <br className='hidden md:block'/> Think
                </motion.h1>
                <motion.img variants={fadeUp} src='Images/About/icon.svg' className=' w-[8rem] md:w-[15rem] -translate-x-3 md:-translate-x-25 md:-translate-y-5' alt='icon' />
              </div>
            </div>

            <div className='hidden md:block -translate-y-15'>
              <div className='w-full flex items-center justify-center -translate-x-10 translate-y-15'>
                <motion.img variants={fadeUp} src='Images/About/dots.svg' className='w-[10rem] rotate-200' alt='icon ' />
              </div>
              <motion.img variants={fadeUp} src='Images/About/img3.svg' className='h-[17rem] w-fit' alt='icon' />
            </div>
          </div>

          <div className='mt-5 md:mt-0 flex flex-col flex-1 gap-5 md:gap-10 text-[1rem] md:text-[1.8rem] md:pr-10'>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-white leading-[1.2rem] md:leading-[2rem] md:pr-16'>
              Our team works like an ecosystem, not a hierarchy. All creatives are savage fighters — each fierce in their discipline. We’re connected by purpose, not walls.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-white leading-[1.2rem] md:leading-[2rem] md:pr-16'>
              That freedom keeps us fast, agile, and obsessively precise.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-white leading-[1.2rem] md:leading-[2rem] md:pr-16'>
              We call it the <span className='font-M_bold'>SwirlBold™ mindset — Disruptive Creativity + Disciplined Execution.</span>
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-white leading-[1.2rem] md:leading-[2rem] md:pr-16'>
              Seeing every angle, daring every move, looping through chaos until clarity hits. Creativity that doesn’t walk in straight lines; it twists, challenges, and strikes.
            </motion.h3>

            <div className='flex md:hidden  mt-6 items-center w-full justify-between px-10'>
              <div className='flex items-center justify-center'>
                <motion.img variants={fadeUp} src='Images/About/dots.svg' className='w-[6rem] md:rotate-200' alt='icon ' />
              </div>
              <motion.img variants={fadeUp} src='Images/About/img3.svg' className=' h-[8rem] md:h-[17rem] w-fit' alt='icon' />
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4 */}
      <section className=" px-4 md:px-[4rem] py-[2rem] md:py-15 h- bg-primary bg-center bg-cover md:bg-[url('/Images/bg.svg')] bg-[url('/Images/newbg.webp')] ">
        <div className='flex flex-col-reverse md:flex-row'>

          <div className='flex flex-col mt-5 md:mt-0 gap-6 md:pr-20 text-[1rem] md:text-[1.8rem] md:w-[50%]'>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-secondary leading-[1.2rem] md:leading-[2rem]'>
              The goal has never been just campaigns. It’s to help brands find their truth — who they are, why they exist, and what they stand for.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_medium text-secondary leading-[1.2rem] md:leading-[2rem]'>
              Our vision: <span className='font-M_bold text-secondary'>to create advertising that outlasts trends and platforms.</span> To stand among the top 5% independent agencies in Lebanon and the GCC — proving that clarity and discipline can compete with anyone, anywhere. Because every brand has a fight in it.
            </motion.h3>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-M_bold text-secondary leading-[1.2rem] md:leading-[2rem]'>
              Our job is to train brands to fight, evolve and lead.
            </motion.h3>

            <div className='flex md:hidden'>
              <div className='w-full flex items-start justify-center gap-'>
                <motion.img variants={fadeUp} src='Images/About/dots3.svg' className='w-[4rem]' alt='icon' />
                <motion.img variants={fadeUp} src='Images/About/img4.svg' className='w-fit h-[10rem]' alt='icon' />
              </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col justify-between'>
            <div className='flex flex-col gap-0 items-end w-fit'>
              <div className='flex flex-col gap-0 items-start'>
                <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-R_regular text-[3rem] md:text-[6rem] text-secondary leading-[6rem]'>OUR VISION</motion.h1>
                <motion.img variants={fadeUp} src='Images/About/icon2.svg' className='w-[15rem]' alt='icon' />
              </div>
            </div>

            <div className='hidden md:flex flex-col'>
              <div className='w-full flex items-start justify-end'>
                <motion.img variants={fadeUp} src='Images/About/dots3.svg' className='w-[10rem]' alt='icon' />
                <motion.img variants={fadeUp} src='Images/About/img4.svg' className='w-fit h-[18rem]' alt='icon' />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 5 */}
      <section className=" px-4 md:px-[4rem] py-[2rem] md:py-15 bg-secondary bg-center bg-cover md:bg-[url('/Images/bg.svg')] bg-[url('/Images/newbg.webp')] ">
        <div className='flex flex-col md:flex-row items-start'>

          <div className='flex-[0.8] flex flex-col gap-0'>
            <div className='flex flex-col gap-0   items-end'>
              <div className='flex flex-col gap-0 items-end'>
                <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className='font-R_regular text-[3rem] leading-[3.3rem] md:text-[6rem] text-primary md:leading-[6rem]'>WHAT WE DO</motion.h1>
                <motion.img variants={fadeUp} src='Images/About/icon.svg' className='w-[7rem] md:w-[15rem]' alt='icon' />
              </div>
            </div>

            <div className='hidden md:block'>
              <div className='w-full flex items-center justify-center -translate-x-20 translate-y-15'>
                <motion.img variants={fadeUp} src='Images/About/dots.svg' className='w-[10rem] rotate-200' alt='icon ' />
              </div>
              <motion.img variants={fadeUp} src='Images/About/img5.svg' className='w-[13rem]' alt='icon' />
            </div>
          </div>

          <div className='flex flex-col flex-1 justify-between mt-5 md:mt-0'>
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
             className='font-M_medium text-white text-[1rem] leading-[1.2rem] md:text-[1.8em] md:leading-[2rem] gap-2 md:gap-6 flex flex-col md:ml-25'>
              <span>Strategic Branding & Positioning</span>
              <span>Visual & Verbal Identity</span>
              <span>Concept & Creative Direction</span>
              <span>Campaigns & Brand Activation</span>
              <span>Retail Marketing & Out-of-Home Advertising</span>
              <span>Content & Digital Activation</span>
              <span>Social Media Marketing & AI Integration</span>
              <span>Web Development & Digital Experience</span>
              <span>Performance Marketing & eCommerce</span>
            </motion.h3>

            <div className='md:hidden flex items-center justify-center mt-10 px-6'>
              <div className='w-full flex items-center justify-center'>
                <motion.img variants={fadeUp} src='Images/About/dots.svg' className='w-[7rem]' alt='icon ' />
              </div>
              <motion.img variants={fadeUp} src='Images/About/img5.svg' className='h-[8rem]' alt='icon' />
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default About
