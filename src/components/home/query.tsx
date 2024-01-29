import React, { useState, useEffect, useRef } from "react";
import Triangle from "../../assets/svg/Triangle.svg";
import Dot from "../../assets/svg/dot.svg";

const Query: React.FC = () => {
  const slidersRef = useRef<HTMLDivElement>(null); // Ref for the sliders container, typed as HTMLDivElement

  useEffect(() => {
    const sliders = slidersRef.current;

    if (sliders) {
      const maxScrollLeft = sliders.scrollWidth - sliders.clientWidth;
      let start = 0;
      const step = () => {
        if (start < maxScrollLeft) {
          start += 1.2; // Smaller increment to scroll slower
          sliders.scrollLeft = start;
        } else {
          start = 0; // Reset scroll position
        }
      };

      const intervalId = setInterval(step, 30); // Increase interval time to slow down the speed

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="slider-container query border-y-[1px] border-[#4FA366] py-4 w-[100%] md:w-[97%] 2xl:w-[80%] mx-auto">
      <div className="sliders flex gap-14 max-w-[3000px] overflow-scroll" ref={slidersRef}>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      <div className="flex gap-2 md:gap-3">
        <img src={Dot} alt="Dot" className="self-center mt-[2px]" />
        <p className="ins self-center text font-[400] text-white text-[20px] md:text-[32px]">
          DeSciSummit2024
        </p>
        <img src={Triangle} alt="Triangle" className="self-center mt-1" />
      </div>
      </div>  
    </div>
  );
};

export default Query;
