import React from 'react'

const RedSection = () => {
  return (
    <div className=' bg-bur  bg-cover bg-center snap-start'
               style={{ backgroundImage: `url(${'/Images/bg.svg'})` }}
    >
    <div className='relative  py-[3.5rem] w-full  px-[4rem] '>
      <h1 className= 'text-primary inline-block  tracking-[.4rem] font-R_regular text-[5rem] leading-[6.5rem]  -ml-[5px] pl-0  font-normal     uppercase'
      >we don't just build brands. <br/> 
      we train them to fight, <br/>
      evolve, and lead.
        </h1>
    </div>
    </div>
  )
}   

export default RedSection
