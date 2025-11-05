import React, { useState } from 'react'
import { Skeleton } from '../../../components/ui/skeleton';
import { useNavigate } from 'react-router-dom';

const Cards = ({ data, style, center ,onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
const navigate =useNavigate();  
 const handleClick = () => {
    if (onClick) onClick(data.id);
  };
  return (
    <div className={`flex flex-col gap-2 md:gap-[10px] col-span-1 ${center ? 'md:px-[5rem]' : ''}`} 
     onClick={handleClick}
    >
      <div className={`relative w-full overflow-hidden `}>
        {!isLoaded && (
          <Skeleton className={`absolute inset-0 w-full min-h-[30rem]  bg-secondary/30`} />
        )}
      <img
      loading="lazy"
  src={data?.img}
  alt="img"
  onLoad={() => setIsLoaded(true)}
  className={`w-full transform transition duration-700 md:min-h-[30rem]  ease-in-out ${style}  hover:scale-105 cursor-pointer  ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  }`}
/>

      </div>

      {!isLoaded ? (
        <Skeleton className="w-[10rem] h-[1rem] bg-secondary/30" />
      ) : (
        <h3 className="font-R_regular text-secondary text-[1.2rem] leading-[1.2rem] md:text-[2rem] md:leading-[2rem] uppercase">
          {data?.title}
        </h3>
      )}
<div className='md:mt-1'>
      {!isLoaded ? (
        <div className="space-y-2">
          <Skeleton className="w-[80%] h-[1rem] bg-secondary/30" />
          <Skeleton className="w-[50%] h-[1rem] bg-secondary/30" />
        </div>
      ) : (
        <p className='text- font-M_medium text-background md:leading-5 text-xs md:text-md '>{data?.subTitle}</p>
      )}

      {!isLoaded ? (
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          <Skeleton className="w-[5rem] h-[1rem] bg-secondary/30" />
          <Skeleton className="w-[5rem] h-[1rem] bg-secondary/30" />
          <Skeleton className="w-[5rem] h-[1rem] bg-secondary/30" />
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-[2px] md:gap-1 mt-2">
          {data?.tags?.map((tag, index) => (
            <span
              key={index}
              className="font-M_bold text-white text-[10px] md:text-xs w-fit bg-background rounded-full px-3 py-[2px] line-clamp-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Cards;
