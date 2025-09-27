import React from 'react'
import hero2 from "../../../public/Images/herro.webp";

const Image = () => {
  return (
    <div className='h-screen'>
       <img
                src={hero2}
                alt="Hero"
                className="w-full h-full  "
              />
    </div>
  )
}

export default Image
