import React from "react";
import lefttree from "../assets/images/tree1.webp";
import righttree from "../assets/images/tree2.webp";
import dragon from "../assets/images/cartoon.webp";
const About = () => {
  return (
    <div className="bg-[#09655A] relative z-[2] -mt-[2px] overflow-x-clip" id="about">
      <img
        src={lefttree}
        alt="lefttree"
        className=" absolute z-[-1] left-0 bottom-0 md:bottom-[-39%] max-h-[442px]"
      />
      <img
        src={righttree}
        alt="righttree"
        className=" absolute z-[-1] right-0 bottom-0 md:bottom-[-21%] max-h-[446px]"
      />
      <img
        src={dragon}
        alt="dragon"
        className=" animate-mybounce max-sm:hidden absolute z-[-1] right-0 max-w-[169px] bottom-0 md:bottom-[-24%]"
      />
      <div className="max-w-[1164px] px-3 mx-auto sm:pt-[35px] pt-4 md:pt-[68px]">
        <h2
          data-aos="fade-down"
          className="font-normal  text-center sm:leading-[37px] drop-shadow-[0px_1.337px_0px_#000] md:text-[64px] sm:text-[50px] text-5xl"
        >
          <span className=" font-chewy text-white leading-[83px]">About</span>
          <span className="text-[#FBA11D] leading-[66px] ff-lucky"> D</span>
          <span className="text-[#23AAAC] leading-[66px] ff-lucky">i</span>
          <span className="text-[#D45B07] leading-[66px] ff-lucky">n</span>
          <span className="text-[#8EC627] leading-[66px] ff-lucky">o</span>
          <span className="text-[#FCCA2B] leading-[66px] ff-lucky">L</span>
          <span className="text-[#8F78D2] leading-[66px] ff-lucky">F</span>
          <span className="text-[#8EC627] leading-[66px] ff-lucky">G</span>
        </h2>
        <p
          data-aos="fade-down"
          className=" font-bal text-white sm:pt-[20px] md:pt-[42px] pt-2 font-normal sm:text-2xl text-xl sm:leading-[28px] text-center"
        >
          $DINO is a meme coin with very strong utility.
        </p>
        <p
          data-aos="fade-down"
          className=" max-w-[560px] mx-auto font-bal text-white sm:pt-[18px] pt-1 font-normal sm:text-2xl text-xl sm:leading-[28px] text-center"
        >
          Biggest problem of meme coins is lack of utility and usecase,
          <span className=" text-[#8EC627]"> $</span>
          <span className=" text-[#FBA11D]">D</span>
          <span className=" text-[#23AAAC]">I</span>
          <span className=" text-[#D45B07]">N</span>
          <span className=" text-[#FB5352]">O </span>
          is going to fix it.
        </p>
        <p
          data-aos="fade-down"
          className=" max-w-[560px] mx-auto font-bal text-white pt-[10px] font-normal sm:text-2xl text-xl sm:leading-[28px] text-center"
        >
          We want to bring a lot of usecases and utility to $DINO holders, just
          sit back and relax.
        </p>
        <p
          data-aos="fade-down"
          className=" max-w-[560px] mx-auto font-bal text-white pt-[14px] pb-[17px] font-normal sm:text-2xl text-xl sm:leading-[28px] text-center"
        >
          In $DINO, we want to build a very strong community, that’s why we are
          going to have a lot of games and crypto tips in our Telegram and
          Twitter.
        </p>
      </div>
    </div>
  );
};

export default About;
