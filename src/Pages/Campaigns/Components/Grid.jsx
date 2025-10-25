import React, { useState } from "react";
import Cards from "./Cards";

const Grids = ({ data }) => {
  const chunkSize = 5;
  const [visibleChunks, setVisibleChunks] = useState(1); // how many groups of 5 are shown

  // Split data into groups of 5
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

  const handleSeeMore = () => {
    if (visibleChunks < chunks.length) {
      setVisibleChunks((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-full grid gap-10 mt-6 md:mt-20">
      {chunks.slice(0, visibleChunks).map((group, index) => (
        <div key={index} className="w-full h-full flex flex-col gap-8 md:gap-20 ">
          {/* First Grid - 2 cards */}
          {(group[0] || group[1]) && (
            <div className="flex flex-col md:flex-row w-full gap-5">
              {group[0] && (
                <div className="w-full md:!flex-[0.8] md:max-w-[45%] md:pr-[6rem]">
                  <Cards data={group[0]} style={"h-[10rem] md:h-[36rem]   object-cover"} />
                </div>
              )}
              {group[1] && (
                <div className="w-full md:flex-[1.3] ">
                  <Cards
                    data={group[1]}
                    style={" h-[10rem] md:h-auto w-full  mt-[3rem]"}
                  />
                </div>
              )}
            </div>
          )}

          {/* Center Card */}
          {group[2] && (
            <div className="w-full">
              <Cards data={group[2]} center={true} />
            </div>
          )}

          {/* Second Grid - reversed */}
          {(group[3] || group[4]) && (
             <div className="flex flex-col md:flex-row w-full gap-5">
              {group[3] && (
                <div className="w-full flex-[1.3] ">
                  <Cards
                    data={group[3]}
                    style={"h-[10rem] md:h-auto  object-cover"}
                    />
                </div>
              )}
              {group[4] && (
                <div className="w-full md:!flex-[0.8]  mt-[3rem]  md:pl-[6rem]">
                  <Cards data={group[4]} style={" h-[10rem] md:h-[35rem] object-cover"} />
                </div>
              )}
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
        </div>
      ))}

      {/* "See More" Button */}
      {visibleChunks < chunks.length && (
        <div className="flex justify-start ">
          <button
            onClick={handleSeeMore}
 className="  font-R_regular text-[1rem] md:text-[1.5rem] tracking-[0.12em] leading-[4rem] mt-0 
          flex items-center justify-center w-full md:w-[25rem] h-[3rem] md:h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full   text-primary bg-secondary  "          >
            See More Takes
          </button>
        </div>
      )}
    </div>
  );
};

export default Grids;
