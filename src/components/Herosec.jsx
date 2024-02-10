import React from "react";
import aeroplane from "../assets/images/aeroplane.webp";
const Herosec = () => {
  return (
    <div className=" overflow-x-clip relative z-[1]">
      <div className="container max-w-[1164px] px-3 mx-auto">
        <div className="flex sm:flex-row flex-col-reverse flex-wrap -mx-3">
          <div className="sm:w-5/12 w-full px-3 justify-center items-center flex">
            <img src={aeroplane} alt="aero" className=" justify-center flex w-full sm:max-w-[394px] max-w-[200px] items-center animate-airopalneheadre" />
          </div>

          <div
            data-aos="fade-left"
            className="sm:w-7/12 w-full flex justify-center aos-init aos-animate"
          >
            <h1 className="ff-lucky font-normal lg:text-[175.64px] md:text-[130px] sm:text-[110px] text-[75px] leading-[91%] text-center drop-shadow-[0px_6px_0px_#000]">
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#8EC627]">O</span>
              <br className="sm:block hidden" />
              <span className="text-[#8EC627] drop-shadow-[0px_2px_0px_#000]">
                L
              </span>
              <span className="text-[#FCCA2B] drop-shadow-[0px_2px_0px_#000]">
                F
              </span>
              <span className="text-[#8F78D2] drop-shadow-[0px_2px_0px_#000]">
                G
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
