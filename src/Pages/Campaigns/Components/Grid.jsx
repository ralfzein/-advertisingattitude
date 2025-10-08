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
    <div className="w-full h-full grid gap-20 mt-20">
      {chunks.slice(0, visibleChunks).map((group, index) => (
        <div key={index} className="w-full h-full flex flex-col gap-20 ">
          {/* First Grid - 2 cards */}
          {(group[0] || group[1]) && (
            <div className="flex w-full gap-5">
              {group[0] && (
                <div className="w-full !flex-[0.8] max-w-[45%] pr-[6rem]">
                  <Cards data={group[0]} style={"h-[36rem]   object-cover"} />
                </div>
              )}
              {group[1] && (
                <div className="w-full flex-[1.3] ">
                  <Cards
                    data={group[1]}
                    style={" w-full  mt-[3rem]"}
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
            <div className="flex w-full gap-25">
              {group[3] && (
                <div className="w-full flex-[1.3]">
                  <Cards
                    data={group[3]}
                    style={" h-[33rem] "}
                  />
                </div>
              )}
              {group[4] && (
                <div className="w-full flex-[0.8]   pl-[2rem]">
                  <Cards data={group[4]} style={" mt-[3rem]  object-cover"} />
                </div>
              )}
            </div>
          )}

          {/* Only show title after the FIRST 5 cards */}
          {index === 0 && (
            <div className="mt-12">
              <h3
                className="font-M_bold text-secondary text-[4rem] tracking-[0.5rem]
                leading-[4rem] text-justify"
              >
                YOU’VE MISSED A LOT… <br /> BY NOT EXECUTING YOUR IDEAS
              </h3>
              <p className="font-M_bold text-black text-[1.8rem] tracking-[0.2rem] mt-8">
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
            className="h-[4rem] px-[2rem] flllex items-center justify-center  bg-secondary text-white font-R_regular text-[2rem] rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            See More Takes
          </button>
        </div>
      )}
    </div>
  );
};

export default Grids;
