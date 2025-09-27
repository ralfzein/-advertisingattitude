import React from 'react'
import logo2 from "../../assets/Images/logo2.svg"
import bg from "../../assets/Images/bg.svg"

const Footer = () => {
  return (
    <div className='flex flex-col h-auto  bg-background   'id="footer"
       style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex flex-col px-[4rem] py-[2rem]'>
        <p className='
          font-M_bold  text-primary
           text-lg  leading-[2rem] text-justify
          '>Advertising Attitude is a leading creative agency built for brands that 
            refuse to blend in. We don’t just craft campaigns—we train ideas to fight harder,
             lastlonger, and leave echoes. Rooted in clarity, rebellion, and bold thinking, 
             we work with creators, leaders, and brands to reshape narratives, break   patterns, 
             andpunch through the noise. With a SwirlBold™ mindset at our core, we fuse creative 
             chaos with strategic intent—making work that’s  unignorable, unforgettable,and unapologetically sharp.
             </p>

        <div className='mt-20 mb-10 flex'>
            <img src={logo2} alt="Hero" className="w-[72%] h-auto object-contain " />
        </div>
        <div className='flex justify-between mb-5 '>
            <div className='flex items-center gap-10  '>
                {['LinkedIn', 'Instagram', 'Facebook', 'Newsletter', 'Careers' ].map((item, index) => (
                    
                <label className='text-sm font-M_bold text-primary tracking-[.1em] cursor-pointer hover:text-bur'>{item}</label>
                ))}
                
            </div>


            <div className='flex items-center gap-10  '>
                <label className='text-sm font-M_bold text-primary tracking-[.1em]'>Privacy policy</label>
                <label className='text-sm font-M_bold text-primary tracking-[.1em]'>@2025 Advertising Attitude</label>
            </div> 
        </div>
      </div>
        <div className='h-[4rem] w-full bg-bur flex items-center  '>
            

              <div className='flex justify-between  items-center w-full  px-[4rem] '>
            <div className='flex items-center justify-center '>
                <label className='text-sm font-M_medium text-primary tracking-[.1em]'>Beirut — Beirut Digital District BDD 1499</label>
            </div>


            <div className='flex flex-col items-start gap-0 mr-[13rem]'>
                <label className='text-sm font-M_medium text-primary tracking-[.1em]'>business@advertisingattitude.com
                  </label>
                <label className='text-sm font-M_medium text-primary tracking-[.1em]'>talent@advertisingattitude</label>
            </div> 
        </div>
        </div>
    </div>
  )
}

export default Footer
