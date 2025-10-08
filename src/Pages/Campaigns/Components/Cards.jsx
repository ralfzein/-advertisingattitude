import React, { useState } from 'react'
import { Skeleton } from '../../../components/ui/skeleton';
import { useNavigate } from 'react-router-dom';

const Cards = ({ data, style, center }) => {
  const [isLoaded, setIsLoaded] = useState(false);
const navigate =useNavigate();
  return (
    <div className={`flex flex-col gap-[10px] col-span-1 ${center ? 'px-[5rem]' : ''}`} 
    onClick={() => navigate(`/case-study/${data.id}`)}
    >
      <div className={`relative w-full overflow-hidden `}>
        {!isLoaded && (
          <Skeleton className={`absolute inset-0 w-full min-h-[30rem]  bg-secondary/30`} />
        )}
      <img
  src={data?.img}
  alt="img"
  onLoad={() => setIsLoaded(true)}
  className={`w-full transform transition duration-700 min-h-[30rem]  ease-in-out ${style}  hover:scale-105 cursor-pointer  ${
    isLoaded ? 'opacity-100' : 'opacity-0'
  }`}
/>

      </div>

      {!isLoaded ? (
        <Skeleton className="w-[10rem] h-[1rem] bg-secondary/30" />
      ) : (
        <h3 className="font-R_regular text-secondary text-[2rem] leading-[2rem] uppercase">
          {data?.title}
        </h3>
      )}
<div className='mt-1'>
      {!isLoaded ? (
        <div className="space-y-2">
          <Skeleton className="w-[80%] h-[1rem] bg-secondary/30" />
          <Skeleton className="w-[50%] h-[1rem] bg-secondary/30" />
        </div>
      ) : (
        <p className='text- font-M_medium text-background leading-5 '>{data?.subTitle}</p>
      )}

      {!isLoaded ? (
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          <Skeleton className="w-[5rem] h-[1rem] bg-secondary/30" />
          <Skeleton className="w-[5rem] h-[1rem] bg-secondary/30" />
          <Skeleton className="w-[5rem] h-[1rem] bg-secondary/30" />
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-1 mt-2">
          {data?.tags?.map((tag, index) => (
            <span
              key={index}
              className="font-M_bold text-white text-xs bg-background rounded-full px-3 py-[2px]"
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
