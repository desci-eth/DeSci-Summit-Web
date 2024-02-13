import "./App.css";
import "./assets/syne/stylesheet.css"
import "./assets/ubuntu/stylesheet.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Schedule from './pages/schedule';
import Speakers from './pages/speakers';
import Event from "./pages/event";
import ScheduleDesktop from "./pages/schedule-desktop";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/event" element={<Event />} />
          <Route path="/schedule-desktop" element={<ScheduleDesktop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
