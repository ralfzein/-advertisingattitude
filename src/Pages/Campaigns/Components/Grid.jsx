import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Grids = ({ data ,onCardClick }) => {
  const chunkSize = 5;
  const [visibleChunks, setVisibleChunks] = useState(1); 

   useEffect(() => {
    const saved = sessionStorage.getItem("campaignVisibleChunks");
    if (saved) setVisibleChunks(parseInt(saved));
  }, []);



  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

const handleSeeMore = () => {
  if (visibleChunks < chunks.length) {
    setVisibleChunks((prev) => {
      const next = prev + 1;
      sessionStorage.setItem("campaignVisibleChunks", next); 
      return next;
    });
  }
};


  return (
    <div className="w-full h-full grid gap-10 mt-6 md:mt-20">
      {chunks.slice(0, visibleChunks).map((group, index) => (
        <div key={index} className="w-full h-full flex flex-col gap-8 md:gap-20 ">
          {/* First Grid - 2 cards */}
          {(group[0] || group[1]) && (
            <div className="flex flex-row w-full gap-8 md:gap-5">
              {group[0] && (
                <div className="w-full !flex-1 md:!flex-[0.8] md:max-w-[45%] md:pr-[6rem] ">
                  <Cards data={group[0]} style={"h-[10rem]    md:h-[36rem]   object-cover"} onClick={onCardClick}  />
                </div>
              )}
              {group[1] && (
                <div className="w-full flex-[1.1] md:flex-[1.3] ">
                  <Cards
                    data={group[1]}
                    style={" h-[9rem] md:h-auto w-full mt-[1rem]  md:mt-[3rem]"} onClick={onCardClick} 
                  />
                </div>
              )}
              {!group[1] && group[0] && <div className="w-full flex-[1.1] md:flex-[1.3]"></div>}
            </div>
          )}

          {/* Center Card */}
          {group[2] && (
            <div className="w-full">
              <Cards data={group[2]} center={true} onClick={onCardClick}  />
            </div>
          )}

          {/* Second Grid - reversed */}
          {(group[3] || group[4]) && (
             <div className="flex flex-row w-full gap-8 md:gap-5">
              {group[3] && (
                <div className="w-full flex-[1.4] md:flex-[1.3]">
                  <Cards
                    data={group[3]}
                    style={"h-[10rem] md:h-auto  object-cover"} onClick={onCardClick} 
                    />
                </div>
              )}
              {group[4] && (
                <div className="w-full flex-1  md:!flex-[0.8] mt-[1rem]  md:mt-[3rem]  md:pl-[6rem]">
                  <Cards data={group[4]} style={" h-[9rem]   md:h-[39rem] object-cover"} onClick={onCardClick}  />
                </div>
              )}
              {!group[4] && group[3] && <div className="w-full flex-1  md:!flex-[0.8]"></div>}
            </div>
          )}

          {/* Only show title after the FIRST 5 cards */}
          {index === 0 && (
            <div className="  md:mt-12">
              <h3
                className="font-M_bold text-secondary text-[1.8rem] md:text-[4rem] tracking-[0.1rem] md:tracking-[0.5rem]
             leading-[1.9rem]   md:leading-[4rem] md:text-justify"
              >
                YOU’VE MISSED A LOT… <br className="hidden md:block" /> BY NOT EXECUTING YOUR IDEAS
              </h3>
              <p className="font-M_bold text-black text-[1.5rem] leading-[1.6rem] md:text-[1.8rem] tracking-[0.1rem] md:tracking-[0.2rem] mt-4 md:mt-8">
                Bold ideas need bold defenders.
              </p>
            </div>
          )}
             {index === 2 && (
            <div className="  md:mt-12">
              <h3
                className="font-M_bold text-secondary text-[1.8rem] md:text-[4rem] tracking-[0.1rem] md:tracking-[0.5rem]
             leading-[1.9rem]   md:leading-[4rem] md:text- uppercase"
              >
               The market doesn’t punish bad ideas
              </h3>
              <p className="font-M_bold text-black text-[1.5rem] leading-[1.6rem] md:text-[1.8rem] tracking-[0.1rem] md:tracking-[0.2rem] mt-4 md:mt-8">
               It punishes ideas that were never defended long enough to win.
              </p>
            </div>
          )}
        </div>
      ))}

      {/* "See More" Button */}
      {visibleChunks < chunks.length && (
        <div className="flex justify-start ">
          <button
            onClick={handleSeeMore}
 className="  font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0 
          flex items-center justify-center w-full md:w-[25rem] h-[3rem] md:h-[5rem]
           hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary uppercase  "          >
          see more campaigns
          </button>
        </div>
      )}
    </div>
  );
};

export default Grids;
