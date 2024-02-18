import "./App.css";
import "./assets/syne/stylesheet.css"
import "./assets/ubuntu/stylesheet.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Schedule from './pages/schedule';
import Speakers from './pages/speakers';
import Event from "./pages/event";
import ScheduleDesktop from "./pages/schedule-desktop";
import Speakers2021 from "./pages/2021";
import Speakers2022 from "./pages/2022";
import Speakers2023 from "./pages/2023";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/speakers2021" element={<Speakers2021 />} />
          <Route path="/speakers2022" element={<Speakers2022 />} />
          <Route path="/speakers2023" element={<Speakers2023 />} />
          <Route path="/event" element={<Event />} />
          <Route path="/schedule-desktop" element={<ScheduleDesktop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
