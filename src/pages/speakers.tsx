import SpBanner from "../assets/png/speaker-banner.png";
import Triangle from "../assets/svg/Triangle.svg";
import Dot from "../assets/svg/dot.svg";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import ImageSlider from "../components/home/imageSlider";
import ImageTwoSlider from "../components/home/imagesTwoSlider";
import Query from "../components/home/query";
import Register from "../components/home/register";
import Time from "../assets/svg/TIME REMAINING.svg";
import Expect from "../components/speakers/expect";
import Speaker from "../components/speakers/speaker";
import Sponers from "../components/speakers/sponers";
import Count from "../components/speakers/count";

export default function Speakers() {
  return (
    <>
      <Navbar />
      <div className="grid  lg:grid-cols-12 w-[90%] md:w-[100%] 2xl:w-[80%] mx-auto md:border-b-[1px] lg:border-[#9D84FF] ">
        <div className="lg:col-span-8 mt-5 md:mt-14 2xl:mt-20 w-[96%] 2xl:w-[100%] mx-auto pb-5 lg:pb-0">
          <p className="font-syne font-[400] text-[35px] md:text-[80px] lg:text-[75px] xl:text-[96px] text-[#54FF7A]">
            Speakers
          </p>
          <p className="flex gap-3  text font-[400] text-white text-[20px] md:text-[30px] lg:text-[24px] xl:text-[32px] ">
            DeSciSummit2024
            <img src={Triangle} alt="" />
            <img src={Dot} alt="" />
          </p>
          <p className=" font-syne font-[400] text-[16px] md:text-[20px] lg:text-[18px] xl:text-[24px] text-white mt-4 md:w-[80%] 2xl:w-[60%]">
            50+ speakers will be converging on DeSci Denver to advance
            innovation for scientific research, medical practice, and science
            advocacy through community building and coordination.
          </p>

          <a 
            href="https://t.co/1xTBOCaLgK"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text self-center flex gap-2 font-ubuntu font-[400] text-[#152EA0] text-[17px] uppercase transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-6 md:px-6 "
            >
            apply to speak
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4  h-4  self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a> 
          <a
            href="https://t.co/1xTBOCaLgK"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text self-center flex gap-2 font-ubuntu font-[400] text-[#152EA0] text-[17px] uppercase transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white rounded-[4px] py-4 px-6 md:px-6"
            >
            apply to speak
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 self-center"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
            </svg>
          </a>

        </div> 
        <div className="hidden lg:block lg:col-span-4">
          <img src={SpBanner} alt="" />
        </div>
      </div>

      <Count />

      <Expect />
      <Sponers />
      <ImageSlider />
      <ImageTwoSlider />
      <div className="lg:pt-10  lg:border-b-[1px] border-[#4FA366] w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto"></div>
      <Register />
      <Footer />
    </>
  );
}
