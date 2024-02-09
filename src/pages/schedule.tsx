import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import Navbar from "../components/Navbar/navbar";
import Sbanner from "../assets/png/sbanner.png";
import Triangle from "../assets/svg/Triangle.svg";
import Dot from "../assets/svg/dot.svg";
import Bancor from "../assets/png/bancor.png";
import Brought from "../components/schedule/brought";
import Register from "../components/home/register";
import Footer from "../components/Footer/footer";
import Timeout from "../components/schedule/timeout";

// Mock event data
const events = {
  '2024-02-26': [{ name: 'SciOS', time: '9am-5pm' }],
  '2024-02-27': [{ name: 'DID and Permissions Workshops', time: '9am-12pm' }, { name: 'Compute over Data Workshops', time: '1pm-4pm' }],
  // Add more events here
};

const EventDetails = ({ selectedDate }) => {
  const dateStr = selectedDate.toISOString().split('T')[0];
  const dayEvents = events[dateStr] || [];

  return (
    <div>
      {dayEvents.length > 0 ? (
        dayEvents.map((event, index) => (
          <div key={index} className="event-detail">
            <h3>{event.name}</h3>
            <p>{event.time}</p>
          </div>
        ))
      ) : (
        <p>No events scheduled for this day.</p>
      )}
    </div>
  );
};

export default function Schedule() {
  const [value, onChange] = useState(new Date());

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

      {/* Calendar and Schedule Information */}
      <div className="mt-8 px-4 py-6">
        <Calendar onChange={onChange} value={value} />
        <EventDetails selectedDate={value} />
      </div>

      <Brought/>
      <Register/>
      <Footer/>
    </>
  );
}
