import React, { useEffect, useState } from 'react'
import bg from "../../../../public/Images/bg.svg"
import Nav from '../../../components/Nav/Nav'

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
  useEffect (() => {
    // alert(selected)
  }, [selected])

    const [text, setText] = useState("");

  return (
    <div className='relative h-screen'>
      <Nav title={"THINK BOLDLY"} tracking={"tracking-[1.6rem]"} />

      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#202A43] -z-[1]" />
      </div>
            <div className='font-R_regular text-primary text-'>
                Something feel off? Need more wings?
Tell us your challenge, we’ll take it for a spin.
            </div>
      <div className='grid grid-cols-3 gap-10 pt-[10rem] px-[4rem]  '>
        {title.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item.value)}
            className={`py-2 px-4 border-[3px] font-M_bold text-center text-[2rem] z-50 bg
              border-secondary text-primary rounded-full cursor-pointer
              ${selected === item.value ? 'bg-secondary text-white' : ' '}`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center gap-10 px-[4rem] mt-10  z-50'>

        <div className='flex items-center justify-start w-full  gap-10 '>
                <span className='font-M_medium text-[2rem]  text-primary '>Email</span>
                <input type="text" className='border-b border-primary  focus:outline-none  font-M_medium w-full text-white text-[1.8rem]  z-50'/>
        </div>

         <div className='flex items-center justify-start w-full  gap-10 '>
                <span className='font-M_medium text-[2rem]  text-primary '>Name</span>
                <input className='border-b border-primary  focus:outline-none   font-M_medium w-full text-white text-[1.8rem]  z-50'/>
        </div>

         <div className='flex items-center justify-start w-full  gap-10 '>
                <span className='font-M_medium text-[2rem]  text-primary '>Country</span>
                <input className='border-b border-primary  focus:outline-none   font-M_medium w-full text-white text-[1.8rem]  z-50'/>
        </div>

         <div className='flex items-start justify-start w-full  gap-10  z-50 '>
                <div className='font-M_medium text-[2rem]  text-primary whitespace-nowrap mt-2'>Write us your challenge</div>
                    <div className="w-full relative">
    
      <div className="absolute inset-0 pointer-events-none flex flex-col mt-12  gap-10 w-full">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border-b border-primary w-full   "> </div>
        ))}
      </div>

    
      <textarea
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={150}
        className="relative w-full bg-transparent resize-none text-lg overflow-hidden p-2 focus:outline-none text-white text-[1.8rem]  z-50"
      />
    </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
