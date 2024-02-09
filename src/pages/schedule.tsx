import React, { useState } from 'react';
import Navbar from "../components/Navbar/navbar";
import Sbanner from "../assets/png/sbanner.png";
import Bancor from "../assets/png/bancor.png";
import Brought from "../components/schedule/brought";
import Register from "../components/home/register";
import Footer from "../components/Footer/footer";
import Timeout from "../components/schedule/timeout";

const Schedule: React.FC = () => {
  // Define the state with TypeScript
  const [isOpen, setIsOpen] = useState<number | null>(null);

  // Define the function with TypeScript
  const toggleAccordion = (index: number): void => {
    if (isOpen === index) {
      setIsOpen(null); // Close accordion if it's already open
    } else {
      setIsOpen(index); // Open the clicked accordion
    }
  };

  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="grid md:grid-cols-2 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto md:border-b-[1px] lg:border-[#9D84FF] pb-5">
          <div className="mt-5 md:mt-14">
            <p className="font-syne font-[400] text-[70px] md:text-[80px] lg:text-[90px] xl:text-[96px] text-[#54FF7A]">Schedule</p>
            <p className="flex gap-3 text font-[400] text-white text-[20px] md:text-[30px] lg:text-[32px]">DeSciSummit2024 <img src={Triangle} alt="" /><img src={Dot} alt="" /></p>
            <p className="hidden md:block font-syne font-[400] text-[35px] lg:text-[45px] xl:text-[56px] text-white mt-4">
              February 25th - March 1st, 2024
            </p>
            <div className="md:flex gap-5 mt-5">
              {/* Apply to Speak and Sponsorships Links */}
            </div>
          </div>
          <div className="hidden md:block">
            <img src={Sbanner} alt="" />
          </div>
        </div>
        <img src={Bancor} alt="" className="absolute top-0 right-0 block md:hidden" />
      </div>

      <Timeout/>

       {/* Enhanced Schedule Information */}
      <div className="mt-8 px-4 py-6 bg-[#f5f5f5]">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#54FF7A]">Event Schedule</h2>
        <div className="space-y-6">
          {/* Schedule content goes here */}
          {/* Example with Accordion */}
          <div className={`bg-white rounded-lg shadow ${isOpen === 1 ? 'mb-4' : 'mb-0'}`}>
            <div className="p-6 cursor-pointer" onClick={() => toggleAccordion(1)}>
              <h3 className="font-semibold text-lg text-[#152EA0] flex justify-between items-center">
                Feb 26 - 29th: SciOS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{transform: isOpen === 1 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </h3>
            </div>
            {isOpen === 1 && (
              <div className="p-6 pt-0 space-y-2">
                <ul className="list-disc ml-8">
                  {/* Detailed events here */}
                </ul>
              </div>
            )}
          </div>
          {/* Additional days/events */}
        </div>
      </div>

      <Brought/>
      <Register/>
      <Footer/>
    </>
  );
}

export default Schedule;
  );
}
