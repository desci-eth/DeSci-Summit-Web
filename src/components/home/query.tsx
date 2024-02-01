import React, {  useEffect, useRef } from "react";
import Triangle from "../../assets/svg/Triangle.svg";
import Dot from "../../assets/svg/dot.svg";

const Query: React.FC = () => {
  const slidersRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sliders = slidersRef.current;

    if (sliders) {
      // Clone first few children and append them to the end for a seamless loop
      const children = sliders.children;
      const cloneCount = 3; // Adjust based on your needs
      for (let i = 0; i < cloneCount; i++) {
        const clone = children[i].cloneNode(true);
        sliders.appendChild(clone);
      }

      const maxScrollLeft = sliders.scrollWidth - sliders.clientWidth;
      let start = 0;
      let requestId: number | null = null;

      const step = () => {
        if (start < maxScrollLeft + (sliders.children[0].clientWidth * cloneCount)) {
          start += 1.2; // Smaller increment to scroll slower
          sliders.scrollLeft = start;
        } else {
          // Smoothly transition back to the start
          sliders.scrollLeft = 0;
          start = 0;
        }
        requestId = window.requestAnimationFrame(step);
      };

      requestId = window.requestAnimationFrame(step);

      // Clean up the animation frame on component unmount
      return () => {
        if (requestId !== null) {
          window.cancelAnimationFrame(requestId);
        }
      };
    }
  }, []);


  return (
    <div className="slider-container query border-y-[1px] border-[#4FA366] py-4 w-[100%] md:w-[97%] 2xl:w-[80%] mx-auto">
    <div className="sliders flex gap-14 max-w-[3000px] overflow-scroll -webkit-overflow-scrolling:touch" ref={slidersRef}>

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
