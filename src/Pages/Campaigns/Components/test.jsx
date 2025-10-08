import React from "react";
import Cards from "./Cards";

const Grids = ({ data }) => {
  const chunkSize = 5;
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full h-full grid gap-20 mt-20 space-y-10">
      {chunks.map((group, index) => (
        <div key={index} className="w-full flex flex-col gap-20">
          {/* First Grid - 2 cards */}
          {(group[0] || group[1]) && (
            <div className="flex w-full gap-5">
              {group[0] && (
                <div className="w-full !flex-[0.8] max-w-[45%] pr-[6rem]">
                  <Cards data={group[0]} style={"h-[36rem]  object-cover"} />
                </div>
              )}
              {group[1] && (
                <div className="w-full flex-[1.3] ">
                  <Cards
                    data={group[1]}
                    style={"h-[] w-full object-cover mt-[3rem]"}
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
            <div className="flex w-full gap-30">
              {group[3] && (
                <div className="w-full  flex-[1.3]">
                  <Cards
                    data={group[3]}
                    style={"h-[] w-full object-cover"}
                  />
                </div>
              )}
              {group[4] && (
                <div className=" w-full flex-[0.8]   ">
                  <Cards data={group[4]} style={" mt-[3rem] h-[36rem]  object-cover"} />
                </div>
              )}
            </div>
          )}

          {/* Only show title after the first 5 cards */}
          {index === 0 && (
            <div className="mt-12">
              <h3
                className="font-M_bold text-secondary text-[4.2rem] tracking-[0.5rem]
                leading-[5rem] text-justify"
              >
                YOU’VE MISSED A LOT…  BY <br /> NOT EXECUTING YOUR IDEAS
              </h3>
              <p className="font    -M_bold text-black text-[2.3rem] tracking-[0.2rem] mt-8">
                Bold ideas need bold defenders.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grids;
