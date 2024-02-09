import React, { useState, ChangeEvent } from 'react';
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

// Define a type for the events in a day
type Event = {
  name: string;
  time: string;
};

// Define the type for the events object
type Events = {
  [key: string]: Event[];
};

const events: Events = {
  '2024-02-26': [{ name: 'SciOS', time: '9am-5pm' }],
  '2024-02-27': [{ name: 'DID and Permissions Workshops', time: '9am-12pm' }, { name: 'Compute over Data Workshops', time: '1pm-4pm' }],
  // Add more events here
};

// Define the props type for EventDetails
type EventDetailsProps = {
  selectedDate: Date;
};

const EventDetails = ({ selectedDate }: EventDetailsProps) => {
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
  const [value, setValue] = useState(new Date());

  // Correct onChange type for Calendar
  const onChange = (nextValue: Date | Date[]) => {
    if (Array.isArray(nextValue)) {
      setValue(nextValue[0]);
    } else {
      setValue(nextValue);
    }
  };

  return (
    <>
      {/* Existing JSX */}
      <div className="mt-8 px-4 py-6">
        <Calendar onChange={onChange} value={value} />
        <EventDetails selectedDate={value} />
      </div>
      {/* Existing JSX continued */}
    </>
  );
}
