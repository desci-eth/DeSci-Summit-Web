import "./App.css";
import "./assets/syne/stylesheet.css"
import "./assets/ubuntu/stylesheet.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Schedule from './pages/schedule';
import Speakers from './pages/speakers';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
