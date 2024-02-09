import React from 'react';
import Navbar from "../components/Navbar/navbar";
import Sbanner from "../assets/png/sbanner.png";
import Triangle from "../assets/svg/Triangle.svg";
import Dot from "../assets/svg/dot.svg";
import Bancor from "../assets/png/bancor.png";
import Brought from "../components/schedule/brought";
import Register from "../components/home/register";
import Footer from "../components/Footer/footer";
import Timeout from "../components/schedule/timeout";

export default function Schedule() {
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

      {/* Schedule Information */}
      <div className="mt-8 px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
        <div className="space-y-4">
          <p><strong>Feb 19th - 3rd:</strong> DeSci HackerHouse</p>
          <p><strong>Feb 26 - 29th: SciOS</strong>
            <ul className="list-disc ml-8">
              <li>9am-5pm every day</li>
              <li>Feb 26 9am-4pm: Applications, Outputs, and Community Showcases</li>
              <li>Feb 27 9am-12pm: DID and Permissions Workshops</li>
              <li>Feb 27 1pm-4pm: Compute over Data Workshops</li>
              <li>Feb 28 9am-12pm: Funding and Incentive Design Workshops</li>
              <li>Feb 28 1pm - 4pm: Open State Data Networks Workshops</li>
              <li>Feb 29 9am-12pm: FAIR data and Semantic Publishing Workshops</li>
              <li>Feb 29 1pm-4pm: AI in Open Science Workshops</li>
              <li>Feb 29 4pm-7pm: Drinks on us</li>
            </ul>
          </p>
          <p><strong>Feb 26th: BUIDLHub</strong>
            <ul className="list-disc ml-8">
              <li>3-5pm</li>
            </ul>
          </p>
          <p><strong>Feb 27th: AuraNova</strong>
            <ul className="list-disc ml-8">
              <li>2pm-8pm</li>
            </ul>
          </p>
          <p><strong>Feb 28th: AuraNova Afterparty</strong>
            <ul className="list-disc ml-8">
              <li>6pm-9pm</li>
            </ul>
          </p>
          <p><strong>March 1: CU</strong>
            <ul className="list-disc ml-8">
              <li>9am-5pm</li>
            </ul>
          </p>
          <p><strong>March 2: Openinfo.House</strong>
            <ul className="list-disc ml-8">
              <li>5:30-6pm</li>
            </ul>
          </p>
        </div>
      </div>

      <Brought/>
      <Register/>
      <Footer/>
    </>
  );
}
