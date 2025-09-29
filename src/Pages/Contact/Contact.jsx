import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import { LoaderPinwheel, Shell } from 'lucide-react'
import { Button } from '../../components/ui/button'
import Footer from '../../components/Footer/Footer'
import FirstTab from './Components/FirstTab'
import SecondTab from './Components/SecondTab'
import ThirdTab from './Components/ThirdTab'



const Contact = () => {
  const [selected, setSelected] = useState(1)

const title=[{
  label:"I am a Brand",
  value:1
},
{
  label:"I am a Creator",
  value:2
},
{
  label:"I am a PR",
  value:3
}


]
 


  return (
    <div className='relative'>
      <Nav title={"let's talk"} tracking={"tracking-[1.6rem]"} />

      <div
        className="absolute inset-0 w-full h-full bg-center bg-"
        style={{ backgroundImage: `url('/Images/bg.svg')` }}
      >
        <div className="absolute inset-0 bg-[#202A43] -z-[1]" />
      </div> 
      <div className='relative px-[4rem] pt-[10rem]  mb-20 '>
         
      <div className='grid grid-cols-3 gap-25   '>
        {title.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item.value)}
            className={`py-3 px-4 border-[3px] font-M_bold text-center text-[1.5rem]  bg
              border-secondary text-primary rounded-full cursor-pointer
              ${selected === item.value ? 'bg-secondary text-white' : ' '}`}
          >
            {item.label}
          </div>
        ))}
      </div>
       
     
        {selected === 1 ?
         <FirstTab /> :
        selected === 2 ? <SecondTab />:
       <ThirdTab />}








      </div>
      <Footer/>
    </div>
  )
}

export default Contact
