import React from 'react'

const ThankYou = () => {
  return (
    <div className='bg-primary flex items-center justify-center h-screen text-[2rem] flex-col tracking-[0.1rem] px-4 md:px-0  space-y-3'>
        

        <h1 className='text-secondary text-[1.9rem] leading-[2.1rem] md:text-[2.5rem]  font-M_bold text-center md:leading-[2.7rem]'>Thank You
            <br/>
your message is in.
        </h1>
        <p className='text-[.9rem] md:text-[1.5rem] leading-[1.3rem] md:leading-[2.5rem] font-R_regular text-background  text-center '>
            We’ve got your submission. We’ll swirl it, bold <br className='hidden md:block'/> it, and get back to you within 48–72 hours.
        </p>

        <button className=' font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0 
          flex items-center justify-center w-full md:w-[28rem] h-[3rem] md:h-[4rem]
           hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary'
        onClick={() => window.location.href = '/'}
        >
          Back to Homepage
        </button>
        <p className='font-M_bold text-[.7rem] text-center'>
In the meantime, explore <a href="/work" className="underline mr-1">our work</a>
 or read a <a href="/theAA" className="underline">perspective</a>.

        </p>
        
        </div>
  )
}

export default ThankYou