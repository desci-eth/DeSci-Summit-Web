import Sbanner from "../assets/png/sbanner.png";
import Bancor from "../assets/png/bancor.png";
import Navbar from "../components/Navbar/navbar";
import Triangle from "../assets/svg/Triangle.svg";
import Dot from "../assets/svg/dot.svg";
import Schedule from "../components/schedule/schedule";
import Query from "../components/home/query";
import Expect from "../components/speakers/expect";
import Down from "../assets/svg/adown.svg";
import { Link } from "react-router-dom";

import Timetable from "../components/schedule/timetable";
import Card from "../components/schedule/card";
import Register from "../components/home/register";
import Footer from "../components/Footer/footer";

export default function ScheduleDesktop() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="grid md:grid-cols-2 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  pb-5">
          <div className="mt-5 md:mt-14">
            <p className="font-syne font-[400] text-[70px] md:text-[80px] lg:text-[90px] xl:text-[96px] text-[#54FF7A]">
              Schedule
            </p>
            <p className="flex gap-3 mt-3 md:mt-0  text font-[400] text-white text-[20px] md:text-[30px] lg:text-[32px] ">
              DeSciSummit2024
              <img src={Triangle} alt="" />
              <img src={Dot} alt="" />
            </p>
            <p className="hidden md:block font-syne font-[400] text-[35px] lg:text-[45px] xl:text-[56px] text-white mt-16 leading-[50px]">
              February 25 - Mar 1st,
              <br /> 2024
            </p>

            <div className="block md:hidden border-y-[1px] border-[#4FA366] py-5 mt-8 ">
              <p className="text  font-syne font-[400] text-[42px] text-white  leading-[60px] ">
                February 25 - <br /> Mar 1st, 2024
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <img src={Sbanner} alt="" />
          </div>
        </div>
        <img
          src={Bancor}
          alt=""
          className="absolute top-0 right-0 block md:hidden"
        />
      </div>
      <Schedule />
      <Query />
      <div className="hidden md:block">
        <Expect />
      </div>
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-[#6AD585] py-10 lg:py-0">
        <div className="lg:col-span-4 lg:border-r-[1px] border-[#6AD585] relative ">
          <div className="lg:absolute bottom-5 right-5 ">
            <img src={Down} alt="" className="cursor-pointer " />
          </div>
        </div>
        <div className="col-span-8 lg:pl-10 lg:py-10 ">
          <p className="font-syne font-[400] text-[#54FF7A] text-[35px] md:text-[48px] pt-5 lg:pt-0">
            How can I join?
          </p>
          <p className="font-syne font-[500] text-[20px] lg:text-[24px]  xl:text-[30px] mt-2 text-white">
            You need to register for each of our partner venues in order to
            attend all the DeSci.Denver events.
          </p>

          <Link
            to="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
            target="_blank"
          >
            <button className="mt-5 text self-center flex gap-2 font-ubuntu font-[700] text-[#152EA0] text-[17px] md:text-[18px]  transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-6 md:px-6 ">
              REGISTER NOW
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
            </button>
          </Link>
        </div>
      </div>
      <Timetable />

      <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-[#6AD585] py-10 lg:py-0">
        <div className="lg:col-span-4  lg:pt-6">
          <p className="font-syne font-[400] text-[#54FF7A] text-[35px] md:text-[64px] text-center lg:text-start">
            Sponsors
          </p>
        </div>
        <div className="col-span-8 lg:pl-10 lg:py-10">
          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[24px]  xl:text-[30px] mt-2 text-white text-center lg:text-start">
            Partner with DeSci Denver by becoming an active sponsor of the
            events and support fellow scientists with consultation, funding or
            more.
          </p>

          <Link
            to="https://airtable.com/apptAi2tFe7I5lDvn/shryNlfnencagSmCO"
            target="_blank"
          >
            <button className="mt-10 text self-center flex gap-2 font-ubuntu font-[700] text-[#152EA0] text-[17px] md:text-[18px]  transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-6 md:px-6 mx-auto lg:mx-0">
              REGISTER AS A SPONSOR
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
            </button>
          </Link>
        </div>
      </div>

      <Card />
      <Register/>
      <Footer/>
    </>
  );
}
