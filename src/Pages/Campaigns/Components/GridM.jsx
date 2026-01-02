import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const GridsM = ({ data, onCardClick }) => {
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
    <div className="w-full h-full grid gap-10 mt-6">
      {chunks.slice(0, visibleChunks).map((group, index) => (
        <div key={index} className="w-full h-full flex flex-col gap-8">
          {/* First Grid - 2 cards */}
          {(group[0] || group[1]) && (
            <div className="flex flex-row w-full gap-4">
              <div className="w-full flex-1">
                {group[0] ? (
                  <Cards
                    data={group[0]}
                    style={"h-[10rem] object-cover"}
                    onClick={onCardClick}
                  />
                ) : (
                  <div className="h-[10rem] w-full opacity-0" />
                )}
              </div>

              <div className="w-full flex-[1.4]">
                {group[1] ? (
                  <Cards
                    data={group[1]}
                    style={"h-[9rem] w-full mt-[1rem]"}
                    onClick={onCardClick}
                  />
                ) : (
                  <div className="h-[9rem] w-full mt-[1rem] opacity-0" />
                )}
              </div>
            </div>
          )}

          {group[2] && (
            <div className="w-full">
              <Cards data={group[2]} center={true} onClick={onCardClick} />
            </div>
          )}

          {/* Second Grid - reversed */}
          {(group[3] || group[4]) && (
            <div className="flex flex-row w-full gap-4">
              <div className="w-full flex-[1.4] mt-[2rem]">
                {group[3] ? (
                  <Cards
                    data={group[3]}
                    style={"h-[9rem] object-cover"}
                    onClick={onCardClick}
                  />
                ) : (
                  <div className="h-[9rem] w-full opacity-0" />
                )}
              </div>

              <div className="w-full flex-1 mt-[1rem]">
                {group[4] ? (
                  <Cards
                    data={group[4]}
                    style={"h-[10rem] object-cover"}
                    onClick={onCardClick}
                  />
                ) : (
                  <div className="h-[10rem] w-full opacity-0" />
                )}
              </div>
            </div>
          )}

          {/* Only show title after the FIRST 5 cards */}
          {index === 0 && (
            <div>
              <h3
                className="font-R_regular text-secondary text-[1.5rem] tracking-[0.1rem] 
             leading-[1.9rem]"
              >
                YOU’VE MISSED A LOT… <br className="hidden" /> BY NOT EXECUTING
                YOUR IDEAS
              </h3>
              <p className="font-M_bold text-black text-[1.5rem] leading-[1.6rem] tracking-[0.1rem] mt-4">
                Bold ideas need bold defenders.
              </p>
            </div>
          )}

             {index === 2 && (

                          <div>
              <h3
                className="font-R_regular text-secondary text-[1.5rem] tracking-[0.1rem] uppercase 
             leading-[1.9rem]"
              >
               The market doesn’t punish bad ideas
             
              </h3>
              <p className="font-M_bold text-black text-[1.5rem] leading-[1.6rem] tracking-[0.1rem] mt-4">
               It punishes ideas that were never defended long enough to win.
              </p>
            </div>

           
          )}
        </div>
      ))}

      

      {/* "See More" Button */}
      {visibleChunks < chunks.length && (
        <div className="flex justify-start">
          <button
            onClick={handleSeeMore}
            className="font-R_regular text-[1rem] tracking-[0.12em] leading-[4rem] mt-0 mx-10
          flex items-center justify-center w-full h-[3rem] hover:bg-secondary hover:opacity-80 cursor-pointer
           rounded-full text-primary bg-secondary uppercase"
          >
            see more campaigns
          </button>
        </div>
      )}
    </div>
  );
};

export default GridsM;
