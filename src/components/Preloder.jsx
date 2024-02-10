import React from "react";

const Preloader = () => {
  return (
    <div className="bg-[#09655A] flex justify-center gap-5 flex-col items-center fixed top-0 left-0 right-0 bottom-0 h-full z-50">
      <h2 className=" ff-lucky text-[50px] sm:text-[80.366px] text-center leading-[95%] font-normal text-[#FBA11D] drop-shadow-[0px_1.337px_0px_#000]">
        D<span className="text-[#23AAAC]">i</span>
        <span className="text-[#D45B07]">n</span>
        <span className="text-[#8EC627]">o</span>
        <span className="text-[#FCCA2B]">L</span>
        <span className="text-[#8F78D2]">F</span>
        <span className="text-[#8EC627]">G</span>
      </h2>
      <div className=" w-[50px] h-[50px] rounded-full border-2 border-t-2 border-t-[#4affea] animate-spin border-[#0A4740] "></div>
    </div>
  );
};

export default Preloader;
