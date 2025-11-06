import { Skeleton } from '../../../components/ui/skeleton';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ data ,onClick}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  
  const handleClick = () => {
    if (onClick) onClick(data.id);       
    else navigate(`/theAA/${data.id}`); 
  };

  return (
    <div className="flex flex-col items-center justify-start gap-3 md:gap-4 w-full "
    onClick={handleClick} 
    >
      <div className="hidden md:flex relative  items-center justify-center overflow-hidden">
        {/* Skeleton behind the image */}
        {!isLoaded && <Skeleton className={`absolute  inset-0 w-[85%] h-[85%] ${data.rounded2}   bg-secondary/30`} />}

        {/* Always render the image */}
        <div className={`relative  h-[10rem] w-[10rem]  md:!w-[25rem] md:!h-[25rem]  overflow-hidden   ${data.rounded2} `}>
        <img
          src={data.img}
          onLoad={() => setIsLoaded(true)}
          alt={data.title}
          className={` md:!w-[25rem] md:!h-[25rem] transform transition duration-700 overflow-hidden  ease-in-out hover:scale-105 cursor-pointer  ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }
             ${data.rounded2} w-full h-full object-cover`}
        />
      </div>
      </div>
       <div className="md:hidden relative flex items-center justify-center overflow-hidden">
        {/* Skeleton behind the image */}
        {!isLoaded && <Skeleton className={`absolute  inset-0 w-[85%] h-[85%] ${data.rounded}   bg-secondary/30`} />}

        {/* Always render the image */}
        <div className={`relative  h-[10rem] w-[10rem]  md:!w-[25rem] md:!h-[25rem]  overflow-hidden   ${data.rounded} `}>
        <img
          src={data.img}
          onLoad={() => setIsLoaded(true)}
          alt={data.title}
          className={` md:!w-[25rem] md:!h-[25rem] transform transition duration-700 overflow-hidden  ease-in-out hover:scale-105 cursor-pointer  ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }
             ${data.rounded} w-full h-full object-cover`}
        />
      </div>
      </div>

      {/* Title */}
      {!isLoaded ? (
        <Skeleton className="w-[80%] h-[1rem] bg-secondary/30 " />
      ) : (
        <h3 className={`text-secondary md:whitespace-pre-line  uppercase font-R_regular text-[1.1rem] md:mt-2 md:text-[2rem] leading-[1.3rem] md:leading-[2.2rem] text-center`}>
          {data.title}
        </h3>
      )}

      {/* Subtitle */}
      {!isLoaded ? (
        <div className="space-y-1 w-[80%]  flex flex-col items-center">
          <Skeleton className="w-[80%] h-[1rem] bg-secondary/30" />
          <Skeleton className="w-[70%] h-[1rem] bg-secondary/30" />
        </div>
      ) : (
        <p className="md:whitespace-pre-line font-M_medium text-background text-[0.8rem] md:text-[1rem] leading-[1rem] md:leading-[1.2rem] text-center  mx:px-5">
          {data.subTitle}
        </p>
      )}
    </div>
  );
};

export default Cards;
